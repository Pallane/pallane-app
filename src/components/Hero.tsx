import React from 'react';
import HeroContent from '../features/hero/components/HeroContent';
import HeroSlide from '../features/hero/components/HeroSlide';
import TrustedCompanies from './TrustedCompanies';
import { useHeroSlider } from '../features/hero/hooks/useHeroSlider';
import { HERO_SLIDES } from '../features/hero/constants';

export default function Hero() {
  const { currentSlide, nextSlide, prevSlide, selectSlide } = useHeroSlider();

  const slides = HERO_SLIDES.map(slide => ({
    ...slide,
    currentSlide,
    onPrev: prevSlide,
    onNext: nextSlide,
    onSelect: selectSlide
  }));

  return (
    <>
      <div className="relative h-[600px] bg-[#0B3251]">
        <div className="absolute inset-0 flex">
          <HeroContent />
          
          <div className="w-1/2 relative overflow-hidden">
            {slides.map((slide, index) => (
              <HeroSlide
                key={index}
                slide={slide}
                isActive={currentSlide === index}
              />
            ))}
          </div>
        </div>
      </div>
      <TrustedCompanies />
    </>
  );
}