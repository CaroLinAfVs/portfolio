// src/components/ImageGrid/ImageGrid.tsx
import Card from '@/components/Card/Card';

/*
TODO: 
- Create an array of card data with image URLs and titles
- Example array:
  const cardData = [
    { imageUrl: 'https://example.com/image1.jpg', title: 'Card 1' },
    { imageUrl: 'https://example.com/image2.jpg', title: 'Card 2' },
    { imageUrl: 'https://example.com/image3.jpg', title: 'Card 3' },
    { imageUrl: 'https://example.com/image4.jpg', title: 'Card 4' },
  ];
- This array should be mapped with .map() to render Card components dynamically.
*/

const ImageGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-4 w-full justify-items-center">
      <Card color="bg-blue-400" height="h-96" />
      <Card color="bg-red-400" height="h-96" />
      <Card />
      <Card />
    </div>
  );
};

export default ImageGrid;
