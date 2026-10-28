const ProjectsHeader = () => {
  return (
    <section className="relative bg-muted/30 py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-55" />
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Our Projects
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore Hydrologic Innovation's portfolio of completed and ongoing engineering
            projects. Each case study demonstrates our expertise in solving complex water
            infrastructure challenges across diverse sectors.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHeader;
