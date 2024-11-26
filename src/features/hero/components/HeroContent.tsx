import React from 'react';
import { useTranslation } from 'react-i18next';

export default function HeroContent() {
  const { t } = useTranslation();

  return (
    <div className="w-1/2 flex flex-col justify-center z-10">
      <div className="max-w-[1600px] mx-auto px-8 sm:px-10 md:px-12">
        <span className="inline-block bg-[#87BBBA]/20 text-[#87BBBA] px-3 py-1.5 text-sm font-medium mb-6 rounded-full text-center w-fit backdrop-blur-sm">
          {t('hero.badge')}
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          {t('hero.title')}
        </h1>
        <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-xl">
          {t('hero.description')}
        </p>
        <div>
          <button className="bg-secondary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-md hover:bg-secondary/90 transition-colors text-sm sm:text-base">
            {t('hero.cta')}
          </button>
        </div>
      </div>
    </div>
  );
}