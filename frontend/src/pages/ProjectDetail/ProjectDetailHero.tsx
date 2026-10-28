import { Building2, MapPin, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Project } from './types';

interface ProjectDetailHeroProps {
  project: Project;
}

const ProjectDetailHero = ({ project }: ProjectDetailHeroProps) => {
  return (
    <section className="relative w-full bg-gradient-to-br from-primary/10 via-background to-primary/5 py-12 md:py-16 overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-50" />
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="outline" className="text-primary border-primary/50">
              {project.sector}
            </Badge>
            <Badge variant="secondary">{project.project_type}</Badge>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-x-8 gap-y-3 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              <span>{project.client}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{project.year}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailHero;
