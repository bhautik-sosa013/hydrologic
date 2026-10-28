import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { METHODOLOGY_STEPS } from './data';

const MethodologySection = () => {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="secondary" className="mb-4">
            Our Process
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Proven Methodology
          </h2>
          <p className="text-muted-foreground text-lg">
            A systematic four-phase approach ensures comprehensive assessments and
            implementation-ready solutions for every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {METHODOLOGY_STEPS.map((step) => (
            <div key={step.step} className="relative">
              {/* Step number indicator */}
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  {step.step}
                </div>
                {step.step < METHODOLOGY_STEPS.length && (
                  <div className="hidden lg:block flex-1 h-px bg-border" />
                )}
              </div>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
