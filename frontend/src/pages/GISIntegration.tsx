import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Map,
  Layers,
  Database,
  BarChart3,
  Globe,
  FileText,
  CheckCircle2,
  Settings2,
  TrendingUp,
  Users,
  Building2,
  MapPin,
  Shield,
  Wrench,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

// ── Mock data ─────────────────────────────────────────────────────────────────

const DATA_CAPTURE_WORKFLOWS = [
  {
    title: 'Field Data Collection',
    description:
      'Mobile GIS applications enable field crews to capture asset data, photos, and condition assessments directly from the site. GPS-tagged entries ensure sub-meter spatial accuracy.',
    icon: MapPin,
    details: ['GPS-tagged asset locations', 'Offline-capable mobile apps', 'Real-time sync to central database'],
  },
  {
    title: 'Record Digitization',
    description:
      'Legacy paper records, CAD drawings, and scanned maps are converted to georeferenced digital formats, creating a complete historical archive searchable by location.',
    icon: FileText,
    details: ['As-built drawing georeferencing', 'Historical record integration', 'PDF and CAD format support'],
  },
  {
    title: 'Remote Sensing Integration',
    description:
      'Aerial imagery, LiDAR point clouds, and satellite data are processed to extract infrastructure features and terrain models for network modeling.',
    icon: Globe,
    details: ['Aerial photography interpretation', 'LiDAR terrain modeling', 'Satellite land-use analysis'],
  },
  {
    title: 'IoT Sensor Mapping',
    description:
      'SCADA and IoT sensor data is spatially referenced and integrated with the GIS, providing real-time operational visibility across the entire network.',
    icon: Layers,
    details: ['SCADA data spatial correlation', 'Sensor location mapping', 'Real-time telemetry overlay'],
  },
];

const HYDRAULIC_INTEGRATION = [
  {
    name: 'WaterGems',
    description:
      'Our GIS data seamlessly feeds into WaterGems hydraulic models, ensuring pipe attributes, node elevations, and demand locations reflect real-world spatial conditions.',
    capabilities: [
      'Automatic network topology generation from GIS lines',
      'Elevation and demand zone mapping',
      'Fire flow result visualization on the map',
      'Tank and pump location accuracy',
    ],
    icon: Map,
  },
  {
    name: 'SewerGems',
    description:
      'Sewer network GIS layers are directly imported into SewerGems for hydrological and hydraulic analysis, with manhole invert elevations and catchment delineation.',
    capabilities: [
      'Manhole and pipe network import',
      'Catchment area delineation from terrain',
      'Rainfall-dependent infiltration mapping',
      'Overflow node visualization',
    ],
    icon: Layers,
  },
  {
    name: 'MIKE+',
    description:
      'Integrated water distribution and rainfall-runoff modeling with full bidirectional data exchange between GIS layers and hydraulic simulation engine.',
    capabilities: [
      'Integrated urban drainage modeling',
      'Catchment-to-pipe connectivity',
      'Real-time simulation support',
      'Cross-platform data interoperability',
    ],
    icon: Database,
  },
];

const ASSET_MANAGEMENT = [
  {
    title: 'Inventory & Condition Tracking',
    description:
      'Complete asset registries with condition ratings, installation dates, material specifications, and maintenance history — all queryable by geographic area.',
    metric: '100% asset coverage',
    icon: Database,
  },
  {
    title: 'Predictive Maintenance',
    description:
      'GIS-linked analytics identify at-risk assets based on age, material, pressure history, and soil conditions, enabling proactive replacement before failures occur.',
    metric: '40% reduction in emergency repairs',
    icon: TrendingUp,
  },
  {
    title: 'Work Order Management',
    description:
      'Field crews access assigned work orders via mobile GIS, navigate to asset locations, update condition data, and close jobs with photo documentation.',
    metric: '60% faster work order cycles',
    icon: Wrench,
  },
  {
    title: 'Capital Planning',
    description:
      'Geographic prioritization engine ranks infrastructure investments by condition, consequence of failure, and population served, ensuring optimal capital allocation.',
    metric: '$2M average annual savings',
    icon: BarChart3,
  },
];

const PLANNING_INSIGHTS = [
  {
    icon: Users,
    title: 'Government Clients',
    description:
      'Municipal water departments leverage our GIS platforms to meet regulatory reporting requirements, plan rate-funded capital programs, and communicate infrastructure needs to elected officials through visual storytelling.',
  },
  {
    icon: Building2,
    title: 'Utility Companies',
    description:
      'Investor-owned and co-op utilities use our GIS analytics to optimize service territory coverage, plan expansion into new developments, and demonstrate asset integrity to state regulators.',
  },
  {
    icon: Shield,
    title: 'Regulatory Compliance',
    description:
      'Spatial reporting tools generate EPA SDWIS-compliant inventory exports, cross-connection documentation, and source water protection area delineations required for permit renewals.',
  },
  {
    icon: Settings2,
    title: 'Infrastructure Resilience',
    description:
      'Scenario modeling maps the impact of climate events, population shifts, and land-use changes on water and sewer networks, supporting long-range infrastructure resilience plans.',
  },
];

// TODO: fetch from backend config API when available
const GIS_TOOLS = [
  { name: 'ArcGIS Pro', category: 'Enterprise GIS' },
  { name: 'QGIS', category: 'Open Source GIS' },
  { name: 'AutoCAD Map 3D', category: 'CAD-GIS Integration' },
  { name: 'PostGIS', category: 'Spatial Database' },
  { name: 'GeoServer', category: 'Spatial API' },
  { name: 'Leaflet', category: 'Web Mapping' },
];

const DELIVERABLES = [
  {
    title: 'Interactive Web Map Portal',
    description: 'Password-protected online dashboard for staff and stakeholders to explore network assets, query data, and generate reports by geographic area.',
    icon: Globe,
  },
  {
    title: 'GIS-Coupled Hydraulic Model',
    description: 'Fully calibrated model with live link to GIS layers — any GIS update automatically reflects in the hydraulic simulation.',
    icon: Settings2,
  },
  {
    title: 'Asset Inventory Report',
    description: 'Comprehensive pipe and structure inventory with condition grades, material specs, installation dates, and maintenance history.',
    icon: FileText,
  },
  {
    title: 'Capital Improvement Map',
    description: 'Prioritized project locations displayed on an interactive map with cost estimates, timelines, and consequence-of-failure scores.',
    icon: MapPin,
  },
  {
    title: 'Field Mobile Application',
    description: 'Custom mobile GIS app for iOS and Android enabling field data collection, asset inspections, and work order management offline.',
    icon: Map,
  },
  {
    title: 'Regulatory Submission Package',
    description: 'EPA- and state-compliant spatial data exports, sanitary survey maps, and source water protection area documentation.',
    icon: Shield,
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────

const GISIntegration = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      {/* ── Back Navigation ────────────────────────────────────────────── */}
      <section className="w-full py-6 border-b">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(-1)}
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
              <Map className="mr-1 h-3 w-3" />
              Engineering Service
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              GIS Integration
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Hydrologic Innovation leverages Geographic Information Systems to map, analyze, and
              manage water and sewer networks spatially. Our GIS-driven approach transforms raw
              infrastructure data into actionable insights, supporting data-driven planning for
              government and utility clients across the full asset lifecycle — from initial data
              capture to long-range capital planning.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="/contact">
                  Request GIS Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
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

      {/* ── Data Capture Workflows ──────────────────────────────────────── */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <Badge variant="secondary" className="mb-4">
              Data Foundation
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Comprehensive Data Capture
            </h2>
            <p className="text-muted-foreground text-lg">
              Every GIS project begins with rigorous data capture workflows that establish a
              complete, accurate, and spatially-referenced digital twin of your water and sewer
              infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {DATA_CAPTURE_WORKFLOWS.map((workflow) => (
              <Card key={workflow.title} className="overflow-hidden hover:shadow-lg transition-all">
                <div className="h-1.5 bg-primary" />
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <workflow.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{workflow.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {workflow.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {workflow.details.map((detail) => (
                      <div key={detail} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{detail}</span>
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

      {/* ── Hydraulic Model Integration ───────────────────────────────── */}
      <section className="w-full py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <Badge variant="secondary" className="mb-4">
              Model Integration
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Seamless Hydraulic Model Integration
            </h2>
            <p className="text-muted-foreground text-lg">
              Our GIS platform maintains a live bidirectional link with industry-leading hydraulic
              modeling tools, ensuring spatial data and network simulations always stay in sync.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {HYDRAULIC_INTEGRATION.map((tool) => (
              <Card key={tool.name} className="overflow-hidden hover:shadow-lg transition-all">
                <div className="h-2 bg-primary" />
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <tool.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{tool.name}</CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {tool.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {tool.capabilities.map((cap) => (
                      <div key={cap} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
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

      {/* ── GIS Tools ──────────────────────────────────────────────────── */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <Badge variant="secondary" className="mb-4">
              Technology Stack
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Industry-Standard GIS Tools
            </h2>
            <p className="text-muted-foreground text-lg">
              We deploy a proven technology stack spanning enterprise platforms, open-source
              solutions, and custom spatial databases tailored to each client&apos;s scale and
              budget.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {GIS_TOOLS.map((tool) => (
              <Badge key={tool.name} variant="outline" className="px-4 py-2 text-sm">
                {tool.name}
                <span className="ml-2 text-muted-foreground text-xs">{tool.category}</span>
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* ── Asset Management ───────────────────────────────────────────── */}
      <section className="w-full py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <Badge variant="secondary" className="mb-4">
              Asset Lifecycle
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              GIS-Powered Asset Management
            </h2>
            <p className="text-muted-foreground text-lg">
              Move beyond reactive maintenance with a spatially-enabled asset management system
              that tracks the full lifecycle of every infrastructure component.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ASSET_MANAGEMENT.map((item) => (
              <Card key={item.title} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed mb-4">
                    {item.description}
                  </CardDescription>
                  <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5">
                    {item.metric}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* ── Infrastructure Planning Insights ───────────────────────────── */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <Badge variant="secondary" className="mb-4">
              Client Solutions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Data-Driven Infrastructure Planning
            </h2>
            <p className="text-muted-foreground text-lg">
              Our GIS analytics platform transforms spatial data into strategic insights that
              support capital investment decisions, regulatory compliance, and long-range
              infrastructure resilience planning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {PLANNING_INSIGHTS.map((insight) => (
              <div key={insight.title} className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <insight.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{insight.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{insight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* ── Deliverables ───────────────────────────────────────────────── */}
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
              Every GIS integration engagement delivers a suite of tangible products that empower
              your team to manage, analyze, and plan your infrastructure with confidence.
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

      {/* ── CTA Section ────────────────────────────────────────────────── */}
      <section className="w-full py-16 md:py-24">
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
                Ready to Unlock Your Infrastructure Data?
              </h2>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
                Schedule a GIS readiness assessment with our team to discover how spatial
                analysis can transform your water and sewer network planning, compliance
                reporting, and capital investment strategy.
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
                    <ArrowRight className="ml-2 h-5 w-5" />
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
                    <Map className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-primary-foreground/60">
                {[
                  'No Obligation Quote',
                  'Expert GIS Engineers',
                  'Proven Municipal Results',
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

export default GISIntegration;