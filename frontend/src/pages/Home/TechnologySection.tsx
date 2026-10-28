import { Link } from 'react-router-dom';
import { ChevronRight, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TECHNOLOGIES } from './homeData';

const TechnologySection = () => (
  <section className="relative w-full py-16 md:py-24 bg-muted/30 overflow-hidden">
    {/* Dot grid */}
    <div className="absolute inset-0 bg-dot-grid opacity-50" />

    {/* Animated water orbs */}
    <div
      className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full blur-3xl opacity-10 animate-blob pointer-events-none"
      style={{ background: 'hsl(207 90% 50%)' }}
    />

    <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
          Tools & Technology
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Industry-Leading Software
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          We leverage best-in-class hydraulic modeling and GIS platforms to deliver
          precise, reliable results for every project.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {TECHNOLOGIES.map((tech) => (
          <Card
            key={tech.name}
            className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/60 hover:border-primary/30 group"
          >
            {/* Animated top bar */}
            <div
              className="h-1.5 w-full"
              style={{
                background: 'linear-gradient(to right, hsl(207,90%,40%), hsl(175,80%,40%), hsl(190,85%,38%), hsl(207,90%,40%))',
                backgroundSize: '300% 100%',
                animation: 'water-flow-x 4s linear infinite',
              }}
            />
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                    {tech.name}
                  </CardTitle>
                  <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                    {tech.badge}
                  </Badge>
                </div>
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Droplets className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                {tech.description}
              </CardDescription>
              <Button variant="link" className="px-0 mt-4 text-primary" asChild>
                <Link to="/technology">
                  Explore our tech stack
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default TechnologySection;
