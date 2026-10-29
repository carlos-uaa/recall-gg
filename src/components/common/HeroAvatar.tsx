import React, { useState } from 'react';
import type { Hero } from '../../types/game';

interface HeroAvatarProps {
  hero: Hero;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showRoleBadge?: boolean;
}

export const HeroAvatar: React.FC<HeroAvatarProps> = ({
  hero,
  size = 'md',
  className = '',
  showRoleBadge = false,
}) => {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    xs: 'w-6 h-6 text-[10px]',
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-14 h-14 text-base',
    xl: 'w-18 h-18 text-xl',
  };

  const roleColors = {
    tank: 'border-blue-500/60 bg-blue-500/10 text-blue-400',
    damage: 'border-rose-500/60 bg-rose-500/10 text-rose-400',
    support: 'border-emerald-500/60 bg-emerald-500/10 text-emerald-400',
  };

  return (
    <div className={`relative flex-shrink-0 ${className}`}>
      <div
        className={`${sizeClasses[size]} rounded-xl border overflow-hidden flex items-center justify-center font-bold transition duration-200 ${roleColors[hero.role]} bg-slate-800 shadow-inner`}
      >
        {hero.icon && !imageError ? (
          <img
            src={hero.icon}
            alt={hero.name}
            className="w-full h-full object-cover object-center"
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : (
          <span className="uppercase">{hero.name.substring(0, 2)}</span>
        )}
      </div>

      {showRoleBadge && (
        <span
          className={`absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full border border-slate-900 flex items-center justify-center text-[8px] font-bold ${
            hero.role === 'tank'
              ? 'bg-blue-500 text-white'
              : hero.role === 'damage'
              ? 'bg-rose-500 text-white'
              : 'bg-emerald-500 text-white'
          }`}
        >
          {hero.role === 'tank' ? 'T' : hero.role === 'damage' ? 'D' : 'S'}
        </span>
      )}
    </div>
  );
};
