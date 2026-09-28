'use client';

import React, { useState } from 'react';
import { HarrodsSidebar } from '@/components/HarrodsSidebar';
import { HarrodsTopBar } from '@/components/HarrodsTopBar';
import { HarrodsHero } from '@/components/HarrodsHero';
import { HarrodsCategoryStrip } from '@/components/HarrodsCategoryStrip';
import { HarrodsEditSection } from '@/components/HarrodsEditSection';
import { HarrodsFooter } from '@/components/HarrodsFooter';
import { HarrodsModals } from '@/components/HarrodsModals';
import { HarrodsCategoryCatalog } from '@/components/HarrodsCategoryCatalog';
import {
  HARRODS_CATEGORIES,
  CURATED_PRODUCTS,
  HarrodsProduct,
  EditorialFeature,
} from '@/lib/harrodsData';

export default function HomePage() {
  // Navigation & Category states
  const [activeCategory, setActiveCategory] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Bag & Wishlist states
  const [bagItems, setBagItems] = useState<
    { product: HarrodsProduct; quantity: number }[]
  >([]);
  const [wishlistItems, setWishlistItems] = useState<HarrodsProduct[]>([]);

  // Modal open states
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<HarrodsProduct | null>(null);
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isStoreModalOpen, setIsStoreModalOpen] = useState(false);

  // Cart operations
  const handleAddToCart = (product: HarrodsProduct) => {
    setBagItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsBagOpen(true);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setBagItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as { product: HarrodsProduct; quantity: number }[]
    );
  };

  const handleRemoveFromBag = (productId: string) => {
    setBagItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  // Wishlist operations
  const handleToggleWishlist = (product: HarrodsProduct) => {
    setWishlistItems((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const isWishlisted = (productId: string) =>
    wishlistItems.some((item) => item.id === productId);

  const handleRemoveFromWishlist = (productId: string) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const handleMoveToBag = (product: HarrodsProduct) => {
    handleAddToCart(product);
    handleRemoveFromWishlist(product.id);
  };

  // Category navigation
  const handleSelectCategory = (categoryId: string) => {
    if (categoryId === 'all' || categoryId === 'home') {
      setActiveCategory('home');
    } else {
      setActiveCategory(categoryId);
    }
    // Scroll smoothly to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Get display title for category view
  const categoryMeta = HARRODS_CATEGORIES.find((c) => c.id === activeCategory);
  const activeCategoryTitle = categoryMeta ? categoryMeta.label : 'Curated Collection';

  // Feature handling from editorial
  const handleSelectEditorialFeature = (feature: EditorialFeature) => {
    if (feature.id === 'patek-philippe') {
      const patek = CURATED_PRODUCTS.find((p) => p.brand === 'Patek Philippe');
      if (patek) setSelectedProduct(patek);
    } else if (feature.id === 'private-shopping') {
      setIsExperienceOpen(true);
    } else if (feature.id === 'harrods-gallery') {
      setActiveCategory('home-lifestyle');
    }
  };

  const totalBagCount = bagItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#07090c] text-stone-100 flex flex-col font-sans">
      {/* 1. Fixed Left Sidebar */}
      <HarrodsSidebar
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        mobileOpen={mobileMenuOpen}
        onToggleMobile={() => setMobileMenuOpen(!mobileMenuOpen)}
      />

      {/* 2. Main Right Area offset by sidebar width on lg+ */}
      <div className="flex-1 flex flex-col lg:ml-[275px] min-w-0">
        {/* Sticky Top Bar matching screenshot */}
        <HarrodsTopBar
          onToggleSidebar={() => setMobileMenuOpen(!mobileMenuOpen)}
          onOpenExperience={() => setIsExperienceOpen(true)}
          onOpenSignIn={() => setIsSignInOpen(true)}
          onOpenWishlist={() => setIsWishlistOpen(true)}
          onOpenBag={() => setIsBagOpen(true)}
          bagCount={totalBagCount}
          wishlistCount={wishlistItems.length}
          onSelectProduct={(prod) => setSelectedProduct(prod)}
          onSearchQuery={(q) => {
            if (q) {
              // Could also filter or open view
            }
          }}
        />

        {/* Dynamic Content: Homepage or Category View */}
        <main className="flex-1">
          {activeCategory === 'home' ? (
            <>
              {/* Hero Banner matching reference image */}
              <HarrodsHero
                onExploreClick={() => handleSelectCategory('new-in')}
              />

              {/* 5 Tall Category Showcase Tiles matching reference image */}
              <HarrodsCategoryStrip
                onSelectCategory={handleSelectCategory}
              />

              {/* "THE HARRODS EDIT" - The Art of Extraordinary feature section */}
              <HarrodsEditSection
                onDiscoverEdit={() => handleSelectCategory('the-harrods-edit')}
                onSelectFeature={handleSelectEditorialFeature}
              />
            </>
          ) : (
            <HarrodsCategoryCatalog
              categoryId={activeCategory}
              categoryTitle={activeCategoryTitle}
              onBackToHome={() => setActiveCategory('home')}
              onSelectProduct={(prod) => setSelectedProduct(prod)}
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
              isWishlisted={isWishlisted}
            />
          )}
        </main>

        {/* Footer matching reference image and natural extension */}
        <HarrodsFooter
          onOpenStoreModal={() => setIsStoreModalOpen(true)}
          onOpenDeliveryModal={() => setIsStoreModalOpen(true)}
        />
      </div>

      {/* Interactive Modals & Drawers */}
      <HarrodsModals
        isBagOpen={isBagOpen}
        onCloseBag={() => setIsBagOpen(false)}
        bagItems={bagItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveFromBag={handleRemoveFromBag}
        isWishlistOpen={isWishlistOpen}
        onCloseWishlist={() => setIsWishlistOpen(false)}
        wishlistItems={wishlistItems}
        onRemoveFromWishlist={handleRemoveFromWishlist}
        onMoveToBag={handleMoveToBag}
        selectedProduct={selectedProduct}
        onCloseProductModal={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={isWishlisted}
        isExperienceOpen={isExperienceOpen}
        onCloseExperience={() => setIsExperienceOpen(false)}
        isSignInOpen={isSignInOpen}
        onCloseSignIn={() => setIsSignInOpen(false)}
        isStoreModalOpen={isStoreModalOpen}
        onCloseStoreModal={() => setIsStoreModalOpen(false)}
      />
    </div>
  );
}
