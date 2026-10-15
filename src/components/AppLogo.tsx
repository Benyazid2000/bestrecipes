import React from 'react';

interface AppLogoProps {
  className?: string;
}

export const AppLogo: React.FC<AppLogoProps> = ({ className = 'w-10 h-10' }) => {
  return (
    <img
      src="/logo.svg"
      alt="bestrecipes أحسن الأطباق Logo"
      referrerPolicy="no-referrer"
      className={`object-contain select-none shrink-0 ${className}`}
    />
  );
};
