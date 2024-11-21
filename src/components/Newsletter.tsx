import React from 'react';
import { useTranslation } from 'react-i18next';
import { Send, Mail } from 'lucide-react';

export default function Newsletter() {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-16">
      <div className="max-w-[1600px] mx-auto px-8 sm:px-10 md:px-12">
        <div className="bg-[#0B3251] rounded-3xl p-12 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#87BBBA]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#87BBBA]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
          
          {/* Content */}
          <div className="relative">
            <div className="flex flex-col items-center max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-8 rounded-2xl bg-[#87BBBA]/10">
                <Mail className="w-8 h-8 text-[#87BBBA]" />
              </div>

              <h2 className="text-4xl font-bold text-white mb-6">
                Restez informé des dernières innovations
              </h2>
              
              <p className="text-gray-300 text-lg mb-12 max-w-2xl">
                Inscrivez-vous à notre newsletter pour recevoir en avant-première nos actualités, nos offres exclusives et nos conseils d'experts.
              </p>

              <form className="w-full max-w-2xl">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <input
                      type="email"
                      placeholder="Entrez votre adresse email"
                      className="w-full px-6 py-4 pl-12 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#87BBBA] focus:border-transparent transition-all"
                    />
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="bg-[#87BBBA] text-[#0B3251] px-8 py-4 rounded-xl hover:bg-[#87BBBA]/90 transition-all transform hover:scale-105 flex items-center justify-center gap-2 font-medium group"
                  >
                    <span>S'abonner</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>

              <p className="text-gray-400 text-sm mt-6">
                En vous inscrivant, vous acceptez de recevoir nos communications marketing. Vous pourrez vous désinscrire à tout moment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}