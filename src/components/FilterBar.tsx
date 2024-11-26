import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function FilterBar() {
  const { t } = useTranslation();
  const categories = Object.values(t('filterBar.categories', { returnObjects: true }));

  return (
    <div className="bg-primary border-b border-secondary/20 hidden md:block sticky top-16 z-20">
      <div className="max-w-[1600px] mx-auto px-8 sm:px-10 md:px-12">
        <div className="flex items-center overflow-x-auto py-2 scrollbar-hide relative">
          <div className="sticky left-0 z-10 bg-primary flex items-center space-x-4 lg:space-x-6">
            <Link 
              to="/catalog"
              className="text-white whitespace-nowrap text-sm lg:text-base hover:text-secondary rounded-md px-0 py-1"
            >
              {t('filterBar.allCatalog')}
            </Link>
            <button className="text-white whitespace-nowrap text-sm lg:text-base hover:text-secondary rounded-md px-3 py-1">
              {t('filterBar.freeDeals')}
            </button>
          </div>
          <div className="flex items-center space-x-4 lg:space-x-6">
            {categories.map((category, index) => (
              <button
                key={index}
                className="text-white hover:text-secondary whitespace-nowrap transition-colors text-sm lg:text-base rounded-md px-3 py-1"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}