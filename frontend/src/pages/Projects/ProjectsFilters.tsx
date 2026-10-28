import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SECTOR_OPTIONS, PROJECT_TYPE_OPTIONS } from './projectsData';

interface ProjectsFiltersProps {
  sector: string | null;
  projectType: string | null;
  hasActiveFilters: boolean;
  total: number | null;
  onSectorChange: (value: string) => void;
  onProjectTypeChange: (value: string) => void;
  onClearFilters: () => void;
}

const ProjectsFilters = ({
  sector,
  projectType,
  hasActiveFilters,
  total,
  onSectorChange,
  onProjectTypeChange,
  onClearFilters,
}: ProjectsFiltersProps) => {
  return (
    <section className="border-b bg-card/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap items-center gap-4">
          {/* Sector Filter */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">Sector:</span>
            <Select value={sector || undefined} onValueChange={onSectorChange}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="All Sectors" />
              </SelectTrigger>
              <SelectContent>
                {SECTOR_OPTIONS.filter((opt) => opt.value !== '').map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Project Type Filter */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">Type:</span>
            <Select value={projectType || undefined} onValueChange={onProjectTypeChange}>
              <SelectTrigger className="w-[220px]">
                <SelectValue placeholder="All Project Types" />
              </SelectTrigger>
              <SelectContent>
                {PROJECT_TYPE_OPTIONS.filter((opt) => opt.value !== '').map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearFilters}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4 mr-1" />
              Clear filters
            </Button>
          )}

          {/* Results count */}
          {total !== null && (
            <div className="ml-auto text-sm text-muted-foreground">
              {total} project{total !== 1 ? 's' : ''} found
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsFilters;
