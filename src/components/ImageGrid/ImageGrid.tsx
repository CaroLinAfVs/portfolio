// src/components/ImageGrid/ImageGrid.tsx
import Card from '@/components/Card/Card';

const ImageGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-4 w-full justify-items-center">
      <Card 
        image="https://images.ctfassets.net/ub3bwfd53mwy/5zi8myLobtihb1cWl3tj8L/45a40e66765f26beddf7eeee29f74723/6_Image.jpg?w=750" 
        text="Gato 1" 
        projectId="project1" 
      />
      <Card 
        image="https://i.pinimg.com/736x/27/c5/54/27c55453ebbd140ad47768d0920a49f9.jpg" 
        text="Gato 2"
        projectId="project2" 
      />
      <Card 
        image="https://i.pinimg.com/736x/bd/9c/93/bd9c931ca152a2323a4293ff5ad9846b.jpg" 
        text="Gato 3"
        projectId="project3" 
      />
    </div>
  );
};

export default ImageGrid;
