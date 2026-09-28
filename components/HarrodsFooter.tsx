'use client';

import React, { useState } from 'react';
import {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  ChevronDown,
  Check,
  MapPin,
  Clock,
  Phone,
  Mail,
} from 'lucide-react';
import { HarrodsCrownCrest, HarrodsWordmark } from './HarrodsLogo';

interface FooterProps {
  onOpenStoreModal: () => void;
  onOpenDeliveryModal: () => void;
}

export const HarrodsFooter: React.FC<FooterProps> = ({
  onOpenStoreModal,
  onOpenDeliveryModal,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('UNITED KINGDOM');
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 4000);
    }
  };

  const countries = [
    { code: 'GB', name: 'UNITED KINGDOM', currency: 'GBP (£)' },
    { code: 'US', name: 'UNITED STATES', currency: 'USD ($)' },
    { code: 'FR', name: 'FRANCE (EUR)', currency: 'EUR (€)' },
    { code: 'AE', name: 'UNITED ARAB EMIRATES', currency: 'AED' },
    { code: 'SA', name: 'SAUDI ARABIA', currency: 'SAR' },
    { code: 'SG', name: 'SINGAPORE', currency: 'SGD ($)' },
    { code: 'HK', name: 'HONG KONG', currency: 'HKD ($)' },
  ];

  return (
    <footer className="w-full bg-[#050709] border-t border-[#14181f] text-stone-300 select-none">
      {/* Exact Primary Strip from Reference Screenshot */}
      <div className="px-4 sm:px-6 lg:px-8 py-5 border-b border-[#14181f] flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] sm:text-[11px] tracking-[0.14em] uppercase">
        {/* Left Links */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 font-medium">
          <button
            onClick={onOpenStoreModal}
            className="hover:text-[#edd9b3] transition-colors"
          >
            Customer Service
          </button>
          <button
            onClick={onOpenDeliveryModal}
            className="hover:text-[#edd9b3] transition-colors"
          >
            Delivery & Returns
          </button>
          <button
            onClick={onOpenStoreModal}
            className="hover:text-[#edd9b3] transition-colors"
          >
            Our Stores
          </button>
          <a
            href="#sustainability"
            onClick={(e) => e.preventDefault()}
            className="hover:text-[#edd9b3] transition-colors"
          >
            Sustainability
          </a>
        </div>

        {/* Right Section: Socials + Country Selector */}
        <div className="flex items-center gap-5 sm:gap-7">
          {/* Social Icons matching screenshot */}
          <div className="flex items-center gap-3.5 text-stone-400">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Harrods on Instagram"
              className="hover:text-[#c5a059] transition-colors p-1"
            >
              <Instagram className="w-3.5 h-3.5 stroke-[1.8]" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Harrods on Facebook"
              className="hover:text-[#c5a059] transition-colors p-1"
            >
              <Facebook className="w-3.5 h-3.5 stroke-[1.8]" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Harrods on X"
              className="hover:text-[#c5a059] transition-colors p-1"
            >
              {/* X / Twitter custom geometric mark */}
              <span className="font-sans font-bold text-[12px] leading-none">𝕏</span>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Harrods on YouTube"
              className="hover:text-[#c5a059] transition-colors p-1"
            >
              <Youtube className="w-3.5 h-3.5 stroke-[1.8]" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Harrods on LinkedIn"
              className="hover:text-[#c5a059] transition-colors p-1"
            >
              <Linkedin className="w-3.5 h-3.5 stroke-[1.8]" />
            </a>
          </div>

          {/* Country Selector Button matching reference screenshot */}
          <div className="relative">
            <button
              onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
              className="flex items-center gap-2 px-3 py-1.5 bg-[#0a0d12] border border-[#222832] rounded-sm hover:border-[#c5a059]/50 transition-colors text-[10px] tracking-[0.12em]"
            >
              {/* Union Jack Flag Icon */}
              <span className="inline-block text-xs" aria-hidden="true">
                🇬🇧
              </span>
              <span className="font-medium text-stone-200">{selectedCountry}</span>
              <ChevronDown className="w-3 h-3 text-stone-400 stroke-[1.75]" />
            </button>

            {countryDropdownOpen && (
              <div className="absolute right-0 bottom-full mb-2 w-52 bg-[#0d1016] border border-[#262d3a] shadow-2xl rounded-sm p-1.5 z-50">
                <div className="text-[9px] tracking-[0.2em] uppercase text-[#c5a059] px-2 py-1 border-b border-[#1a202a]">
                  Select Delivery Region
                </div>
                {countries.map((c) => (
                  <button
                    key={c.code}
                    onClick={() => {
                      setSelectedCountry(c.name);
                      setCountryDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-2 py-1.5 text-[10px] text-left hover:bg-[#161c26] transition-colors ${
                      selectedCountry === c.name ? 'text-[#e5c17b] font-semibold' : 'text-stone-300'
                    }`}
                  >
                    <span>{c.name}</span>
                    <span className="text-stone-500 font-mono text-[9px]">{c.currency}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Natural Extended Heritage & Discovery Footer */}
      <div className="px-4 sm:px-6 lg:px-8 py-10 bg-[#040507]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-[#14181f]">
          {/* Column 1: Knightsbridge Flagship */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <HarrodsWordmark className="h-5 w-auto" color="#c5a059" />
            </div>
            <p className="text-xs text-stone-400 font-light leading-relaxed mb-4">
              87–135 Brompton Road, Knightsbridge, London SW1X 7XL, United Kingdom
            </p>
            <div className="space-y-1.5 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Mon – Sat: 10:00 – 21:00</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Sunday: 11:30 – 18:00</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>+44 (0)20 7730 1234</span>
              </div>
            </div>
          </div>

          {/* Column 2: Exclusive Services */}
          <div>
            <div className="text-[11px] tracking-[0.2em] uppercase text-[#c5a059] font-medium mb-3">
              Bespoke Services
            </div>
            <ul className="space-y-2 text-xs text-stone-400 font-light">
              <li>
                <button
                  onClick={onOpenStoreModal}
                  className="hover:text-stone-200 transition-colors"
                >
                  Personal Shopping Suites
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenStoreModal}
                  className="hover:text-stone-200 transition-colors"
                >
                  The Harrods Tea Rooms & Dining Hall
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenStoreModal}
                  className="hover:text-stone-200 transition-colors"
                >
                  Salon de Parfums (Floor 6)
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenStoreModal}
                  className="hover:text-stone-200 transition-colors"
                >
                  Fine Watch & Jewellery Commissioning
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Harrods Rewards */}
          <div>
            <div className="text-[11px] tracking-[0.2em] uppercase text-[#c5a059] font-medium mb-3">
              Harrods Rewards
            </div>
            <p className="text-xs text-stone-400 font-light leading-relaxed mb-3">
              Earn points on every acquisition worldwide, unlock 10% Member Days, and receive complimentary worldwide delivery.
            </p>
            <div className="flex items-center gap-2 text-[10px] tracking-[0.16em] uppercase text-[#c5a059]">
              <span className="w-2 h-2 rounded-full bg-[#004832] border border-[#c5a059]" />
              <span>Green · Gold · Black Tier</span>
            </div>
          </div>

          {/* Column 4: Newsletter Invitation */}
          <div>
            <div className="text-[11px] tracking-[0.2em] uppercase text-[#c5a059] font-medium mb-3">
              The Curated Dispatch
            </div>
            <p className="text-xs text-stone-400 font-light leading-relaxed mb-3">
              Receive private salon invitations, limited haute horlogerie allocations and seasonal preview edits.
            </p>
            {newsletterSubscribed ? (
              <div className="flex items-center gap-2 p-2.5 bg-[#004832]/30 border border-[#004832] text-xs text-emerald-300">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Thank you. You are registered for private previews.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="w-full bg-[#0a0d12] border border-[#222832] text-xs text-stone-200 placeholder-stone-500 px-3.5 py-2.5 rounded-sm outline-none focus:border-[#c5a059]"
                />
                <button
                  type="submit"
                  className="w-full py-2 bg-[#c5a059] hover:bg-[#d4af37] text-[#07090c] font-medium text-[10px] tracking-[0.2em] uppercase transition-colors"
                >
                  Join The Harrods Edit
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Royal Warrant & Legal statement */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-stone-500 font-light">
          <div className="flex items-center gap-3">
            <HarrodsCrownCrest className="w-4 h-4" color="#8b7342" />
            <span>By Appointment to His Majesty King Charles III, Suppliers of Luxury Goods, Harrods Ltd, London.</span>
          </div>
          <div>
            &copy; {new Date().getFullYear()} Harrods Limited. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
