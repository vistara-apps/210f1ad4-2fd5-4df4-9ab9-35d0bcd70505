import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateRightsCard(state: string, scenario?: string) {
  return {
    id: `card-${Date.now()}`,
    state,
    title: `${state} Rights Card`,
    keyRights: [
      'Right to remain silent',
      'Right to an attorney',
      'Right to refuse searches',
      'Right to record interactions'
    ],
    emergencyNumber: '911',
    timestamp: new Date().toISOString()
  };
}

export function formatDate(date: Date | string) {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}
