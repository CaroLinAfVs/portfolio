'use client';
import { useEffect, useState } from 'react';

interface HeroProps {
  text: string;
  className?: string;
}

const Hero = ({ text, className = "" }: HeroProps) => {
  const [displayedText, setDisplayedText] = useState<string>(""); // Texto que se mostrará
  const [currentIndex, setCurrentIndex] = useState<number>(0); // Índice actual en la animación

  useEffect(() => {
    if (!text || text.trim() === "") {
      console.error("El texto no puede estar vacío.");
      return;
    }

    const interval = setInterval(() => {
      console.log("previous: ", 0);
      console.log("next: ", currentIndex + 1);
      console.log("character: ", text.slice(0, currentIndex + 1));
      setDisplayedText(text.slice(0, currentIndex + 1)); // Mostramos una porción del texto
      setCurrentIndex(currentIndex + 1);
    }, 100); // Velocidad entre letras

    if (currentIndex === text.length) {
      clearInterval(interval); // Detenemos la animación al final
    }

    return () => clearInterval(interval); // Limpiamos el intervalo al desmontar
  }, [currentIndex]); // Escuchamos cambios en el texto y el índice actual

  return (
    <div className="flex items-center justify-center w-full h-[400px] ">
      <h1 className={`font-bold ${className}`}>
        {displayedText}
      </h1>
    </div>
  );
};

export default Hero;
