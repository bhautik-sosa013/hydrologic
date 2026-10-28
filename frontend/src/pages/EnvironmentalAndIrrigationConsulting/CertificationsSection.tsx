import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CERTIFICATIONS } from './data';

const CertificationsSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="secondary" className="mb-4">
            Credentials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Certifications & Standards
          </h2>
          <p className="text-muted-foreground text-lg">
            Our team maintains industry-leading certifications to ensure our consulting meets
            the highest professional and environmental standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <Card key={cert.name} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <cert.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">{cert.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{cert.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
