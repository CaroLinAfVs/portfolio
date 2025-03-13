'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Image from 'next/image';
import projects from '../../../data/projects.json';

interface Project {
  text: string;
  description: string;
  images: string[];
  mainImage: string;
}

const ProjectDetails = () => {
  const { id } = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | undefined>();
  const [currentImage, setCurrentImage] = useState<string>('');

  useEffect(() => {
    const project = projects.find((p) => p.projectId === id);
    setProject(project);
    if (project && project.mainImage) {
      setCurrentImage(project?.mainImage);
    }
  }, [id]);

  if (!project) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Proyecto no encontrado</h1>
        <button
          onClick={() => router.push('/')}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Volver a inicio
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col divide-y divide-slate-700">
      <Navbar />
      <main className="flex-grow flex flex-col justify-center items-center p-6">
        <div className="flex flex-col my-6 md:flex-row items-center gap-6 w-full max-w-6xl">
          <div className="flex-1">
            <div className="w-3/4 h-96 overflow-hidden rounded-lg">
              <Image
                src={currentImage}
                alt={project.text}
                width={750}
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
                  width={64}
                  height={64}
                  className={`w-16 h-16 rounded-lg cursor-pointer border-2 ${
                    project.mainImage === img
                      ? 'border-blue-500'
                      : 'border-transparent'
                  }`}
                  onClick={() => setCurrentImage(img)}
                />
              ))}
            </div>
          </div>

          <div className="flex-1">
            <h1 className="text-3xl font-bold">{project.text}</h1>{' '}
            <p className="text-gray-600 mt-4">{project.description}</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetails;
