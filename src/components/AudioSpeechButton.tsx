import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Pause, Play } from 'lucide-react';
import { accessibleSpeech } from '../utils/accessibleSpeechHelper';

interface AudioSpeechButtonProps {
  id: string;
  textToSpeak: string;
  size?: 'sm' | 'md';
  className?: string;
  label?: string;
}

export const AudioSpeechButton: React.FC<AudioSpeechButtonProps> = ({
  id,
  textToSpeak,
  size = 'sm',
  className = '',
  label,
}) => {
  const [speechState, setSpeechState] = useState({
    isSpeaking: false,
    isPaused: false,
    currentId: null as string | null,
  });

  useEffect(() => {
    const unsubscribe = accessibleSpeech.subscribe(setSpeechState);
    return () => unsubscribe();
  }, []);

  const isCurrent = speechState.currentId === id;
  const isPlayingThis = isCurrent && speechState.isSpeaking && !speechState.isPaused;
  const isPausedThis = isCurrent && speechState.isSpeaking && speechState.isPaused;

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    accessibleSpeech.speak(id, textToSpeak);
  };

  const iconSize = size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4';
  const padding = size === 'sm' ? 'px-2 py-1 text-[11px]' : 'px-3 py-1.5 text-xs';

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={`inline-flex items-center gap-1.5 rounded-lg border font-mono-exam font-bold transition-all cursor-pointer shadow-2xs select-none ${
        isPlayingThis
          ? 'bg-[#0B1B3D] text-[#C59B27] border-[#C59B27] animate-pulse'
          : isPausedThis
          ? 'bg-amber-50 text-amber-900 border-amber-300'
          : 'bg-[#FAF9F5] hover:bg-[#F2F1EA] text-[#0B1B3D] border-[#E5E3D8] hover:border-[#0B1B3D]'
      } ${padding} ${className}`}
      title={
        isPlayingThis
          ? 'Pausar lectura por voz'
          : isPausedThis
          ? 'Reanudar lectura por voz'
          : 'Escuchar en voz alta (Accesibilidad Universal)'
      }
      aria-label={label || 'Escuchar en voz alta'}
    >
      {isPlayingThis ? (
        <Pause className={iconSize} />
      ) : isPausedThis ? (
        <Play className={iconSize} />
      ) : (
        <Volume2 className={iconSize} />
      )}
      {label && <span>{isPlayingThis ? 'Pausar' : isPausedThis ? 'Reanudar' : label}</span>}
    </button>
  );
};

export default AudioSpeechButton;
