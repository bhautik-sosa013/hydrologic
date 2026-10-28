import { Separator } from '@/components/ui/separator';
import BackNavigation from './EnvironmentalAndIrrigationConsulting/BackNavigation';
import HeroSection from './EnvironmentalAndIrrigationConsulting/HeroSection';
import ServiceOfferingsSection from './EnvironmentalAndIrrigationConsulting/ServiceOfferingsSection';
import ClientSectorsSection from './EnvironmentalAndIrrigationConsulting/ClientSectorsSection';
import MethodologySection from './EnvironmentalAndIrrigationConsulting/MethodologySection';
import CertificationsSection from './EnvironmentalAndIrrigationConsulting/CertificationsSection';
import DeliverablesSection from './EnvironmentalAndIrrigationConsulting/DeliverablesSection';
import BenefitsSection from './EnvironmentalAndIrrigationConsulting/BenefitsSection';
import CTASection from './EnvironmentalAndIrrigationConsulting/CTASection';

const EnvironmentalAndIrrigationConsulting = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ── Back Navigation ────────────────────────────────────────────── */}
      <BackNavigation />

      {/* ── Hero Section ───────────────────────────────────────────────── */}
      <HeroSection />

      <Separator />

      {/* ── Service Offerings Section ───────────────────────────────────── */}
      <ServiceOfferingsSection />

      <Separator />

      {/* ── Client Sectors Section ──────────────────────────────────────── */}
      <ClientSectorsSection />

      <Separator />

      {/* ── Methodology Section ────────────────────────────────────────── */}
      <MethodologySection />

      <Separator />

      {/* ── Certifications Section ──────────────────────────────────────── */}
      <CertificationsSection />

      <Separator />

      {/* ── Deliverables Section ───────────────────────────────────────── */}
      <DeliverablesSection />

      <Separator />

      {/* ── Benefits Section ───────────────────────────────────────────── */}
      <BenefitsSection />

      <Separator />

      {/* ── CTA Section ─────────────────────────────────────────────────── */}
      <CTASection />
    </div>
  );
};

export default EnvironmentalAndIrrigationConsulting;
