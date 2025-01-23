// Card.tsx
// future interfece -> title:string y img:string
interface CardProps {
    color?: string;
    height?: string;
  }
  
  const Card: React.FC<CardProps> = ({ color = "bg-orange-400", height = "h-96" }) => {
    return (
      <div className={`${color} w-full ${height} rounded-lg`}>
        {/* Puedes agregar más contenido dinámico aquí */}
      </div>
    );
  };
  
  export default Card;
  