import React from 'react';
import { useTranslation } from 'react-i18next';
import ProductCard from './shared/ProductCard';

export default function LicenseSlider() {
  const { t } = useTranslation();

  const licenses = [
    {
      id: 'salesforce',
      logo: 'https://www.salesforce.com/content/dam/sfdc-docs/www/logos/logo-salesforce.svg',
      tag: 'CRM',
      title: t('licenses.cards.salesforce.title'),
      description: t('licenses.cards.salesforce.description'),
      price: t('licenses.cards.salesforce.price'),
      badge: t('licenses.freeTrial')
    },
    {
      id: 'servicenow',
      logo: 'https://www.servicenow.com/content/dam/servicenow-assets/images/meganav/servicenow-header-logo.svg',
      tag: 'ITSM',
      title: t('licenses.cards.servicenow.title'),
      description: t('licenses.cards.servicenow.description'),
      price: t('licenses.cards.servicenow.price'),
      badge: t('licenses.freeTrial')
    },
    {
      id: 'sap',
      logo: 'https://www.sap.com/dam/application/shared/logos/sap-logo-svg.svg',
      tag: 'ERP',
      title: t('licenses.cards.sap.title'),
      description: t('licenses.cards.sap.description'),
      price: t('licenses.cards.sap.price'),
      badge: t('licenses.freeTrial')
    },
    {
      id: 'chatgpt',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
      tag: 'AI',
      title: t('licenses.cards.chatgpt.title'),
      description: t('licenses.cards.chatgpt.description'),
      price: t('licenses.cards.chatgpt.price'),
      badge: t('licenses.freeTrial')
    }
  ];

  return (
    <section className="bg-[#EDEDED] py-12">
      <div className="max-w-[1600px] mx-auto px-8 sm:px-10 md:px-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-[#0B3251] mb-2">{t('licenses.title')}</h2>
            <p className="text-gray-600">{t('licenses.description')}</p>
          </div>
          <button className="bg-[#0B3251] text-[#EDEDED] px-6 py-2 rounded-md text-sm">
            {t('licenses.viewMore')}
          </button>
        </div>
        
        <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
          {licenses.map((license) => (
            <div key={license.id} className="min-w-[280px] sm:min-w-[320px] md:min-w-[340px] flex-shrink-0">
              <ProductCard
                id={license.id}
                logo={license.logo}
                tag={license.tag}
                title={license.title}
                description={license.description}
                price={license.price}
                badge={license.badge}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}