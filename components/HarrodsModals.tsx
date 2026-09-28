'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Trash2, Plus, Minus, Check, ArrowRight, ShieldCheck, Gift, Clock, Sparkles } from 'lucide-react';
import { HarrodsProduct } from '@/lib/harrodsData';
import { HarrodsWordmark, HarrodsCrownCrest } from './HarrodsLogo';

interface BagItem {
  product: HarrodsProduct;
  quantity: number;
}

interface ModalsProps {
  isBagOpen: boolean;
  onCloseBag: () => void;
  bagItems: BagItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveFromBag: (productId: string) => void;

  isWishlistOpen: boolean;
  onCloseWishlist: () => void;
  wishlistItems: HarrodsProduct[];
  onRemoveFromWishlist: (productId: string) => void;
  onMoveToBag: (product: HarrodsProduct) => void;

  selectedProduct: HarrodsProduct | null;
  onCloseProductModal: () => void;
  onAddToCart: (product: HarrodsProduct) => void;
  onToggleWishlist: (product: HarrodsProduct) => void;
  isWishlisted: (productId: string) => boolean;

  isExperienceOpen: boolean;
  onCloseExperience: () => void;

  isSignInOpen: boolean;
  onCloseSignIn: () => void;

  isStoreModalOpen: boolean;
  onCloseStoreModal: () => void;
}

export const HarrodsModals: React.FC<ModalsProps> = ({
  isBagOpen,
  onCloseBag,
  bagItems,
  onUpdateQuantity,
  onRemoveFromBag,
  isWishlistOpen,
  onCloseWishlist,
  wishlistItems,
  onRemoveFromWishlist,
  onMoveToBag,
  selectedProduct,
  onCloseProductModal,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  isExperienceOpen,
  onCloseExperience,
  isSignInOpen,
  onCloseSignIn,
  isStoreModalOpen,
  onCloseStoreModal,
}) => {
  const [includeGiftWrap, setIncludeGiftWrap] = useState(true);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [orderRefNumber, setOrderRefNumber] = useState('849201');
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [bookingType, setBookingType] = useState('Private Shopping Salon');

  const bagSubtotal = bagItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <>
      {/* 1. SHOPPING BAG DRAWER */}
      {isBagOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={onCloseBag}
          />
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-[#0a0d12] border-l border-[#1a202a] text-stone-200 flex flex-col shadow-2xl">
              {/* Header */}
              <div className="p-6 border-b border-[#181d24] flex items-center justify-between">
                <div>
                  <h2 className="text-xs tracking-[0.24em] uppercase text-[#c5a059] font-medium">
                    Your Shopping Bag
                  </h2>
                  <p className="text-[11px] text-stone-400 mt-0.5">
                    {bagItems.length} {bagItems.length === 1 ? 'Creation' : 'Creations'}
                  </p>
                </div>
                <button
                  onClick={onCloseBag}
                  className="text-stone-400 hover:text-white p-1 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-5">
                {checkoutSuccess ? (
                  <div className="text-center py-12 px-4 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-[#004832] border border-[#c5a059] mx-auto flex items-center justify-center">
                      <Check className="w-6 h-6 text-[#f5ebd8]" />
                    </div>
                    <h3 className="font-serif-luxury text-2xl text-[#f5ebd8]">
                      Order Confirmed
                    </h3>
                    <p className="text-xs text-stone-300 leading-relaxed max-w-xs mx-auto">
                      Thank you for your acquisition. Our Knightsbridge concierges are preparing your order with signature Harrods green packaging.
                    </p>
                    <div className="text-[10px] tracking-[0.2em] text-[#c5a059] uppercase pt-2">
                      Reference: #HRD-{orderRefNumber}
                    </div>
                  </div>
                ) : bagItems.length === 0 ? (
                  <div className="text-center py-16 space-y-4">
                    <div className="w-12 h-12 mx-auto rounded-full bg-[#12161f] flex items-center justify-center text-stone-500">
                      <Gift className="w-6 h-6 text-stone-400" />
                    </div>
                    <h3 className="font-serif-luxury text-xl text-stone-300">
                      Your bag is currently empty
                    </h3>
                    <p className="text-xs text-stone-400 max-w-xs mx-auto">
                      Explore our curated collections of fine jewellery, fashion, and gourmet delicacies.
                    </p>
                    <button
                      onClick={onCloseBag}
                      className="px-5 py-2 border border-[#c5a059] text-[10.5px] tracking-[0.2em] uppercase text-stone-100 hover:bg-[#c5a059] hover:text-[#07090c] transition-colors"
                    >
                      Explore Harrods
                    </button>
                  </div>
                ) : (
                  <>
                    {bagItems.map(({ product, quantity }) => (
                      <div
                        key={product.id}
                        className="flex gap-4 p-3 bg-[#0e1218] border border-[#1b222c]"
                      >
                        <div className="relative w-18 h-20 bg-[#161a22] shrink-0 overflow-hidden">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            sizes="72px"
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[10px] tracking-[0.16em] uppercase text-[#c5a059]">
                            {product.brand}
                          </div>
                          <div className="text-xs font-medium text-stone-200 truncate mt-0.5">
                            {product.name}
                          </div>
                          <div className="text-xs font-mono text-stone-300 mt-1">
                            {product.formattedPrice}
                          </div>

                          {/* Stepper */}
                          <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center border border-[#2a323e]">
                              <button
                                onClick={() => onUpdateQuantity(product.id, -1)}
                                className="p-1 hover:text-[#c5a059] text-stone-400"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="px-2.5 text-xs font-mono">{quantity}</span>
                              <button
                                onClick={() => onUpdateQuantity(product.id, 1)}
                                className="p-1 hover:text-[#c5a059] text-stone-400"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                            <button
                              onClick={() => onRemoveFromBag(product.id)}
                              className="text-stone-500 hover:text-red-400 transition-colors p-1"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Harrods Signature Gift Box Option */}
                    <div className="p-3 bg-[#0d1316] border border-[#1a382e] rounded-sm flex items-start gap-3">
                      <Gift className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                      <div className="flex-1 text-[11px] text-stone-300">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={includeGiftWrap}
                            onChange={(e) => setIncludeGiftWrap(e.target.checked)}
                            className="rounded accent-[#004832]"
                          />
                          <span className="font-medium text-stone-100">
                            Complimentary Harrods Green Box & Ribbon
                          </span>
                        </label>
                        <p className="text-[10px] text-stone-400 mt-1">
                          Presented in our historic Knightsbridge gold-embossed gift box with hand-written card.
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Bag Summary */}
              {bagItems.length > 0 && !checkoutSuccess && (
                <div className="p-6 border-t border-[#181d24] bg-[#07090c] space-y-4">
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between text-stone-400">
                      <span>Subtotal</span>
                      <span className="font-mono text-stone-200">
                        £{bagSubtotal.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between text-stone-400">
                      <span>White Glove Delivery</span>
                      <span className="text-[#c5a059]">Complimentary</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#181d24] flex justify-between text-sm font-semibold text-stone-100">
                    <span>Total Amount</span>
                    <span className="font-mono text-[#edd9b3]">
                      £{bagSubtotal.toLocaleString()}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      setOrderRefNumber(String(Math.floor(100000 + Math.random() * 900000)));
                      setCheckoutSuccess(true);
                      setTimeout(() => {
                        setCheckoutSuccess(false);
                      }, 5000);
                    }}
                    className="w-full py-3 bg-[#c5a059] hover:bg-[#d4af37] text-[#07090c] font-medium text-[11px] tracking-[0.2em] uppercase transition-colors"
                  >
                    Proceed To Checkout
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[10px] text-stone-500">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#c5a059]" />
                    <span>Secure Knightsbridge SSL Vault Encryption</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 2. WISHLIST DRAWER */}
      {isWishlistOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onCloseWishlist}
          />
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-[#0a0d12] border-l border-[#1a202a] text-stone-200 flex flex-col shadow-2xl">
              <div className="p-6 border-b border-[#181d24] flex items-center justify-between">
                <div>
                  <h2 className="text-xs tracking-[0.24em] uppercase text-[#c5a059] font-medium">
                    Your Wishlist
                  </h2>
                  <p className="text-[11px] text-stone-400 mt-0.5">
                    {wishlistItems.length} Saved Creations
                  </p>
                </div>
                <button
                  onClick={onCloseWishlist}
                  className="text-stone-400 hover:text-white p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {wishlistItems.length === 0 ? (
                  <div className="text-center py-16 space-y-3">
                    <p className="text-sm text-stone-400">
                      You haven&apos;t saved any creations to your wishlist yet.
                    </p>
                  </div>
                ) : (
                  wishlistItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 p-3 bg-[#0e1218] border border-[#1b222c]"
                    >
                      <div className="relative w-18 h-20 bg-[#161a22] shrink-0 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="72px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] tracking-[0.16em] uppercase text-[#c5a059]">
                          {item.brand}
                        </div>
                        <div className="text-xs font-medium text-stone-200 truncate mt-0.5">
                          {item.name}
                        </div>
                        <div className="text-xs font-mono text-stone-300 mt-1">
                          {item.formattedPrice}
                        </div>
                        <div className="flex items-center gap-2 mt-3">
                          <button
                            onClick={() => onMoveToBag(item)}
                            className="px-3 py-1 bg-[#c5a059] text-[#07090c] text-[10px] tracking-[0.14em] uppercase font-medium hover:bg-[#d4af37]"
                          >
                            Add to Bag
                          </button>
                          <button
                            onClick={() => onRemoveFromWishlist(item.id)}
                            className="text-stone-500 hover:text-stone-300 text-xs p-1"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. PRODUCT DETAIL QUICKVIEW MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
            onClick={onCloseProductModal}
          />
          <div className="relative z-10 w-full max-w-3xl bg-[#0a0d12] border border-[#222833] text-stone-200 shadow-2xl overflow-hidden flex flex-col md:flex-row">
            <button
              onClick={onCloseProductModal}
              className="absolute top-4 right-4 z-20 text-stone-400 hover:text-white p-1.5 bg-[#0a0d12]/80 backdrop-blur-sm"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Image */}
            <div className="relative w-full md:w-1/2 h-72 md:h-auto min-h-[300px] bg-[#10141b]">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
              {selectedProduct.exclusive && (
                <div className="absolute top-4 left-4 bg-[#004832] text-[#f5ebd8] text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 border border-[#c5a059]/40">
                  Exclusive to Harrods
                </div>
              )}
            </div>

            {/* Right Information */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="text-[10.5px] tracking-[0.22em] uppercase text-[#c5a059] font-medium mb-1">
                  {selectedProduct.brand}
                </div>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#f7ebd8] font-normal leading-snug mb-3">
                  {selectedProduct.name}
                </h3>
                <div className="text-lg font-mono text-stone-100 mb-4">
                  {selectedProduct.formattedPrice}
                </div>
                <p className="text-xs text-stone-300 font-light leading-relaxed mb-6">
                  {selectedProduct.description}
                </p>
                {selectedProduct.edition && (
                  <div className="text-[10px] tracking-[0.16em] uppercase text-stone-400 mb-6 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#c5a059]" />
                    <span>{selectedProduct.edition}</span>
                  </div>
                )}
              </div>

              <div className="space-y-3 pt-4 border-t border-[#181d24]">
                <button
                  onClick={() => {
                    onAddToCart(selectedProduct);
                    onCloseProductModal();
                  }}
                  className="w-full py-3 bg-[#c5a059] hover:bg-[#d4af37] text-[#07090c] font-medium text-[11px] tracking-[0.2em] uppercase transition-colors"
                >
                  Add To Bag &bull; {selectedProduct.formattedPrice}
                </button>
                <button
                  onClick={() => onToggleWishlist(selectedProduct)}
                  className="w-full py-2.5 border border-[#262e3a] hover:border-[#c5a059] text-[10px] tracking-[0.16em] uppercase text-stone-300 transition-colors"
                >
                  {isWishlisted(selectedProduct.id)
                    ? 'Saved in Wishlist'
                    : 'Save To Wishlist'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. THE HARRODS EXPERIENCE & BESPOKE SERVICES MODAL */}
      {isExperienceOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
            onClick={onCloseExperience}
          />
          <div className="relative z-10 w-full max-w-xl bg-[#0a0d12] border border-[#222833] text-stone-200 p-6 sm:p-8 shadow-2xl">
            <button
              onClick={onCloseExperience}
              className="absolute top-4 right-4 text-stone-400 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <HarrodsCrownCrest className="w-8 h-8 mx-auto mb-2" color="#c5a059" />
              <div className="text-[10px] tracking-[0.24em] uppercase text-[#c5a059]">
                Knightsbridge Concierge
              </div>
              <h3 className="font-serif-luxury text-3xl text-[#f7ebd8] mt-1">
                The Harrods Experience
              </h3>
              <p className="text-xs text-stone-400 mt-2 max-w-md mx-auto">
                Arrange a private salon appointment, bespoke styling consultation, or dining reservation with our personal concierge.
              </p>
            </div>

            {bookingSubmitted ? (
              <div className="text-center py-8 bg-[#004832]/20 border border-[#004832] p-4">
                <Check className="w-6 h-6 text-[#c5a059] mx-auto mb-2" />
                <h4 className="font-serif-luxury text-xl text-[#f7ebd8]">
                  Appointment Request Received
                </h4>
                <p className="text-xs text-stone-300 mt-1">
                  Our private client director will contact you directly within 2 business hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setBookingSubmitted(true);
                  setTimeout(() => setBookingSubmitted(false), 5000);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-[10px] tracking-[0.16em] uppercase text-stone-400 mb-1.5">
                    Select Experience
                  </label>
                  <select
                    value={bookingType}
                    onChange={(e) => setBookingType(e.target.value)}
                    className="w-full bg-[#12161f] border border-[#242b36] text-xs text-stone-200 px-3.5 py-2.5 outline-none focus:border-[#c5a059]"
                  >
                    <option value="Private Shopping Salon">Private Shopping Penthouse Suite</option>
                    <option value="Haute Horlogerie">Fine Watch & Jewellery Commissioning</option>
                    <option value="Salon de Parfums">Salon de Parfums Bespoke Fragrance Blending</option>
                    <option value="The Georgian Tea Room">The Harrods Tea Rooms & Dining Hall</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] tracking-[0.16em] uppercase text-stone-400 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lady Penelope Sterling"
                      className="w-full bg-[#12161f] border border-[#242b36] text-xs text-stone-200 px-3 py-2 outline-none focus:border-[#c5a059]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.16em] uppercase text-stone-400 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+44 20 7000 0000"
                      className="w-full bg-[#12161f] border border-[#242b36] text-xs text-stone-200 px-3 py-2 outline-none focus:border-[#c5a059]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.16em] uppercase text-stone-400 mb-1">
                    Preferred Date & Special Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide preferred time or particular Maisons you wish to preview..."
                    className="w-full bg-[#12161f] border border-[#242b36] text-xs text-stone-200 p-3 outline-none focus:border-[#c5a059]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#c5a059] hover:bg-[#d4af37] text-[#07090c] font-medium text-[11px] tracking-[0.2em] uppercase transition-colors"
                >
                  Confirm Concierge Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* 5. SIGN IN / REWARDS MODAL */}
      {isSignInOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
            onClick={onCloseSignIn}
          />
          <div className="relative z-10 w-full max-w-md bg-[#0a0d12] border border-[#222833] text-stone-200 p-6 sm:p-8 shadow-2xl">
            <button
              onClick={onCloseSignIn}
              className="absolute top-4 right-4 text-stone-400 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <HarrodsWordmark className="h-6 w-auto mx-auto mb-2" color="#c5a059" />
              <div className="text-[10px] tracking-[0.24em] uppercase text-[#c5a059]">
                Harrods Rewards
              </div>
              <h3 className="font-serif-luxury text-2xl text-[#f7ebd8] mt-1">
                Welcome to Knightsbridge
              </h3>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                onCloseSignIn();
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-[10px] tracking-[0.16em] uppercase text-stone-400 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  defaultValue="client@harrods-london.co.uk"
                  className="w-full bg-[#12161f] border border-[#242b36] text-xs text-stone-200 px-3.5 py-2.5 outline-none focus:border-[#c5a059]"
                />
              </div>

              <div>
                <label className="block text-[10px] tracking-[0.16em] uppercase text-stone-400 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  required
                  defaultValue="••••••••••••"
                  className="w-full bg-[#12161f] border border-[#242b36] text-xs text-stone-200 px-3.5 py-2.5 outline-none focus:border-[#c5a059]"
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-stone-400">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" defaultChecked className="accent-[#004832]" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="hover:text-[#c5a059] transition-colors">
                  Forgotten password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#c5a059] hover:bg-[#d4af37] text-[#07090c] font-medium text-[11px] tracking-[0.2em] uppercase transition-colors"
              >
                Sign In to Rewards
              </button>
            </form>

            <div className="mt-6 pt-4 border-t border-[#181d24] text-center text-xs text-stone-400">
              Not yet a member?{' '}
              <button
                onClick={onCloseSignIn}
                className="text-[#c5a059] hover:underline font-medium"
              >
                Join Harrods Rewards
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 6. STORE DIRECTORY & CUSTOMER SERVICE MODAL */}
      {isStoreModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
            onClick={onCloseStoreModal}
          />
          <div className="relative z-10 w-full max-w-2xl bg-[#0a0d12] border border-[#222833] text-stone-200 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={onCloseStoreModal}
              className="absolute top-4 right-4 text-stone-400 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <div className="text-[10px] tracking-[0.24em] uppercase text-[#c5a059]">
                Knightsbridge London
              </div>
              <h3 className="font-serif-luxury text-3xl text-[#f7ebd8] mt-1">
                Store Directory & Floor Guide
              </h3>
              <p className="text-xs text-stone-400 mt-1">
                87–135 Brompton Road, Knightsbridge, London SW1X 7XL
              </p>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-[#0e1219] border border-[#1b222c] flex items-start gap-4">
                <span className="font-mono text-[#c5a059] font-bold w-16 shrink-0">
                  Floor 6
                </span>
                <div>
                  <div className="font-semibold text-stone-100">Salon de Parfums</div>
                  <div className="text-stone-400 text-[11px]">
                    The most prestigious fragrance boutique in the world, bespoke commissions & rare extraits.
                  </div>
                </div>
              </div>

              <div className="p-3 bg-[#0e1219] border border-[#1b222c] flex items-start gap-4">
                <span className="font-mono text-[#c5a059] font-bold w-16 shrink-0">
                  Floor 4
                </span>
                <div>
                  <div className="font-semibold text-stone-100">
                    The Georgian & Fine Dining
                  </div>
                  <div className="text-stone-400 text-[11px]">
                    The historic Harrods Tea Rooms, Afternoon Tea, and luxury fashion salon.
                  </div>
                </div>
              </div>

              <div className="p-3 bg-[#0e1219] border border-[#1b222c] flex items-start gap-4">
                <span className="font-mono text-[#c5a059] font-bold w-16 shrink-0">
                  Floor 3
                </span>
                <div>
                  <div className="font-semibold text-stone-100">Home & Furniture</div>
                  <div className="text-stone-400 text-[11px]">
                    Bespoke interior design studio, luxury audio, architectural lighting & Lalique crystal.
                  </div>
                </div>
              </div>

              <div className="p-3 bg-[#0e1219] border border-[#1b222c] flex items-start gap-4">
                <span className="font-mono text-[#c5a059] font-bold w-16 shrink-0">
                  Ground
                </span>
                <div>
                  <div className="font-semibold text-stone-100">
                    Fine Jewellery & Fine Watch Rooms
                  </div>
                  <div className="text-stone-400 text-[11px]">
                    Patek Philippe, Cartier, Audemars Piguet, Boucheron, Van Cleef & Arpels.
                  </div>
                </div>
              </div>

              <div className="p-3 bg-[#0e1219] border border-[#1b222c] flex items-start gap-4">
                <span className="font-mono text-[#c5a059] font-bold w-16 shrink-0">
                  Lower Gr.
                </span>
                <div>
                  <div className="font-semibold text-stone-100">The Grand Food Halls</div>
                  <div className="text-stone-400 text-[11px]">
                    Roastery & Bake Hall, Fresh Market Hall, The Dining Hall, and the Fine Wine & Spirits Cellars.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
