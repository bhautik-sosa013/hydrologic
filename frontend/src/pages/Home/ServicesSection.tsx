import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SERVICES } from './homeData';

const ServicesSection = () => (
  <section className="relative w-full py-16 md:py-24 bg-muted/30 overflow-hidden">
    {/* Dot grid */}
    <div className="absolute inset-0 bg-dot-grid-lg opacity-70" />

    <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
          Our Expertise
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Comprehensive Water Solutions
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          From hydraulic modeling to environmental consulting, we provide end-to-end
          engineering services for water infrastructure projects of any scale.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service) => (
          <Card
            key={service.title}
            className="group hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border-border/60 hover:border-primary/30 bg-card/80 backdrop-blur-sm"
          >
            <CardHeader>
              <div
                className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300"
              >
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl group-hover:text-primary transition-colors">
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                {service.description}
              </CardDescription>
              <Button
                variant="link"
                className="px-0 mt-4 text-primary"
                asChild
              >
                <Link to={service.path}>
                  Learn more
                  <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
