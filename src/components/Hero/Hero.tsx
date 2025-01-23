'use client';
import { useEffect, useState } from 'react';

interface HeroProps {
  text: string;
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ text = "Welcome to my portfolio!",className = "" }) => {
  const [displayedText, setDisplayedText] = useState<string>(""); // Texto que se mostrará
  const [currentIndex, setCurrentIndex] = useState<number>(0); // Índice actual en la animación

  useEffect(() => {
    if (!text || text.trim() === "") {
      console.error("El texto no puede estar vacío.");
      return;
    }

    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, currentIndex + 1)); // Mostramos una porción del texto
      setCurrentIndex((prev) => prev + 1);

      if (currentIndex >= text.length - 1) {
        clearInterval(interval); // Detenemos la animación al final
      }
    }, 100); // Velocidad entre letras

    return () => clearInterval(interval); // Limpiamos el intervalo al desmontar
  }, [text, currentIndex]); // Escuchamos cambios en el texto y el índice actual

  return (
    <div className="flex items-center justify-center w-full h-[400px] ">
      <h1 className={`font-bold ${className}`}>
        {displayedText || "\u00A0"} {/* Espacio vacío antes de mostrar texto */}
      </h1>
      
    </div>
  );
};

export default Hero;
