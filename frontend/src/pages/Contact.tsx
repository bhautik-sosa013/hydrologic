import { Separator } from '@/components/ui/separator';
import ContactHeroSection from './Contact/ContactHeroSection';
import ContactInfoCards from './Contact/ContactInfoCards';
import ConsultationCTASection from './Contact/ConsultationCTASection';
import OfficeLocationSection from './Contact/OfficeLocationSection';

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ContactHeroSection />

      {/* Contact Info Cards Section */}
      <ContactInfoCards />

      <Separator className="max-w-4xl mx-auto" />

      {/* Book Consultation CTA Section */}
      <ConsultationCTASection />

      <Separator className="max-w-4xl mx-auto" />

      {/* Map / Office Location Section */}
      <OfficeLocationSection />
    </div>
  );
};

export default Contact;
