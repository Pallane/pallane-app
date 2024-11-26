import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { NavigationProps } from '../types';

export default function HeroNavigation({ 
  currentSlide, 
  totalSlides, 
  onPrev, 
  onNext, 
  onSelect 
}: NavigationProps) {
  return (
    <div className="px-8 sm:px-10 md:px-12 pb-8">
      {/* Navigation dots */}
      <div className="flex items-center space-x-2 sm:space-x-3 mb-4">
        {Array.from({ length: totalSlides }, (_, index) => (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full transition-all ${
              currentSlide === index ? 'bg-secondary w-3 sm:w-4' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <div className="flex items-center space-x-3 sm:space-x-4">
        <button
          onClick={onPrev}
          className="p-1.5 sm:p-2 rounded-md border border-secondary text-secondary hover:bg-secondary hover:text-primary transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>
        <button
          onClick={onNext}
          className="p-1.5 sm:p-2 rounded-md border border-secondary text-secondary hover:bg-secondary hover:text-primary transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </div>
  );
}