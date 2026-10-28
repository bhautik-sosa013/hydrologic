import { Link } from 'react-router-dom';
import { Droplets, ArrowRight, ChevronRight, Award, TrendingUp, MapPin, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import WaterFlowAnimation from './WaterFlowAnimation';

interface HeroSectionProps {
  onGetConsultation: () => void;
}

const HeroSection = ({ onGetConsultation }: HeroSectionProps) => (
  <section className="relative w-full py-20 md:py-28 lg:py-36 overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">
    {/* Dot grid background */}
    <div className="absolute inset-0 bg-dot-grid opacity-60" />

    {/* Ambient glow orbs */}
    <div
      className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 animate-blob pointer-events-none"
      style={{ background: 'hsl(207 90% 50%)' }}
    />
    <div
      className="absolute bottom-0 -left-20 w-80 h-80 rounded-full blur-3xl opacity-10 animate-blob pointer-events-none"
      style={{ background: 'hsl(175 80% 45%)', animationDelay: '2s' }}
    />

    <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* Hero text */}
        <div className="flex flex-col space-y-8">
          <div className="space-y-5">
            <Badge
              variant="outline"
              className="w-fit text-primary border-primary/40 bg-primary/5 backdrop-blur-sm"
            >
              <Droplets className="mr-1.5 h-3 w-3" />
              Engineering Water Systems · India
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Engineering Intelligent{' '}
              <span className="relative">
                <span
                  className="relative z-10"
                  style={{
                    background: 'linear-gradient(135deg, hsl(207,90%,40%), hsl(175,80%,38%))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Water Systems
                </span>
              </span>{' '}
              for a Sustainable Future
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Hydrologic Innovation delivers precision hydraulic modeling, WTP/STP design,
              and GIS-powered infrastructure solutions for municipalities and industries
              across India.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow"
              asChild
              onClick={onGetConsultation}
            >
              <Link to="/contact">
                Get Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/5" asChild>
              <Link to="/services">
                Explore Services
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-8 pt-2">
            {[
              { value: '10+', label: 'Years Experience', icon: Award },
              { value: '50+', label: 'Projects Delivered', icon: TrendingUp },
              { value: '6', label: 'States Served', icon: MapPin },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-2.5">
                <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <stat.icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="text-xl font-bold text-foreground leading-none">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero visual */}
        <div className="relative h-[400px] lg:h-[520px] rounded-2xl overflow-hidden shadow-2xl shadow-primary/20">
          <WaterFlowAnimation />

          {/* Floating stat cards */}
          <div
            className="absolute top-5 right-5 bg-background/90 backdrop-blur-md rounded-xl p-3.5 shadow-xl border border-border/50"
            style={{ animation: 'float 3.5s ease-in-out infinite' }}
          >
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Zap className="h-4.5 w-4.5 text-primary" />
              </div>
              <div>
                <div className="text-xs font-semibold text-foreground">Network Efficiency</div>
                <div className="text-xs text-primary font-bold">+40% optimized</div>
              </div>
            </div>
          </div>

          <div
            className="absolute bottom-5 left-5 bg-background/90 backdrop-blur-md rounded-xl p-3.5 shadow-xl border border-border/50"
            style={{ animation: 'float 3.5s ease-in-out 1.75s infinite reverse' }}
          >
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <Shield className="h-4.5 w-4.5 text-emerald-600" />
              </div>
              <div>
                <div className="text-xs font-semibold text-foreground">Regulatory</div>
                <div className="text-xs text-emerald-600 font-bold">100% compliant</div>
              </div>
            </div>
          </div>

          <div
            className="absolute top-1/2 left-5 -translate-y-1/2 bg-background/90 backdrop-blur-md rounded-xl p-3.5 shadow-xl border border-border/50"
            style={{ animation: 'float 4s ease-in-out 0.8s infinite' }}
          >
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Droplets className="h-4.5 w-4.5 text-primary" />
              </div>
              <div>
                <div className="text-xs font-semibold text-foreground">ISO 9001:2015</div>
                <div className="text-xs text-muted-foreground">Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
