'use client';

import { useState, useEffect } from 'react';
import { useMiniKit } from '@coinbase/onchainkit/minikit';
import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';
import { Name } from '@coinbase/onchainkit/identity';
import { 
  Shield, 
  FileText, 
  Video, 
  Share2, 
  MapPin,
  MessageSquare,
  AlertTriangle,
  Users
} from 'lucide-react';

import { FloatingShapes } from '@/components/FloatingShapes';
import { StateSelector } from '@/components/StateSelector';
import { RightsCard } from '@/components/RightsCard';
import { ScenarioScript } from '@/components/ScenarioScript';
import { RecordingButton } from '@/components/RecordingButton';
import { FeatureCard } from '@/components/FeatureCard';

import { stateRightsData, scenarioData } from '@/lib/data';
import { generateRightsCard } from '@/lib/utils';
import { RightsCard as RightsCardType } from '@/lib/types';

export default function HomePage() {
  const { setFrameReady } = useMiniKit();
  const [selectedState, setSelectedState] = useState('');
  const [activeTab, setActiveTab] = useState<'home' | 'states' | 'scenarios' | 'record' | 'cards'>('home');
  const [generatedCard, setGeneratedCard] = useState<RightsCardType | null>(null);
  const [selectedScenario, setSelectedScenario] = useState(0);

  useEffect(() => {
    setFrameReady();
  }, [setFrameReady]);

  const handleGenerateCard = () => {
    if (selectedState) {
      const card = generateRightsCard(selectedState);
      setGeneratedCard({
        ...card,
        keyRights: stateRightsData.find(s => s.stateName === selectedState)?.doSay || card.keyRights
      });
      setActiveTab('cards');
    }
  };

  const handleShareCard = () => {
    if (generatedCard) {
      // In a real app, this would integrate with Farcaster/social sharing
      navigator.share?.({
        title: generatedCard.title,
        text: `Know your rights in ${generatedCard.state}`,
        url: window.location.href
      });
    }
  };

  const renderHomeTab = () => (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center mb-6">
          <div className="p-4 glass-card rounded-full">
            <Shield size={48} className="text-accent" />
          </div>
        </div>
        <h1 className="text-3xl font-bold">Know Your Rights Cards</h1>
        <p className="text-gray-300 leading-relaxed max-w-md mx-auto">
          In this interactive mobile-based game of navigating with specific rights 
          and mobile prepared-on-your-phone and movement.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="glass-card p-6 rounded-lg">
        <div className="flex items-center gap-4 mb-4">
          <button className="btn-primary flex-1">State Selector</button>
          <button className="btn-secondary flex-1">Get QR Card</button>
        </div>
        <div className="flex items-center justify-center gap-2 text-accent">
          <Users size={16} />
          <span className="text-sm">Interactive Narrative Games</span>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 gap-4">
        <FeatureCard
          icon={MapPin}
          title="State-Specific Rights"
          description="Get tailored legal information for your state with key do's and don'ts."
          onClick={() => setActiveTab('states')}
        />
        <FeatureCard
          icon={MessageSquare}
          title="Interactive Scripts"
          description="Practice conversations with pre-written dialogue for common scenarios."
          onClick={() => setActiveTab('scenarios')}
        />
        <FeatureCard
          icon={Video}
          title="Quick Recording"
          description="One-tap recording with automatic emergency contact alerts."
          onClick={() => setActiveTab('record')}
        />
        <FeatureCard
          icon={Share2}
          title="Shareable Cards"
          description="Generate and share rights cards with QR codes for quick access."
          onClick={() => setActiveTab('cards')}
        />
      </div>

      {/* Wallet Connection */}
      <div className="glass-card p-6 rounded-lg text-center">
        <Wallet>
          <ConnectWallet>
            <Name />
          </ConnectWallet>
        </Wallet>
      </div>
    </div>
  );

  const renderStatesTab = () => {
    const stateData = stateRightsData.find(s => s.stateName === selectedState);
    
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <MapPin className="text-accent" size={24} />
          <h2 className="text-2xl font-semibold">State Rights Guide</h2>
        </div>

        <StateSelector 
          selectedState={selectedState}
          onStateChange={setSelectedState}
        />

        {stateData && (
          <div className="space-y-6">
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-accent">Your Rights in {stateData.stateName}</h3>
              <p className="text-gray-300 leading-relaxed">{stateData.rightsText}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="glass-card p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-green-400">✓ What TO Say</h4>
                <ul className="space-y-2">
                  {stateData.doSay.map((item, index) => (
                    <li key={index} className="text-sm text-gray-300">• {item}</li>
                  ))}
                </ul>
              </div>

              <div className="glass-card p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-red-400">✗ What NOT to Say</h4>
                <ul className="space-y-2">
                  {stateData.dontSay.map((item, index) => (
                    <li key={index} className="text-sm text-gray-300">• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="glass-card p-6 rounded-lg">
              <h4 className="font-semibold mb-3 text-accent">Key Laws to Remember</h4>
              <ul className="space-y-2">
                {stateData.keyLaws.map((law, index) => (
                  <li key={index} className="text-sm text-gray-300 leading-relaxed">
                    <span className="text-accent font-medium">{index + 1}.</span> {law}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={handleGenerateCard}
              className="btn-primary w-full"
            >
              Generate Rights Card for {stateData.stateName}
            </button>
          </div>
        )}
      </div>
    );
  };

  const renderScenariosTab = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <MessageSquare className="text-accent" size={24} />
        <h2 className="text-2xl font-semibold">Interactive Scripts</h2>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2">
        {scenarioData.map((scenario, index) => (
          <button
            key={index}
            onClick={() => setSelectedScenario(index)}
            className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-200 ${
              selectedScenario === index
                ? 'bg-accent text-white'
                : 'glass-card hover:bg-opacity-20'
            }`}
          >
            {scenario.scenarioName}
          </button>
        ))}
      </div>

      <ScenarioScript 
        scenario={scenarioData[selectedScenario]}
        onCopy={() => console.log('Script copied')}
      />

      <div className="glass-card p-4 rounded-lg">
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle className="text-yellow-400" size={16} />
          <span className="font-medium text-sm">Important Reminder</span>
        </div>
        <p className="text-xs text-gray-300 leading-relaxed">
          These scripts are general guidance. Laws vary by jurisdiction. 
          Always remain calm, respectful, and consider consulting with a local attorney 
          for specific legal advice.
        </p>
      </div>
    </div>
  );

  const renderRecordTab = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Video className="text-accent" size={24} />
        <h2 className="text-2xl font-semibold">Incident Recording</h2>
      </div>

      <div className="glass-card p-6 rounded-lg">
        <h3 className="font-semibold mb-3">Quick Recording & Alerts</h3>
        <p className="text-sm text-gray-300 mb-4 leading-relaxed">
          Use this feature to discreetly record interactions and automatically 
          notify your emergency contacts with your location.
        </p>
        
        <RecordingButton
          onStartRecording={() => console.log('Recording started')}
          onStopRecording={() => console.log('Recording stopped')}
        />
      </div>

      <div className="glass-card p-6 rounded-lg">
        <h4 className="font-semibold mb-3 text-accent">Recording Tips</h4>
        <ul className="space-y-2 text-sm text-gray-300">
          <li>• Keep your phone in a stable position</li>
          <li>• Announce that you are recording (if safe to do so)</li>
          <li>• Stay calm and avoid interfering with police work</li>
          <li>• Record from a reasonable distance</li>
          <li>• Save recordings immediately after the interaction</li>
        </ul>
      </div>

      <div className="glass-card p-6 rounded-lg">
        <h4 className="font-semibold mb-3">Emergency Contacts</h4>
        <p className="text-sm text-gray-300 mb-3">
          Configure trusted contacts who will be notified when you start recording.
        </p>
        <button className="btn-secondary w-full">
          Manage Emergency Contacts
        </button>
      </div>
    </div>
  );

  const renderCardsTab = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Share2 className="text-accent" size={24} />
        <h2 className="text-2xl font-semibold">Shareable Rights Card</h2>
      </div>

      {generatedCard ? (
        <RightsCard
          card={generatedCard}
          onShare={handleShareCard}
          onDownload={() => console.log('Download card')}
        />
      ) : (
        <div className="glass-card p-8 rounded-lg text-center">
          <FileText className="mx-auto mb-4 text-gray-400" size={48} />
          <h3 className="text-lg font-semibold mb-2">No Card Generated Yet</h3>
          <p className="text-gray-300 mb-4">
            Select your state and generate a personalized rights card.
          </p>
          <button
            onClick={() => setActiveTab('states')}
            className="btn-primary"
          >
            Go to State Selection
          </button>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div className="glass-card p-4 rounded-lg text-center">
          <h4 className="font-semibold mb-2">Share on Social</h4>
          <p className="text-xs text-gray-300 mb-3">
            Share your rights card with friends and family
          </p>
          <button className="btn-secondary w-full text-sm">
            Share Card
          </button>
        </div>
        
        <div className="glass-card p-4 rounded-lg text-center">
          <h4 className="font-semibold mb-2">Save Offline</h4>
          <p className="text-xs text-gray-300 mb-3">
            Download for offline access
          </p>
          <button className="btn-secondary w-full text-sm">
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen relative">
      <FloatingShapes />
      
      <div className="relative z-10 max-w-lg mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="glass-card p-2 rounded-lg mb-8">
          <div className="flex gap-1">
            {[
              { key: 'home', icon: Shield, label: 'Home' },
              { key: 'states', icon: MapPin, label: 'States' },
              { key: 'scenarios', icon: MessageSquare, label: 'Scripts' },
              { key: 'record', icon: Video, label: 'Record' },
              { key: 'cards', icon: Share2, label: 'Cards' }
            ].map(({ key, icon: Icon, label }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as any)}
                className={`flex-1 p-3 rounded-lg transition-all duration-200 ${
                  activeTab === key
                    ? 'bg-accent text-white'
                    : 'hover:bg-white hover:bg-opacity-10'
                }`}
              >
                <Icon size={20} className="mx-auto mb-1" />
                <span className="text-xs">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {activeTab === 'home' && renderHomeTab()}
        {activeTab === 'states' && renderStatesTab()}
        {activeTab === 'scenarios' && renderScenariosTab()}
        {activeTab === 'record' && renderRecordTab()}
        {activeTab === 'cards' && renderCardsTab()}
      </div>
    </div>
  );
}
