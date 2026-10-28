import { Droplets } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const ContactHeroSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-50" />
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
            <Droplets className="mr-1 h-3 w-3" />
            Get in Touch
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Contact Hydrologic Innovation
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Ready to transform your water infrastructure? Schedule a consultation with our
            engineering team to discuss your project requirements and discover how we can help.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection;
