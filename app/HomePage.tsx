import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ShoppingBag } from 'lucide-react';
import { categories, products } from '../data/mockData';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { useCart } from '../contexts/CartContext';
import { Product, Category } from '../types';

const HomePage: React.FC = () => {
  const { addItem } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  // Filter products based on search query and selected category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    return matchesSearch && matchesCategory && product.available;
  });

  const handleAddToCart = (product: Product) => {
    // For simplicity, add from the first store that has the product
    const storeId = product.storeIds[0];
    addItem(product, storeId, 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-800 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Productos locales, entregados a tu puerta</h1>
            <p className="text-xl opacity-90 mb-8">
              Explora productos de tiendas locales y recíbelos directamente en casa con nuestros mensajeros independientes.
            </p>
            <div className="relative max-w-lg">
              <Input
                type="text"
                placeholder="Buscar productos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                fullWidth
                leftIcon={<Search className="h-5 w-5 text-gray-400" />}
                className="rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Categorías</h2>
          <Button
            variant="outline"
            size="sm"
            leftIcon={<Filter size={16} />}
            onClick={() => setShowFilters(!showFilters)}
            className="mt-4 sm:mt-0"
          >
            Filtros
          </Button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`relative rounded-lg overflow-hidden hover:opacity-90 transition-opacity ${
              selectedCategory === null ? 'ring-2 ring-green-500' : ''
            }`}
          >
            <div className="aspect-w-1 aspect-h-1 w-full bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-40">
                <span className="text-white font-medium">Todos</span>
              </div>
            </div>
          </button>

          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`relative rounded-lg overflow-hidden hover:opacity-90 transition-opacity ${
                selectedCategory === category.id ? 'ring-2 ring-green-500' : ''
              }`}
            >
              <div className="aspect-w-1 aspect-h-1 w-full bg-gray-200">
                {category.image && (
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                  <span className="text-white font-medium">{category.name}</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Productos Disponibles</h2>
        
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <ShoppingBag className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900">No se encontraron productos</h3>
            <p className="mt-1 text-gray-500">
              Intenta ajustar tu búsqueda o explorar otras categorías.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Link to={`/product/${product.id}`} className="block">
                  <div className="relative h-48 bg-gray-200">
                    {product.images && product.images.length > 0 && (
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </Link>
                <div className="p-4">
                  <Link to={`/product/${product.id}`} className="block">
                    <h3 className="text-lg font-medium text-gray-900 hover:text-green-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-gray-500 text-sm line-clamp-2">{product.description}</p>
                  </Link>
                  <div className="mt-3 flex items-center justify-between">
                    <p className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</p>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={(e) => {
                        e.preventDefault();
                        handleAddToCart(product);
                      }}
                    >
                      Agregar
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Feature Highlights */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-center text-3xl font-bold text-gray-900 mb-12">Cómo Funciona Mercadillo</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Explora y Ordena</h3>
              <p className="text-gray-600">
                Navega por productos de tiendas locales y agrega tus favoritos al carrito.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-green-600">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 8v4l3 3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Elige tu Mensajero</h3>
              <p className="text-gray-600">
                Selecciona entre mensajeros disponibles según tus necesidades de entrega.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-green-600">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Recibe en Casa</h3>
              <p className="text-gray-600">
                Tu orden llega directamente a tu puerta por mensajeros independientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;