import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Logo from '../components/Logo';
import { Mail, ArrowRight, CheckCircle2, RefreshCw } from 'lucide-react';

export default function VerifyEmail() {
  const { user, resendConfirmationEmail } = useAuth();
  const [isResending, setIsResending] = useState(false);
  const [resendSuccess, setResendSuccess] = useState(false);

  const steps = [
    'Ouvrez votre boîte mail',
    'Recherchez l\'email de vérification',
    'Cliquez sur le lien de vérification'
  ];

  const handleResendEmail = async () => {
    setIsResending(true);
    const success = await resendConfirmationEmail();
    if (success) {
      setResendSuccess(true);
      setTimeout(() => setResendSuccess(false), 5000);
    }
    setIsResending(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B3251] to-[#1a4d74] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/20">
        <div className="text-center mb-8">
          <Logo className="h-8 w-auto mx-auto mb-8" />
          <div className="w-20 h-20 bg-[#87BBBA]/20 rounded-2xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
            <Mail className="w-10 h-10 text-[#87BBBA]" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">
            Vérifiez votre email
          </h1>
          <p className="text-gray-300 text-lg">
            Un email de vérification a été envoyé à{' '}
            <span className="font-medium text-[#87BBBA]">{user?.email}</span>
          </p>
        </div>

        <div className="space-y-6">
          {/* Instructions */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h2 className="font-medium text-[#87BBBA] mb-4 flex items-center">
              <CheckCircle2 className="w-5 h-5 mr-2" />
              Prochaines étapes
            </h2>
            <ol className="space-y-4">
              {steps.map((step, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <span className="w-6 h-6 rounded-full bg-[#87BBBA]/20 flex items-center justify-center text-[#87BBBA] text-sm mr-3 flex-shrink-0">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          {/* Message de succès */}
          {resendSuccess && (
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-green-400">
              Email de vérification renvoyé avec succès !
            </div>
          )}

          {/* Actions */}
          <div className="space-y-4">
            <button
              onClick={handleResendEmail}
              disabled={isResending}
              className="w-full bg-white/5 backdrop-blur-sm text-[#87BBBA] border border-[#87BBBA] px-6 py-3 rounded-xl hover:bg-[#87BBBA]/10 transition-colors flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <RefreshCw className={`w-5 h-5 ${isResending ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`} />
              <span>{isResending ? 'Envoi en cours...' : 'Renvoyer l\'email de vérification'}</span>
            </button>

            <Link
              to="/login"
              className="block w-full bg-[#87BBBA] text-[#0B3251] px-6 py-3 rounded-xl hover:bg-[#87BBBA]/90 transition-colors text-center font-medium flex items-center justify-center group"
            >
              <span>Retour à la connexion</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Note de sécurité */}
          <p className="text-sm text-gray-400 text-center">
            Si vous ne recevez pas l'email dans les 5 minutes, vérifiez votre dossier spam ou contactez notre support.
          </p>
        </div>
      </div>
    </div>
  );
}