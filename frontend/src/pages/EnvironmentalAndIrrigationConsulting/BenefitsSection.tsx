import { Badge } from '@/components/ui/badge';
import { BENEFITS } from './data';

const BenefitsSection = () => {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="secondary" className="mb-4">
            Client Value
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Measurable Benefits
          </h2>
          <p className="text-muted-foreground text-lg">
            Our environmental and irrigation consulting engagements deliver quantifiable
            improvements across water efficiency, regulatory compliance, and sustainability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((benefit) => (
            <div key={benefit.title} className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
              <div className="pl-16">
                <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5">
                  {benefit.metric}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
