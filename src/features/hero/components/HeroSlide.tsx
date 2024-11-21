import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { SlideProps } from '../types';

export default function HeroSlide({ slide, isActive }: SlideProps) {
  const { t } = useTranslation();

  return (
    <div
      className={`absolute inset-0 transition-opacity duration-500 ${
        isActive ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <img
        src={slide.image}
        alt="Hero"
        className="w-full h-full object-cover"
      />
      {/* Image overlay with text */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent pt-20">
        <div className="px-8 sm:px-10 md:px-12 pb-4">
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
            {t(`hero.slides.${slide.imageTitle.toLowerCase()}.title`)}
          </h3>
          <p className="text-xs sm:text-sm text-gray-300">
            {t(`hero.slides.${slide.imageTitle.toLowerCase()}.description`)}
          </p>
        </div>

        {/* Mobile navigation */}
        <div className="flex flex-col sm:hidden space-y-4 px-8 pb-8">
          {/* Navigation dots */}
          <div className="flex items-center space-x-2">
            {Array.from({ length: 3 }, (_, index) => (
              <button
                key={index}
                onClick={() => slide.onSelect?.(index)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  slide.currentSlide === index ? 'bg-secondary w-3' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
          
          {/* Navigation arrows */}
          <div className="flex items-center space-x-3">
            <button
              onClick={slide.onPrev}
              className="p-1.5 rounded-md border border-secondary text-secondary hover:bg-secondary hover:text-primary transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={slide.onNext}
              className="p-1.5 rounded-md border border-secondary text-secondary hover:bg-secondary hover:text-primary transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Desktop navigation */}
        <div className="hidden sm:flex justify-between items-center px-8 sm:px-10 md:px-12 pb-8">
          {/* Navigation dots */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {Array.from({ length: 3 }, (_, index) => (
              <button
                key={index}
                onClick={() => slide.onSelect?.(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  slide.currentSlide === index ? 'bg-secondary w-4' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center space-x-4">
            <button
              onClick={slide.onPrev}
              className="p-2 rounded-md border border-secondary text-secondary hover:bg-secondary hover:text-primary transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={slide.onNext}
              className="p-2 rounded-md border border-secondary text-secondary hover:bg-secondary hover:text-primary transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}