'use client';

import React from 'react';

interface LogoProps {
  className?: string;
  showSlogan?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className = '', showSlogan = false, size = 'md' }: LogoProps) {
  const sizeMap = {
    sm: { height: 26, width: 140, text: 'text-lg', viiScale: 0.65 },
    md: { height: 32, width: 175, text: 'text-xl', viiScale: 0.8 },
    lg: { height: 44, width: 235, text: 'text-2xl', viiScale: 1.0 },
  };

  const current = sizeMap[size];

  return (
    <div className={`inline-flex flex-col ${className}`}>
      <div className="flex items-center gap-2 select-none group">
        {/* VII Vector Symbol with the Official Multi-Stop Gradient */}
        <svg
          viewBox="0 0 125 50"
          className="h-7 w-auto shrink-0 transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="vii-symbol-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D7FF32" />
              <stop offset="33%" stopColor="#25D5E8" />
              <stop offset="68%" stopColor="#477BFF" />
              <stop offset="100%" stopColor="#A943F5" />
            </linearGradient>
            <filter id="vii-subtle-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#25D5E8" floodOpacity="0.4" />
            </filter>
          </defs>
          <g filter="url(#vii-subtle-glow)">
            {/* V Letter left stroke */}
            <polygon points="6,6 18,6 36,44 24,44" fill="url(#vii-symbol-grad)" />
            {/* V Letter right stroke */}
            <polygon points="34,44 46,44 64,6 52,6" fill="url(#vii-symbol-grad)" />
            {/* First I stroke (slanted) */}
            <polygon points="74,6 86,6 74,44 62,44" fill="url(#vii-symbol-grad)" />
            {/* Second I stroke (slanted) */}
            <polygon points="96,6 108,6 96,44 84,44" fill="url(#vii-symbol-grad)" />
          </g>
        </svg>

        {/* Brand Wordmark CONNECT */}
        <span className="font-extrabold tracking-wider text-white text-lg md:text-xl font-sans uppercase">
          CONNECT
        </span>
      </div>

      {showSlogan && (
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-neutral-400 mt-1 pl-0.5">
          Conecta o que importa.
        </span>
      )}
    </div>
  );
}
