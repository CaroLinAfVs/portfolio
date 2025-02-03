'use client';

import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Image from 'next/image'; 

interface Project {
  title: string;
  description: string;
  images: string[];
}

// Simula datos de proyectos 
const projects: Record<string, Project> = {
  project1: {
    title: 'Project 1',
    description: 'This is the description for Project 1.',
    images: [
      'https://images.ctfassets.net/ub3bwfd53mwy/5zi8myLobtihb1cWl3tj8L/45a40e66765f26beddf7eeee29f74723/6_Image.jpg?w=750',
      'https://i.pinimg.com/736x/27/c5/54/27c55453ebbd140ad47768d0920a49f9.jpg',
      'https://i.pinimg.com/736x/bd/9c/93/bd9c931ca152a2323a4293ff5ad9846b.jpg',
    ],
  },
  project2: {
    title: 'Project 2',
    description: 'This is the description for Project 2.',
    images: [
      'https://i.pinimg.com/736x/27/c5/54/27c55453ebbd140ad47768d0920a49f9.jpg',
      'https://images.ctfassets.net/ub3bwfd53mwy/5zi8myLobtihb1cWl3tj8L/45a40e66765f26beddf7eeee29f74723/6_Image.jpg?w=750',
      'https://i.pinimg.com/736x/bd/9c/93/bd9c931ca152a2323a4293ff5ad9846b.jpg',
    ],
  },
  project3: {
    title: 'Project 3',
    description: 'This is the description for Project 3.',
    images: [
      'https://i.pinimg.com/736x/bd/9c/93/bd9c931ca152a2323a4293ff5ad9846b.jpg',
      'https://images.ctfassets.net/ub3bwfd53mwy/5zi8myLobtihb1cWl3tj8L/45a40e66765f26beddf7eeee29f74723/6_Image.jpg?w=750',
      'https://i.pinimg.com/736x/27/c5/54/27c55453ebbd140ad47768d0920a49f9.jpg',
    ],
  },
};

const ProjectDetails = ({ params }: { params: { id: string } }) => {
  // Desenvuelve los parámetros con React.use()
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const currentProject = projects[params.id];
    setProject(currentProject || null);
  }, [params.id]);

  if (!project) {
    return notFound(); // Retorna una página 404 si el ID no existe
  }

  const [currentImage, setCurrentImage] = useState<string>(project.images[0]);

  return (
    <div className="divide-y divide-slate-700 h-screen">
      <Navbar />
      <div className="flex flex-col md:flex-row items-center gap-6 p-6">
        {/* Carrusel */}
        <div className="flex-1">
          <div className="w-3/4 h-96 overflow-hidden rounded-lg">
            <Image
              src={currentImage}
              alt={project.title}
              width={750} // Ajusta el width y height de acuerdo a tus necesidades
              height={500}
              className="w-full h-full object-cover transition-opacity duration-300"
            />
          </div>
          <div className="flex gap-2 mt-4">
            {project.images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                width={64} // Tamaño de las miniaturas
                height={64}
                className={`w-16 h-16 rounded-lg cursor-pointer border-2 ${
                  currentImage === img ? 'border-blue-500' : 'border-transparent'
                }`}
                onClick={() => setCurrentImage(img)} // Cambia la imagen al hacer clic
              />
            ))}
          </div>
        </div>

        {/* Detalles del proyecto */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{project.title}</h1>
          <p className="text-gray-600 mt-4">{project.description}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetails;
