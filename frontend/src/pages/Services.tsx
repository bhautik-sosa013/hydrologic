import { useNavigate } from 'react-router-dom';
import {
  Activity,
  Droplets,
  Map,
  Leaf,
  Waves,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// TODO: fetch from backend config API when available
const SERVICES = [
  {
    id: 'hydraulic-network-modeling',
    title: 'Hydraulic Network Modeling',
    shortDescription:
      'Advanced hydraulic modeling using industry-leading WaterGems and SewerGems for urban water distribution and sewer analysis.',
    icon: Activity,
    path: '/services/hydraulic-network-modeling',
    features: [
      'Pressure optimization analysis',
      'Leak detection capabilities',
      'Urban water distribution',
      'Sewer network analysis',
    ],
  },
  {
    id: 'water-treatment-plant-design',
    title: 'Water Treatment Plant Design',
    shortDescription:
      'Comprehensive WTP design services from feasibility assessment through detailed engineering and compliance certification.',
    icon: Droplets,
    path: '/services/water-treatment-plant-design',
    features: [
      'Feasibility assessment',
      'Detailed engineering design',
      'Regulatory compliance',
      'Scalable solutions',
    ],
  },
  {
    id: 'sewage-treatment-plant-design',
    title: 'Sewage Treatment Plant Design',
    shortDescription:
      'Biological treatment process design and environmental compliance for municipalities and industrial facilities.',
    icon: Waves,
    path: '/services/sewage-treatment-plant-design',
    features: [
      'Biological treatment processes',
      'Effluent quality standards',
      'Environmental compliance',
      'Infrastructure integration',
    ],
  },
  {
    id: 'gis-integration',
    title: 'GIS Integration',
    shortDescription:
      'Geographic Information Systems mapping and analysis for water and sewer network management and asset tracking.',
    icon: Map,
    path: '/services/gis-integration',
    features: [
      'Spatial data mapping',
      'Hydraulic model integration',
      'Asset management',
      'Data-driven planning',
    ],
  },
  {
    id: 'environmental-and-irrigation-consulting',
    title: 'Environmental & Irrigation Consulting',
    shortDescription:
      'Hydrological modeling, sustainability frameworks, and precision irrigation design for agricultural and government clients.',
    icon: Leaf,
    path: '/services/environmental-and-irrigation-consulting',
    features: [
      'Environmental impact assessment',
      'Precision irrigation design',
      'Sustainability frameworks',
      'Water resource management',
    ],
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid-lg opacity-60" />
      <div className="container relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-normal tracking-tight mb-4">
          Engineering Services
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Hydrologic Innovation offers a comprehensive suite of water engineering
          services, leveraging cutting-edge tools and methodologies to deliver
          sustainable solutions for urban infrastructure, industrial clients, and
          government bodies.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => {
          const Icon = service.icon;
          return (
            <Card
              key={service.id}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300"
              onClick={() => navigate(service.path)}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mt-1 -mr-1" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="mt-2">
                  {service.shortDescription}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="link"
                  className="mt-6 p-0 h-auto text-primary"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(service.path);
                  }}
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Bottom CTA Section */}
      <div className="mt-20 text-center">
        <div className="relative bg-card rounded-xl border p-8 md:p-12 overflow-hidden">
          <div className="absolute inset-0 bg-line-grid-sm opacity-60" />
          <div className="relative z-10">
            <h2 className="text-2xl font-semibold mb-4">
              Need a Custom Engineering Solution?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Our team of experts combines decades of field experience with
              industry-leading tools to deliver tailored solutions for complex
              water infrastructure challenges.
            </p>
            <Button onClick={() => navigate('/contact')}>
              Contact Our Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Services;