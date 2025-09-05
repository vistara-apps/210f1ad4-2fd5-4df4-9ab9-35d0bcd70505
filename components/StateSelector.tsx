'use client';

import { useState } from 'react';
import { ChevronDown, MapPin } from 'lucide-react';
import { usStates } from '@/lib/data';

interface StateSelectorProps {
  selectedState: string;
  onStateChange: (state: string) => void;
}

export function StateSelector({ selectedState, onStateChange }: StateSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="glass-card w-full px-4 py-3 rounded-lg flex items-center justify-between hover:bg-opacity-20 transition-all duration-200"
      >
        <div className="flex items-center gap-2">
          <MapPin size={20} />
          <span>{selectedState || 'Select Your State'}</span>
        </div>
        <ChevronDown 
          size={20} 
          className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 glass-card rounded-lg max-h-60 overflow-y-auto z-50">
          {usStates.map((state) => (
            <button
              key={state}
              onClick={() => {
                onStateChange(state);
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 text-left hover:bg-white hover:bg-opacity-10 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
            >
              {state}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
