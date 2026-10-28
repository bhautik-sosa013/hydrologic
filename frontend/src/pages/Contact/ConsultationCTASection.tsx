import { useState } from 'react';
import {
  Mail,
  Calendar,
  ArrowRight,
  Clock,
  Send,
  CheckCircle2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { toast } from '@/lib/toast';
import {
  EMAIL_REGEX,
  PHONE_REGEX,
  OFFICE_INFO,
  ContactFormData,
} from './constants';

const INQUIRY_EMAIL = 'info@hydrologic.in';

const ConsultationCTASection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    project_details: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length > 100) {
      newErrors.name = 'Name must be 100 characters or less';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!EMAIL_REGEX.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!PHONE_REGEX.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number (e.g., +91-8866308738)';
    }

    // Project details validation
    if (!formData.project_details.trim()) {
      newErrors.project_details = 'Project details are required';
    } else if (formData.project_details.length > 2000) {
      newErrors.project_details = 'Project details must be 2000 characters or less';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const subject = encodeURIComponent(`New Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nProject Details:\n${formData.project_details}`
    );

    window.location.href = `mailto:${INQUIRY_EMAIL}?subject=${subject}&body=${body}`;

    toast.success('Opening your email client...', {
      description: 'Your inquiry has been prepared and addressed to info@hydrologic.in.',
    });

    setIsDialogOpen(false);
    setFormData({ name: '', email: '', phone: '', project_details: '' });
    setIsSubmitting(false);
  };

  const handleOpenDialog = () => {
    setFormData({ name: '', email: '', phone: '', project_details: '' });
    setErrors({});
    setIsDialogOpen(true);
  };

  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-line-grid opacity-65" />
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: CTA Content */}
          <div className="space-y-6">
            <div>
              <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
                <Calendar className="mr-1 h-3 w-3" />
                Book a Consultation
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Schedule Your Initial Assessment
              </h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Take the first step toward smarter water infrastructure. Book a consultation
              with our engineering team to discuss your project scope, challenges, and goals.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">Discuss your project requirements with experts</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">Receive preliminary recommendations</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">Professional consultation tailored to your needs</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{OFFICE_INFO.workingHours}</span>
            </div>
          </div>

          {/* Right: CTA Card with Dialog Trigger */}
          <div className="flex justify-center lg:justify-end">
            <Card className="w-full max-w-md border-primary/20 bg-gradient-to-br from-card to-primary/5">
              <CardHeader>
                <CardTitle className="text-2xl">Ready to Get Started?</CardTitle>
                <CardDescription>
                  Fill out the inquiry form and our team will reach out within 24 hours to
                  schedule your consultation.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Response in 24h</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">30 min call</span>
                  </div>
                </div>

                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button size="lg" className="w-full" onClick={handleOpenDialog}>
                      Book a Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                      <DialogTitle>Book a Consultation</DialogTitle>
                      <DialogDescription>
                        Fill out the form below and our team will get back to you within 24 hours
                        to schedule your consultation.
                      </DialogDescription>
                    </DialogHeader>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Name Field */}
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          Full Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          maxLength={100}
                          required
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                        />
                        {errors.name && (
                          <p id="name-error" className="text-sm text-destructive">
                            {errors.name}
                          </p>
                        )}
                        <p className="text-xs text-muted-foreground">
                          {formData.name.length}/100 characters
                        </p>
                      </div>

                      {/* Email Field */}
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          Email Address <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@company.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        {errors.email && (
                          <p id="email-error" className="text-sm text-destructive">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Phone Field */}
                      <div className="space-y-2">
                        <Label htmlFor="phone">
                          Phone Number <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+91-8866308738"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          aria-invalid={!!errors.phone}
                          aria-describedby={errors.phone ? 'phone-error' : undefined}
                        />
                        {errors.phone && (
                          <p id="phone-error" className="text-sm text-destructive">
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      {/* Project Details Field */}
                      <div className="space-y-2">
                        <Label htmlFor="project_details">
                          Project Details <span className="text-destructive">*</span>
                        </Label>
                        <Textarea
                          id="project_details"
                          name="project_details"
                          placeholder="Describe your project scope, requirements, and any specific challenges you are facing..."
                          value={formData.project_details}
                          onChange={handleInputChange}
                          maxLength={2000}
                          required
                          className="min-h-[120px]"
                          aria-invalid={!!errors.project_details}
                          aria-describedby={
                            errors.project_details ? 'project_details-error' : undefined
                          }
                        />
                        {errors.project_details && (
                          <p id="project_details-error" className="text-sm text-destructive">
                            {errors.project_details}
                          </p>
                        )}
                        <p className="text-xs text-muted-foreground">
                          {formData.project_details.length}/2000 characters
                        </p>
                      </div>

                      <DialogFooter>
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full sm:w-auto"
                        >
                          {isSubmitting ? (
                            <>
                              <span className="mr-2">Submitting...</span>
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-4 w-4" />
                              Submit Inquiry
                            </>
                          )}
                        </Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTASection;
