import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import Logo from '../components/Logo';
import { ArrowRight, AlertCircle, LogIn } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsSubmitting(true);
      setError(null);

      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password
      });

      if (signInError) {
        if (signInError.message.includes('Email not confirmed')) {
          navigate('/verify-email', { state: { email: formData.email } });
          return;
        }
        throw signInError;
      }

      // Rediriger vers la page précédente ou le dashboard
      const from = location.state?.from?.pathname || '/dashboard';
      navigate(from, { replace: true });
    } catch (err: any) {
      console.error('Login error:', err);
      setError(err.message || 'Une erreur est survenue lors de la connexion');
    } finally {
      setIsSubmitting(false);
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
            Bienvenue
          </span>
          <h1 className="text-4xl xl:text-5xl font-bold text-white mb-4 tracking-tight">
            Connectez-vous
          </h1>
          <p className="text-lg text-gray-300">
            Accédez à votre espace et gérez vos solutions
          </p>
        </div>

        {error && (
          <div className="mb-6 bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-red-500 flex items-center gap-2">
            <AlertCircle className="w-5 h-5" />
            <p>{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
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
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 bg-white/10 border-white/20 rounded text-[#87BBBA] focus:ring-[#87BBBA]"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                Se souvenir de moi
              </label>
            </div>

            <Link to="/forgot-password" className="text-sm font-medium text-[#87BBBA] hover:text-[#87BBBA]/90">
              Mot de passe oublié ?
            </Link>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center px-6 py-4 bg-[#87BBBA] text-[#0B3251] rounded-xl hover:bg-[#87BBBA]/90 transition-colors group font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#0B3251]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Connexion en cours...
              </span>
            ) : (
              <>
                <LogIn className="w-5 h-5 mr-2" />
                <span>Se connecter</span>
              </>
            )}
          </button>
        </form>

        <p className="text-center text-gray-300 mt-6">
          Pas encore de compte ?{' '}
          <Link to="/signup" className="font-medium text-[#87BBBA] hover:text-[#87BBBA]/90">
            S'inscrire gratuitement
          </Link>
        </p>
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