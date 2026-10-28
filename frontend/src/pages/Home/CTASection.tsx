import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Droplets, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface CTASectionProps {
  onGetConsultation: () => void;
}

const CTASection = ({ onGetConsultation }: CTASectionProps) => (
  <section className="relative w-full py-16 md:py-24 overflow-hidden">
    <div className="absolute inset-0 bg-line-grid-sm opacity-60" />

    <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20">
        {/* CTA background */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, hsl(207,90%,32%) 0%, hsl(190,85%,30%) 50%, hsl(175,80%,30%) 100%)',
          }}
        />

        {/* Animated water waves in CTA */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <svg
            viewBox="0 0 1440 200"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="absolute bottom-0 w-full h-40"
          >
            <g style={{ animation: 'wave 8s ease-in-out infinite' }}>
              <path
                d="M0,80 C240,130 480,30 720,80 C960,130 1200,30 1440,80 L1440,200 L0,200 Z"
                fill="white"
                opacity="0.15"
              />
            </g>
            <g style={{ animation: 'wave 6s ease-in-out infinite reverse' }}>
              <path
                d="M0,110 C240,60 480,140 720,100 C960,60 1200,130 1440,100 L1440,200 L0,200 Z"
                fill="white"
                opacity="0.1"
              />
            </g>
          </svg>
        </div>

        {/* Dot pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern id="cta-dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#cta-dots)" />
          </svg>
        </div>

        {/* Ambient glow */}
        <div className="absolute -top-20 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-blob" />

        <div className="relative z-10 text-center py-16 px-6 text-white">
          <Badge className="mb-6 bg-white/15 text-white border-white/25 hover:bg-white/25">
            <Droplets className="mr-1.5 h-3 w-3" />
            ISO 9001:2015 · MSME Certified
          </Badge>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ready to Transform Your Water Infrastructure?
          </h2>
          <p className="text-white/75 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Partner with India's precision water engineering consultancy. Discuss your
            project requirements and discover tailored, data-driven solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-lg font-semibold"
              asChild
              onClick={onGetConsultation}
            >
              <Link to="/contact">
                Get a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10 hover:border-white/60"
              asChild
            >
              <Link to="/projects">
                View Our Projects
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-white/55">
            {[
              { icon: CheckCircle2, label: 'India-Based Services' },
              { icon: CheckCircle2, label: 'No Obligation Quote' },
              { icon: CheckCircle2, label: 'Dedicated Project Manager' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <item.icon className="h-4 w-4 text-white/60" />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
