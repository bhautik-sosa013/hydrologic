import { toast } from '@/lib/toast';
import HeroSection from './Home/HeroSection';
import ServicesSection from './Home/ServicesSection';
import WhyChooseUsSection from './Home/WhyChooseUsSection';
import TechnologySection from './Home/TechnologySection';
import CTASection from './Home/CTASection';
import WaveDivider from './Home/WaveDivider';

const Home = () => {
  const handleGetConsultation = () => {
    toast.success('Redirecting to consultation form', {
      description: 'Our team will get back to you within 24 hours.',
    });
  };

  return (
    <div className="flex flex-col min-h-screen">

      {/* ── Hero Section ────────────────────────────────────────────────── */}
      <HeroSection onGetConsultation={handleGetConsultation} />

      {/* Wave divider */}
      <WaveDivider />

      {/* ── Services Overview Section ───────────────────────────────────── */}
      <ServicesSection />

      {/* Wave divider inverted */}
      <WaveDivider inverted />

      {/* ── Why Choose Us Section ───────────────────────────────────────── */}
      <WhyChooseUsSection />

      {/* Wave divider */}
      <WaveDivider />

      {/* ── Technology Section ─────────────────────────────────────────── */}
      <TechnologySection />

      {/* Wave divider inverted */}
      <WaveDivider inverted />

      {/* ── CTA Section ─────────────────────────────────────────────────── */}
      <CTASection onGetConsultation={handleGetConsultation} />

      {/* ── Inline animation definitions ─────────────────────────────── */}
      <style>{`
        @keyframes wave {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-18px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-9px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.55; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.25); }
        }
        @keyframes ripple {
          0% { transform: scale(0.5); opacity: 0.5; }
          100% { transform: scale(3.5); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Home;
