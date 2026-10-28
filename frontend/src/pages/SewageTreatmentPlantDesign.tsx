import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Award,
  CheckCircle2,
  Factory,
  Globe,
  Handshake,
  Leaf,
  Settings,
  Waves,
  Droplets,
  BarChart3,
  Clock,
  FileCheck,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/lib/toast';

// ── Mock data ─────────────────────────────────────────────────────────────────

// TODO: fetch from backend config API when available
const TREATMENT_PROCESSES = [
  {
    title: 'Preliminary Treatment',
    description:
      'Screening, grit removal, and flow measurement to protect downstream equipment and optimize processing efficiency.',
  },
  {
    title: 'Primary Sedimentation',
    description:
      'Physical separation of settleable solids and floating materials in primary clarifiers.',
  },
  {
    title: 'Biological Treatment',
    description:
      'Activated sludge, trickling filters, or biofilm reactors for organic matter removal and nutrient reduction.',
  },
  {
    title: 'Nutrient Removal',
    description:
      'Nitrification, denitrification, and phosphorus removal to meet stringent effluent standards.',
  },
  {
    title: 'Tertiary Treatment',
    description:
      'Advanced filtration, UV disinfection, or chemical polishing for water quality objectives.',
  },
  {
    title: 'Sludge Management',
    description:
      'Thickening, digestion, dewatering, and resource recovery including biogas generation.',
  },
];

// TODO: fetch from backend config API when available
const COMPLIANCE_STANDARDS = [
  'WHO wastewater reuse guidelines',
  'USEPA effluent guidelines (40 CFR Part 503)',
  'EU Urban Wastewater Treatment Directive',
  'National environmental discharge standards',
  'Local authority permit requirements',
  'Receiving water body classification standards',
];

// TODO: fetch from backend config API when available
const EFFLUENT_STANDARDS = [
  { parameter: 'BOD5', typical: '< 10 mg/L', stringent: '< 5 mg/L' },
  { parameter: 'TSS', typical: '< 10 mg/L', stringent: '< 5 mg/L' },
  { parameter: 'Ammonia-N', typical: '< 2 mg/L', stringent: '< 0.5 mg/L' },
  { parameter: 'Total Phosphorus', typical: '< 1 mg/L', stringent: '< 0.3 mg/L' },
  { parameter: 'Total Nitrogen', typical: '< 10 mg/L', stringent: '< 5 mg/L' },
  { parameter: 'E. coli', typical: '< 100 CFU/100mL', stringent: '< 10 CFU/100mL' },
];

// TODO: fetch from backend config API when available
const PROJECT_PHASES = [
  { phase: '01', title: 'Feasibility & Site Assessment', duration: '2-4 weeks' },
  { phase: '02', title: 'Process Design & Pilot Studies', duration: '4-8 weeks' },
  { phase: '03', title: 'Detailed Engineering Design', duration: '8-16 weeks' },
  { phase: '04', title: 'Procurement Support', duration: 'Ongoing' },
  { phase: '05', title: 'Construction Oversight', duration: 'Project-dependent' },
  { phase: '06', title: 'Commissioning & Startup', duration: '4-8 weeks' },
];

// TODO: fetch from backend config API when available
const CLIENT_TYPES = [
  {
    title: 'Municipal Utilities',
    description:
      'Municipal sewage treatment for towns and cities, designed for current and future population growth.',
    icon: Factory,
  },
  {
    title: 'Industrial Facilities',
    description:
      'Custom industrial wastewater treatment solutions for manufacturing, food processing, and heavy industry.',
    icon: Settings,
  },
  {
    title: 'Government Bodies',
    description:
      'Large-scale infrastructure projects for government agencies with stringent regulatory and environmental requirements.',
    icon: Globe,
  },
  {
    title: 'Real Estate Developers',
    description:
      'On-site sewage treatment for residential and commercial developments in areas without municipal sewer access.',
    icon: Award,
  },
];

// TODO: fetch from backend config API when available
const CAPABILITIES = [
  'Municipal wastewater treatment (5,000 to 500,000+ PE)',
  'Industrial effluent treatment and pretreatment',
  'Package treatment plant specifications',
  'Retrofit and upgrade designs for existing facilities',
  'Effluent recycling and water reuse systems',
  'Odor control systems engineering',
  'Energy-efficient aeration system design',
  'Sludge-to-energy recovery systems',
  'Real-time monitoring and SCADA integration',
  'Operations and maintenance manual development',
];

// TODO: fetch from backend config API when available
const FAQS = [
  {
    question: 'What is the typical timeline for STP design?',
    answer:
      'Project timelines vary based on complexity and regulatory requirements. A typical municipal STP design project ranges from 6 months to 2 years from feasibility through commissioning. We provide detailed project schedules during the initial assessment phase.',
  },
  {
    question: 'How do you handle variable flow conditions?',
    answer:
      'Our designs incorporate flow equalization basins, adjustable aeration rates, and flexible treatment trains that adapt to diurnal, seasonal, and emergency flow variations while maintaining consistent effluent quality.',
  },
  {
    question: 'What effluent standards can be achieved?',
    answer:
      'Our advanced treatment trains routinely achieve BOD < 10 mg/L, TSS < 10 mg/L, NH3-N < 2 mg/L, and TP < 1 mg/L, exceeding typical discharge permit limits. We also design for water reuse standards where applicable.',
  },
  {
    question: 'Do you provide operations training?',
    answer:
      'Yes, we provide comprehensive operator training, maintenance staff certification programs, and ongoing technical support during the warranty period. Our O&M manuals are tailored to your specific equipment and staffing configuration.',
  },
];

const SewageTreatmentPlantDesign = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    toast.success('Redirecting to contact form', {
      description: 'Our STP engineering team will respond within 24 hours.',
    });
    navigate('/contact');
  };

  return (
    <div className="min-h-screen">
      {/* ── Hero Section ────────────────────────────────────────────────────── */}
      <section className="relative w-full">
        <div className="relative w-full h-64 md:h-72 lg:h-80 rounded-xl overflow-hidden mx-4 mt-4 lg:mx-8">
          <img
            src="https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?w=1200&h=600&fit=crop"
            alt="Sewage Treatment Plant"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-8 lg:p-10">
            <Badge
              variant="secondary"
              className="w-fit mb-3 bg-white/20 text-white border-white/30 backdrop-blur-sm"
            >
              Wastewater Engineering
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Sewage Treatment Plant Design
            </h1>
            <p className="text-base md:text-lg text-white/80 max-w-3xl">
              Comprehensive STP Engineering Solutions
            </p>
          </div>
        </div>
      </section>

      {/* ── Back Button & Main Content ─────────────────────────────────────── */}
      <div className="container mx-auto max-w-7xl px-4 lg:px-8 py-8">
        {/* Back navigation */}
        <Button
          variant="ghost"
          onClick={() => navigate('/services')}
          className="mb-6 pl-0 hover:bg-transparent hover:pl-2 transition-all duration-200"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Services
        </Button>

        {/* Overview Section */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                End-to-End Sewage Treatment Plant Engineering
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Hydrologic Innovation provides comprehensive Sewage Treatment Plant engineering
                services, covering biological treatment process design, environmental compliance,
                and effluent quality management. From concept through commissioning, our team
                delivers STP solutions tailored to the unique needs of municipalities, industrial
                facilities, and government clients, ensuring reliable treatment that protects
                public health and the environment.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button onClick={handleContact}>Request Consultation</Button>
                <Button variant="outline" onClick={() => navigate('/projects')}>
                  View Related Projects
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '150+', label: 'STP Projects' },
                { value: '98%', label: 'Permit Compliance' },
                { value: '40+', label: 'Years Combined Exp.' },
                { value: '30+', label: 'Municipal Clients' },
              ].map((stat) => (
                <Card key={stat.label} className="text-center p-4">
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* ── Key Strengths ─────────────────────────────────────────────────── */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">
            Our Approach
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-card rounded-xl border p-6">
              <Leaf className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Environmental Protection</h3>
              <p className="text-sm text-muted-foreground">
                Treatment processes designed to meet or exceed all applicable discharge standards
                and protect receiving water bodies.
              </p>
            </div>
            <div className="bg-card rounded-xl border p-6">
              <Handshake className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Infrastructure Integration</h3>
              <p className="text-sm text-muted-foreground">
                Seamless connection with existing collection systems and downstream reuse
                infrastructure.
              </p>
            </div>
            <div className="bg-card rounded-xl border p-6">
              <Settings className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Process Reliability</h3>
              <p className="text-sm text-muted-foreground">
                Robust designs with redundancy and flexibility to handle variable loads and
                emergency conditions.
              </p>
            </div>
            <div className="bg-card rounded-xl border p-6">
              <Award className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Proven Track Record</h3>
              <p className="text-sm text-muted-foreground">
                Decades of STP experience across diverse industries and regulatory environments.
              </p>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* ── Treatment Processes ─────────────────────────────────────────── */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Biological Treatment Processes
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Our engineers specialize in designing treatment processes tailored to your influent
            characteristics, space constraints, and discharge objectives.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TREATMENT_PROCESSES.map((process) => (
              <Card key={process.title} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{process.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{process.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* ── Effluent Quality Standards ────────────────────────────────────── */}
        <section className="mb-16">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <Droplets className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold">
                Effluent Quality Standards
              </h2>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              Our advanced treatment trains are designed to achieve superior effluent quality
              that meets or exceeds stringent discharge requirements. Typical achieved values:
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Typical Effluent Parameters</CardTitle>
              <CardDescription>
                Designed treatment performance vs. stringent water reuse standards
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {EFFLUENT_STANDARDS.map((std) => (
                  <div
                    key={std.parameter}
                    className="bg-muted/50 rounded-lg p-4 text-center"
                  >
                    <div className="text-sm font-medium text-muted-foreground mb-2">
                      {std.parameter}
                    </div>
                    <div className="text-lg font-bold text-primary mb-1">{std.typical}</div>
                    <div className="text-xs text-muted-foreground">
                      Reuse: {std.stringent}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* ── Environmental Compliance ───────────────────────────────────── */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">
            Compliance & Standards
          </h2>
          <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900">
            <CardContent className="p-8">
              <div className="flex items-center gap-2 mb-6">
                <FileCheck className="h-6 w-6 text-green-600" />
                <h3 className="text-lg font-semibold">International & Local Standards</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Our STP designs are developed in full compliance with applicable international
                and local standards:
              </p>
              <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {COMPLIANCE_STANDARDS.map((standard) => (
                  <li key={standard} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm">{standard}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* ── Project Phases Timeline ─────────────────────────────────────── */}
        <section className="mb-16">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold">
                Project Lifecycle: Concept Through Commissioning
              </h2>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              From initial feasibility through final commissioning, our structured approach
              ensures quality and transparency at every stage of your STP project.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROJECT_PHASES.map((item) => (
              <Card key={item.phase} className="relative overflow-hidden">
                <div className="absolute top-0 left-0 h-1 w-full bg-primary" />
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="font-mono text-sm">
                      Phase {item.phase}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {item.duration}
                    </div>
                  </div>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* ── Capabilities List ───────────────────────────────────────────── */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                Technical Capabilities
              </h2>
              <p className="text-muted-foreground mb-6">
                Our team brings comprehensive expertise across the full spectrum of sewage
                treatment plant design and related infrastructure.
              </p>
              <Button onClick={handleContact}>Discuss Your Project</Button>
            </div>
            <div>
              <ul className="grid gap-3">
                {CAPABILITIES.map((cap) => (
                  <li key={cap} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* ── Client Types ────────────────────────────────────────────────── */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">Who We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CLIENT_TYPES.map((client) => {
              const Icon = client.icon;
              return (
                <Card key={client.title} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{client.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{client.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <Separator className="my-12" />

        {/* ── FAQ Section ─────────────────────────────────────────────────── */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {FAQS.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-base leading-snug">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {faq.answer}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* ── CTA Section ─────────────────────────────────────────────────── */}
        <section className="mb-8">
          <div className="bg-card rounded-2xl border p-8 md:p-12 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users className="h-6 w-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-semibold">
                Ready to Start Your STP Project?
              </h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Our sewage treatment plant engineering team is ready to help you navigate the
              entire process from feasibility assessment through commissioning. Contact us
              today to discuss your project requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={handleContact}>
                Request a Consultation
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+18005551234">Call +1 (800) 555-1234</a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SewageTreatmentPlantDesign;