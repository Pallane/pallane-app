import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/cartStore';

interface ProductCardProps {
  id?: string;
  logo: string;
  tag: string;
  title: string;
  description: string;
  price: string;
  badge: string;
}

export default function ProductCard({ 
  id = '0',
  logo, 
  tag, 
  title, 
  description, 
  price, 
  badge 
}: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Empêche la navigation
    addItem({
      id,
      name: title,
      type: tag,
      price,
      logo,
    });
  };

  return (
    <Link to={`/product/${id}`} className="block w-full">
      <div className="w-full bg-white rounded-xl shadow-md">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <span className="bg-[#87BBBA]/20 text-[#87BBBA] px-3 py-1 rounded-full text-xs font-medium">
              {tag}
            </span>
            <div className="flex items-center space-x-2">
              <button 
                className="text-gray-400 hover:text-red-500 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  // Logique de favoris à ajouter
                }}
              >
                <Heart className="w-5 h-5" />
              </button>
              <button 
                className="text-gray-400 hover:text-primary transition-colors"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 bg-gray-100 rounded-lg p-2 flex-shrink-0 flex items-center justify-center">
              <img
                src={logo}
                alt={title}
                className="w-8 h-8 object-contain"
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                {title}
              </h3>
              <p className="text-xs text-gray-600 line-clamp-2">
                {description}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between mt-6">
            <span className="text-sm font-medium text-gray-900">{price}</span>
            <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
              {badge}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}