import { StateRights, Scenario } from './types';

export const stateRightsData: StateRights[] = [
  {
    stateName: 'California',
    rightsText: 'You have the right to remain silent and refuse to answer questions. You have the right to an attorney.',
    doSay: [
      'I am exercising my right to remain silent',
      'I do not consent to any searches',
      'I would like to speak to an attorney',
      'Am I free to leave?'
    ],
    dontSay: [
      'I didn\'t do anything wrong',
      'You can search if you want',
      'I don\'t need a lawyer',
      'Just a few questions won\'t hurt'
    ],
    keyLaws: [
      'Miranda Rights must be read before custodial interrogation',
      'You can refuse consent to search your vehicle',
      'You have the right to record police interactions in public'
    ]
  },
  {
    stateName: 'New York',
    rightsText: 'You have constitutional rights that protect you during police encounters.',
    doSay: [
      'I am exercising my right to remain silent',
      'I do not consent to any searches',
      'I want to speak to a lawyer',
      'Am I being detained or am I free to go?'
    ],
    dontSay: [
      'I have nothing to hide',
      'Go ahead and search',
      'I don\'t need representation',
      'Let me explain what happened'
    ],
    keyLaws: [
      'Stop and frisk requires reasonable suspicion',
      'You can refuse to answer questions beyond basic identification',
      'Recording police is legal in public spaces'
    ]
  },
  {
    stateName: 'Texas',
    rightsText: 'Your constitutional rights apply during all police interactions.',
    doSay: [
      'I invoke my right to remain silent',
      'I do not consent to searches',
      'I want an attorney present',
      'Am I free to leave?'
    ],
    dontSay: [
      'I\'m innocent, so it doesn\'t matter',
      'Sure, you can look around',
      'I can handle this myself',
      'Let me tell you what really happened'
    ],
    keyLaws: [
      'You must provide ID only if lawfully arrested',
      'Consent to search can be withdrawn at any time',
      'You have the right to observe and record from a reasonable distance'
    ]
  }
];

export const scenarioData: Scenario[] = [
  {
    scenarioName: 'Traffic Stop',
    language: 'en',
    category: 'traffic',
    script: `Officer: "Do you know why I pulled you over?"
You: "I am exercising my right to remain silent. Am I free to leave?"

Officer: "Can I search your vehicle?"
You: "I do not consent to any searches."

Officer: "Where are you coming from?"
You: "I am exercising my right to remain silent."

Remember: Keep your hands visible, be polite but firm, and document the interaction if possible.`
  },
  {
    scenarioName: 'Police Questioning',
    language: 'en',
    category: 'questioning',
    script: `Officer: "We need to ask you some questions."
You: "Am I being detained or am I free to leave?"

Officer: "We're investigating an incident in the area."
You: "I am exercising my right to remain silent and would like to speak to an attorney."

Officer: "This will go easier if you cooperate."
You: "I understand, but I am invoking my right to remain silent."

Remember: You are not required to answer questions without an attorney present.`
  },
  {
    scenarioName: 'Parada de Tráfico',
    language: 'es',
    category: 'traffic',
    script: `Oficial: "¿Sabe por qué lo detuve?"
Usted: "Estoy ejerciendo mi derecho a permanecer en silencio. ¿Soy libre de irme?"

Oficial: "¿Puedo revisar su vehículo?"
Usted: "No consiento a ninguna búsqueda."

Oficial: "¿De dónde viene?"
Usted: "Estoy ejerciendo mi derecho a permanecer en silencio."

Recuerde: Mantenga las manos visibles, sea cortés pero firme, y documente la interacción si es posible.`
  }
];

export const usStates = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
  'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
  'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
  'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
  'Wisconsin', 'Wyoming'
];
