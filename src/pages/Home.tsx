import React from 'react';
import Hero from '../components/Hero';
import HardwareSlider from '../components/HardwareSlider';
import LicenseSlider from '../components/LicenseSlider';
import TrainingSlider from '../components/TrainingSlider';
import ExpertsSlider from '../components/ExpertsSlider';
import CompareSection from '../components/CompareSection';
import WhyChooseUs from '../components/WhyChooseUs';
import Newsletter from '../components/Newsletter';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <HardwareSlider />
      <LicenseSlider />
      <TrainingSlider />
      <ExpertsSlider />
      <CompareSection />
      <WhyChooseUs />
      <Newsletter />
      <FAQ />
      <Footer />
    </>
  );
}