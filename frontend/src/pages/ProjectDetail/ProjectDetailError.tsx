import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ProjectDetailErrorProps {
  error: string | null;
  onBack: () => void;
  onViewAll: () => void;
}

const ProjectDetailError = ({ error, onBack, onViewAll }: ProjectDetailErrorProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-6 border-b">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="pl-0 hover:pl-2 transition-all"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </div>
      </section>
      <section className="w-full py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-destructive">Project Not Found</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{error || 'Unable to load project details.'}</p>
              <Button className="mt-4" onClick={onViewAll}>
                View All Projects
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailError;
