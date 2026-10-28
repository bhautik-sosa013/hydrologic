import { CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SERVICE_OFFERINGS } from './data';

const ServiceOfferingsSection = () => {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="secondary" className="mb-4">
            What We Offer
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Comprehensive Environmental Services
          </h2>
          <p className="text-muted-foreground text-lg">
            From environmental impact assessments to precision irrigation design, our services
            cover the full spectrum of water resource and land development consulting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {SERVICE_OFFERINGS.map((service) => (
            <Card key={service.title} className="overflow-hidden hover:shadow-lg transition-all">
              <div className="h-1.5 bg-primary" />
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {service.scope.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOfferingsSection;
