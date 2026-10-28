import { FileText, Wrench, Target } from 'lucide-react';
import { Project } from './types';

interface ProjectDetailNarrativeProps {
  project: Project;
}

const ProjectDetailNarrative = ({ project }: ProjectDetailNarrativeProps) => {
  return (
    <section className="relative w-full py-12 md:py-16 overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid-lg opacity-55" />
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-12">
          {/* Problem */}
          <div className="grid md:grid-cols-[1fr_2fr] gap-6 items-start">
            <div className="flex items-center gap-3 md:justify-end">
              <div className="h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                <FileText className="h-6 w-6 text-destructive" />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-3 text-destructive">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
            </div>
          </div>

          {/* Solution */}
          <div className="grid md:grid-cols-[1fr_2fr] gap-6 items-start">
            <div className="flex items-center gap-3 md:justify-end">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Wrench className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-3 text-primary">Our Solution</h2>
              <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Result */}
          <div className="grid md:grid-cols-[1fr_2fr] gap-6 items-start">
            <div className="flex items-center gap-3 md:justify-end">
              <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                <Target className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-3 text-green-600">The Outcome</h2>
              <p className="text-muted-foreground leading-relaxed">{project.result}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailNarrative;
