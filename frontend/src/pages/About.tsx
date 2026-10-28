import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { getInitials } from '@/lib/utils';
import {
  Droplets,
  Target,
  Eye,
  Award,
  Users,
  TrendingUp,
  Leaf,
  Lightbulb,
  Shield,
} from 'lucide-react';

const CORE_VALUES = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'We continuously push the boundaries of hydraulic engineering, adopting cutting-edge tools and methodologies to deliver solutions that were once thought impossible.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description:
      'Environmental stewardship is at the heart of everything we do. We design systems that preserve natural resources and support long-term ecological balance.',
  },
  {
    icon: Shield,
    title: 'Precision',
    description:
      'Our engineering rigor ensures every calculation, every model, and every design meets the highest standards of accuracy and reliability.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description:
      'We believe the best solutions emerge from partnership. Working closely with clients and communities, we co-create infrastructure that truly serves its people.',
  },
];

const COMPANY_HISTORY = [
  {
    year: '2015',
    milestone: 'Company Founded',
    description:
      'Hydrologic Innovation was established with a vision to transform water infrastructure engineering through advanced computational tools.',
  },
  {
    year: '2018',
    milestone: 'First Major Project',
    description:
      'Completed our first large-scale municipal water distribution network modeling project, serving a city of 500,000 residents.',
  },
  {
    year: '2020',
    milestone: 'Technology Expansion',
    description:
      'Integrated GIS platforms and real-time sensor data into our modeling workflow, enabling smarter, more responsive infrastructure designs.',
  },
  {
    year: '2023',
    milestone: 'Sustainability Focus',
    description:
      'Launched dedicated practice areas for stormwater management and water reuse systems, reinforcing our commitment to sustainable engineering.',
  },
  {
    year: '2026',
    milestone: 'Industry Leadership',
    description:
      'Recognized as a regional leader in precision hydraulic modeling, serving clients across municipal, industrial, and agricultural sectors.',
  },
];


const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-50" />
        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Droplets className="mr-1 h-3 w-3" />
              Engineering the Future of Water
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Hydrologic Innovation
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Pioneering sustainable water infrastructure through precision engineering and
              advanced computational tools. We transform complex hydraulic challenges into
              reliable, eco-conscious solutions that serve communities for generations.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid-lg opacity-60" />
        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  A world where every community has access to resilient, sustainable water
                  infrastructure — systems designed with precision, built for longevity, and
                  harmonized with the natural water cycle. We envision cities and farms alike
                  equipped with smart water networks that can adapt to climate variability while
                  minimizing environmental impact.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver precision hydraulic engineering by leveraging advanced simulation
                  tools, GIS integration, and data-driven modeling. We transform intricate
                  water infrastructure challenges into practical, cost-effective solutions that
                  empower municipalities, industries, and agricultural operations to manage
                  their water resources with confidence and clarity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto" />

      {/* Founders Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-line-grid opacity-70" />
        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              Meet Our Founders
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">The Minds Behind the Mission</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Two engineers united by a shared passion for transforming water infrastructure
              through innovation, precision, and sustainable design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Jaydip Lakhalani */}
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-500 border-primary/10">
              <div className="relative h-72 overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 flex flex-col items-center justify-center">
                <Avatar className="h-40 w-40 border-4 border-background shadow-xl">
                  <AvatarImage src="/jay.png" className="object-cover object-center" />
                  <AvatarFallback className="bg-primary/20 text-primary text-4xl font-bold">
                    {getInitials('Jaydip Lakhalani')}
                  </AvatarFallback>
                </Avatar>
                <h3 className="mt-4 text-2xl font-bold text-foreground">Jaydip Lakhalani</h3>
                <Badge className="mt-1 bg-primary/10 text-primary border-primary/20">
                  Co-Founder & Principal Engineer
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="h-4 w-4 text-primary" />
                  <p className="text-sm font-medium text-primary">
                    B.Tech Civil Engineering, LD Engineering Ahmedabad
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm mb-3">
                  With over two decades of experience in hydraulic infrastructure, Jaydip co-founded
                  Hydrologic Innovation with a singular purpose: to bring the precision of modern
                  computational engineering to water systems that serve communities. His work spans
                  municipal distribution networks, industrial wastewater systems, and agricultural
                  irrigation networks across South Asia and beyond.
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Jaydip's philosophy centers on the belief that sustainable water infrastructure
                  is not just an engineering challenge — it is a moral imperative.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">Hydraulic Modeling</Badge>
                  <Badge variant="secondary" className="text-xs">Water Distribution</Badge>
                  <Badge variant="secondary" className="text-xs">Infrastructure Design</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Avadh Vaghasiya */}
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-500 border-primary/10">
              <div className="relative h-72 overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 flex flex-col items-center justify-center">
                <Avatar className="h-40 w-40 border-4 border-background shadow-xl">
                  <AvatarImage src="/avadh.png" className="object-cover object-center" />
                  <AvatarFallback className="bg-primary/20 text-primary text-4xl font-bold">
                    {getInitials('Avadh Vaghasiya')}
                  </AvatarFallback>
                </Avatar>
                <h3 className="mt-4 text-2xl font-bold text-foreground">Avadh Vaghasiya</h3>
                <Badge className="mt-1 bg-primary/10 text-primary border-primary/20">
                  Co-Founder & GIS Specialist
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="h-4 w-4 text-primary" />
                  <p className="text-sm font-medium text-primary">
                    B.Tech Civil Engineering, Gujarat Technological University
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm mb-3">
                  Avadh brings deep expertise in Geographic Information Systems (GIS) to
                  Hydrologic Innovation, enabling the team to integrate spatial analysis and
                  geospatial data into every phase of hydraulic design. His proficiency in GIS-driven
                  modeling transforms raw terrain and network data into actionable engineering insights.
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  His vision of merging geospatial intelligence with hydraulic engineering
                  has been pivotal in delivering smarter, location-aware infrastructure solutions.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">GIS & Spatial Analysis</Badge>
                  <Badge variant="secondary" className="text-xs">Geospatial Modeling</Badge>
                  <Badge variant="secondary" className="text-xs">Data-Driven Design</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto" />

      {/* Core Values Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-background via-primary/5 to-background overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-50" />
        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              What Drives Us
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Our Core Values</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Every decision we make and every system we design is guided by principles that
              ensure we deliver lasting value to our clients and the environment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((value) => (
              <Card key={value.title} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="mx-auto p-3 rounded-full bg-primary/10 w-fit mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto" />

      {/* Company History Section */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid-lg opacity-55" />
        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              Our Journey
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Company History</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              From a small consultancy to a regional leader — a timeline of growth driven by
              innovation, trust, and an unwavering commitment to water engineering excellence.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {COMPANY_HISTORY.map((item, index) => (
              <div key={item.year} className="relative pl-8 pb-8 last:pb-0">
                {/* Timeline line */}
                {index !== COMPANY_HISTORY.length - 1 && (
                  <div className="absolute left-3 top-3 h-full w-px bg-border" />
                )}

                {/* Timeline dot */}
                <div className="absolute left-0 top-1 h-6 w-6 rounded-full bg-primary border-4 border-background shadow" />

                {/* Content */}
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                  <span className="text-lg font-bold text-primary">{item.year}</span>
                  <div>
                    <h4 className="font-semibold text-foreground">{item.milestone}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats/Impact Section */}
      <section className="relative py-16 md:py-20 border-t border-border overflow-hidden">
        <div className="absolute inset-0 bg-line-grid opacity-70" />
        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="h-6 w-6 text-primary" />
                <span className="text-3xl md:text-4xl font-bold text-foreground">10+</span>
              </div>
              <p className="text-sm text-muted-foreground">Years of Excellence</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Droplets className="h-6 w-6 text-primary" />
                <span className="text-3xl md:text-4xl font-bold text-foreground">50+</span>
              </div>
              <p className="text-sm text-muted-foreground">Projects Delivered</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="h-6 w-6 text-primary" />
                <span className="text-3xl md:text-4xl font-bold text-foreground">20+</span>
              </div>
              <p className="text-sm text-muted-foreground">Team Members</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Award className="h-6 w-6 text-primary" />
                <span className="text-3xl md:text-4xl font-bold text-foreground">5</span>
              </div>
              <p className="text-sm text-muted-foreground">Industry Awards</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;