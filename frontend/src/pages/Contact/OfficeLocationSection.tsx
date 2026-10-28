import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { OFFICE_INFO, BUSINESS_CREDENTIALS } from './constants';

const OfficeLocationSection = () => {
  return (
    <section className="relative py-16 md:py-20 bg-muted/30 overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-55" />
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            Our Location
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Find Us at Our Headquarters
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Located in Gandhinagar, Gujarat, our office is easily accessible and
            equipped to host client meetings and consultations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Address Details */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl">Office Address</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">{OFFICE_INFO.address}</p>
                  <p className="text-sm text-muted-foreground">
                    {OFFICE_INFO.street}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {OFFICE_INFO.area}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {OFFICE_INFO.city}, {OFFICE_INFO.state} {OFFICE_INFO.pincode}
                  </p>
                  <p className="text-sm text-muted-foreground">{OFFICE_INFO.country}</p>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <a
                    href={`mailto:${OFFICE_INFO.email}`}
                    className="text-sm text-primary hover:underline"
                  >
                    {OFFICE_INFO.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <a
                    href={`tel:${OFFICE_INFO.phone.replace(/-/g, '')}`}
                    className="text-sm text-primary hover:underline"
                  >
                    {OFFICE_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {OFFICE_INFO.workingHours}
                  </span>
                </div>
              </div>

              <Separator />

              {/* Business Credentials */}
              <div className="space-y-2">
                {BUSINESS_CREDENTIALS.map((cred) => (
                  <div key={cred.label} className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      {cred.label}
                    </span>
                    <span className="text-xs font-medium text-foreground">{cred.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Google Map embed */}
          <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden border border-primary/20 shadow-sm">
            <iframe
              title="Hydrologic Innovation Office Location"
              src="https://maps.google.com/maps?q=PLOT+NO+478%2F1+SECTOR+5-A+Gandhinagar+Gujarat+382006+India&output=embed&z=16"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            />
            {/* "Open in Maps" overlay button */}
            <div className="absolute bottom-3 right-3">
              <Button size="sm" variant="secondary" className="shadow-md bg-background/90 backdrop-blur-sm hover:bg-background" asChild>
                <a
                  href="https://maps.google.com/?q=PLOT+NO+478/1+SECTOR+5-A+Gandhinagar+Gujarat+382006+India"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="mr-1.5 h-3.5 w-3.5" />
                  Open in Maps
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocationSection;
