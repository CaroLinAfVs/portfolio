// src/components/ImageGrid/ImageGrid.tsx
import Card from '@/components/Card/Card';

interface CardProps {
  mainImage: string;
  text: string;
  projectId: string;
  images?: string[];
}

interface CardGridProps {
  cards: CardProps[];
}

const ImageGrid = (props: CardGridProps) => {
  const { cards } = props;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 w-full justify-items-center">
      {cards.map((card) => {
        return (<Card key={card.projectId} image={card.mainImage} text={card.text} projectId={card.projectId} />)
      })}
    </div>
  );
};

export default ImageGrid;
