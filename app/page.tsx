"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  ShoppingBag,
  Store,
  Clock,
  Truck
} from "lucide-react";
import { dummyProducts, dummyCategories } from "@/lib/dummy-data";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter products based on search query and selected category
  const filteredProducts = dummyProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/3962294/pexels-photo-3962294.jpeg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Productos locales, entregados a tu puerta
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Explora productos de tiendas locales y recíbelos directamente en casa con nuestros mensajeros independientes.
            </p>
            <div className="relative max-w-lg">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar productos..."
                className="pl-10 bg-white/95"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <h2 className="text-3xl font-bold">Categorías</h2>
          <Button variant="outline" size="sm" className="mt-4 sm:mt-0">
            <Filter className="h-4 w-4 mr-2" /> Filtros
          </Button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {dummyCategories.map((category) => (
            <Card
              key={category.id}
              className={`cursor-pointer transition-all hover:shadow-md ${
                selectedCategory === category.name ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setSelectedCategory(
                selectedCategory === category.name ? null : category.name
              )}
            >
              <CardContent className="p-4 text-center">
                <div className="relative h-32 mb-4 rounded-md overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                </div>
                <h3 className="font-medium">{category.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {category.count} productos
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 py-12">
        <PageHeader
          title="Productos Disponibles"
          description="Explora nuestra selección de productos locales"
        />

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <ShoppingBag className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium">No se encontraron productos</h3>
            <p className="text-muted-foreground mt-1">
              Intenta ajustar tu búsqueda o explorar otras categorías
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  {product.isOnSale && (
                    <Badge className="absolute top-2 right-2 bg-red-500">
                      Oferta
                    </Badge>
                  )}
                </div>
                <CardContent className="p-4">
                  <div className="text-sm text-muted-foreground mb-1">
                    {product.category}
                  </div>
                  <h3 className="font-medium line-clamp-1">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-bold">${product.price.toFixed(2)}</span>
                    <Button size="sm">
                      <ShoppingBag className="h-4 w-4 mr-2" /> Agregar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* How it Works Section */}
      <div className="bg-muted/30">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Cómo Funciona Mercadillo
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Store className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Explora y Ordena</h3>
              <p className="text-muted-foreground">
                Navega por productos de tiendas locales y agrega tus favoritos al carrito.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Elige tu Mensajero</h3>
              <p className="text-muted-foreground">
                Selecciona entre mensajeros disponibles según tus necesidades de entrega.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Recibe en Casa</h3>
              <p className="text-muted-foreground">
                Tu orden llega directamente a tu puerta por mensajeros independientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}