import React from 'react';
import { Link } from 'react-router-dom';
import { Store, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <Store className="h-6 w-6 text-green-500" />
              <span className="ml-2 text-xl font-bold">Mercadillo</span>
            </Link>
            <p className="text-gray-300 text-sm">
              Conectamos tiendas locales con clientes mediante mensajeros independientes para una experiencia de compra conveniente y personalizada.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/stores" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Tiendas
                </Link>
              </li>
              <li>
                <Link to="/messengers" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Mensajeros
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* For Businesses */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Para Negocios</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/join-as-store" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Unirse como Tienda
                </Link>
              </li>
              <li>
                <Link to="/join-as-messenger" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Unirse como Mensajero
                </Link>
              </li>
              <li>
                <Link to="/business-faq" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link to="/partner-terms" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Términos para Socios
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Calle Principal 123, Ciudad, País
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+1 234 567 890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@mercadillo.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Mercadillo. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacidad
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
              Términos
            </Link>
            <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors text-sm">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;