import { Link } from 'react-router-dom';
import { ArrowRight, Activity, BarChart3, Globe, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DIFFERENTIATORS } from './homeData';

const WhyChooseUsSection = () => (
  <section className="relative w-full py-16 md:py-24 overflow-hidden">
    {/* Subtle line grid */}
    <div className="absolute inset-0 bg-line-grid opacity-80" />

    <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        {/* Content */}
        <div className="space-y-8">
          <div>
            <Badge
              variant="outline"
              className="mb-4 text-primary border-primary/40 bg-primary/5"
            >
              Why Hydrologic Innovation
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Technology-Driven,{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, hsl(207,90%,40%), hsl(175,80%,38%))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                People-Focused
              </span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We combine decades of hydrology expertise with modern GIS technologies to
              deliver solutions that are technically superior and practically implementable.
            </p>
          </div>

          <div className="space-y-5">
            {DIFFERENTIATORS.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-4 rounded-xl hover:bg-primary/5 transition-colors group"
              >
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Button
            size="lg"
            className="shadow-md shadow-primary/20"
            asChild
          >
            <Link to="/about">
              Learn About Our Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-5">
          {[
            { value: '99.8%', label: 'Model Accuracy', icon: Activity, color: 'text-primary' },
            { value: '24/7', label: 'Project Support', icon: BarChart3, color: 'text-primary' },
            { value: '6+', label: 'States Served', icon: Globe, color: 'text-primary' },
            { value: 'ISO', label: '9001:2015 Certified', icon: Award, color: 'text-emerald-600' },
          ].map((stat) => (
            <Card
              key={stat.label}
              className="text-center p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-border/60 hover:border-primary/25 group"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div className={`text-3xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;
