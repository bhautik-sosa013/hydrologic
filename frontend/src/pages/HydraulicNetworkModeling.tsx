import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Droplets,
  Activity,
  Gauge,
  AlertTriangle,
  CheckCircle2,
  Settings2,
  Map,
  BarChart3,
  Target,
  Zap,
  Shield,
  Wrench,
  Users,
  FileText,
  TrendingUp,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

// ── Mock data ─────────────────────────────────────────────────────────────────

const METHODOLOGY_STEPS = [
  {
    step: 1,
    title: 'Data Collection & Network Mapping',
    description:
      'We gather existing infrastructure data including pipe diameters, materials, elevations, and demand zones. GIS integration ensures sub-meter accuracy in spatial positioning.',
    icon: Map,
  },
  {
    step: 2,
    title: 'Model Construction & Calibration',
    description:
      'Using WaterGems and SewerGems, we build a detailed hydraulic model that replicates real-world conditions. The model is calibrated against field measurements for accuracy.',
    icon: Settings2,
  },
  {
    step: 3,
    title: 'Scenario Analysis & Simulation',
    description:
      'Multiple operational scenarios are simulated including peak demand, fire flow conditions, emergency shutdowns, and future growth projections.',
    icon: Activity,
  },
  {
    step: 4,
    title: 'Optimization & Recommendations',
    description:
      'Based on simulation results, we identify pressure zones, suggest pipe replacements, and recommend booster stations or valve adjustments for optimal performance.',
    icon: TrendingUp,
  },
];

const USE_CASES = [
  {
    title: 'Urban Water Distribution',
    description:
      'Comprehensive analysis of municipal water networks to ensure adequate pressure and flow across all service areas, from high-rise districts to suburban developments.',
    icon: Droplets,
    metrics: ['Pressure Zone Optimization', 'Fire Flow Capacity', 'Demand Forecasting'],
  },
  {
    title: 'Sewer Collection Systems',
    description:
      'Sanitary sewer and stormwater modeling to prevent overflows, identify infiltration sources, and plan rehabilitation investments for aging infrastructure.',
    icon: Gauge,
    metrics: ['Capacity Analysis', 'I&I Reduction', 'Overflow Mitigation'],
  },
  {
    title: 'Industrial Process Water',
    description:
      'Specialized hydraulic modeling for manufacturing facilities requiring precise pressure and flow control for production processes.',
    icon: Settings2,
    metrics: ['Process Optimization', 'Energy Reduction', 'Reliability Improvement'],
  },
];

const TOOLS = [
  {
    name: 'WaterGems',
    description:
      'Industry-leading hydraulic modeling software for water distribution network analysis. Supports steady-state and extended-period simulation, fire flow analysis, and infrastructure planning.',
    capabilities: [
      'Steady-state and EPS modeling',
      'Fire flow and capacity analysis',
      'Capital planning and rehabilitation',
      'Tank mixing and water age analysis',
      'SCADA integration for real-time modeling',
    ],
    badge: 'Water Distribution',
    icon: Droplets,
  },
  {
    name: 'SewerGems',
    description:
      'Comprehensive sewer and stormwater modeling solution for collection system design, rehabilitation planning, and overflow analysis. Handles both sanitary and combined sewer systems.',
    capabilities: [
      'Hydraulic profile analysis',
      'Rainfall-dependent infiltration analysis',
      'Wet weather flow management',
      'Sewer system design',
      'Regulatory compliance reporting',
    ],
    badge: 'Sewer Systems',
    icon: Gauge,
  },
];

const DELIVERABLES = [
  {
    title: 'Executive Summary Report',
    description: 'High-level findings and recommendations for stakeholder presentation',
    icon: FileText,
  },
  {
    title: 'Technical Model Documentation',
    description: 'Detailed model construction, calibration, and methodology documentation',
    icon: BarChart3,
  },
  {
    title: 'GIS-Compatible Output',
    description: 'Spatial data exports compatible with enterprise GIS platforms',
    icon: Map,
  },
  {
    title: 'Scenario Comparison Matrix',
    description: 'Side-by-side analysis of proposed improvements vs. current conditions',
    icon: Target,
  },
  {
    title: 'Implementation Roadmap',
    description: 'Prioritized capital improvement schedule with cost estimates',
    icon: TrendingUp,
  },
  {
    title: 'Training & Handover',
    description: 'Model transfer, documentation review, and staff training sessions',
    icon: Users,
  },
];

const BENEFITS = [
  {
    icon: Gauge,
    title: 'Pressure Optimization',
    description:
      'Identify and resolve pressure extremes that cause pipe bursts, leaks, and customer complaints. Our models achieve uniform pressure distribution across all zones.',
    metric: 'Up to 30% reduction in pipe failures',
  },
  {
    icon: AlertTriangle,
    title: 'Leak Detection Support',
    description:
      'Combine hydraulic modeling with zone metering and transient analysis to pinpoint likely leak locations, reducing survey time and repair costs.',
    metric: '50% faster leak location identification',
  },
  {
    icon: Shield,
    title: 'Regulatory Compliance',
    description:
      'Ensure your network meets EPA, state, and local water quality standards. We provide documentation for environmental permits and regulatory submissions.',
    metric: '100% audit-ready documentation',
  },
  {
    icon: Zap,
    title: 'Energy Efficiency',
    description:
      'Optimize pump schedules and tank levels to minimize electricity costs while maintaining service quality. Typical energy savings of 15-25%.',
    metric: '15-25% pumping cost reduction',
  },
  {
    icon: Target,
    title: 'Capital Planning',
    description:
      'Prioritize infrastructure investments with data-driven analysis showing which projects deliver the most benefit per dollar spent.',
    metric: 'Optimal ROI on $1M+ projects',
  },
  {
    icon: CheckCircle2,
    title: 'Operational Reliability',
    description:
      'Build system resilience through scenario planning for emergencies, equipment failures, and unexpected demand shifts.',
    metric: '24/7 operational confidence',
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────

const HydraulicNetworkModeling = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      {/* ── Back Navigation ────────────────────────────────────────────── */}
      <section className="w-full py-6 border-b">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/services')}
            className="pl-0 hover:pl-2 transition-all"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Button>
        </div>
      </section>

      {/* ── Hero Section ───────────────────────────────────────────────── */}
      <section className="relative w-full py-16 md:py-24 overflow-hidden">
        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge variant="outline" className="mb-4 text-primary border-primary/50">
              <Activity className="mr-1 h-3 w-3" />
              Engineering Service
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Hydraulic Network Modeling
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Hydrologic Innovation leverages industry-leading WaterGems and SewerGems platforms to
              deliver precise hydraulic modeling for water distribution and sewer collection
              systems. Our methodology transforms complex infrastructure data into actionable
              insights for pressure optimization, leak detection, and capital planning.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="/contact">
                  Request Consultation
                  <TrendingUp className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/projects">
                  View Related Projects
                  <Map className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* ── Use Cases Section ──────────────────────────────────────────── */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <Badge variant="secondary" className="mb-4">
              Applications
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              What We Model
            </h2>
            <p className="text-muted-foreground text-lg">
              From municipal water mains to industrial process networks, our hydraulic modeling
              expertise covers the full spectrum of water infrastructure systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {USE_CASES.map((useCase) => (
              <Card key={useCase.title} className="overflow-hidden hover:shadow-lg transition-all">
                <div className="h-1.5 bg-primary" />
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <useCase.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed mb-4">
                    {useCase.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {useCase.metrics.map((metric) => (
                      <div key={metric} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
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

      <Separator />

      {/* ── Methodology Section ────────────────────────────────────────── */}
      <section className="w-full py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <Badge variant="secondary" className="mb-4">
              Our Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Proven Methodology
            </h2>
            <p className="text-muted-foreground text-lg">
              A systematic four-phase approach ensures accurate models and actionable
              recommendations for every project.
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

      <Separator />

      {/* ── Tools Section ──────────────────────────────────────────────── */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <Badge variant="secondary" className="mb-4">
              Industry Tools
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Best-in-Class Software
            </h2>
            <p className="text-muted-foreground text-lg">
              We leverage WaterGems and SewerGems, the most trusted names in hydraulic modeling,
              to deliver precise and reliable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {TOOLS.map((tool) => (
              <Card key={tool.name} className="overflow-hidden hover:shadow-lg transition-all">
                <div className="h-2 bg-primary" />
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center">
                        <tool.icon className="h-7 w-7 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl mb-1">{tool.name}</CardTitle>
                        <Badge variant="secondary">{tool.badge}</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed mb-4">
                    {tool.description}
                  </CardDescription>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground">Capabilities:</p>
                    {tool.capabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* ── Deliverables Section ───────────────────────────────────────── */}
      <section className="w-full py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <Badge variant="secondary" className="mb-4">
              Project Output
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              What You Receive
            </h2>
            <p className="text-muted-foreground text-lg">
              Every modeling engagement concludes with comprehensive documentation and
              actionable deliverables tailored to your team's needs.
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

      <Separator />

      {/* ── Benefits Section ───────────────────────────────────────────── */}
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
              Our hydraulic modeling engagements consistently deliver quantifiable improvements
              across operational, financial, and compliance dimensions.
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

      <Separator />

      {/* ── CTA Section ─────────────────────────────────────────────────── */}
      <section className="w-full py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl bg-primary text-primary-foreground overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="currentColor" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#dots)" />
              </svg>
            </div>

            <div className="relative z-10 text-center py-16 px-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Ready to Optimize Your Water Network?
              </h2>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
                Schedule an assessment with our hydraulic modeling team to discuss your
                infrastructure challenges and discover how modeling can transform your operations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-primary"
                  asChild
                >
                  <a href="/contact">
                    Get Assessment
                    <TrendingUp className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <a href="/projects">
                    View Our Projects
                    <Wrench className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-primary-foreground/60">
                {[
                  'No Obligation Quote',
                  'Expert Engineering Team',
                  'Proven Results',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HydraulicNetworkModeling;
