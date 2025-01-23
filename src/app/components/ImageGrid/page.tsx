import Card from '../Card/page';

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
