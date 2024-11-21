import React from 'react';
import { useTranslation } from 'react-i18next';
import ProductCard from './shared/ProductCard';

export default function ExpertsSlider() {
  const { t } = useTranslation();

  const experts = [
    {
      id: 'cloud',
      logo: 'https://azure.microsoft.com/content/dam/microsoft/final/en-us/microsoft-azure-marketplace/azure-logo.svg',
      tag: 'Cloud',
      title: t('experts.cards.cloud.title'),
      description: t('experts.cards.cloud.description'),
      price: t('experts.cards.cloud.price'),
      badge: t('experts.available')
    },
    {
      id: 'data',
      logo: 'https://powerbi.microsoft.com/content/dam/microsoft/final/en-us/microsoft-power-bi/power-bi-logo.svg',
      tag: 'Data',
      title: t('experts.cards.data.title'),
      description: t('experts.cards.data.description'),
      price: t('experts.cards.data.price'),
      badge: t('experts.available')
    },
    {
      id: 'security',
      logo: 'https://www.microsoft.com/content/dam/microsoft/final/en-us/microsoft-365/m365-logo.svg',
      tag: 'Security',
      title: t('experts.cards.security.title'),
      description: t('experts.cards.security.description'),
      price: t('experts.cards.security.price'),
      badge: t('experts.available')
    },
    {
      id: 'dev',
      logo: 'https://www.microsoft.com/content/dam/microsoft/final/en-us/microsoft-365/microsoft-365-logo.svg',
      tag: 'Dev',
      title: t('experts.cards.dev.title'),
      description: t('experts.cards.dev.description'),
      price: t('experts.cards.dev.price'),
      badge: t('experts.available')
    }
  ];

  return (
    <section className="bg-[#EDEDED] py-12">
      <div className="max-w-[1600px] mx-auto px-8 sm:px-10 md:px-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-[#0B3251] mb-2">{t('experts.title')}</h2>
            <p className="text-gray-600">{t('experts.description')}</p>
          </div>
          <button className="bg-[#0B3251] text-[#EDEDED] px-6 py-2 rounded-md text-sm">
            {t('experts.viewMore')}
          </button>
        </div>
        
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {experts.map((expert) => (
            <div key={expert.id} className="min-w-[280px] sm:min-w-[320px] md:min-w-[340px] flex-shrink-0">
              <ProductCard
                id={expert.id}
                logo={expert.logo}
                tag={expert.tag}
                title={expert.title}
                description={expert.description}
                price={expert.price}
                badge={expert.badge}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}