import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/lib/toast';
import { fetchProjects, FetchProjectsResult, PAGE_SIZE } from './Projects/projectsData';
import ProjectsHeader from './Projects/ProjectsHeader';
import ProjectsFilters from './Projects/ProjectsFilters';
import ProjectsGrid from './Projects/ProjectsGrid';
import ProjectsPagination from './Projects/ProjectsPagination';
import ProjectsCTA from './Projects/ProjectsCTA';

// ── Projects Page ─────────────────────────────────────────────────────────────

const Projects = () => {
  const navigate = useNavigate();

  // Filter/sort state
  const [page, setPage] = useState(1);
  const [sector, setSector] = useState<string | null>(null);
  const [projectType, setProjectType] = useState<string | null>(null);

  // Data state
  const [projectsData, setProjectsData] = useState<FetchProjectsResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch projects when filters or page change
  useMemo(() => {
    setIsLoading(true);
    fetchProjects({ page, limit: PAGE_SIZE, sector, projectType })
      .then((result) => {
        setProjectsData(result);
        setIsLoading(false);
      })
      .catch(() => {
        toast.error('Failed to load projects');
        setIsLoading(false);
      });
  }, [page, sector, projectType]);

  // Reset to page 1 when filter changes
  const handleSectorChange = (value: string) => {
    setSector(value);
    setPage(1);
  };

  const handleProjectTypeChange = (value: string) => {
    setProjectType(value);
    setPage(1);
  };

  const handleClearFilters = () => {
    setSector(null);
    setProjectType(null);
    setPage(1);
  };

  const hasActiveFilters = sector || projectType;

  // Generate pagination items
  const getPaginationItems = () => {
    if (!projectsData) return [];
    const { totalPages } = projectsData;
    const items: (number | 'ellipsis')[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) items.push(i);
    } else {
      items.push(1);
      if (page > 3) items.push('ellipsis');
      for (let i = Math.max(2, page - 1); i <= Math.min(totalPages - 1, page + 1); i++) {
        items.push(i);
      }
      if (page < totalPages - 2) items.push('ellipsis');
      items.push(totalPages);
    }

    return items;
  };

  return (
    <div className="min-h-screen">
      {/* ── Page Header ────────────────────────────────────────────────── */}
      <ProjectsHeader />

      {/* ── Filters ───────────────────────────────────────────────────── */}
      <ProjectsFilters
        sector={sector}
        projectType={projectType}
        hasActiveFilters={!!hasActiveFilters}
        total={projectsData ? projectsData.total : null}
        onSectorChange={handleSectorChange}
        onProjectTypeChange={handleProjectTypeChange}
        onClearFilters={handleClearFilters}
      />

      {/* ── Projects Grid ───────────────────────────────────────────────── */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid-lg opacity-60" />
        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProjectsGrid
            isLoading={isLoading}
            projects={projectsData?.data ?? []}
            hasActiveFilters={!!hasActiveFilters}
            onClearFilters={handleClearFilters}
            onProjectClick={(id) => navigate(`/projects/${id}`)}
          />

          {/* ── Pagination ───────────────────────────────────────────────── */}
          {projectsData && (
            <ProjectsPagination
              projectsData={projectsData}
              page={page}
              setPage={setPage}
              getPaginationItems={getPaginationItems}
            />
          )}
        </div>
      </section>

      {/* ── CTA Section ────────────────────────────────────────────────── */}
      <ProjectsCTA />
    </div>
  );
};

export default Projects;
