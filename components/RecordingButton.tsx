'use client';

import { useState } from 'react';
import { Video, Square, AlertCircle } from 'lucide-react';

interface RecordingButtonProps {
  onStartRecording?: () => void;
  onStopRecording?: () => void;
}

export function RecordingButton({ onStartRecording, onStopRecording }: RecordingButtonProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleRecordingToggle = () => {
    if (!isRecording) {
      setShowConfirm(true);
    } else {
      setIsRecording(false);
      onStopRecording?.();
    }
  };

  const confirmRecording = () => {
    setIsRecording(true);
    setShowConfirm(false);
    onStartRecording?.();
  };

  if (showConfirm) {
    return (
      <div className="glass-card p-6 rounded-lg">
        <div className="flex items-center gap-3 mb-4">
          <AlertCircle className="text-yellow-400" size={24} />
          <h3 className="text-lg font-semibold">Start Recording?</h3>
        </div>
        <p className="text-sm text-gray-300 mb-4">
          This will start recording audio/video and alert your emergency contacts. 
          Make sure you're in a safe position to record.
        </p>
        <div className="flex gap-3">
          <button
            onClick={confirmRecording}
            className="btn-primary flex-1"
          >
            Yes, Start Recording
          </button>
          <button
            onClick={() => setShowConfirm(false)}
            className="btn-secondary flex-1"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={handleRecordingToggle}
      className={`w-full p-6 rounded-lg font-semibold text-lg transition-all duration-200 ${
        isRecording
          ? 'bg-red-600 hover:bg-red-700 text-white animate-pulse'
          : 'glass-card hover:bg-opacity-20'
      }`}
    >
      <div className="flex items-center justify-center gap-3">
        {isRecording ? (
          <>
            <Square size={24} />
            <span>Stop Recording</span>
          </>
        ) : (
          <>
            <Video size={24} />
            <span>Start Recording</span>
          </>
        )}
      </div>
      {isRecording && (
        <p className="text-sm mt-2 opacity-90">
          Recording in progress... Tap to stop
        </p>
      )}
    </button>
  );
}
