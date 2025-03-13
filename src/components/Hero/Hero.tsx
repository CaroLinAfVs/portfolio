'use client';
import { useEffect, useState } from 'react';

interface HeroProps {
  text: string;
  className?: string;
}

const Hero = ({ text, className = '' }: HeroProps) => {
  const [displayedText, setDisplayedText] = useState<string>(''); 
  const [currentIndex, setCurrentIndex] = useState<number>(0); 

  useEffect(() => {
    if (!text || text.trim() === '') {
      console.error('El texto no puede estar vacío.');
      return;
    }

    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, currentIndex + 1)); 
      setCurrentIndex(currentIndex + 1);
    }, 100); 

    if (currentIndex === text.length) {
      clearInterval(interval); 
    }

    return () => clearInterval(interval); 
  }); 

  return (
    <div className="flex items-center justify-center w-full h-[400px] ">
      <h1 className={`font-bold ${className}`}>{displayedText} </h1>
    </div>
  );
};

export default Hero;
