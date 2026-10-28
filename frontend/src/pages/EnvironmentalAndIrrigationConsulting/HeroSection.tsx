import { Leaf, TrendingUp, Map } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const HeroSection = () => {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <Badge variant="outline" className="mb-4 text-primary border-primary/50">
            <Leaf className="mr-1 h-3 w-3" />
            Environmental & Water Services
          </Badge>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Environmental and Irrigation Consulting
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Hydrologic Innovation provides comprehensive environmental impact assessments and
            precision irrigation system consulting. We apply hydrological modeling, sustainability
            frameworks, and water-efficient design principles to serve agricultural clients, real
            estate developers, and government agencies managing water resources and land
            development projects.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <a href="/contact">
                Request Consultation
                <TrendingUp className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/projects">
                View Related Projects
                <Map className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
