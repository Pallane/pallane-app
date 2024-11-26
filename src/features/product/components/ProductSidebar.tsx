import React from 'react';
import { ShoppingCart, Users, Video, MapPin, Building, Phone } from 'lucide-react';
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

  if (product.type === 'training') {
    return (
      <div className="bg-white rounded-xl shadow-sm p-8 lg:sticky lg:top-[88px]">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Vous souhaitez choisir cette formation ?
            </h3>
            <p className="text-gray-600">
              Cette formation est disponible en présentiel ou en classe à distance, avec un programme et une qualité pédagogique identiques.
            </p>
          </div>

          <div>
            <span className="text-sm text-gray-600">Tarif</span>
            <h4 className="text-2xl font-bold text-gray-900">À partir de {product.price}</h4>
          </div>

          {/* Options de formation */}
          <div className="space-y-3">
            <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
              <input type="radio" name="training-type" className="w-4 h-4 text-primary" />
              <div className="ml-3 flex items-center">
                <MapPin className="w-5 h-5 text-primary mr-2" />
                <span className="font-medium">Formation en présentiel</span>
              </div>
            </label>

            <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
              <input type="radio" name="training-type" className="w-4 h-4 text-primary" />
              <div className="ml-3 flex items-center">
                <Video className="w-5 h-5 text-primary mr-2" />
                <span className="font-medium">Formation à distance</span>
              </div>
            </label>
          </div>

          {/* Disponibilité */}
          <div className="space-y-3">
            <h4 className="font-medium text-gray-900">Disponibilité</h4>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Building className="w-4 h-4" />
              <span>Intra-entreprise</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Users className="w-4 h-4" />
              <span>Inter-entreprise</span>
            </div>
          </div>

          {/* Boutons d'action */}
          <div className="space-y-3">
            <button 
              onClick={handleAddToCart}
              className="w-full bg-primary text-white px-4 py-3 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Réserver ma formation</span>
            </button>
            
            <button className="w-full border border-primary text-primary px-4 py-3 rounded-md hover:bg-primary/10 transition-colors flex items-center justify-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Nous contacter</span>
            </button>
          </div>

          <p className="text-sm text-gray-600 text-center">
            Vous souhaitez personnaliser la formation ?{' '}
            <a href="#contact" className="text-primary hover:text-primary/80">
              Contactez-nous
            </a>
          </p>
        </div>
      </div>
    );
  }

  // Retourner la sidebar par défaut pour les autres types de produits
  return (
    <div className="bg-white rounded-xl shadow-sm p-8 lg:sticky lg:top-[88px]">
      <div className="space-y-6">
        <div>
          <span className="text-sm text-gray-600">Prix</span>
          <h3 className="text-2xl font-bold text-gray-900">À partir de {product.price}</h3>
        </div>

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
        </div>

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