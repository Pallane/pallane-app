import React from 'react';
import { Search, ShoppingCart, Sparkles, ArrowRight } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section className="bg-[#0B3251] py-16">
      <div className="max-w-[1600px] mx-auto px-8 sm:px-10 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Comment ça marche
          </h2>
          <p className="text-gray-300 text-lg">
            Découvrez en quelques étapes comment trouver la solution idéale pour votre entreprise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Étape 1 */}
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 h-full">
              <div className="w-12 h-12 bg-[#87BBBA] rounded-xl flex items-center justify-center mb-6">
                <Search className="w-6 h-6 text-[#0B3251]" />
              </div>
              <span className="absolute top-8 right-8 text-[#87BBBA] text-4xl font-bold opacity-30">
                01
              </span>
              <h3 className="text-xl font-semibold text-white mb-4">
                Explorez le catalogue
              </h3>
              <p className="text-gray-300">
                Parcourez notre sélection de solutions IA, hardware, licences et formations adaptées à vos besoins.
              </p>
            </div>
            <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
              <ArrowRight className="w-8 h-8 text-[#87BBBA]" />
            </div>
          </div>

          {/* Étape 2 */}
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 h-full">
              <div className="w-12 h-12 bg-[#87BBBA] rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-[#0B3251]" />
              </div>
              <span className="absolute top-8 right-8 text-[#87BBBA] text-4xl font-bold opacity-30">
                02
              </span>
              <h3 className="text-xl font-semibold text-white mb-4">
                Comparez les solutions
              </h3>
              <p className="text-gray-300">
                Utilisez notre outil de comparaison pour trouver la solution qui correspond le mieux à vos critères.
              </p>
            </div>
            <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
              <ArrowRight className="w-8 h-8 text-[#87BBBA]" />
            </div>
          </div>

          {/* Étape 3 */}
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 h-full">
              <div className="w-12 h-12 bg-[#87BBBA] rounded-xl flex items-center justify-center mb-6">
                <ShoppingCart className="w-6 h-6 text-[#0B3251]" />
              </div>
              <span className="absolute top-8 right-8 text-[#87BBBA] text-4xl font-bold opacity-30">
                03
              </span>
              <h3 className="text-xl font-semibold text-white mb-4">
                Demandez un devis
              </h3>
              <p className="text-gray-300">
                Obtenez un devis personnalisé et bénéficiez de l'accompagnement de nos experts pour votre projet.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="bg-[#87BBBA] text-[#0B3251] px-8 py-4 rounded-xl hover:bg-[#87BBBA]/90 transition-colors font-medium inline-flex items-center gap-2 group">
            Commencer maintenant
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}