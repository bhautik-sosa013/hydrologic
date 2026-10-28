import {
  Globe,
  Droplets,
  Sprout,
  Leaf,
  TreePine,
  Building2,
  Landmark,
  Map,
  BarChart3,
  Settings,
  FileCheck,
  ShieldCheck,
  Scale,
  Sun,
  AlertTriangle,
  TrendingUp,
  CheckCircle2,
  FileText,
  Target,
} from 'lucide-react';

export const SERVICE_OFFERINGS = [
  {
    title: 'Environmental Impact Assessment',
    description:
      'Comprehensive EIA studies for water resource and land development projects, evaluating potential effects on ecosystems, water quality, and social receptors. Our assessments meet EPA guidelines and state environmental regulations.',
    icon: Globe,
    scope: ['Biota & Habitat Assessment', 'Soil & Water Quality Analysis', 'Air Quality Impact', 'Noise & Vibration Study'],
  },
  {
    title: 'Hydrological Modeling',
    description:
      'Advanced hydrological simulations using industry-standard software to predict water movement, groundwater recharge, runoff patterns, and flood risks. We integrate climate data and land use projections for accurate forecasting.',
    icon: Droplets,
    scope: ['Watershed Analysis', 'Groundwater Modeling', 'Flood Plain Mapping', 'Climate Change Scenarios'],
  },
  {
    title: 'Irrigation System Design',
    description:
      'Precision irrigation design that maximizes water efficiency while meeting crop or landscape water demands. We incorporate soil moisture data, evapotranspiration rates, and weather forecasts for optimal scheduling.',
    icon: Sprout,
    scope: ['Drip Irrigation Systems', 'Sprinkler Network Design', 'Smart Controller Integration', 'Water Budget Development'],
  },
  {
    title: 'Sustainability Consulting',
    description:
      'Strategic guidance on implementing sustainable water management practices, achieving green building certifications, and meeting environmental compliance standards for long-term project viability.',
    icon: Leaf,
    scope: ['LEED Certification Support', 'Water Conservation Plans', 'Carbon Footprint Analysis', 'ESG Reporting'],
  },
];

export const CLIENT_SECTORS = [
  {
    title: 'Agricultural Operations',
    description:
      'Supporting farms and agricultural enterprises with irrigation optimization, water rights compliance, and sustainable farming practices that reduce input costs while maintaining yield goals.',
    icon: TreePine,
    metrics: ['Water Usage Optimization', 'Crop Yield Improvement', 'Regulatory Compliance', 'Sustainable Practices'],
  },
  {
    title: 'Real Estate Development',
    description:
      'Environmental consulting for residential, commercial, and industrial developments, including stormwater management, wetland delineation, and green infrastructure planning.',
    icon: Building2,
    metrics: ['Site Environmental Review', 'Stormwater Compliance', 'Wetland Mitigation', 'LEED Certification'],
  },
  {
    title: 'Government Agencies',
    description:
      'Partnering with municipal, state, and federal agencies on water resource planning, flood management, and environmental monitoring programs for public infrastructure.',
    icon: Landmark,
    metrics: ['Water Resource Planning', 'Flood Risk Assessment', 'Public Health Compliance', 'Grant Support'],
  },
];

export const METHODOLOGY_STEPS = [
  {
    step: 1,
    title: 'Scoping & Data Gathering',
    description:
      'We define project boundaries, identify stakeholders, and collect baseline environmental data including hydrology, soil types, land use, and existing infrastructure.',
    icon: Map,
  },
  {
    step: 2,
    title: 'Impact Analysis & Modeling',
    description:
      'Using EPA-approved methodologies and specialized software, we simulate project impacts on water resources, ecosystems, and surrounding communities under various scenarios.',
    icon: BarChart3,
  },
  {
    step: 3,
    title: 'Mitigation Strategy Development',
    description:
      'We identify measures to avoid, minimize, or compensate for adverse impacts, designing sustainable solutions that align with regulatory requirements and client objectives.',
    icon: Settings,
  },
  {
    step: 4,
    title: 'Reporting & Compliance',
    description:
      'Comprehensive documentation prepare for regulatory submission, public review, and stakeholder communication, ensuring all permits and approvals are obtained efficiently.',
    icon: FileCheck,
  },
];

export const CERTIFICATIONS = [
  {
    name: 'ISO 14001',
    description: 'Environmental Management System certification for consistent environmental performance',
    icon: ShieldCheck,
  },
  {
    name: 'LEED Accredited',
    description: 'Leadership in Energy and Environmental Design professional expertise',
    icon: Leaf,
  },
  {
    name: 'EnviroAtlas Certified',
    description: 'Certified ecosystem services assessment methodology',
    icon: Globe,
  },
  {
    name: 'SWPPP Qualified',
    description: 'Stormwater Pollution Prevention Plan design and implementation',
    icon: Droplets,
  },
];

export const BENEFITS = [
  {
    icon: Droplets,
    title: 'Water Conservation',
    description:
      'Our irrigation designs achieve 30-50% water savings compared to conventional systems through precision scheduling and leak detection.',
    metric: '30-50% water usage reduction',
  },
  {
    icon: Scale,
    title: 'Regulatory Compliance',
    description:
      'Navigate complex environmental regulations with confidence. Our assessments ensure full compliance with federal, state, and local requirements.',
    metric: '100% permit approval rate',
  },
  {
    icon: Sun,
    title: 'Sustainable Practices',
    description:
      'Implement environmentally responsible solutions that protect natural resources while meeting project economic objectives.',
    metric: 'Carbon footprint reduction',
  },
  {
    icon: AlertTriangle,
    title: 'Risk Mitigation',
    description:
      'Identify and address environmental risks early in the project lifecycle, avoiding costly delays and remediation later.',
    metric: 'Early risk identification',
  },
  {
    icon: TrendingUp,
    title: 'Long-term Viability',
    description:
      'Solutions designed for the long haul, incorporating climate projections and future regulatory trends.',
    metric: '30-year project planning',
  },
  {
    icon: CheckCircle2,
    title: 'Stakeholder Confidence',
    description:
      'Transparent environmental documentation builds trust with communities, regulators, and investors.',
    metric: 'Public approval support',
  },
];

export const DELIVERABLES = [
  {
    title: 'Environmental Impact Statement',
    description: 'Comprehensive EIA report meeting regulatory submission standards',
    icon: FileText,
  },
  {
    title: 'Hydrological Model Report',
    description: 'Detailed modeling documentation with scenario analysis and projections',
    icon: BarChart3,
  },
  {
    title: 'Irrigation System Design',
    description: 'Construction-ready irrigation plans with equipment specifications',
    icon: Sprout,
  },
  {
    title: 'Sustainability Plan',
    description: 'Custom roadmap for achieving environmental certifications and goals',
    icon: Leaf,
  },
  {
    title: 'Compliance Matrix',
    description: 'Track all regulatory requirements and their status throughout the project',
    icon: ShieldCheck,
  },
  {
    title: 'Monitoring Program',
    description: 'Ongoing environmental monitoring protocols and reporting schedules',
    icon: Target,
  },
];
