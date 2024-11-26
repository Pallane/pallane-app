import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useAuthStore } from '../store/authStore';

export function useAuth() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, setUser } = useAuthStore();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        if (sessionError) throw sessionError;

        if (session?.user) {
          setUser(session.user);
          // Si l'utilisateur vient de se connecter et qu'il y avait une page précédente, redirigez-le
          const from = location.state?.from;
          if (from) {
            navigate(from, { replace: true });
          }
        } else {
          setUser(null);
        }
      } catch (err) {
        console.error('Error checking session:', err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user) {
          setUser(session.user);
          // Si l'utilisateur vient de se connecter et qu'il y avait une page précédente, redirigez-le
          const from = location.state?.from;
          if (from) {
            navigate(from, { replace: true });
          }
        } else {
          setUser(null);
        }
        setLoading(false);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [setUser, navigate, location.state]);

  const signUp = async (email: string, password: string) => {
    try {
      setError(null);
      const { error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`
        }
      });

      if (signUpError) throw signUpError;

      // Rediriger vers la page de vérification d'email
      navigate('/verify-email');
    } catch (err: any) {
      console.error('Signup error:', err);
      setError(err.message);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      setError(null);
      const { error: signInError, data } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (signInError) {
        if (signInError.message.includes('Email not confirmed') || signInError.status === 400) {
          navigate('/verify-email');
          return;
        }
        throw signInError;
      }
      
      if (!data.user?.email_confirmed_at) {
        navigate('/verify-email');
        return;
      }

      // La redirection sera gérée par l'effet useEffect
    } catch (err: any) {
      console.error('Login error:', err);
      if (err.message.includes('Invalid login credentials')) {
        setError('Email ou mot de passe incorrect');
      } else {
        setError(err.message);
      }
    }
  };

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setUser(null);
      navigate('/');
    } catch (err: any) {
      console.error('Logout error:', err);
      setError(err.message);
    }
  };

  const resendConfirmationEmail = async () => {
    try {
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email: user?.email || '',
      });
      
      if (error) throw error;
      return true;
    } catch (err) {
      console.error('Error resending confirmation email:', err);
      return false;
    }
  };

  return {
    user,
    loading,
    error,
    signUp,
    signIn,
    signOut,
    resendConfirmationEmail
  };
}