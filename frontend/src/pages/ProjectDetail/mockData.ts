import { Project } from './types';

export const MOCK_PROJECTS: Project[] = [
  {
    id: 'proj-001',
    title: 'Latur Underground Drainage',
    client: 'Latur Municipal Corporation',
    sector: 'Urban Infrastructure',
    project_type: 'Underground Drainage',
    location: 'Latur, Maharashtra',
    year: '2023',
    problem:
      'Latur city lacked a comprehensive underground drainage network, resulting in open drains, frequent waterlogging, and poor sanitation conditions affecting thousands of residents. The existing surface drainage was inadequate to handle the city\'s growing population and rainfall loads.',
    solution:
      'We carried out complete design of the underground sewerage network including hydraulic modeling of the collection system, sewer line sizing, manhole placement, and pumping station design. The solution covered all residential and commercial zones with gravity-based flow wherever feasible.',
    result:
      'The designed underground drainage system provides reliable sewage conveyance across the city, eliminates open drains, and significantly improves public health and sanitation standards for the residents of Latur.',
    tools_used: ['SewerGems', 'AutoCAD', 'GIS Mapping', 'Hydraulic Modeling'],
    methodology:
      'Topographic survey and data collection, catchment delineation, hydraulic design using SewerGems, manhole and junction design, and preparation of detailed engineering drawings and estimates.',
    scope:
      'Complete underground drainage network design for Latur city covering all wards, including gravity sewer mains, branch sewers, manholes, and sewage pumping stations.',
    measurable_outcomes:
      'Full city coverage achieved, open drains eliminated, hydraulic capacity designed for projected 30-year population growth, compliant with Maharashtra UIDSSMT standards.',
    image_urls: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800',
    ],
    created_at: '2023-06-01T09:00:00Z',
  },
  {
    id: 'proj-002',
    title: 'Mahuva Underground Drainage',
    client: 'Mahuva Nagarpalika',
    sector: 'Urban Infrastructure',
    project_type: 'Underground Drainage',
    location: 'Mahuva, Gujarat',
    year: '2023',
    problem:
      'Mahuva town relied on open surface drains which caused unhygienic conditions, road damage during monsoons, and environmental pollution. The absence of an underground sewerage system was a critical gap in the town\'s urban infrastructure.',
    solution:
      'Designed a complete underground drainage system for Mahuva with hydraulic analysis of the sewer network, selection of appropriate pipe sizes and materials, and integration with a proposed sewage treatment facility. The design accounted for the town\'s flat terrain requiring strategic pump stations.',
    result:
      'The project provides Mahuva with a modern underground sewerage infrastructure, replacing open drains and enabling proper wastewater collection and conveyance to treatment before disposal.',
    tools_used: ['SewerGems', 'AutoCAD', 'GIS', 'Topographic Survey Data'],
    methodology:
      'Field survey, hydraulic load estimation, network routing and design, pump station sizing, DPR preparation as per Gujarat GWSSB norms.',
    scope:
      'Underground sewer network design for all zones of Mahuva town, including main sewer lines, lateral connections, manholes, and lift stations.',
    measurable_outcomes:
      'Town-wide sewerage coverage, designed for 30-year horizon, compliant with Gujarat GWSSB guidelines, DPR submitted and approved.',
    image_urls: [
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800',
    ],
    created_at: '2023-08-15T10:00:00Z',
  },
  {
    id: 'proj-003',
    title: 'Godhra Underground Drainage and Water Supply',
    client: 'Godhra Municipal Corporation',
    sector: 'Urban Infrastructure',
    project_type: 'Underground Drainage',
    location: 'Godhra, Gujarat',
    year: '2024',
    problem:
      'Godhra city faced dual challenges — an aging and inadequate water supply network causing low pressure and poor coverage, alongside the absence of an underground drainage system causing sanitation issues. Both systems needed to be planned in a coordinated manner to avoid future conflicts.',
    solution:
      'An integrated project was executed covering hydraulic design of the underground drainage network as well as detailed planning of the water supply distribution system. GIS-based mapping was used to coordinate both networks and avoid pipe conflicts during execution.',
    result:
      'The project delivers a modern water supply and sewerage infrastructure for Godhra, improving potable water access, reducing waterborne diseases, and enabling systematic wastewater collection across the city.',
    tools_used: ['WaterGems', 'SewerGems', 'GIS (ArcGIS)', 'AutoCAD', 'Hydraulic Modeling'],
    methodology:
      'Integrated planning: demand estimation and water supply zoning, distribution network design, parallel drainage network routing, pump station design, and combined DPR preparation.',
    scope:
      'Water supply distribution network and underground drainage network for Godhra city, covering all residential, commercial, and institutional zones.',
    measurable_outcomes:
      '24×7 water supply design achieved, full sewerage coverage planned, integrated GIS asset map delivered, compliant with AMRUT 2.0 scheme requirements.',
    image_urls: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800',
    ],
    created_at: '2024-01-10T09:00:00Z',
  },
  {
    id: 'proj-004',
    title: 'Dakor Storm Water Drainage',
    client: 'Dakor Nagarpalika',
    sector: 'Urban Infrastructure',
    project_type: 'Storm Water Drainage',
    location: 'Dakor, Gujarat',
    year: '2024',
    problem:
      'Dakor town experienced severe waterlogging and road flooding during heavy monsoon rains. The absence of a designed storm water drainage system led to property damage, road deterioration, and disruption to the town\'s significant pilgrimage activity.',
    solution:
      'Designed a comprehensive storm water drainage network using rainfall analysis, catchment delineation, and hydraulic modeling. The system routes surface runoff efficiently through designed drains, culverts, and outfall structures to natural waterbodies, protecting the town from flooding.',
    result:
      'The storm water drainage design provides Dakor with flood-resilient infrastructure that handles monsoon runoff effectively, protects roads and properties, and ensures uninterrupted access during the peak pilgrimage season.',
    tools_used: ['EPA SWMM', 'HEC-RAS', 'AutoCAD', 'GIS', 'Rational Method Analysis'],
    methodology:
      'Rainfall frequency analysis, catchment area mapping, peak flow estimation, drain sizing, hydraulic grade line analysis, and outfall design.',
    scope:
      'Complete storm water drainage network for Dakor town including primary, secondary, and tertiary drains, cross-drainage structures, and outfall to natural drainage channels.',
    measurable_outcomes:
      'Town protected against 25-year return period storm events, waterlogging eliminated from critical zones, compliant with Gujarat urban drainage norms.',
    image_urls: [
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800',
    ],
    created_at: '2024-03-05T10:00:00Z',
  },
  {
    id: 'proj-005',
    title: 'Jetpur Survo Resources Project',
    client: 'Jetpur Municipality',
    sector: 'Government',
    project_type: 'Water Resources',
    location: 'Jetpur, Gujarat',
    year: '2024',
    problem:
      'Jetpur city faced a growing water demand that existing sources could not reliably meet. The Survo river was identified as a viable source, but required detailed technical assessment, intake design, and a complete supply chain plan to make it viable for municipal use.',
    solution:
      'Conducted a water resources study for the Survo river source including yield assessment, intake structure design, raw water conveyance main planning, and distribution network design. Hydraulic modeling was used to validate flow capacities and pressure adequacy throughout the system.',
    result:
      'The project establishes a reliable long-term water source for Jetpur from the Survo river, with a fully designed intake-to-tap supply chain that meets current and projected municipal demand.',
    tools_used: ['WaterGems', 'HEC-RAS', 'GIS', 'AutoCAD', 'Hydrological Analysis Tools'],
    methodology:
      'Hydrological study, source yield estimation, intake design, raw water main hydraulics, WTP siting, clear water storage, and distribution network design.',
    scope:
      'End-to-end water supply project: river intake, raw water rising main, water treatment plant, overhead service reservoirs, and distribution network for Jetpur city.',
    measurable_outcomes:
      'Long-term water security established, supply designed for 30-year demand, 24×7 supply capability planned, compliant with Gujarat GWSSB norms.',
    image_urls: [
      'https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?w=800',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    ],
    created_at: '2024-02-20T11:00:00Z',
  },
  {
    id: 'proj-006',
    title: 'Vengurla Underground Drainage',
    client: 'Vengurla Municipal Council',
    sector: 'Urban Infrastructure',
    project_type: 'Underground Drainage',
    location: 'Vengurla, Maharashtra',
    year: '2024',
    problem:
      'Vengurla, a coastal town in the Konkan region, lacked underground sewerage infrastructure. The combination of high annual rainfall, undulating terrain, and proximity to the sea made drainage design particularly challenging, while open drains created public health and environmental concerns.',
    solution:
      'Designed an underground drainage system tailored to Vengurla\'s challenging Konkan topography, incorporating detailed hydraulic modeling to manage high flow conditions during monsoons. The design uses gravity-fed networks where possible, with lift stations at critical low-lying areas.',
    result:
      'The project delivers Vengurla with robust underground drainage infrastructure designed to handle the Konkan region\'s intense monsoon rainfall, eliminate open drains, and protect the coastal environment from untreated sewage discharge.',
    tools_used: ['SewerGems', 'AutoCAD', 'GIS', 'Topographic Survey', 'Hydraulic Modeling'],
    methodology:
      'Terrain analysis, catchment mapping, hydraulic design for high-rainfall conditions, sewer network routing, lift station design, and DPR preparation as per Maharashtra UIDSSMT guidelines.',
    scope:
      'Underground sewerage network for all wards of Vengurla town, including gravity sewers, pumping mains, lift stations, and outfall to treatment facility.',
    measurable_outcomes:
      'Full town sewerage coverage, designed for Konkan high-rainfall intensity, open drains eliminated, compliant with Maharashtra urban infrastructure standards.',
    image_urls: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
    ],
    created_at: '2024-04-01T09:00:00Z',
  },
];
