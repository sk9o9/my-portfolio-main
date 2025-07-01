import React, { useEffect, useRef, useState } from 'react';
import bgMusic from '../assets/music.mp3';

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    const handleUserInteraction = () => {
      if (!isAllowed && audioRef.current) {
        audioRef.current.play().catch((err) => console.warn("Autoplay blocked:", err));
        setIsAllowed(true);
      }
    };

    window.addEventListener('click', handleUserInteraction);
    window.addEventListener('keydown', handleUserInteraction);

    return () => {
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('keydown', handleUserInteraction);
    };
  }, [isAllowed]);

  return (
    <audio ref={audioRef} src={bgMusic} loop />
  );
};

export default MusicPlayer;
