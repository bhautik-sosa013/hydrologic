---
### Custom Change — Cosmetic text fixes and ProjectDetail component refactoring
- pages_modified: ProjectDetail (monolithic component split into sub-components: ProjectDetailHero, ProjectDetailNarrative, ProjectDetailCards, ProjectDetailImages, ProjectDetailSkeleton, ProjectDetailError, ProjectDetailCTA; types and mockData extracted to separate files — purely structural refactor, identical runtime behaviour); About (text capitalisation fix); Technology (Chinese character string replaced with English); Contact/ConsultationCTASection (phone placeholder/error example number updated to +91-8866308738)
- inferred_backend_impact: No backend changes required — all modifications are cosmetic text corrections and a frontend code organisation refactor; no API endpoints, request payloads, response fields, or pages were added, removed, or altered.

---
### Custom Change — Contact page updated with real office address and business credentials display
- pages_modified: Contact (static office info replaced with real Gandhinagar address; MSME/ISO/GST credentials section added; alternatePhone removed; phone made a clickable tel: link)
- inferred_backend_impact: No backend changes required — all modifications are static frontend data and UI presentation; the existing /contact/submit endpoint and its payload are unchanged.

---
### Custom Change — Project card badge styling and mock image URL updates
- pages_modified: Projects (ProjectCard.tsx: Badge component CSS classes updated for improved contrast/border styling — purely visual); ProjectDetail/mockData.ts and Projects/projectsData.ts (one Unsplash thumbnail URL replaced with a different Unsplash photo for Jetpur water project — mock data only)
- inferred_backend_impact: No backend changes required — all modifications are purely cosmetic UI styling and mock/static data updates; no API endpoints, request payloads, response fields, auth, or page structure were added, removed, or altered.

---
### Custom Change — Jetpur project mock image URL updated (photo swap)
- pages_modified: ProjectDetail/mockData.ts and Projects/projectsData.ts (Unsplash photo ID for Jetpur water project replaced: `photo-1566024164372-0281f1133aa6` → `photo-1439130490301-25e322d45ced` — affects both the detail gallery and the listing card thumbnail; mock/static data only)
- inferred_backend_impact: No backend changes required — purely a static mock image URL replacement; no API endpoints, request payloads, response fields, auth, or page structure were added, removed, or altered.

---
### Custom Change — App lazy-loading hardened and Home page split into sub-components
- pages_modified: Home (monolithic component split into sub-components: HeroSection, ServicesSection, WhyChooseUsSection, TechnologySection, CTASection, WaveDivider — purely structural refactor, identical runtime behaviour); App (lazy() replaced with lazyWithRetry() wrapper that retries failed dynamic imports and forces a full page reload after exhausting retries, guarding against stale chunk hashes after deploys)
- inferred_backend_impact: No backend changes required — both modifications are frontend-only code organisation and resilience improvements; no API endpoints, request payloads, response fields, auth, or pages were added, removed, or altered.

---
### Custom Change — About page founder avatar and education bio updated
- pages_modified: About (founder avatar image source changed from Unsplash placeholder URL to local asset `/jay.png`; founder education bio updated from "B.Tech Civil Engineering, IIT Bombay | M.S. Environmental Engineering, Stanford University" to "B.Tech Civil Engineering, LD Engineering Ahmedabad" — purely static content corrections)
- inferred_backend_impact: No backend changes required — both modifications are static frontend content updates; no API endpoints, request payloads, response fields, auth, or page structure were added, removed, or altered.

---
### Custom Change — Jetpur project mock image URL updated (second photo swap)
- pages_modified: ProjectDetail/mockData.ts and Projects/projectsData.ts (Unsplash photo ID for Jetpur water project replaced: `photo-1439130490301-25e322d45ced` → `photo-1470770903676-69b98201ea1c` — affects both the detail gallery image and the listing card thumbnail; mock/static data only)
- inferred_backend_impact: No backend changes required — purely a static mock image URL replacement; no API endpoints, request payloads, response fields, auth, or page structure were added, removed, or altered.

---
### Custom Change — About page team member avatar image added (Avadh Vaghasiya)
- pages_modified: About (`<AvatarImage src="/avadh.png" className="object-cover object-center" />` added inside the Avatar component for team member Avadh Vaghasiya — provides a local static photo in place of the initials fallback; purely a static asset reference)
- inferred_backend_impact: No backend changes required — purely a static frontend asset addition; no API endpoints, request payloads, response fields, auth, or page structure were added, removed, or altered.
