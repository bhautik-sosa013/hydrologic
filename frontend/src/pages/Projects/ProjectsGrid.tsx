import { Filter } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Project, PAGE_SIZE } from './projectsData';
import ProjectCard from './ProjectCard';

interface ProjectsGridProps {
  isLoading: boolean;
  projects: Project[];
  hasActiveFilters: boolean;
  onClearFilters: () => void;
  onProjectClick: (id: string) => void;
}

const ProjectsGrid = ({
  isLoading,
  projects,
  hasActiveFilters,
  onClearFilters,
  onProjectClick,
}: ProjectsGridProps) => {
  if (isLoading) {
    // Loading skeleton
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: PAGE_SIZE }).map((_, i) => (
          <Card key={i} className="overflow-hidden">
            <div className="h-48 bg-muted animate-pulse" />
            <CardHeader>
              <div className="h-6 bg-muted animate-pulse rounded w-3/4 mb-2" />
              <div className="h-4 bg-muted animate-pulse rounded w-1/2" />
            </CardHeader>
            <CardContent>
              <div className="h-4 bg-muted animate-pulse rounded w-full mb-2" />
              <div className="h-4 bg-muted animate-pulse rounded w-2/3" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (projects.length === 0) {
    // Empty state
    return (
      <div className="text-center py-16">
        <Filter className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-semibold mb-2">No projects found</h3>
        <p className="text-muted-foreground mb-4">
          Try adjusting your filters to see more results.
        </p>
        {hasActiveFilters && (
          <Button variant="outline" onClick={onClearFilters}>
            Clear all filters
          </Button>
        )}
      </div>
    );
  }

  // Project cards grid
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onClick={() => onProjectClick(project.id)}
        />
      ))}
    </div>
  );
};

export default ProjectsGrid;
