import { TrendingUp, Map, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-primary text-primary-foreground overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="currentColor" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>

          <div className="relative z-10 text-center py-16 px-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ready to Start Your Environmental Project?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
              Schedule a consultation with our environmental and irrigation consulting
              team to discuss your project requirements and discover how we can help you
              achieve your sustainability goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-primary"
                asChild
              >
                <a href="/contact">
                  Get Consultation
                  <TrendingUp className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href="/projects">
                  View Our Projects
                  <Map className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-primary-foreground/60">
              {[
                'No Obligation Quote',
                'Expert Consultants',
                'Proven Results',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
