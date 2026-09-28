'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowLeft, Heart, ShoppingBag, Sparkles } from 'lucide-react';
import { CURATED_PRODUCTS, HarrodsProduct } from '@/lib/harrodsData';

interface CategoryCatalogProps {
  categoryId: string;
  categoryTitle: string;
  onBackToHome: () => void;
  onSelectProduct: (product: HarrodsProduct) => void;
  onAddToCart: (product: HarrodsProduct) => void;
  onToggleWishlist: (product: HarrodsProduct) => void;
  isWishlisted: (productId: string) => boolean;
}

export const HarrodsCategoryCatalog: React.FC<CategoryCatalogProps> = ({
  categoryId,
  categoryTitle,
  onBackToHome,
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
}) => {
  // Filter products by category or show all if "all" or "new-in"
  const products =
    categoryId === 'all' || categoryId === 'new-in' || categoryId === 'the-harrods-edit'
      ? CURATED_PRODUCTS
      : CURATED_PRODUCTS.filter(
          (p) =>
            p.category === categoryId ||
            p.category.includes(categoryId) ||
            categoryId.includes(p.category)
        );

  const displayList = products.length > 0 ? products : CURATED_PRODUCTS;

  return (
    <div className="w-full min-h-screen bg-[#07090c] px-4 sm:px-6 lg:px-8 py-8">
      {/* Category Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#181d24] pb-6 mb-8 gap-4">
        <div>
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-[#c5a059] hover:text-[#edd9b3] mb-3 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Curated World</span>
          </button>
          <div className="text-[10px] tracking-[0.24em] uppercase text-stone-500 font-medium">
            Knightsbridge Department Collection
          </div>
          <h1 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-[#f7ebd8] font-normal mt-1">
            {categoryTitle}
          </h1>
        </div>

        <div className="text-xs text-stone-400 font-light flex items-center gap-2">
          <span>Showing {displayList.length} Curated Acquisitions</span>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {displayList.map((product) => {
          const wishlisted = isWishlisted(product.id);
          return (
            <div
              key={product.id}
              className="group bg-[#0a0d12] border border-[#181d24] hover:border-[#c5a059]/40 transition-all duration-300 flex flex-col"
            >
              {/* Product Image */}
              <div
                onClick={() => onSelectProduct(product)}
                className="relative h-72 sm:h-80 w-full overflow-hidden bg-[#10141b] cursor-pointer"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
                />
                {product.exclusive && (
                  <div className="absolute top-3 left-3 bg-[#004832] text-[#f5ebd8] text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 border border-[#c5a059]/40">
                    Exclusive
                  </div>
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleWishlist(product);
                  }}
                  className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-colors ${
                    wishlisted
                      ? 'bg-[#c5a059] text-[#07090c]'
                      : 'bg-black/60 text-stone-300 hover:text-white'
                  }`}
                  aria-label="Save to wishlist"
                >
                  <Heart className="w-3.5 h-3.5" fill={wishlisted ? 'currentColor' : 'none'} />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-[#c5a059] font-medium mb-1">
                    {product.brand}
                  </div>
                  <h3
                    onClick={() => onSelectProduct(product)}
                    className="text-stone-100 font-medium text-sm leading-snug hover:text-[#edd9b3] cursor-pointer line-clamp-2 mb-2"
                  >
                    {product.name}
                  </h3>
                  <p className="text-xs text-stone-400 font-light line-clamp-2 mb-4">
                    {product.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#181d24] flex items-center justify-between">
                  <div className="font-mono text-sm text-[#edd9b3]">
                    {product.formattedPrice}
                  </div>
                  <button
                    onClick={() => onAddToCart(product)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#12161f] hover:bg-[#c5a059] hover:text-[#07090c] text-stone-200 text-[10px] tracking-[0.14em] uppercase font-medium border border-[#232a35] hover:border-[#c5a059] transition-all"
                  >
                    <ShoppingBag className="w-3 h-3" />
                    <span>Add to Bag</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
