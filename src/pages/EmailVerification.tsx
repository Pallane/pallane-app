import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import Logo from '../components/Logo';
import { Mail, ArrowRight, CheckCircle2, RefreshCw } from 'lucide-react';

export default function EmailVerification() {
  const location = useLocation();
  const email = location.state?.email;
  const firstName = location.state?.firstName;
  const [isResending, setIsResending] = useState(false);
  const [resendSuccess, setResendSuccess] = useState(false);

  const handleResendEmail = async () => {
    try {
      setIsResending(true);
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email: email
      });

      if (error) throw error;
      setResendSuccess(true);
      setTimeout(() => setResendSuccess(false), 5000);
    } catch (err) {
      console.error('Error resending verification email:', err);
    } finally {
      setIsResending(false);
    }
  };

  if (!email) {
    return <Navigate to="/signup" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B3251] to-[#1a4d74] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/20">
        <div className="text-center mb-8">
          <Logo className="h-8 w-auto mx-auto mb-8" />
          <div className="w-20 h-20 bg-[#87BBBA]/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Mail className="w-10 h-10 text-[#87BBBA]" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">
            Vérifiez votre email
          </h1>
          <p className="text-gray-300">
            {firstName ? `Merci ${firstName}, un` : 'Un'} email de vérification a été envoyé à{' '}
            <span className="text-[#87BBBA] font-medium">{email}</span>
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h2 className="font-medium text-[#87BBBA] mb-4 flex items-center">
              <CheckCircle2 className="w-5 h-5 mr-2" />
              Prochaines étapes
            </h2>
            <ol className="space-y-4">
              <li className="flex items-center text-gray-300">
                <span className="w-6 h-6 rounded-full bg-[#87BBBA]/20 flex items-center justify-center text-[#87BBBA] text-sm mr-3">
                  1
                </span>
                Ouvrez votre boîte mail
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-6 h-6 rounded-full bg-[#87BBBA]/20 flex items-center justify-center text-[#87BBBA] text-sm mr-3">
                  2
                </span>
                Cliquez sur le lien de vérification
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-6 h-6 rounded-full bg-[#87BBBA]/20 flex items-center justify-center text-[#87BBBA] text-sm mr-3">
                  3
                </span>
                Connectez-vous à votre compte
              </li>
            </ol>
          </div>

          {resendSuccess && (
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-green-400">
              Email de vérification renvoyé avec succès !
            </div>
          )}

          <div className="space-y-4">
            <button
              onClick={handleResendEmail}
              disabled={isResending}
              className="w-full bg-white/5 backdrop-blur-sm text-[#87BBBA] border border-[#87BBBA] px-6 py-3 rounded-xl hover:bg-[#87BBBA]/10 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <RefreshCw className={`w-5 h-5 ${isResending ? 'animate-spin' : ''}`} />
              <span>{isResending ? 'Envoi en cours...' : 'Renvoyer l\'email'}</span>
            </button>

            <Link
              to="/login"
              className="block w-full bg-[#87BBBA] text-[#0B3251] px-6 py-3 rounded-xl hover:bg-[#87BBBA]/90 transition-colors text-center font-medium flex items-center justify-center"
            >
              <span>Retour à la connexion</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          <p className="text-sm text-gray-400 text-center">
            Si vous ne recevez pas l'email dans les 5 minutes, vérifiez votre dossier spam.
          </p>
        </div>
      </div>
    </div>
  );
}