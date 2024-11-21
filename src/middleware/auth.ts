import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';
import { supabase } from '@/lib/supabase';

export const useAuth = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuthStore();

  useEffect(() => {
    let mounted = true;

    const checkSession = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) throw error;
        
        if (mounted) {
          if (session?.user) {
            // Verify user's email is confirmed
            if (!session.user.email_confirmed_at) {
              navigate('/verify-email');
              return;
            }
            
            // Check if MFA is required but not set up
            if (session.user.factors?.length === 0) {
              navigate('/setup-mfa');
              return;
            }
            
            setUser(session.user);
          } else {
            setUser(null);
          }
        }
      } catch (error) {
        console.error('Error checking auth session:', error);
        if (mounted) setUser(null);
      }
    };

    checkSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (mounted) {
        if (session?.user) {
          setUser(session.user);
        } else {
          setUser(null);
        }
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [navigate, setUser]);

  return { user };
};