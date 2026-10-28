import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ProjectsCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-muted/30 py-12 overflow-hidden">
      <div className="absolute inset-0 bg-line-grid opacity-65" />
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-semibold mb-3">
          Have a project in mind?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Our engineering team is ready to help you tackle your most complex water infrastructure
          challenges. Schedule a consultation to discuss your needs.
        </p>
        <Button onClick={() => navigate('/contact')} size="lg">
          Get in Touch
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default ProjectsCTA;
