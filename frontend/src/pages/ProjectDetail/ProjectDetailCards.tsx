import { Briefcase, Wrench, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Project } from './types';

interface ProjectDetailCardsProps {
  project: Project;
}

const ProjectDetailCards = ({ project }: ProjectDetailCardsProps) => {
  return (
    <section className="w-full py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight mb-8">Project Details</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Scope */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Scope
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {project.scope}
                </CardDescription>
              </CardContent>
            </Card>

            {/* Methodology */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-primary" />
                  Methodology
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {project.methodology}
                </CardDescription>
              </CardContent>
            </Card>

            {/* Measurable Outcomes */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  Measurable Outcomes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {project.measurable_outcomes}
                </CardDescription>
              </CardContent>
            </Card>

            {/* Tools Used */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-primary" />
                  Tools & Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tools_used.map((tool) => (
                    <Badge key={tool} variant="secondary">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailCards;
