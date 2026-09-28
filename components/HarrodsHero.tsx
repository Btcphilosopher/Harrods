'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
}

const HERO_SLIDES = [
  {
    id: '01',
    eyebrow: "THE WORLD'S MOST EXCEPTIONAL",
    headlinePart1: 'A Curated',
    headlinePart2: 'World Awaits',
    description:
      'From the rarest timepieces to the most extraordinary experiences, Harrods brings together the extraordinary, for you.',
    buttonText: 'EXPLORE NEW IN',
    image: '/images/hero-knightsbridge.jpg',
    tag: 'KNIGHTSBRIDGE FLAGSHIP',
  },
  {
    id: '02',
    eyebrow: 'FINE WATCHES & HIGH JEWELLERY',
    headlinePart1: 'Masterpieces of',
    headlinePart2: 'Grand Horology',
    description:
      'Discover rare grand complications, bespoke commissions and museum-grade mechanical artistry in the Harrods Fine Watch Room.',
    buttonText: 'DISCOVER TIMEPIECES',
    image: '/images/hero-knightsbridge.jpg',
    tag: 'HAUTE HORLOGERIE 2026',
  },
  {
    id: '03',
    eyebrow: 'THE HISTORIC FOOD HALLS',
    headlinePart1: 'A Symphony of',
    headlinePart2: 'Culinary Art',
    description:
      'From Beluga caviar and rare vintage crus to artisanal roasteries and patisseries, explore world-renowned gastronomic excellence.',
    buttonText: 'EXPLORE FOOD & WINE',
    image: '/images/hero-knightsbridge.jpg',
    tag: 'GASTRONOMY & WINE',
  },
];

export const HarrodsHero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const currentSlide = HERO_SLIDES[activeSlideIndex];

  return (
    <section className="relative w-full min-h-[520px] md:min-h-[580px] lg:min-h-[640px] flex items-center bg-[#07090c] overflow-hidden select-none">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={currentSlide.image}
          alt="Harrods Knightsbridge Flagship at Dusk"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 85vw"
          className="object-cover object-center transition-all duration-700 brightness-95"
        />
        {/* Cinematic Scrim & Vignette Gradient Overlays */}
        {/* Left deep shadow for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090c]/95 via-[#07090c]/70 to-transparent w-full md:w-3/4 z-10" />
        {/* Bottom edge shadow */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#07090c] to-transparent z-10" />
        {/* Subtle top shadow */}
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#07090c]/60 to-transparent z-10" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16 md:py-24">
        <div className="max-w-xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-[#c5a059] font-medium">
              <span className="border-b border-[#c5a059] pb-0.5">THE</span> WORLD&apos;S MOST EXCEPTIONAL
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-normal leading-[1.08] tracking-tight text-[#f7ebd8] mb-5 text-balance drop-shadow-sm">
            <span>{currentSlide.headlinePart1}</span>
            <br />
            <span>{currentSlide.headlinePart2}</span>
          </h1>

          {/* Paragraph */}
          <p className="text-xs sm:text-sm md:text-[15px] text-stone-300 font-light leading-relaxed max-w-md mb-8 drop-shadow">
            {currentSlide.description}
          </p>

          {/* CTA Button matching screenshot */}
          <div>
            <button
              onClick={onExploreClick}
              className="group inline-flex items-center gap-4 px-6 sm:px-7 py-3 border border-[#c5a059] text-[11px] tracking-[0.22em] uppercase font-medium text-stone-100 bg-[#07090c]/40 hover:bg-[#c5a059] hover:text-[#07090c] transition-all duration-300 backdrop-blur-sm"
            >
              <span>{currentSlide.buttonText}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Right Slide Indicators (01  02  03) */}
      <div className="absolute right-6 sm:right-10 lg:right-14 bottom-8 z-20 flex items-center gap-6 text-[12px] tracking-[0.16em] font-mono text-stone-400">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === activeSlideIndex;
          return (
            <button
              key={slide.id}
              onClick={() => setActiveSlideIndex(idx)}
              className={`group flex flex-col items-center gap-1.5 transition-colors ${
                isActive ? 'text-[#f5ebd8] font-semibold' : 'text-stone-500 hover:text-stone-300'
              }`}
              aria-label={`Go to slide ${slide.id}`}
            >
              <span>{slide.id}</span>
              <div
                className={`h-[2px] transition-all duration-300 ${
                  isActive ? 'w-6 bg-[#c5a059]' : 'w-0 group-hover:w-3 bg-stone-600'
                }`}
              />
            </button>
          );
        })}
      </div>
    </section>
  );
};
