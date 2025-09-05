'use client';

import { Shield, Scale, FileText, AlertTriangle } from 'lucide-react';

export function FloatingShapes() {
  return (
    <div className="floating-shapes">
      <div className="floating-shape">
        <Shield size={60} />
      </div>
      <div className="floating-shape">
        <Scale size={50} />
      </div>
      <div className="floating-shape">
        <FileText size={40} />
      </div>
      <div className="floating-shape">
        <AlertTriangle size={45} />
      </div>
    </div>
  );
}
