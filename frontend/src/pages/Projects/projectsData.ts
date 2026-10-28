// TODO: fetch from backend config API when available
export const SECTOR_OPTIONS = [
  { value: '', label: 'All Sectors' },
  { value: 'Urban Infrastructure', label: 'Urban Infrastructure' },
  { value: 'Government', label: 'Government' },
];

// TODO: fetch from backend config API when available
export const PROJECT_TYPE_OPTIONS = [
  { value: '', label: 'All Project Types' },
  { value: 'Underground Drainage', label: 'Underground Drainage' },
  { value: 'Storm Water Drainage', label: 'Storm Water Drainage' },
  { value: 'Water Supply', label: 'Water Supply' },
  { value: 'Water Resources', label: 'Water Resources' },
];

export const PAGE_SIZE = 9;

// ── Mock data matching GET /projects/list response format ──────────────────────

export interface Project {
  id: string;
  title: string;
  client: string;
  sector: string;
  project_type: string;
  challenge_summary: string;
  location: string;
  year: string;
  thumbnail_url: string;
  created_at: string;
}

export const MOCK_PROJECTS: Project[] = [
  {
    id: 'proj-001',
    title: 'Latur Underground Drainage',
    client: 'Latur Municipal Corporation',
    sector: 'Urban Infrastructure',
    project_type: 'Underground Drainage',
    challenge_summary: 'Design and implementation of an underground drainage network for Latur city, improving sanitation infrastructure and preventing waterlogging across residential and commercial zones.',
    location: 'Latur, Maharashtra',
    year: '2023',
    thumbnail_url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop',
    created_at: '2023-06-01T09:00:00Z',
  },
  {
    id: 'proj-002',
    title: 'Mahuva Underground Drainage',
    client: 'Mahuva Nagarpalika',
    sector: 'Urban Infrastructure',
    project_type: 'Underground Drainage',
    challenge_summary: 'Planning and hydraulic design of underground sewerage network for Mahuva town, ensuring reliable drainage coverage and compliance with Gujarat infrastructure standards.',
    location: 'Mahuva, Gujarat',
    year: '2023',
    thumbnail_url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop',
    created_at: '2023-08-15T10:00:00Z',
  },
  {
    id: 'proj-003',
    title: 'Godhra Underground Drainage and Water Supply',
    client: 'Godhra Municipal Corporation',
    sector: 'Urban Infrastructure',
    project_type: 'Underground Drainage',
    challenge_summary: 'Integrated project covering underground drainage system design along with water supply network planning for Godhra city, addressing both sewage disposal and potable water distribution.',
    location: 'Godhra, Gujarat',
    year: '2024',
    thumbnail_url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    created_at: '2024-01-10T09:00:00Z',
  },
  {
    id: 'proj-004',
    title: 'Dakor Storm Water Drainage',
    client: 'Dakor Nagarpalika',
    sector: 'Urban Infrastructure',
    project_type: 'Storm Water Drainage',
    challenge_summary: 'Design of storm water drainage infrastructure for Dakor town to manage monsoon runoff, prevent urban flooding, and protect the local road and utility network.',
    location: 'Dakor, Gujarat',
    year: '2024',
    thumbnail_url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
    created_at: '2024-03-05T10:00:00Z',
  },
  {
    id: 'proj-005',
    title: 'Jetpur Survo Resources Project',
    client: 'Jetpur Municipality',
    sector: 'Government',
    project_type: 'Water Resources',
    challenge_summary: 'Comprehensive water resources project for Jetpur utilizing the Survo river source, encompassing intake design, conveyance planning, and distribution network development to meet municipal demand.',
    location: 'Jetpur, Gujarat',
    year: '2024',
    thumbnail_url: 'https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?w=600&h=400&fit=crop',
    created_at: '2024-02-20T11:00:00Z',
  },
  {
    id: 'proj-006',
    title: 'Vengurla Underground Drainage',
    client: 'Vengurla Municipal Council',
    sector: 'Urban Infrastructure',
    project_type: 'Underground Drainage',
    challenge_summary: 'Design and hydraulic modeling of the underground drainage system for Vengurla town on the Konkan coast, addressing challenging terrain and high-rainfall conditions typical of the region.',
    location: 'Vengurla, Maharashtra',
    year: '2024',
    thumbnail_url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop',
    created_at: '2024-04-01T09:00:00Z',
  },
];

// ── Helper to fetch paginated/filtered projects ───────────────────────────────

export interface FetchProjectsParams {
  page: number;
  limit: number;
  sector: string;
  projectType: string;
}

export interface FetchProjectsResult {
  message: string;
  data: Project[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

/**
 * Fetches paginated and filtered project list (mock implementation).
 * In production, replace with:
 *
 * TODO: Real API binding
 * import { apiService } from '@/lib/api';
 * const response = await apiService.get({
 *   endpoint: '/projects/list',
 *   params: { page, limit, sector, project_type: projectType },
 * });
 * return response.data;
 */
export const fetchProjects = async (params: FetchProjectsParams): Promise<FetchProjectsResult> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  const { page, limit, sector, projectType } = params;

  let filtered = MOCK_PROJECTS;

  // Apply sector filter
  if (sector) {
    filtered = filtered.filter((p) => p.sector === sector);
  }

  // Apply project type filter
  if (projectType) {
    filtered = filtered.filter((p) => p.project_type === projectType);
  }

  const total = filtered.length;
  const totalPages = Math.ceil(total / limit);
  const startIndex = (page - 1) * limit;
  const paginatedData = filtered.slice(startIndex, startIndex + limit);

  return {
    message: 'Projects retrieved successfully',
    data: paginatedData,
    total,
    page,
    limit,
    totalPages,
  };
};
