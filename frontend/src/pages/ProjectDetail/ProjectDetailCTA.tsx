import { Button } from '@/components/ui/button';

const ProjectDetailCTA = () => {
  return (
    <section className="relative w-full py-12 md:py-16 bg-muted/30 overflow-hidden">
      <div className="absolute inset-0 bg-line-grid opacity-65" />
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold tracking-tight mb-4">
            Facing Similar Infrastructure Challenges?
          </h2>
          <p className="text-muted-foreground mb-8">
            Our team of engineers has successfully delivered projects across municipal water,
            stormwater, wastewater, and agricultural irrigation sectors. Let us help you solve
            your most complex water infrastructure challenges.
          </p>
          <Button size="lg" asChild>
            <a href="/contact">
              Request a Consultation
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailCTA;
