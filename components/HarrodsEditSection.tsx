'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { EDITORIAL_ITEMS, EditorialFeature } from '@/lib/harrodsData';

interface EditSectionProps {
  onDiscoverEdit: () => void;
  onSelectFeature: (feature: EditorialFeature) => void;
}

export const HarrodsEditSection: React.FC<EditSectionProps> = ({
  onDiscoverEdit,
  onSelectFeature,
}) => {
  return (
    <section className="w-full bg-[#07090c] px-4 sm:px-6 lg:px-8 py-8 sm:py-12 border-t border-[#14181f]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Left Column: The Art of Extraordinary */}
        <div className="lg:col-span-3.5 xl:col-span-3 flex flex-col justify-center pr-2">
          {/* Eyebrow */}
          <div className="text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-[#c5a059] font-medium mb-3">
            The Harrods Edit
          </div>

          {/* Headline */}
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.12] tracking-tight text-[#f7ebd8] mb-4 text-balance">
            The Art of
            <br />
            Extraordinary
          </h2>

          {/* Description */}
          <p className="text-xs sm:text-[13px] text-stone-300 font-light leading-relaxed mb-6">
            Curated collections, exclusive collaborations and limited editions &mdash; only at Harrods.
          </p>

          {/* Button */}
          <div>
            <button
              onClick={onDiscoverEdit}
              className="group inline-flex items-center gap-3 px-5 sm:px-6 py-2.5 sm:py-3 border border-[#c5a059] text-[10.5px] sm:text-[11px] tracking-[0.2em] uppercase font-medium text-stone-100 hover:bg-[#c5a059] hover:text-[#07090c] transition-all duration-300"
            >
              <span>Discover The Edit</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Center Feature: Penthouse Salon Vignette */}
        <div className="lg:col-span-5.5 xl:col-span-5">
          <div className="relative h-[320px] sm:h-[380px] lg:h-[420px] w-full overflow-hidden bg-[#0a0d11] border border-[#1b212b] group cursor-pointer">
            <Image
              src="/images/editorial-salon.jpg"
              alt="Harrods Penthouse Salon with View of London Skyline"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
            />
            {/* Subtle Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

            {/* Subtle brand caption on hover */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] tracking-[0.18em] uppercase text-stone-300 bg-black/60 backdrop-blur-md px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span>The Knightsbridge Penthouse Suite</span>
              <span className="text-[#c5a059]">Explore Interiors</span>
            </div>
          </div>
        </div>

        {/* Right Column: 3 Stacked Editorial Cards */}
        <div className="lg:col-span-3 xl:col-span-4 flex flex-col justify-between space-y-3.5">
          {EDITORIAL_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectFeature(item)}
              className="group flex items-center gap-4 p-2.5 sm:p-3 bg-[#0a0d12] hover:bg-[#12161e] border border-[#181d24] hover:border-[#c5a059]/40 transition-all duration-300 cursor-pointer select-none"
            >
              {/* Thumbnail */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 overflow-hidden bg-[#141820] border border-[#222833]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="80px"
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Information */}
              <div className="flex-1 min-w-0 pr-2">
                <div className="text-[9px] tracking-[0.2em] uppercase text-[#c5a059] font-medium mb-1">
                  {item.tag}
                </div>
                <div className="text-xs sm:text-[13px] font-semibold text-stone-100 tracking-[0.12em] uppercase truncate group-hover:text-[#edd9b3] transition-colors">
                  {item.title}
                </div>
                <div className="text-[10px] sm:text-[11px] tracking-[0.1em] text-stone-400 uppercase font-light mt-0.5">
                  {item.subtitle}
                </div>
              </div>

              {/* Arrow */}
              <div className="text-stone-400 group-hover:text-[#c5a059] pr-1 transition-colors">
                <ArrowRight className="w-4 h-4 stroke-[1.75] transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
