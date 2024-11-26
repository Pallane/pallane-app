import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { createQuoteRequest } from '../lib/supabase';
import { useAuth } from '../hooks/useAuth';

interface ContactFormProps {
  isQuoteRequest?: boolean;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  phone: string;
  message: string;
}

export default function ContactForm({ isQuoteRequest = false }: ContactFormProps) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { items: cartItems, clearCart } = useCartStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      if (isQuoteRequest) {
        // Vérifier si l'utilisateur est connecté
        if (!user) {
          navigate('/login', { state: { from: '/cart' } });
          return;
        }

        if (cartItems.length === 0) {
          throw new Error('Votre panier est vide');
        }

        // Préparer les données des produits du panier
        const products = cartItems.map(item => ({
          id: item.id,
          name: item.name,
          quantity: item.quantity,
          type: item.type
        }));

        // Créer la demande de devis dans Supabase
        await createQuoteRequest({
          ...formData,
          products
        });

        // Vider le panier après succès
        clearCart();
      } else {
        // Logique pour le formulaire de contact standard
        // À implémenter si nécessaire
      }

      setSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        companyName: '',
        phone: '',
        message: ''
      });
    } catch (err: any) {
      console.error('Form submission error:', err);
      setError(err.message || 'Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {success && (
        <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-lg">
          {isQuoteRequest 
            ? 'Votre demande de devis a été envoyée avec succès. Notre équipe vous contactera dans les plus brefs délais.'
            : 'Votre message a été envoyé avec succès. Notre équipe vous contactera dans les plus brefs délais.'}
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
            Prénom
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
            Nom
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email professionnel
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          required
        />
      </div>

      <div>
        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
          Nom de l'entreprise
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          required
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Téléphone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
          required
        />
      </div>

      {isQuoteRequest && cartItems.length > 0 && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-2">Produits sélectionnés</h3>
          <ul className="space-y-2">
            {cartItems.map(item => (
              <li key={item.id} className="text-sm text-gray-600">
                {item.name} (x{item.quantity})
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Envoi en cours...' : isQuoteRequest ? 'Demander un devis' : 'Envoyer'}
      </button>
    </form>
  );
}