import React from 'react';
import { useTranslation } from 'react-i18next';
import ProductCard from './shared/ProductCard';

export default function HardwareSlider() {
  const { t } = useTranslation();

  const hardware = [
    {
      id: 'surface',
      logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4OAgf',
      tag: 'Tablet',
      title: t('hardware.cards.surface.title'),
      description: t('hardware.cards.surface.description'),
      price: t('hardware.cards.surface.price'),
      badge: t('hardware.freeTrial')
    },
    {
      id: 'thinkpad',
      logo: 'https://www.lenovo.com/content/dam/lenovo-logo.svg',
      tag: 'Laptop',
      title: t('hardware.cards.thinkpad.title'),
      description: t('hardware.cards.thinkpad.description'),
      price: t('hardware.cards.thinkpad.price'),
      badge: t('hardware.freeTrial')
    },
    {
      id: 'hololens',
      logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4OAgf',
      tag: 'AR',
      title: t('hardware.cards.hololens.title'),
      description: t('hardware.cards.hololens.description'),
      price: t('hardware.cards.hololens.price'),
      badge: t('hardware.freeTrial')
    },
    {
      id: 'surface_hub',
      logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4OAgf',
      tag: 'Display',
      title: t('hardware.cards.surface_hub.title'),
      description: t('hardware.cards.surface_hub.description'),
      price: t('hardware.cards.surface_hub.price'),
      badge: t('hardware.freeTrial')
    }
  ];

  return (
    <section className="bg-[#EDEDED] py-12">
      <div className="max-w-[1600px] mx-auto px-8 sm:px-10 md:px-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-[#0B3251] mb-2">{t('hardware.title')}</h2>
            <p className="text-gray-600">{t('hardware.description')}</p>
          </div>
          <button className="bg-[#0B3251] text-[#EDEDED] px-6 py-2 rounded-md text-sm">
            {t('hardware.viewMore')}
          </button>
        </div>
        
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {hardware.map((item) => (
            <div key={item.id} className="min-w-[280px] sm:min-w-[320px] md:min-w-[340px] flex-shrink-0">
              <ProductCard
                id={item.id}
                logo={item.logo}
                tag={item.tag}
                title={item.title}
                description={item.description}
                price={item.price}
                badge={item.badge}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}