import { Toaster } from '@/components/ui/toaster';
import { CustomToastProvider } from '@/components/ui/custom-toast-manager';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { ThemeProvider } from '@/contexts/ThemeContext';
import ErrorBoundary from '@/components/ErrorBoundary';
import BuiltBy from '@/components/BuiltBy';
import AppLayout from '@/components/AppLayout';
import { lazy, Suspense } from 'react';

// ── Retry wrapper for lazy imports ───────────────────────────────────────────
// Retries failed dynamic imports (e.g. stale chunk hash after a new deploy).
// After exhausting retries it forces a full page reload so the browser picks
// up the fresh index.html and the correct chunk URLs.
function lazyWithRetry<T extends React.ComponentType<unknown>>(
  importFn: () => Promise<{ default: T }>,
  retries = 3,
  delayMs = 800,
): React.LazyExoticComponent<T> {
  return lazy(
    () =>
      new Promise<{ default: T }>((resolve, reject) => {
        const attempt = (left: number) => {
          importFn()
            .then(resolve)
            .catch((err: unknown) => {
              if (left <= 0) {
                // Stale deployment — force reload to get fresh index.html
                window.location.reload();
                reject(err);
                return;
              }
              setTimeout(() => attempt(left - 1), delayMs);
            });
        };
        attempt(retries);
      }),
  );
}

// ── Page imports (lazy) ─────────────────────────────────────────────────────

// Main nav pages
const Home = lazyWithRetry(() => import('@/pages/Home'));
const About = lazyWithRetry(() => import('@/pages/About'));
const Services = lazyWithRetry(() => import('@/pages/Services'));
const Projects = lazyWithRetry(() => import('@/pages/Projects'));
const Technology = lazyWithRetry(() => import('@/pages/Technology'));
const Industries = lazyWithRetry(() => import('@/pages/Industries'));
const Contact = lazyWithRetry(() => import('@/pages/Contact'));

// Services sub-pages (not in nav)
const HydraulicNetworkModeling = lazyWithRetry(() => import('@/pages/HydraulicNetworkModeling'));
const WaterTreatmentPlantDesign = lazyWithRetry(() => import('@/pages/WaterTreatmentPlantDesign'));
const SewageTreatmentPlantDesign = lazyWithRetry(() => import('@/pages/SewageTreatmentPlantDesign'));
const GISIntegration = lazyWithRetry(() => import('@/pages/GISIntegration'));
const EnvironmentalAndIrrigationConsulting = lazyWithRetry(
  () => import('@/pages/EnvironmentalAndIrrigationConsulting')
);

// Projects sub-page — dynamic segment /projects/:id (not in nav)
const ProjectDetail = lazyWithRetry(() => import('@/pages/ProjectDetail'));

// ── Query client ─────────────────────────────────────────────────────────────

const queryClient = new QueryClient();

// ── Page loading fallback ─────────────────────────────────────────────────────

const PageLoader = () => (
  <div className="flex min-h-[50vh] items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
  </div>
);

// ── Layout route — wraps all pages inside AppLayout using React Router Outlet ─

const AppLayoutRoute = () => (
  <AppLayout>
    <Suspense fallback={<PageLoader />}>
      <Outlet />
    </Suspense>
  </AppLayout>
);

// ── App ───────────────────────────────────────────────────────────────────────

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <CustomToastProvider>
        <ThemeProvider>
          <ErrorBoundary>
            <BrowserRouter>
              <Routes>
                {/* All pages share AppLayout (top nav bar) */}
                <Route element={<AppLayoutRoute />}>

                  {/* Entry point — Home at root '/' */}
                  <Route index element={<Home />} />

                  {/* Main nav pages */}
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/technology" element={<Technology />} />
                  <Route path="/industries" element={<Industries />} />
                  <Route path="/contact" element={<Contact />} />

                  {/* Services sub-pages — not shown in nav */}
                  <Route
                    path="/services/hydraulic-network-modeling"
                    element={<HydraulicNetworkModeling />}
                  />
                  <Route
                    path="/services/water-treatment-plant-design"
                    element={<WaterTreatmentPlantDesign />}
                  />
                  <Route
                    path="/services/sewage-treatment-plant-design"
                    element={<SewageTreatmentPlantDesign />}
                  />
                  <Route
                    path="/services/gis-integration"
                    element={<GISIntegration />}
                  />
                  <Route
                    path="/services/environmental-and-irrigation-consulting"
                    element={<EnvironmentalAndIrrigationConsulting />}
                  />

                  {/* Project detail sub-page — dynamic segment, not in nav */}
                  <Route path="/projects/:id" element={<ProjectDetail />} />

                  {/* Catch-all redirect to home */}
                  <Route path="*" element={<Navigate to="/" replace />} />

                </Route>
              </Routes>
              <BuiltBy />
            </BrowserRouter>
          </ErrorBoundary>
        </ThemeProvider>
      </CustomToastProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
