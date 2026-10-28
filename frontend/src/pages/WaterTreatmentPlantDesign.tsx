import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Droplet,
  CheckCircle2,
  Shield,
  Globe,
  Settings,
  BarChart3,
  Wrench,
  Users,
  FileText,
  Award,
  Clock,
  Target,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/lib/toast';

// ── Page config ───────────────────────────────────────────────────────────────

const PAGE_CONFIG = {
  title: 'Water Treatment Plant Design',
  subtitle: 'Engineering Sustainable Water Solutions',
  description:
    'Hydrologic Innovation delivers comprehensive water treatment plant design services, guiding projects from initial feasibility assessment through detailed engineering design and regulatory compliance. Our team specializes in scalable, cost-effective WTP solutions for government municipalities and industrial clients.',
  heroStat: '150+',
  heroStatLabel: 'WTP Projects Delivered',
};

// ── Design Process Phases ─────────────────────────────────────────────────────

const DESIGN_PHASES = [
  {
    phase: '01',
    title: 'Feasibility Assessment',
    description:
      'Comprehensive analysis of source water quality, flow requirements, and regulatory standards. We evaluate site conditions, environmental impacts, and budget constraints to determine the most effective treatment approach.',
    icon: FileText,
  },
  {
    phase: '02',
    title: 'Conceptual Design',
    description:
      'Development of treatment process alternatives with preliminary sizing, capital cost estimates, and operational requirement assessments. We present trade-off analyses to stakeholders for informed decision-making.',
    icon: Target,
  },
  {
    phase: '03',
    title: 'Detailed Engineering',
    description:
      'Complete hydraulic and process design including structural, mechanical, and electrical specifications. All drawings, specifications, and technical documents are prepared for construction bidding and permitting.',
    icon: Settings,
  },
  {
    phase: '04',
    title: 'Compliance & Certification',
    description:
      'Coordination with regulatory agencies to secure environmental permits, operational licenses, and safety certifications. We ensure all designs meet or exceed EPA, state, and local water quality standards.',
    icon: Shield,
  },
];

// ── Core Capabilities ─────────────────────────────────────────────────────────

const CAPABILITIES = [
  {
    title: 'Conventional Treatment',
    description:
      'Full-scale conventional treatment trains including coagulation, flocculation, sedimentation, and rapid sand filtration for municipal water supplies.',
  },
  {
    title: 'Advanced Filtration',
    description:
      'Membrane technologies including microfiltration, ultrafiltration, and nanofiltration for superior pathogen removal and taste improvement.',
  },
  {
    title: 'Disinfection Systems',
    description:
      'Chlorination, UV radiation, and ozone disinfection systems designed for optimal pathogen inactivation while minimizing disinfection byproducts.',
  },
  {
    title: 'Sludge Management',
    description:
      'Thickening, dewatering, and residuals handling systems that meet environmental disposal requirements and reduce operational costs.',
  },
  {
    title: 'Chemical Dosing',
    description:
      'Precise chemical feed systems for pH adjustment, corrosion control, and enhanced coagulation using SCADA-controlled dosing pumps.',
  },
  {
    title: 'Automation & Control',
    description:
      'Full plant automation with real-time monitoring, remote operation capabilities, and predictive maintenance algorithms.',
  },
];

// ── Technologies & Standards ───────────────────────────────────────────────────

const TECHNOLOGIES = [
  { name: 'WaterGEMS', use: 'Hydraulic modeling & pipe network analysis' },
  { name: 'AutoCAD', use: 'Detailed engineering drawings & as-built documentation' },
  { name: 'EPANET', use: 'Water quality modeling & distribution analysis' },
  { name: 'CSAFE', use: 'Advanced treatment process simulation' },
  { name: 'SCADA', use: 'Real-time plant monitoring & control systems' },
];

// TODO: fetch from backend config API when available
const DESIGN_STANDARDS = [
  'EPA National Primary Drinking Water Regulations',
  'AWWA Standards for Water Treatment',
  'NSF/ANSI 60 & 61 for Chemical Safety',
  'ISO 9001 Quality Management',
  'OSHA Safety Standards for Industrial Facilities',
];

// ── Project Scale Metrics ─────────────────────────────────────────────────────

const PROJECT_METRICS = [
  { value: '150+', label: 'WTP Projects', icon: Droplet },
  { value: '50M+', label: 'Gallons/Day Capacity', icon: BarChart3 },
  { value: '30+', label: 'Years Experience', icon: Clock },
  { value: '100%', label: 'Regulatory Compliance', icon: Award },
];

// ── Client Types ──────────────────────────────────────────────────────────────

const CLIENT_TYPES = [
  {
    title: 'Municipal Governments',
    description:
      'Cities, counties, and regional water districts requiring new treatment facilities or upgrades to existing infrastructure for population growth and regulatory compliance.',
    icon: Globe,
  },
  {
    title: 'Industrial Facilities',
    description:
      'Manufacturing plants, power generation facilities, and commercial developments needing custom water treatment solutions for process water, boiler feed, or wastewater pretreatment.',
    icon: Settings,
  },
  {
    title: 'Federal & State Agencies',
    description:
      'Defense installations, federal complexes, and state-run facilities requiring reliable, compliant water treatment systems with stringent quality assurance requirements.',
    icon: Shield,
  },
];

// ── Page Component ─────────────────────────────────────────────────────────────

const WaterTreatmentPlantDesign = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    toast.success('Contact request initiated', {
      description: 'Our WTP engineering team will reach out within 24 hours.',
    });
    navigate('/contact');
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* ── Hero Section ────────────────────────────────────────────────── */}
      <section className="relative w-full py-12 md:py-20 overflow-hidden">
        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/services')}
            className="mb-6 pl-0 hover:pl-0 hover:bg-transparent hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero text content */}
            <div className="flex flex-col space-y-6">
              <div className="space-y-4">
                <Badge variant="outline" className="w-fit text-primary border-primary/50">
                  <Droplet className="mr-1 h-3 w-3" />
                  Engineering Services
                </Badge>

                <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                  {PAGE_CONFIG.title}
                </h1>

                <p className="text-xl text-muted-foreground font-medium">
                  {PAGE_CONFIG.subtitle}
                </p>

                <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
                  {PAGE_CONFIG.description}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" onClick={handleContactClick}>
                  Request Consultation
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate('/projects')}>
                  View Our Projects
                </Button>
              </div>
            </div>

            {/* Hero visual - stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {PROJECT_METRICS.map((metric) => (
                <Card key={metric.label} className="text-center p-6 hover:shadow-md transition-shadow">
                  <metric.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary mb-1">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* ── Design Process Section ──────────────────────────────────────── */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <Badge variant="secondary" className="mb-4">
              Our Methodology
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              End-to-End Design Process
            </h2>
            <p className="text-muted-foreground text-lg">
              From initial feasibility studies to regulatory approval, our structured approach
              ensures every project meets technical requirements and stays within budget and schedule.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DESIGN_PHASES.map((phase) => (
              <Card key={phase.phase} className="relative overflow-hidden hover:shadow-lg transition-all">
                <div className="h-1 bg-primary" />
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <phase.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm font-mono text-muted-foreground">{phase.phase}</span>
                  </div>
                  <CardTitle className="text-lg">{phase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {phase.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* ── Core Capabilities Section ──────────────────────────────────── */}
      <section className="w-full py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <Badge variant="outline" className="mb-4 text-primary border-primary/50">
                  Technical Expertise
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  Core Capabilities
                </h2>
                <p className="text-muted-foreground text-lg">
                  Our engineering team brings decades of hands-on experience designing water treatment
                  facilities that reliably produce safe drinking water while minimizing operational costs.
                </p>
              </div>

              <div className="space-y-4">
                {CAPABILITIES.map((cap) => (
                  <div key={cap.title} className="flex gap-4">
                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{cap.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {cap.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual - technology card */}
            <div className="space-y-6">
              <Card className="overflow-hidden">
                <div className="h-2 bg-primary" />
                <CardHeader>
                  <CardTitle className="text-xl">Technologies We Use</CardTitle>
                  <CardDescription>
                    Industry-leading software and control systems
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {TECHNOLOGIES.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center justify-between py-2 border-b last:border-0"
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center">
                            <Zap className="h-4 w-4 text-primary" />
                          </div>
                          <span className="font-medium">{tech.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground text-right">
                          {tech.use}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Design Standards</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {DESIGN_STANDARDS.map((standard) => (
                      <Badge key={standard} variant="secondary">
                        {standard}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* ── Client Types Section ────────────────────────────────────────── */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <Badge variant="secondary" className="mb-4">
              Who We Serve
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Trusted by Leading Organizations
            </h2>
            <p className="text-muted-foreground text-lg">
              Our water treatment plant design expertise serves diverse clients across government,
              industrial, and federal sectors with customized solutions for every scale of operation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {CLIENT_TYPES.map((client) => (
              <Card key={client.title} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <client.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{client.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {client.description}
                  </CardDescription>
                </CardContent>
              </Card>
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
              <Users className="h-12 w-12 mx-auto mb-4 opacity-80" />
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Ready to Start Your WTP Project?
              </h2>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
                Our engineering team has the expertise to design a water treatment solution
                that meets your capacity requirements, budget constraints, and regulatory obligations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-primary"
                  onClick={handleContactClick}
                >
                  Schedule a Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10"
                  onClick={() => navigate('/projects')}
                >
                  View Past Projects
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WaterTreatmentPlantDesign;
