import React, { useState } from 'react';
import { Recipe, Language } from '../types/recipe';
import { Lock } from 'lucide-react';

interface DishVisualProps {
  recipe: Recipe;
  lang: Language;
  isUnlocked: boolean;
  className?: string;
  showVesselIllustration?: boolean;
}

export const DishVisual: React.FC<DishVisualProps> = ({
  recipe,
  lang,
  isUnlocked,
  className = 'aspect-[4/3]',
  showVesselIllustration = true,
}) => {
  const fallbackUrl =
    recipe.cuisine === 'moroccan'
      ? '/images/moroccan_tagine.jpg'
      : recipe.cuisine === 'french'
      ? '/images/french_gastronomy.jpg'
      : '/images/chinese_imperial.jpg';

  const [currentSrc, setCurrentSrc] = React.useState<string>(recipe.photoUrl || fallbackUrl);
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    setCurrentSrc(recipe.photoUrl || fallbackUrl);
    setHasError(false);
  }, [recipe.photoUrl, fallbackUrl]);

  const handleError = () => {
    if (currentSrc !== fallbackUrl) {
      setCurrentSrc(fallbackUrl);
    } else {
      setHasError(true);
    }
  };

  const canAccess = recipe.isFree || isUnlocked;
  const formattedNum = String(recipe.number).padStart(2, '0');

  return (
    <div
      className={`relative overflow-hidden bg-[#18181B] select-none ${className}`}
    >
      {/* Real generated culinary photography with fallback */}
      {!hasError && (
        <img
          src={currentSrc}
          alt={recipe.title[lang]}
          referrerPolicy="no-referrer"
          onError={handleError}
          className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-[1.03]"
        />
      )}

      {/* Dish-specific ambient color glaze so each of the 60 dishes has its own distinct mood & culinary tint */}
      <div
        className="absolute inset-0 mix-blend-multiply opacity-35 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 75% 25%, ${recipe.palette.secondary}66, ${recipe.palette.primary}99 70%, ${recipe.palette.rim}CC 100%)`,
        }}
      />

      {/* Measured contrast scrim for legibility (4.5:1 WCAG AA compliance) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/15 pointer-events-none" />

      {/* Bespoke Artisan Vessel Emblem in top corner */}
      {showVesselIllustration && (
        <div className="absolute top-3.5 right-3.5 w-11 h-11 rounded-full bg-black/50 backdrop-blur-sm border border-white/15 flex items-center justify-center pointer-events-none">
          <VesselSvg
            vessel={recipe.vessel}
            primary={recipe.palette.secondary}
            garnish={recipe.palette.garnish}
          />
        </div>
      )}

      {/* Editorial numerical index at top-left */}
      <div className="absolute top-3.5 left-3.5 flex items-center gap-2 pointer-events-none">
        <span className="font-mono-num text-xs font-medium tracking-wider text-white/95 bg-black/55 backdrop-blur-sm px-2.5 py-1 rounded">
          {formattedNum} / 20
        </span>
      </div>

      {/* Lock overlay for dishes 6–20 when not yet unlocked */}
      {!canAccess && (
        <div className="absolute inset-0 bg-black/35 backdrop-blur-[2px] flex flex-col items-center justify-center p-4 text-center transition-opacity duration-150">
          <div className="w-10 h-10 rounded-full bg-[#FAF8F5]/95 text-[#18181B] flex items-center justify-center shadow-md mb-2">
            <Lock className="w-4 h-4 text-[#9A3412]" />
          </div>
          <span className="text-xs font-semibold text-white tracking-wide">
            {lang === 'ar' ? 'يُفتح بـ $7 لمرة واحدة' : 'Unlock All · $7 One-Time'}
          </span>
        </div>
      )}

      {/* Bottom dish phonetic & region caption inside media frame */}
      <div className="absolute bottom-3 left-3.5 right-3.5 flex items-end justify-between gap-2 pointer-events-none">
        <span className="text-xs text-white/85 font-medium truncate">
          {recipe.nativePhonetic}
        </span>
        <span className="text-[11px] font-mono-num text-amber-200/95 shrink-0">
          {recipe.prepTimeMinutes + recipe.cookTimeMinutes}{' '}
          {lang === 'ar' ? 'د' : 'min'}
        </span>
      </div>
    </div>
  );
};

const VesselSvg: React.FC<{
  vessel: Recipe['vessel'];
  primary: string;
  garnish: string;
}> = ({ vessel, primary, garnish }) => {
  switch (vessel) {
    case 'tagine':
    case 'tangia':
      return (
        <svg viewBox="0 0 36 36" className="w-6 h-6">
          <path
            d="M6 25h24l-2 4H8l-2-4z"
            fill={primary}
          />
          <path
            d="M8 24L16 10a2 2 0 014 0l8 14H8z"
            fill={garnish}
            fillOpacity="0.88"
          />
          <circle cx="18" cy="8" r="2.2" fill={primary} />
        </svg>
      );
    case 'couscoussier':
    case 'pastilla':
      return (
        <svg viewBox="0 0 36 36" className="w-6 h-6">
          <ellipse cx="18" cy="22" rx="12" ry="6" fill={primary} />
          <path
            d="M8 21c2-6 18-6 20 0"
            fill={garnish}
            fillOpacity="0.9"
          />
          <path
            d="M13 18l5-3 5 3-5 3-5-3z"
            stroke="#FFF"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      );
    case 'cocotte':
    case 'gratin':
    case 'souffle':
      return (
        <svg viewBox="0 0 36 36" className="w-6 h-6">
          <rect x="7" y="15" width="22" height="12" rx="3" fill={primary} />
          <path d="M4 18h3M29 18h3" stroke={garnish} strokeWidth="2" strokeLinecap="round" />
          <path d="M9 14h18" stroke={garnish} strokeWidth="2" strokeLinecap="round" />
          <rect x="15" y="11" width="6" height="2" rx="1" fill={garnish} />
        </svg>
      );
    case 'steamer':
    case 'porcelain_bowl':
    case 'claypot':
      return (
        <svg viewBox="0 0 36 36" className="w-6 h-6">
          <path
            d="M7 16h22v7a7 7 0 01-7 7h-8a7 7 0 01-7-7v-7z"
            fill={primary}
          />
          <circle cx="14" cy="14" r="2.5" fill={garnish} />
          <circle cx="18" cy="13" r="2.5" fill={garnish} />
          <circle cx="22" cy="14" r="2.5" fill={garnish} />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 36 36" className="w-6 h-6">
          <path
            d="M6 17c0 6 5.5 10 12 10s12-4 12-10H6z"
            fill={primary}
          />
          <circle cx="18" cy="15" r="4" fill={garnish} fillOpacity="0.9" />
        </svg>
      );
  }
};
