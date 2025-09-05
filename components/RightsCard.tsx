'use client';

import { Share2, Download, QrCode } from 'lucide-react';
import { RightsCard as RightsCardType } from '@/lib/types';
import { formatDate } from '@/lib/utils';

interface RightsCardProps {
  card: RightsCardType;
  onShare?: () => void;
  onDownload?: () => void;
}

export function RightsCard({ card, onShare, onDownload }: RightsCardProps) {
  return (
    <div className="glass-card p-6 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">{card.title}</h3>
        <div className="flex gap-2">
          <button
            onClick={onShare}
            className="p-2 glass-card rounded-lg hover:bg-opacity-20 transition-all duration-200"
          >
            <Share2 size={16} />
          </button>
          <button
            onClick={onDownload}
            className="p-2 glass-card rounded-lg hover:bg-opacity-20 transition-all duration-200"
          >
            <Download size={16} />
          </button>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <h4 className="font-medium text-accent mb-2">Your Key Rights:</h4>
          <ul className="space-y-1 text-sm">
            {card.keyRights.map((right, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>{right}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white border-opacity-20">
          <div>
            <p className="text-sm text-gray-300">Emergency: {card.emergencyNumber}</p>
            <p className="text-xs text-gray-400">Generated for {card.state}</p>
          </div>
          <div className="w-16 h-16 glass-card rounded-lg flex items-center justify-center">
            <QrCode size={32} />
          </div>
        </div>
      </div>
    </div>
  );
}
