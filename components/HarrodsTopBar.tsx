'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Search, User, Heart, ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';
import { HarrodsWordmark } from './HarrodsLogo';
import { LUXURY_SEARCH_BRANDS, CURATED_PRODUCTS, HarrodsProduct } from '@/lib/harrodsData';

interface TopBarProps {
  onToggleSidebar: () => void;
  onOpenExperience: () => void;
  onOpenSignIn: () => void;
  onOpenWishlist: () => void;
  onOpenBag: () => void;
  bagCount: number;
  wishlistCount: number;
  onSelectProduct: (product: HarrodsProduct) => void;
  onSearchQuery?: (q: string) => void;
}

export const HarrodsTopBar: React.FC<TopBarProps> = ({
  onToggleSidebar,
  onOpenExperience,
  onOpenSignIn,
  onOpenWishlist,
  onOpenBag,
  bagCount,
  wishlistCount,
  onSelectProduct,
  onSearchQuery,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Close search popup on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredBrands = LUXURY_SEARCH_BRANDS.filter((b) =>
    b.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredProducts = CURATED_PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBrandClick = (brandName: string) => {
    setSearchQuery(brandName);
    if (onSearchQuery) onSearchQuery(brandName);
    setIsSearchOpen(false);
  };

  return (
    <header className="relative z-30 w-full px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between border-b border-[#14181f]/80 bg-[#07090c]/90 backdrop-blur-md">
      {/* Mobile Menu & Logo */}
      <div className="flex items-center gap-3 lg:hidden">
        <button
          onClick={onToggleSidebar}
          className="text-[#d4af37] p-1.5 hover:text-white transition-colors"
          aria-label="Open Navigation"
        >
          <Menu className="w-5 h-5" />
        </button>
        <HarrodsWordmark className="h-6 w-auto" color="#d4af37" />
      </div>

      {/* Search Input Container */}
      <div ref={searchContainerRef} className="relative flex-1 max-w-sm sm:max-w-md mr-4">
        <div className="relative flex items-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setIsSearchOpen(true);
              if (onSearchQuery) onSearchQuery(e.target.value);
            }}
            onFocus={() => setIsSearchOpen(true)}
            placeholder="Search the world's greatest brands..."
            className="w-full bg-[#0a0d12] border border-[#222832] text-xs text-stone-200 placeholder-stone-500 rounded-full pl-4 pr-10 py-2.5 outline-none transition-all duration-200 focus:border-[#c5a059]/60 focus:ring-1 focus:ring-[#c5a059]/20"
          />
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="absolute right-3.5 text-stone-400 hover:text-[#d4af37] transition-colors"
            aria-label="Submit search"
          >
            <Search className="w-3.5 h-3.5 stroke-[2]" />
          </button>
        </div>

        {/* Live Search Autocomplete Dropdown */}
        {isSearchOpen && (
          <div className="absolute left-0 right-0 top-full mt-2 bg-[#0c0f14] border border-[#262d38] shadow-2xl rounded-sm p-4 z-50 text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-[#1a2029] mb-3">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#c5a059] font-medium">
                {searchQuery ? 'Search Suggestions' : 'Featured Luxury Houses'}
              </span>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="text-stone-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Brands list */}
            <div className="mb-3">
              <div className="flex flex-wrap gap-1.5">
                {filteredBrands.slice(0, 8).map((brand) => (
                  <button
                    key={brand}
                    onClick={() => handleBrandClick(brand)}
                    className="px-2.5 py-1 text-[11px] bg-[#141820] hover:bg-[#c5a059] hover:text-[#0a0d12] text-stone-300 rounded transition-colors text-left"
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>

            {/* Matched Products */}
            {searchQuery && filteredProducts.length > 0 && (
              <div className="pt-2 border-t border-[#1a2029]">
                <div className="text-[10px] tracking-[0.16em] uppercase text-stone-400 mb-2">
                  Matching Creations ({filteredProducts.length})
                </div>
                <div className="space-y-2">
                  {filteredProducts.slice(0, 3).map((item) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        onSelectProduct(item);
                        setIsSearchOpen(false);
                      }}
                      className="flex items-center justify-between p-1.5 hover:bg-[#161c24] cursor-pointer rounded transition-colors group"
                    >
                      <div className="flex-1 pr-2 truncate">
                        <div className="text-stone-200 font-medium truncate group-hover:text-[#e5c17b]">
                          {item.name}
                        </div>
                        <div className="text-[10px] text-[#c5a059]">{item.brand}</div>
                      </div>
                      <div className="text-stone-300 font-mono text-[11px] whitespace-nowrap">
                        {item.formattedPrice}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Right Utility Navigation matching screenshot */}
      <nav className="flex items-center gap-2 sm:gap-4 md:gap-5 text-[10px] sm:text-[11px] tracking-[0.14em] text-stone-300 select-none">
        {/* THE HARRODS EXPERIENCE */}
        <button
          onClick={onOpenExperience}
          className="hidden md:inline-block uppercase font-medium hover:text-[#e5c17b] transition-colors whitespace-nowrap"
        >
          The Harrods Experience
        </button>

        <span className="hidden md:inline-block text-[#323b47]" aria-hidden="true">
          |
        </span>

        {/* SIGN IN */}
        <button
          onClick={onOpenSignIn}
          className="flex items-center gap-1.5 uppercase font-medium hover:text-[#e5c17b] transition-colors whitespace-nowrap"
        >
          <span>Sign In</span>
          <User className="w-3.5 h-3.5 stroke-[1.8] text-stone-400" />
        </button>

        <span className="text-[#323b47]" aria-hidden="true">
          |
        </span>

        {/* WISHLIST */}
        <button
          onClick={onOpenWishlist}
          className="flex items-center gap-1.5 uppercase font-medium hover:text-[#e5c17b] transition-colors whitespace-nowrap"
        >
          <span className="hidden sm:inline">Wishlist</span>
          <div className="relative">
            <Heart className="w-3.5 h-3.5 stroke-[1.8] text-stone-400 hover:text-red-400" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-[#c5a059] text-[#07090c] font-bold text-[8px] w-3.5 h-3.5 rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </div>
        </button>

        <span className="text-[#323b47]" aria-hidden="true">
          |
        </span>

        {/* BAG (0) */}
        <button
          onClick={onOpenBag}
          className="flex items-center gap-1.5 uppercase font-medium hover:text-[#e5c17b] transition-colors whitespace-nowrap"
        >
          <span>Bag ({bagCount})</span>
          <ShoppingBag className="w-3.5 h-3.5 stroke-[1.8] text-stone-400" />
        </button>
      </nav>
    </header>
  );
};
