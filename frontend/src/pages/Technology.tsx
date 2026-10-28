import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Cpu,
  Database,
  Globe,
  Layers,
  LineChart,
  Map,
  Monitor,
  Network,
  Settings2,
  Shield,
  Activity,
  Sparkles,
  TrendingUp,
  Droplets,
  Zap,
} from 'lucide-react';

// TODO: fetch from backend config API when available
const SOFTWARE_TOOLS = [
  {
    id: 'watergems',
    name: 'WaterGems',
    category: 'Hydraulic Modeling',
    description:
      'Industry-leading water distribution network modeling software for analyzing pressure, flow, and water quality in municipal systems.',
    icon: Droplets,
    features: [
      'Pressure zone analysis',
      'Fire flow simulation',
      'Water quality tracing',
      'Energy consumption optimization',
      'Scenario planning',
    ],
  },
  {
    id: 'sewergems',
    name: 'SewerGems',
    category: 'Sanitary Sewer Modeling',
    description:
      'Comprehensive sewer and stormwater modeling solution for collection system analysis and design optimization.',
    icon: Database,
    features: [
      'Flow monitoring analysis',
      'Rainfall-derived infiltration/inflow',
      'Sewer system capacity analysis',
      'Pump station modeling',
      'Sewer overflow management',
    ],
  },
  {
    id: 'gis',
    name: 'GIS Platforms',
    category: 'Spatial Analysis',
    description:
      'Geographic Information Systems integration for spatial data management, asset tracking, and network visualization.',
    icon: Globe,
    features: [
      'Spatial data mapping',
      'Asset management',
      'Network visualization',
      'Hydraulic model integration',
      'Data-driven planning',
    ],
  },
  {
    id: 'digital-twin',
    name: 'Digital Twin Platform',
    category: 'Simulation-Driven Design',
    description:
      'Real-time digital replicas of water infrastructure enabling simulation-driven design decisions with unprecedented accuracy.',
    icon: Monitor,
    features: [
      'Real-time system monitoring',
      'Predictive analytics',
      'What-if scenario simulation',
      'Risk assessment modeling',
      'Outcome optimization',
    ],
  },
];

// TODO: fetch from backend config API when available
const METHODOLOGIES = [
  {
    icon: Activity,
    title: 'Simulation-Driven Design',
    description:
      'We run thousands of simulations before a single pipe is laid. Our models account for population growth, climate variability, and demand fluctuations to ensure infrastructure remains resilient decades into the future.',
  },
  {
    icon: Network,
    title: 'Network Analysis',
    description:
      'Every node, valve, and junction in the network is modeled with precision. This allows us to identify bottlenecks, optimize pressure zones, and design redundant systems that maintain service during failures.',
  },
  {
    icon: LineChart,
    title: 'Data-Driven Decisions',
    description:
      'Our approach is rooted in empirical data and computational analysis. By integrating sensor data, SCADA feeds, and GIS layers, we make decisions that are traceable, repeatable, and defensible.',
  },
  {
    icon: Shield,
    title: 'Risk Mitigation',
    description:
      'Through probabilistic modeling and sensitivity analysis, we identify failure modes and design mitigation strategies. The result is infrastructure that performs reliably under both expected conditions and extreme events.',
  },
  {
    icon: TrendingUp,
    title: 'Scalability Planning',
    description:
      'We design systems with tomorrow in mind. Our models incorporate growth projections, land-use changes, and climate scenarios to ensure your infrastructure scales with demand.',
  },
  {
    icon: Sparkles,
    title: 'Accuracy & Precision',
    description:
      'With sub-meter elevation data, calibrated roughness coefficients, and validated boundary conditions, our models achieve accuracy levels that traditional design methods cannot match.',
  },
];

// TODO: fetch from backend config API when available
const CAPABILITIES = [
  {
    icon: Settings2,
    title: 'Model Calibration',
    detail: 'Field-validated models with measured flow and pressure data for high-confidence predictions.',
  },
  {
    icon: Layers,
    title: 'Multi-Scenario Analysis',
    detail: 'Compare hundreds of design alternatives side-by-side with automated performance scoring.',
  },
  {
    icon: Map,
    title: 'Geospatial Integration',
    detail: 'Seamless integration with Esri, AutoCAD, and Google Earth for visual planning and stakeholder presentations.',
  },
  {
    icon: Cpu,
    title: 'Automated Optimization',
    detail: 'AI-assisted pipe sizing and network configuration to minimize capital and operational costs.',
  },
  {
    icon: Zap,
    title: 'Rapid Prototyping',
    detail: 'From concept to validated design in days, not months. Accelerate project timelines without compromising quality.',
  },
  {
    icon: Globe,
    title: 'Climate Resilience',
    detail: 'Stress-test infrastructure against drought, flood, and changing demand patterns driven by climate change.',
  },
];

const Technology = () => {
  const [activeTool, setActiveTool] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-50" />
        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Cpu className="mr-1 h-3 w-3" />
              Advanced Engineering Tools
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Technology & Tools
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Hydrologic Innovation leverages industry-leading computational tools and
              simulation platforms to deliver precision-engineered water infrastructure
              solutions. Our digital twin approach transforms complex hydraulic challenges
              into data-driven designs that stand the test of time.
            </p>
          </div>
        </div>
      </section>

      {/* Software Tools Section */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid-lg opacity-60" />
        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              Software Portfolio
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Industry-Leading Engineering Tools
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              We utilize best-in-class hydraulic modeling and GIS platforms to analyze,
              design, and optimize water and sewer infrastructure with precision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {SOFTWARE_TOOLS.map((tool) => {
              const Icon = tool.icon;
              const isActive = activeTool === tool.id;
              return (
                <Card
                  key={tool.id}
                  className={`cursor-pointer transition-all duration-300 ${
                    isActive
                      ? 'ring-2 ring-primary shadow-lg'
                      : 'hover:shadow-lg hover:border-primary/30'
                  }`}
                  onClick={() => setActiveTool(isActive ? null : tool.id)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{tool.name}</CardTitle>
                          <CardDescription className="text-primary/70 font-medium">
                            {tool.category}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {isActive ? 'Expanded' : 'Click to explore'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{tool.description}</p>
                    {isActive && (
                      <div className="mt-4 pt-4 border-t">
                        <p className="text-sm font-semibold mb-3 text-foreground">
                          Key Capabilities:
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          {tool.features.map((feature) => (
                            <div
                              key={feature}
                              className="flex items-center gap-2 text-sm text-muted-foreground"
                            >
                              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto" />

      {/* Digital Twin Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-background via-primary/5 to-background overflow-hidden">
        <div className="absolute inset-0 bg-line-grid opacity-70" />
        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
                Innovation
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                Digital Twin Approach to Infrastructure Modeling
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our digital twin platform creates a living, breathing replica of your water
                infrastructure — a virtual copy that updates in real-time and can be
                interrogated, stress-tested, and optimized before any physical work begins.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                This simulation-driven design methodology reduces risk, improves accuracy,
                and delivers better outcomes for complex water system projects. By running
                thousands of scenarios virtually, we identify the optimal solution before
                committing resources to construction.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  Reduced Risk
                </Badge>
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  Improved Accuracy
                </Badge>
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  Better Outcomes
                </Badge>
              </div>
            </div>

            <div className="relative">
              <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5">
                <CardHeader>
                  <CardTitle className="text-lg">Digital Twin Benefits</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                      <Monitor className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Real-Time Monitoring</p>
                      <p className="text-xs text-muted-foreground">
                        Continuous data feeds from SCADA and sensors keep the digital twin
                        synchronized with actual system behavior.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                      <LineChart className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Predictive Analytics</p>
                      <p className="text-xs text-muted-foreground">
                        Machine learning models predict future states, identify emerging
                        issues, and recommend interventions before failures occur.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                      <Activity className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">What-If Simulation</p>
                      <p className="text-xs text-muted-foreground">
                        Test any scenario virtually: pipe bursts, demand spikes, equipment
                        failures, climate events — without disrupting real service.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                      <TrendingUp className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Outcome Optimization</p>
                      <p className="text-xs text-muted-foreground">
                        Automated optimization algorithms find the lowest-cost, highest-
                        performance design solutions across thousands of alternatives.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto" />

      {/* Methodology Section */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-55" />
        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              Our Approach
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Simulation-Driven Design Methodology
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Every project begins with a question: what does success look like in 50 years?
              Our methodology ensures the answer remains valid through rigorous modeling,
              validation, and continuous refinement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {METHODOLOGIES.map((method) => (
              <Card
                key={method.title}
                className="hover:shadow-lg transition-shadow duration-300 border-primary/10"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <method.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-base">{method.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {method.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto" />

      {/* Capabilities Grid */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-background via-primary/5 to-background overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-50" />
        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              Technical Capabilities
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              What Sets Our Approach Apart
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Our combination of cutting-edge software, rigorous methodology, and
              experienced engineers delivers results that traditional design firms cannot
              match.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CAPABILITIES.map((cap) => (
              <Card key={cap.title} className="hover:border-primary/30 transition-colors">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                      <cap.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">{cap.title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {cap.detail}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="relative py-16 md:py-20 border-t border-border overflow-hidden">
        <div className="absolute inset-0 bg-line-grid-sm opacity-65" />
        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-primary/10 via-card to-primary/5 border-primary/20">
            <CardContent className="text-center py-12 px-6">
              <h2 className="text-2xl font-bold mb-4">
                Experience the Difference of Simulation-Driven Design
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                Whether you are planning a new distribution network, upgrading a treatment
                plant, or optimizing an existing system, our technology-driven approach
                delivers certainty where traditional methods leave you guessing.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="outline" className="px-4 py-2 text-sm">
                  WaterGems & SewerGems Certified
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-sm">
                  GIS Integration Specialists
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-sm">
                  Digital Twin Pioneers
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Technology;
