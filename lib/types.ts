export interface User {
  userId: string;
  currentStatePref: string;
  languagePref: 'en' | 'es';
  emergencyContacts: string[];
  savedContentIds: string[];
}

export interface StateRights {
  stateName: string;
  rightsText: string;
  doSay: string[];
  dontSay: string[];
  keyLaws: string[];
}

export interface Scenario {
  scenarioName: string;
  language: 'en' | 'es';
  script: string;
  category: 'traffic' | 'questioning' | 'search' | 'arrest';
}

export interface SavedContent {
  contentId: string;
  contentType: 'rights-card' | 'scenario' | 'recording';
  title: string;
  contentUrl?: string;
  timestamp: Date;
}

export interface RightsCard {
  id: string;
  state: string;
  title: string;
  keyRights: string[];
  emergencyNumber: string;
  qrCode?: string;
}
