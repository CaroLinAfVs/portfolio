// src/components/Card/Card.tsx
interface CardProps {
  color?: string;
  height?: string;
}

const Card: React.FC<CardProps> = ({
  color = "bg-orange-400",
  height = "h-96",
}) => {
  return (
    <div className={`${color} w-full ${height} rounded-lg shadow-md`}>
    </div>
  );
};

export default Card;
