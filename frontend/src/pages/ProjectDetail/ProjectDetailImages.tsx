import { Image as ImageIcon } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Project } from './types';

interface ProjectDetailImagesProps {
  project: Project;
}

const ProjectDetailImages = ({ project }: ProjectDetailImagesProps) => {
  if (project.image_urls.length === 0) return null;

  return (
    <>
      <Separator />
      <section className="w-full py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold tracking-tight mb-8 flex items-center gap-2">
              <ImageIcon className="h-6 w-6" />
              Project Visuals
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {project.image_urls.map((url, index) => (
                <div
                  key={index}
                  className="relative aspect-video rounded-lg overflow-hidden bg-muted"
                >
                  <img
                    src={url}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetailImages;
