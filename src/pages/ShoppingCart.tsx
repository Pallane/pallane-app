import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trash2 } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import QuoteForm from '../components/QuoteForm';

export default function ShoppingCart() {
  const { items, removeItem, updateQuantity } = useCartStore();

  return (
    <div className="min-h-screen bg-[#EDEDED]">
      <div className="max-w-[1600px] mx-auto px-8 py-12">
        {/* En-tête */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link to="/" className="flex items-center text-gray-600 hover:text-primary mb-4">
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span>Continuer mes achats</span>
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Mon panier</h1>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Liste des articles */}
          <div className="lg:col-span-2">
            {items.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                <p className="text-gray-600">Votre panier est vide</p>
                <Link 
                  to="/catalog"
                  className="mt-4 inline-block text-primary hover:text-primary/90"
                >
                  Parcourir le catalogue
                </Link>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                {items.map((item, index) => (
                  <div 
                    key={item.id}
                    className={`p-6 flex items-center gap-6 ${
                      index !== items.length - 1 ? 'border-b border-gray-200' : ''
                    }`}
                  >
                    {/* Logo */}
                    <div className="w-16 h-16 bg-gray-100 rounded-lg p-3 flex-shrink-0">
                      <img
                        src={item.logo}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Informations */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.type}</p>
                    </div>

                    {/* Quantité */}
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-md border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50"
                      >
                        -
                      </button>
                      <span className="text-gray-900">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-md border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50"
                      >
                        +
                      </button>
                    </div>

                    {/* Prix */}
                    <div className="text-right">
                      <p className="text-sm text-gray-600">{item.price}</p>
                    </div>

                    {/* Supprimer */}
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Formulaire de demande de devis */}
          {items.length > 0 && (
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Demander un devis</h2>
                <QuoteForm />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}