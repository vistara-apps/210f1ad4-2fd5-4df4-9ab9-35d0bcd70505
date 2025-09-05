'use client';

import { useState } from 'react';
import { Copy, Volume2, Globe } from 'lucide-react';
import { Scenario } from '@/lib/types';

interface ScenarioScriptProps {
  scenario: Scenario;
  onCopy?: () => void;
}

export function ScenarioScript({ scenario, onCopy }: ScenarioScriptProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(scenario.script);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    onCopy?.();
  };

  return (
    <div className="glass-card p-6 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold">{scenario.scenarioName}</h3>
          <div className="flex items-center gap-1 px-2 py-1 glass-card rounded text-xs">
            <Globe size={12} />
            <span>{scenario.language === 'en' ? 'English' : 'Español'}</span>
          </div>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-3 py-2 glass-card rounded-lg hover:bg-opacity-20 transition-all duration-200"
        >
          <Copy size={16} />
          <span className="text-sm">{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>

      <div className="bg-black bg-opacity-20 rounded-lg p-4">
        <pre className="whitespace-pre-wrap text-sm leading-relaxed font-mono">
          {scenario.script}
        </pre>
      </div>

      <div className="mt-4 p-3 glass-card rounded-lg">
        <p className="text-sm text-gray-300">
          💡 <strong>Tip:</strong> Practice this script beforehand. Stay calm, be respectful, 
          and remember that exercising your rights is not an admission of guilt.
        </p>
      </div>
    </div>
  );
}
