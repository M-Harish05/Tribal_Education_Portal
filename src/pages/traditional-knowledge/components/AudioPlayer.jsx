import React, { useEffect, useRef, useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AudioPlayer = ({ 
  currentTrack, 
  isPlaying,      // Get play state from parent
  onPlayPause,    // Get play/pause handler from parent
  onClose, 
  onNext, 
  onPrevious,
  className = '' 
}) => {
  // useRef is the correct way to get a direct reference to the <audio> element
  const audioRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // This is the most important part.
  // This effect synchronizes the <audio> element with the parent's state.
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => console.error("Audio play failed:", error));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrack]); // Re-run this logic whenever isPlaying or the track changes

  // Event handler for when the audio time updates
  const handleTimeUpdate = () => {
    setProgress(audioRef.current.currentTime);
  };

  // Event handler for when the audio metadata (like duration) is loaded
  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  // Helper function to format time from seconds to MM:SS
  const formatTime = (time) => {
    if (isNaN(time) || time === 0) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  if (!currentTrack) return null;

  return (
    <div className={`bg-card border border-border rounded-tribal shadow-tribal-lg ${className}`}>
      {/* This is the hidden HTML audio element that does all the work */}
      <audio
        ref={audioRef}
        src={currentTrack.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={onNext} // Automatically go to the next track when one finishes
      />

      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-tribal overflow-hidden">
            <img
              src={currentTrack?.image}
              alt={currentTrack?.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-heading font-semibold text-foreground">
              {currentTrack?.title}
            </h3>
            <p className="text-sm font-caption text-muted-foreground">
              {currentTrack?.contributor?.name}
            </p>
          </div>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
          <Icon name="X" size={16} />
        </Button>
      </div>

      {/* Progress Bar & Timers */}
      <div className="px-4 pt-3">
         <div className="w-full bg-muted rounded-full h-1.5 cursor-pointer">
            <div 
              className="bg-primary h-1.5 rounded-full" 
              style={{ width: duration > 0 ? `${(progress / duration) * 100}%` : '0%' }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>{formatTime(progress)}</span>
            <span>{formatTime(duration)}</span>
          </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center space-x-4 px-4 py-2">
        <Button variant="ghost" size="icon" onClick={onPrevious} className="h-10 w-10">
          <Icon name="SkipBack" size={20} />
        </Button>
        <Button variant="default" size="icon" onClick={() => onPlayPause(!isPlaying)} className="h-12 w-12">
          {/* Icon now depends on the isPlaying prop from the parent */}
          <Icon name={isPlaying ? "Pause" : "Play"} size={24} />
        </Button>
        <Button variant="ghost" size="icon" onClick={onNext} className="h-10 w-10">
          <Icon name="SkipForward" size={20} />
        </Button>
      </div>
    </div>
  );
};

export default AudioPlayer;
