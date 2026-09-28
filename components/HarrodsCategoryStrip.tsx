'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { CATEGORY_TILES } from '@/lib/harrodsData';

interface CategoryStripProps {
  onSelectCategory: (categoryId: string) => void;
}

export const HarrodsCategoryStrip: React.FC<CategoryStripProps> = ({ onSelectCategory }) => {
  return (
    <section className="w-full bg-[#07090c] px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-3.5">
        {CATEGORY_TILES.map((cat) => (
          <div
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className="group relative h-[360px] sm:h-[400px] lg:h-[420px] bg-[#0c0f14] overflow-hidden cursor-pointer select-none border border-[#181d24] hover:border-[#c5a059]/40 transition-all duration-300"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
              />
              {/* Vignette Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090c] via-[#07090c]/40 to-transparent opacity-95 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />
            </div>

            {/* Bottom Content Area matching reference image */}
            <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end z-10">
              {/* Category Title */}
              <h2 className="text-stone-100 text-sm md:text-[14px] font-semibold tracking-[0.16em] uppercase mb-1.5 group-hover:text-[#edd9b3] transition-colors">
                {cat.title}
              </h2>

              {/* Subtitle */}
              <p className="text-[10px] md:text-[10.5px] tracking-[0.14em] text-stone-400 uppercase font-light leading-snug mb-3">
                {cat.subtitle}
              </p>

              {/* Arrow */}
              <div className="inline-flex items-center text-stone-300 group-hover:text-[#c5a059] transition-colors">
                <ArrowRight className="w-4 h-4 stroke-[1.75] transition-transform duration-300 group-hover:translate-x-1.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
