'use client';

import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'wordmark' | 'crest' | 'monogram' | 'full';
  color?: string;
}

export const HarrodsWordmark: React.FC<{ className?: string; color?: string }> = ({
  className = 'h-8',
  color = '#d4af37',
}) => {
  return (
    <svg
      viewBox="0 0 240 60"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Harrods London"
    >
      <g fill={color}>
        {/* Authentic calligraphic Harrods cursive signature vector */}
        {/* Capital H with signature flourishing loop and cross stroke */}
        <path d="M22 46.5 C20 45 18 41 18.5 35 C19 28 22 18 24.5 12 C25.5 9.5 27 7.5 29 7 C30.5 6.5 32 7.5 32.5 9.5 C33 11 32 13 30.5 16 C28 21 25.5 28 24.5 34 C24 37 25 39 27 39 C31 39 36 32 40 23 C42.5 17 44 11 44.5 8 C45 6 46.5 5 48 5.5 C49.5 6 50 8 49 11 C47 17 44 26 42 34 C41 38 42 41 44 41 C46 41 49 39 52 35 C52.5 34.5 53.5 35 53 36 C50 42 45 45.5 41 45.5 C37.5 45.5 35.5 42.5 36.5 37 C37 34 38 30 39.5 25 C35 34 29 46.5 22 46.5 Z" />
        <path d="M12 28.5 C16 28 26 27 38 27 C42 27 48 27.5 52 28 C53 28.2 53.5 29 52.5 29.5 C51.5 30 46 29.8 40 29.8 C31 29.8 20 30.5 13 31.5 C11.5 31.7 11 30 11.5 29.2 C11.8 28.8 12.2 28.6 12 28.5 Z" />

        {/* Lowercase a */}
        <path d="M58 37 C56.5 37 55 35 55.5 32.5 C56.5 27.5 60.5 23.5 65 23.5 C68 23.5 69.5 25.5 69 28.5 C68.5 31.5 65.5 37 58 37 Z M67 25 C63.5 25 60.5 28.5 59.5 32 C59 34 60 35 61.5 35 C64.5 35 67 30.5 67.5 27 C67.8 26 67.5 25 67 25 Z" />
        <path d="M68 24.5 C69 24.5 70 25.5 69.5 27 C68 32 66.5 38 66 41 C65.5 42.5 64.5 43 63.5 42.5 C62.5 42 63 40 64 36.5 L65.5 30 C66 28 66.5 25.5 65 25.5 C64 25.5 62 27 60 29.5 C59.5 29 59 28 60 27 C62.5 24.5 65.5 23.5 68 24.5 Z" />

        {/* Lowercase r */}
        <path d="M74 38 C73 38 72 37 72.5 35 C74 29 76 25 78 24.5 C79.5 24 81 25 81.5 26.5 C82.5 29 80 30 77 30.5 C76 33.5 75 37 74 38 Z" />
        <path d="M80 25.5 C83 25.5 86 28 85.5 31 C85 34 83 37.5 81 37.5 C80 37.5 79.5 36.5 80 35 C81.5 31 83 27.5 81.5 26.8 C81 26.5 80.5 26 80 25.5 Z" />

        {/* Second lowercase r */}
        <path d="M89 38 C88 38 87 37 87.5 35 C89 29 91 25 93 24.5 C94.5 24 96 25 96.5 26.5 C97.5 29 95 30 92 30.5 C91 33.5 90 37 89 38 Z" />
        <path d="M95 25.5 C98 25.5 101 28 100.5 31 C100 34 98 37.5 96 37.5 C95 37.5 94.5 36.5 95 35 C96.5 31 98 27.5 96.5 26.8 C96 26.5 95.5 26 95 25.5 Z" />

        {/* Lowercase o */}
        <path d="M106 37.5 C102.5 37.5 100 34.5 101 30.5 C102 26 106 23.5 110 23.5 C113.5 23.5 115.5 26.5 114.5 30.5 C113.5 35 109.5 37.5 106 37.5 Z M108.5 25.5 C105.5 25.5 104 28 103.2 31 C102.8 33 103.8 35 105.5 35 C108 35 110.5 32 111.2 29.5 C111.8 27.5 110.8 25.5 108.5 25.5 Z" />

        {/* Lowercase d */}
        <path d="M125 7 C126 7 127 7.8 126.5 9 C124.5 18 121 34 120 39 C119.5 41 118 42 116.5 41.5 C115.5 41 116 38.5 117 34 C115 36.5 112.5 37.5 110 37.5 C106.5 37.5 104 34.5 105 30.5 C106 26.5 110 23.5 114 23.5 C116.5 23.5 118.5 25 119.5 27.5 L123 11 C123.5 9 124 7 125 7 Z M112.5 25.5 C109.5 25.5 108 28 107.2 31 C106.8 33 107.5 35 109.5 35 C112.5 35 115 31.5 116 28 C116.5 26.5 115 25.5 112.5 25.5 Z" />

        {/* Lowercase s with elegant tail flourish */}
        <path d="M130 36 C129 35.5 128.5 34.5 129 33 C129.5 31.5 131 30 133 28.5 C135 27 136 25.5 135.5 24.5 C135 23.5 133.5 24 131.5 25.5 C131 25.8 130 25.5 130.5 24.5 C131.5 23 134 22 137 22.5 C139.5 23 140.5 25 139.5 27.5 C138.5 29.5 136 31.5 133.5 33 C132 34 131.5 35 132.5 35.5 C134 36.2 138 34.5 141 31.5 C141.8 31 142.5 31.5 142 32.5 C138.5 37 133.5 38.5 130 36 Z" />
      </g>
    </svg>
  );
};

export const HarrodsCrownCrest: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-7 h-7',
  color = '#d4af37',
}) => {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Harrods Royal Warrant"
    >
      <g stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
        {/* Crown Cross Pattee on Top */}
        <path d="M32 8 V16 M28 12 H36" />
        <circle cx="32" cy="12" r="1.5" fill={color} />

        {/* Crown Arches and Pearls */}
        <path d="M32 16 C26 18 20 23 18 28 C23 27 28 29 32 32 C36 29 41 27 46 28 C44 23 38 18 32 16 Z" />
        <circle cx="21" cy="24" r="1" fill={color} />
        <circle cx="32" cy="22" r="1" fill={color} />
        <circle cx="43" cy="24" r="1" fill={color} />

        {/* Ermine Band & Crown Base */}
        <path d="M16 34 H48 L46 41 H18 L16 34 Z" fill={`${color}15`} />
        <path d="M16 34 C16 34 23 35 32 35 C41 35 48 34 48 34" />
        <path d="M18 41 C18 41 24 42 32 42 C40 42 46 41 46 41" />

        {/* Jewels on band */}
        <circle cx="24" cy="38" r="1.2" fill={color} />
        <circle cx="32" cy="38" r="1.5" fill={color} />
        <circle cx="40" cy="38" r="1.2" fill={color} />

        {/* Supporters subtle heraldic laurel flourish */}
        <path d="M12 30 C10 36 12 44 16 48" strokeWidth="1.2" />
        <path d="M52 30 C54 36 52 44 48 48" strokeWidth="1.2" />
      </g>
    </svg>
  );
};

export const HarrodsMonogramH: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-6 h-8',
  color = '#d4af37',
}) => {
  return (
    <svg
      viewBox="0 0 40 50"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Harrods Monogram"
    >
      <g stroke={color} strokeWidth="1.8" strokeLinecap="square">
        {/* Left vertical column */}
        <line x1="10" y1="8" x2="10" y2="42" />
        {/* Left serif serifs */}
        <line x1="5" y1="8" x2="15" y2="8" />
        <line x1="5" y1="42" x2="15" y2="42" />

        {/* Right vertical column */}
        <line x1="30" y1="8" x2="30" y2="42" />
        {/* Right serifs */}
        <line x1="25" y1="8" x2="35" y2="8" />
        <line x1="25" y1="42" x2="35" y2="42" />

        {/* Central horizontal bars characteristic of Harrods Monogram */}
        <line x1="10" y1="23" x2="30" y2="23" />
        <line x1="10" y1="27" x2="30" y2="27" />
      </g>
    </svg>
  );
};
