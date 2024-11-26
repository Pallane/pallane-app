import React from 'react';
import { useTranslation } from 'react-i18next';
import ProductCard from './shared/ProductCard';

export default function TrainingSlider() {
  const { t } = useTranslation();

  const trainings = [
    {
      id: 'azure',
      logo: 'https://azure.microsoft.com/content/dam/microsoft/final/en-us/microsoft-azure-marketplace/azure-logo.svg',
      tag: 'Cloud',
      title: t('training.cards.azure.title'),
      description: t('training.cards.azure.description'),
      price: t('training.cards.azure.price'),
      badge: t('training.freeTrial')
    },
    {
      id: 'powerplatform',
      logo: 'https://powerplatform.microsoft.com/content/dam/microsoft/final/en-us/microsoft-power-platform/power-platform-logo.svg',
      tag: 'Low-Code',
      title: t('training.cards.powerPlatform.title'),
      description: t('training.cards.powerPlatform.description'),
      price: t('training.cards.powerPlatform.price'),
      badge: t('training.freeTrial')
    },
    {
      id: 'security',
      logo: 'https://www.microsoft.com/content/dam/microsoft/final/en-us/microsoft-365/m365-logo.svg',
      tag: 'Security',
      title: t('training.cards.security.title'),
      description: t('training.cards.security.description'),
      price: t('training.cards.security.price'),
      badge: t('training.freeTrial')
    },
    {
      id: 'ai',
      logo: 'https://www.microsoft.com/content/dam/microsoft/final/en-us/microsoft-teams/teams-logo.svg',
      tag: 'AI',
      title: t('training.cards.ai.title'),
      description: t('training.cards.ai.description'),
      price: t('training.cards.ai.price'),
      badge: t('training.freeTrial')
    }
  ];

  return (
    <section className="bg-[#EDEDED] py-12">
      <div className="max-w-[1600px] mx-auto px-8 sm:px-10 md:px-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-[#0B3251] mb-2">{t('training.title')}</h2>
            <p className="text-gray-600">{t('training.description')}</p>
          </div>
          <button className="bg-[#0B3251] text-[#EDEDED] px-6 py-2 rounded-md text-sm">
            {t('training.viewMore')}
          </button>
        </div>
        
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {trainings.map((training) => (
            <div key={training.id} className="min-w-[280px] sm:min-w-[320px] md:min-w-[340px] flex-shrink-0">
              <ProductCard
                id={training.id}
                logo={training.logo}
                tag={training.tag}
                title={training.title}
                description={training.description}
                price={training.price}
                badge={training.badge}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}