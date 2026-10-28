import { ArrowRight, MapPin, Calendar, Building2 } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Project } from './projectsData';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <Card
      className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
      onClick={onClick}
    >
      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.thumbnail_url}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <Badge className="absolute top-3 left-3 bg-background/95 text-foreground backdrop-blur-sm border border-border/50 hover:bg-background shadow-sm">
          {project.project_type}
        </Badge>
      </div>

      {/* Content */}
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg leading-tight line-clamp-2">
            {project.title}
          </CardTitle>
          <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 -mt-1" />
        </div>
        <CardDescription className="flex items-center gap-1">
          <Building2 className="h-3.5 w-3.5" />
          {project.client}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
          {project.challenge_summary}
        </p>

        {/* Meta info */}
        <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            {project.location}
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {project.year}
          </div>
        </div>

        {/* Sector badge */}
        <div className="mt-3 pt-3 border-t">
          <Badge className="text-xs bg-primary/10 text-primary border border-primary/25 hover:bg-primary/15">
            {project.sector}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
