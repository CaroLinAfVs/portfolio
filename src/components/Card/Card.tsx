import Link from "next/link";
import Image from "next/image";

interface CardProps {
  image: string; 
  text: string;  
  projectId: string; 
}

const Card: React.FC<CardProps> = ({ image, text, projectId }) => {
  return (
    <Link href={`/projects/${projectId}`} className="group block relative w-full h-96 rounded-lg overflow-hidden">
      {/* Imagen */}
      <Image
        src={image}
        alt={text}
        className="w-full h-full object-cover"
      />

      {/* Overlay y texto al hacer hover */}
      <div
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50"
      >
        <span className="text-white text-lg font-bold">{text}</span>
      </div>
    </Link>
  );
};

export default Card;
