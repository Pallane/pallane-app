import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '../../../store/cartStore';

interface ProductSidebarProps {
  product: any;
}

export default function ProductSidebar({ product }: ProductSidebarProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      type: product.type,
      price: product.price,
      logo: product.logo,
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-8 lg:sticky lg:top-[88px]">
      <div className="space-y-6">
        {/* Prix */}
        <div>
          <span className="text-sm text-gray-600">Prix</span>
          <h3 className="text-2xl font-bold text-gray-900">À partir de {product.price}</h3>
        </div>

        {/* Boutons d'action */}
        <div className="space-y-3">
          <button 
            onClick={handleAddToCart}
            className="w-full bg-primary text-white px-4 py-3 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Ajouter au panier</span>
          </button>
          <button className="w-full border border-primary text-primary px-4 py-3 rounded-md hover:bg-primary/10 transition-colors">
            Demander un devis
          </button>
          <button className="w-full border border-gray-300 text-gray-700 px-4 py-3 rounded-md hover:bg-gray-50 transition-colors">
            Ajouter des addons
          </button>
        </div>

        {/* Informations supplémentaires */}
        <div className="space-y-4 pt-6 border-t border-gray-200">
          <div>
            <span className="text-sm font-medium text-gray-900">Délai de livraison</span>
            <p className="text-sm text-gray-600">2-4 jours ouvrés</p>
          </div>
          <div>
            <span className="text-sm font-medium text-gray-900">Support inclus</span>
            <p className="text-sm text-gray-600">24/7 par email et téléphone</p>
          </div>
          <div>
            <span className="text-sm font-medium text-gray-900">Garantie</span>
            <p className="text-sm text-gray-600">30 jours satisfait ou remboursé</p>
          </div>
        </div>
      </div>
    </div>
  );
}