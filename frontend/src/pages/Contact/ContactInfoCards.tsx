import { Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { OFFICE_INFO } from './constants';

const ContactInfoCards = () => {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid-lg opacity-60" />
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Email Card */}
          <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Email Us</CardTitle>
              <CardDescription>For general inquiries and support</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm font-medium">{OFFICE_INFO.email}</p>
                <p className="text-sm text-muted-foreground">
                  We respond within 24 business hours
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Phone Card */}
          <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Call Us</CardTitle>
              <CardDescription>Speak with our team directly</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <a
                  href={`tel:${OFFICE_INFO.phone.replace(/-/g, '')}`}
                  className="text-sm font-medium text-primary hover:underline block"
                >
                  {OFFICE_INFO.phone}
                </a>
                <p className="text-sm text-muted-foreground">{OFFICE_INFO.workingHours}</p>
              </div>
            </CardContent>
          </Card>

          {/* Office Location Card */}
          <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Visit Us</CardTitle>
              <CardDescription>Our headquarters location</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <p className="text-sm font-medium">{OFFICE_INFO.address}</p>
                <p className="text-sm text-muted-foreground">
                  {OFFICE_INFO.street}
                </p>
                <p className="text-sm text-muted-foreground">
                  {OFFICE_INFO.area}
                </p>
                <p className="text-sm text-muted-foreground">
                  {OFFICE_INFO.city}, {OFFICE_INFO.state} {OFFICE_INFO.pincode}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoCards;
