'use client';

import React from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { HarrodsWordmark, HarrodsCrownCrest, HarrodsMonogramH } from './HarrodsLogo';
import { HARRODS_CATEGORIES } from '@/lib/harrodsData';

interface SidebarProps {
  activeCategory: string;
  onSelectCategory: (categoryId: string) => void;
  mobileOpen: boolean;
  onToggleMobile: () => void;
}

export const HarrodsSidebar: React.FC<SidebarProps> = ({
  activeCategory,
  onSelectCategory,
  mobileOpen,
  onToggleMobile,
}) => {
  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={onToggleMobile}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-[275px] bg-[#07090c] border-r border-[#1a1f26] flex flex-col justify-between transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        } overflow-y-auto select-none`}
      >
        {/* Top Header & Brand */}
        <div className="pt-6 px-6 pb-4">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={onToggleMobile}
              className="text-[#d4af37] hover:text-[#f3e7ce] transition-colors p-1"
              aria-label="Toggle navigation menu"
            >
              <Menu className="w-5 h-5 stroke-[1.75]" />
            </button>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onSelectCategory('all');
              }}
              className="flex items-center ml-2"
              aria-label="Harrods Homepage"
            >
              <HarrodsWordmark className="h-7 w-auto" color="#d4af37" />
            </a>

            {/* Mobile close button */}
            <button
              onClick={onToggleMobile}
              className="text-stone-400 hover:text-white lg:hidden p-1"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="space-y-4" aria-label="Main Store Navigation">
            {HARRODS_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    onSelectCategory(cat.id);
                    if (mobileOpen) onToggleMobile();
                  }}
                  className={`group flex items-center w-full text-left text-[11.5px] tracking-[0.16em] font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-[#f5e6c8] font-semibold pl-2 border-l border-[#d4af37]'
                      : 'text-stone-300 hover:text-white hover:pl-1.5'
                  }`}
                >
                  <span className="truncate">{cat.label}</span>
                  {isActive && (
                    <span className="ml-auto w-1 h-1 rounded-full bg-[#d4af37]" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Center Heritage Crest */}
        <div className="my-auto py-5 flex flex-col items-center justify-center text-center border-t border-b border-[#14181f]/80">
          <HarrodsCrownCrest className="w-6 h-6 mb-2" color="#c5a059" />
          <div className="text-[10px] tracking-[0.28em] text-[#c5a059] font-serif uppercase font-light">
            Since 1849
          </div>
          <div className="text-[9px] tracking-[0.32em] text-[#9b7e41] uppercase font-light mt-0.5">
            London
          </div>
        </div>

        {/* Lower Architectural Vignette & Monogram Feature */}
        <div className="px-5 pb-6 pt-2">
          <div className="relative rounded-none overflow-hidden bg-[#0d1015] border border-[#1b212b]">
            <div className="relative h-28 w-full overflow-hidden">
              <Image
                src="/images/sidebar-building.jpg"
                alt="Harrods Knightsbridge Architecture"
                fill
                sizes="260px"
                className="object-cover opacity-75 group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090c] via-[#07090c]/50 to-transparent" />
            </div>

            <div className="relative -mt-6 pb-4 pt-1 flex flex-col items-center text-center px-3">
              <div className="mb-2">
                <HarrodsMonogramH className="w-5 h-7" color="#d4af37" />
              </div>
              <div className="text-[9px] tracking-[0.24em] uppercase text-stone-400 font-medium">
                More Than A Store
              </div>
              <div className="text-[10px] tracking-[0.22em] uppercase text-[#edd9b3] font-serif mt-1 font-normal">
                A World Of Discovery
              </div>
              <div className="w-8 h-[1px] bg-[#c5a059]/50 mt-2.5" />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
