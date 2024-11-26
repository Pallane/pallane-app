import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Logo from '../components/Logo';
import { ArrowRight, AlertCircle, Wifi, WifiOff } from 'lucide-react';
import { z } from 'zod';

const signUpSchema = z.object({
  firstName: z.string().min(2, 'Le prénom est requis'),
  lastName: z.string().min(2, 'Le nom est requis'),
  email: z.string().email('Email invalide'),
  password: z.string().min(6, 'Le mot de passe doit contenir au moins 6 caractères'),
  companyName: z.string().min(2, 'Le nom de l\'entreprise est requis')
});

type SignUpFormData = z.infer<typeof signUpSchema>;

export default function SignUp() {
  const navigate = useNavigate();
  const { signUp, error: authError, loading } = useAuth();
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [formData, setFormData] = useState<SignUpFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    companyName: ''
  });

  React.useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isOnline) return;

    try {
      // Validate form data
      const validatedData = signUpSchema.parse(formData);

      // Sign up with Supabase
      await signUp(validatedData.email, validatedData.password);

      // Redirect to email confirmation page
      navigate('/verify-email', { 
        state: { 
          email: validatedData.email,
          firstName: validatedData.firstName
        }
      });
    } catch (err: any) {
      console.error('Signup error:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B3251] to-[#1a4d74] flex">
      <div className="w-full lg:w-1/2 flex flex-col p-8 sm:p-12 lg:p-16 xl:p-24">
        <div className="mb-12">
          <Link to="/" className="inline-block">
            <Logo className="h-10 w-auto" />
          </Link>
        </div>

        <div className="mb-12">
          <span className="inline-block bg-[#87BBBA]/10 text-[#87BBBA] px-4 py-2 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
            Commencez gratuitement
          </span>
          <h1 className="text-4xl xl:text-5xl font-bold text-white mb-4 tracking-tight">
            Créez votre compte
          </h1>
          <p className="text-lg text-gray-300">
            Rejoignez notre marketplace B2B et découvrez des solutions innovantes
          </p>
        </div>

        {!isOnline && (
          <div className="mb-6 bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-red-500 flex items-center gap-2">
            <WifiOff className="w-5 h-5" />
            <p>Erreur de connexion réseau. Veuillez vérifier votre connexion internet.</p>
          </div>
        )}

        {authError && (
          <div className="mb-6 bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-red-500 flex items-center gap-2">
            <AlertCircle className="w-5 h-5" />
            <p>{authError}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">
                  Prénom
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                  className="block w-full px-4 py-3 rounded-xl bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#87BBBA] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1">
                  Nom
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                  className="block w-full px-4 py-3 rounded-xl bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#87BBBA] focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-300 mb-1">
                Nom de l'entreprise
              </label>
              <input
                type="text"
                id="companyName"
                value={formData.companyName}
                onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                className="block w-full px-4 py-3 rounded-xl bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#87BBBA] focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email professionnel
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="block w-full px-4 py-3 rounded-xl bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#87BBBA] focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                className="block w-full px-4 py-3 rounded-xl bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#87BBBA] focus:border-transparent"
                required
                minLength={6}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={!isOnline || loading}
            className="w-full flex items-center justify-center px-6 py-4 bg-[#87BBBA] text-[#0B3251] rounded-xl hover:bg-[#87BBBA]/90 transition-colors group font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#0B3251]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Création en cours...
              </span>
            ) : (
              <>
                <span>Créer votre compte</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        <p className="text-center text-gray-300 mt-6">
          Déjà inscrit ?{' '}
          <Link to="/login" className="font-medium text-[#87BBBA] hover:text-[#87BBBA]/90">
            Se connecter
          </Link>
        </p>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm">
          <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'}`} />
          <span className={isOnline ? 'text-green-400' : 'text-red-400'}>
            {isOnline ? 'Connecté' : 'Hors ligne'}
          </span>
        </div>
      </div>

      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#87BBBA]/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl">
          <div className="aspect-video rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2940&auto=format&fit=crop"
              alt="Collaboration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}