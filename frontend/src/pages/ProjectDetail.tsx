import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/lib/toast';
import { Project } from './ProjectDetail/types';
import { MOCK_PROJECTS } from './ProjectDetail/mockData';
import ProjectDetailSkeleton from './ProjectDetail/ProjectDetailSkeleton';
import ProjectDetailError from './ProjectDetail/ProjectDetailError';
import ProjectDetailHero from './ProjectDetail/ProjectDetailHero';
import ProjectDetailNarrative from './ProjectDetail/ProjectDetailNarrative';
import ProjectDetailCards from './ProjectDetail/ProjectDetailCards';
import ProjectDetailImages from './ProjectDetail/ProjectDetailImages';
import ProjectDetailCTA from './ProjectDetail/ProjectDetailCTA';

// ── Page ─────────────────────────────────────────────────────────────────────

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError('Project ID not provided');
      setLoading(false);
      return;
    }

    // TODO: Real API binding
    // import { apiService } from '@/lib/api';
    // const response = await apiService.get({ endpoint: '/projects/detail', params: { id } });
    // setProject(response.data);
    // setLoading(false);

    // Mock: Simulate API call with 500ms delay
    const timer = setTimeout(() => {
      const found = MOCK_PROJECTS.find((p) => p.id === id);
      if (found) {
        setProject(found);
        setError(null);
      } else {
        setError(`Project with ID "${id}" not found`);
      }
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return <ProjectDetailSkeleton />;
  }

  if (error || !project) {
    return (
      <ProjectDetailError
        error={error}
        onBack={() => navigate(-1)}
        onViewAll={() => navigate('/projects')}
      />
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* ── Back Navigation ────────────────────────────────────────────── */}
      <section className="w-full py-6 border-b">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(-1)}
            className="pl-0 hover:pl-2 transition-all"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </div>
      </section>

      {/* ── Hero / Header Section ────────────────────────────────────── */}
      <ProjectDetailHero project={project} />

      <Separator />

      {/* ── Problem → Solution → Result Narrative ──────────────────── */}
      <ProjectDetailNarrative project={project} />

      <Separator />

      {/* ── Project Details ──────────────────────────────────────────── */}
      <ProjectDetailCards project={project} />

      {/* ── Project Images ─────────────────────────────────────────── */}
      <ProjectDetailImages project={project} />

      {/* ── CTA Section ─────────────────────────────────────────────── */}
      <ProjectDetailCTA />
    </div>
  );
};

export default ProjectDetail;
