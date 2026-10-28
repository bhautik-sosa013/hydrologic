import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Building2,
  Landmark,
  Home,
  Factory,
  Sprout,
  Droplets,
  Users,
  MapPin,
  AlertTriangle,
  Recycle,
  Waves,
  ShieldCheck,
} from 'lucide-react';

const INDUSTRIES = [
  {
    id: 'urban-infrastructure',
    icon: Building2,
    title: 'Urban Infrastructure',
    subtitle: 'Municipal Water & Sewer Networks',
    challenges: [
      'Aging pipe networks with high non-revenue water losses',
      'Rapid urbanization outpacing infrastructure capacity',
      'Intermittent supply causing contamination risks',
      'Inadequate stormwater management leading to urban flooding',
    ],
    solutions: [
      'Advanced hydraulic modeling for network optimization',
      'Pressure zone management to reduce losses and leaks',
      'SCADA integration for real-time monitoring and control',
      'Smart meter deployment for consumption analytics',
    ],
  },
  {
    id: 'government-projects',
    icon: Landmark,
    title: 'Government Projects',
    subtitle: 'Public Water Utilities & Civic Infrastructure',
    challenges: [
      'Large-scale projects with multiple stakeholders',
      'Regulatory compliance across multiple agencies',
      'Budget constraints requiring cost-optimized designs',
      'Public health and safety prioritization',
    ],
    solutions: [
      'Comprehensive feasibility studies and environmental impact assessments',
      'Phased implementation strategies to manage capital expenditure',
      'Public-private partnership models for sustainable project delivery',
      'Community engagement frameworks for stakeholder alignment',
    ],
  },
  {
    id: 'real-estate',
    icon: Home,
    title: 'Real Estate Development',
    subtitle: 'Residential & Commercial Complexes',
    challenges: [
      'Integration with existing municipal infrastructure',
      'Water-efficient design for sustainable certifications',
      'On-site sewage treatment and recycling requirements',
      'Stormwater detention and groundwater recharge mandates',
    ],
    solutions: [
      'End-to-end water infrastructure design from source to disposal',
      'Rainwater harvesting and greywater recycling systems',
      'On-site STP design with reclaimed water for landscaping',
      'Stormwater management plans meeting local ordinances',
    ],
  },
  {
    id: 'industrial-facilities',
    icon: Factory,
    title: 'Industrial Facilities',
    subtitle: 'Manufacturing & Process Water Systems',
    challenges: [
      'High-volume water requirements for cooling and processing',
      'Strict effluent discharge standards and environmental compliance',
      'Zero liquid discharge goals for certain industries',
      'Energy-efficient operations amid rising utility costs',
    ],
    solutions: [
      'Customized water treatment solutions for process-specific needs',
      'Zero liquid discharge systems and brine management',
      'Water reuse and recycling system design',
      'Energy recovery systems from wastewater streams',
    ],
  },
  {
    id: 'agriculture',
    icon: Sprout,
    title: 'Agriculture',
    subtitle: 'Irrigation & Farm Water Management',
    challenges: [
      'Groundwater depletion and surface water scarcity',
      'Energy costs associated with pumping and irrigation',
      'Salinity management in irrigated lands',
      'Climate variability affecting water availability',
    ],
    solutions: [
      'Precision irrigation design optimizing water application efficiency',
      'Surface and groundwater interaction modeling',
      'Drip irrigation and micro-irrigation system planning',
      'Climate-resilient water storage and distribution networks',
    ],
  },
];

const KEY_CAPABILITIES = [
  {
    icon: Waves,
    title: 'Hydraulic Modeling',
    description: 'Advanced simulation of water flow patterns, pressure distributions, and network behavior under varying demand scenarios.',
  },
  {
    icon: MapPin,
    title: 'GIS Integration',
    description: 'Spatial analysis and asset mapping to optimize infrastructure planning and maintenance operations.',
  },
  {
    icon: AlertTriangle,
    title: 'Leak Detection',
    description: 'Non-invasive methods to identify and localize leaks, reducing water loss and operational costs.',
  },
  {
    icon: Recycle,
    title: 'Water Reuse',
    description: 'Treatment and recycling systems that close the water loop, minimizing freshwater consumption.',
  },
  {
    icon: Users,
    title: 'Stakeholder Management',
    description: 'Coordinated approaches to align government, community, and private sector interests.',
  },
  {
    icon: ShieldCheck,
    title: 'Regulatory Compliance',
    description: 'Expertise in navigating environmental regulations and ensuring projects meet all applicable standards.',
  },
];

const STATS = [
  { value: '5', label: 'Industry Sectors' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '15+', label: 'Cities Served' },
  { value: '95%', label: 'Client Satisfaction' },
];

const Industries = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-50" />
        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Droplets className="mr-1 h-3 w-3" />
              Our Expertise
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Industries We Serve
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Hydrologic Innovation delivers specialized water engineering solutions across
              five key sectors. Each industry presents unique challenges, and our multidisciplinary
              expertise allows us to design systems that address specific operational, environmental,
              and regulatory requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Sectors Section */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid-lg opacity-60" />
        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              Sector Solutions
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Water Engineering Across Key Sectors
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              From municipal networks to agricultural fields, we bring precision engineering
              to every water infrastructure challenge.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((industry) => (
              <Card
                key={industry.id}
                className="hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <industry.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{industry.title}</CardTitle>
                      <CardDescription className="text-primary/80 font-medium text-xs mt-0.5">
                        {industry.subtitle}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-1.5">
                      <AlertTriangle className="h-3.5 w-3.5 text-amber-500" />
                      Key Challenges
                    </h4>
                    <ul className="space-y-1.5">
                      {industry.challenges.map((challenge, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">-</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-1.5">
                      <Droplets className="h-3.5 w-3.5 text-primary" />
                      Our Solutions
                    </h4>
                    <ul className="space-y-1.5">
                      {industry.solutions.map((solution, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-0.5">
                            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto" />

      {/* Key Capabilities Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-background via-primary/5 to-background overflow-hidden">
        <div className="absolute inset-0 bg-line-grid opacity-70" />
        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              Our Capabilities
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Cross-Industry Technical Expertise
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Regardless of sector, our work is grounded in advanced hydraulic engineering,
              spatial analytics, and sustainable design principles.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {KEY_CAPABILITIES.map((capability) => (
              <Card key={capability.title} className="hover:shadow-md transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <capability.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-base">{capability.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto" />

      {/* Stats/Impact Section */}
      <section className="relative py-16 md:py-20 border-t border-border overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-55" />
        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              Our Reach
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Impact Across Sectors
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Droplets className="h-6 w-6 text-primary" />
                  <span className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</span>
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-primary/5 overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid-lg opacity-50" />
        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4">
              Ready to Discuss Your Project?
            </h2>
            <p className="text-muted-foreground mb-6">
              Whether you are in municipal infrastructure, real estate development,
              or agricultural operations, our team is ready to help you solve
              your most complex water engineering challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
              >
                Contact Our Team
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;