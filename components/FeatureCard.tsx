'use client';

import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick?: () => void;
  className?: string;
}

export function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  onClick, 
  className = '' 
}: FeatureCardProps) {
  return (
    <button
      onClick={onClick}
      className={`glass-card p-6 rounded-lg text-left hover:bg-opacity-20 transition-all duration-200 group ${className}`}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 glass-card rounded-lg group-hover:bg-opacity-30 transition-all duration-200">
          <Icon size={24} className="text-accent" />
        </div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
    </button>
  );
}
