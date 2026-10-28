import { CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CLIENT_SECTORS } from './data';

const ClientSectorsSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="secondary" className="mb-4">
            Who We Serve
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Industry-Specific Expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            Our team brings specialized knowledge to each sector, understanding the unique
            regulatory environments, economic pressures, and sustainability goals of every
            client type.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {CLIENT_SECTORS.map((sector) => (
            <Card key={sector.title} className="overflow-hidden hover:shadow-lg transition-all">
              <div className="h-1.5 bg-green-600" />
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-green-600/10 flex items-center justify-center mb-4">
                  <sector.icon className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">{sector.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed mb-4">
                  {sector.description}
                </CardDescription>
                <div className="space-y-2">
                  {sector.metrics.map((metric) => (
                    <div key={metric} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>{metric}</span>
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

export default ClientSectorsSection;
