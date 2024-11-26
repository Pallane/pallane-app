import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export default function FAQ() {
  const { t } = useTranslation();

  const faqs = [
    {
      question: "Comment fonctionne le système de licences ?",
      answer: "Nos licences sont flexibles et s'adaptent à vos besoins. Vous pouvez choisir entre des abonnements mensuels ou annuels, avec la possibilité de modifier votre plan à tout moment. Chaque licence inclut un support technique et des mises à jour régulières."
    },
    {
      question: "Quels sont les délais de mise en place ?",
      answer: "La mise en place varie selon la solution choisie. Pour une licence standard, le déploiement est immédiat. Pour des solutions personnalisées, comptez 1 à 4 semaines selon la complexité du projet."
    },
    {
      question: "Proposez-vous des formations pour vos solutions ?",
      answer: "Oui, nous proposons des formations adaptées à chaque solution. Elles peuvent être dispensées en présentiel ou en ligne, et sont personnalisées selon votre niveau et vos objectifs."
    },
    {
      question: "Comment fonctionne le support technique ?",
      answer: "Notre support technique est disponible 24/7 pour les clients premium. Pour les autres offres, le support est accessible en heures ouvrées via ticket, chat ou téléphone selon votre abonnement."
    },
    {
      question: "Puis-je tester les solutions avant de m'engager ?",
      answer: "Absolument ! Nous proposons des périodes d'essai gratuites pour toutes nos solutions. La durée varie de 14 à 30 jours selon le produit choisi."
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-[1600px] mx-auto px-8 sm:px-10 md:px-12">
        <div className="relative">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-[#0B3251]/5 rounded-2xl flex items-center justify-center">
                <HelpCircle className="w-8 h-8 text-[#0B3251]" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-[#0B3251] mb-4">
              Questions fréquemment posées
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Retrouvez ici les réponses aux questions les plus courantes. Si vous ne trouvez pas votre réponse, n'hésitez pas à nous contacter.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-[#EDEDED] rounded-xl overflow-hidden transition-all duration-300 hover:bg-[#EDEDED]/80"
              >
                <summary className="flex cursor-pointer items-center justify-between p-6 text-[#0B3251] [&::-webkit-details-marker]:hidden">
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <div className="w-12 h-12 bg-[#0B3251]/5 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-[#0B3251]" />
                    </div>
                    <h3 className="font-medium text-lg pr-8">{faq.question}</h3>
                  </div>
                  <ChevronDown className="w-6 h-6 text-[#0B3251] transition-transform group-open:rotate-180 flex-shrink-0" />
                </summary>

                <div className="px-6 pb-6 text-gray-600 pl-24">
                  <div className="text-base leading-relaxed">{faq.answer}</div>
                </div>
              </details>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Vous avez encore des questions ?</p>
            <button className="bg-[#0B3251] text-white px-8 py-4 rounded-xl hover:bg-[#0B3251]/90 transition-all transform hover:scale-105 font-medium">
              Contactez notre équipe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}