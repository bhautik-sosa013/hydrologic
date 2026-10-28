import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DELIVERABLES } from './data';

const DeliverablesSection = () => {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="secondary" className="mb-4">
            Project Output
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            What You Receive
          </h2>
          <p className="text-muted-foreground text-lg">
            Every consulting engagement concludes with comprehensive documentation and
            implementation-ready deliverables tailored to your project requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DELIVERABLES.map((item) => (
            <Card key={item.title} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg mb-1">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliverablesSection;
