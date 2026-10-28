import { Activity, BarChart3, MapPin, Wrench, Droplet, Globe, Shield, Cpu, Users } from 'lucide-react';

export const SERVICES = [
  {
    icon: Activity,
    title: 'Hydraulic Network Modeling',
    description:
      'Advanced simulation of water distribution networks using WaterGems and SewerGems to optimize pressure zones and identify issues before they occur.',
    path: '/services/hydraulic-network-modeling',
  },
  {
    icon: Droplet,
    title: 'Water Treatment Plant Design',
    description:
      'Comprehensive design of modern WTP facilities ensuring compliance with environmental standards and public health requirements.',
    path: '/services/water-treatment-plant-design',
  },
  {
    icon: Wrench,
    title: 'Sewage Treatment Plant Design',
    description:
      'Innovative STP solutions protecting communities and ecosystems while meeting all regulatory requirements.',
    path: '/services/sewage-treatment-plant-design',
  },
  {
    icon: Globe,
    title: 'GIS Integration',
    description:
      'Geographic Information System integration for spatial analysis, asset management, and data-driven infrastructure decisions.',
    path: '/services/gis-integration',
  },
  {
    icon: Shield,
    title: 'Environmental & Irrigation Consulting',
    description:
      'Expert guidance on sustainable water usage, irrigation optimization, and environmental impact assessments.',
    path: '/services/environmental-and-irrigation-consulting',
  },
];

export const DIFFERENTIATORS = [
  {
    icon: Cpu,
    title: 'AI-Powered Analytics',
    description:
      'Leveraging advanced algorithms to predict system failures and optimize water distribution efficiency across your entire network.',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Monitoring',
    description:
      '24/7 visibility into network performance, pressure zones, and flow rates for proactive infrastructure management.',
  },
  {
    icon: MapPin,
    title: 'Precision Mapping',
    description:
      'Sub-meter accurate GIS data integrated with hydraulic models for unmatched spatial intelligence.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description:
      'Decades of combined experience in hydrology, environmental engineering, and water resource management.',
  },
];

export const TECHNOLOGIES = [
  {
    name: 'WaterGems',
    description:
      'Industry-leading hydraulic modeling software for water distribution network analysis, fire flow testing, and infrastructure planning.',
    badge: 'Water Distribution',
  },
  {
    name: 'SewerGems',
    description:
      'Comprehensive sewer and stormwater modeling solution for collection system design, rehabilitation planning, and overflow analysis.',
    badge: 'Sewer Systems',
  },
];
