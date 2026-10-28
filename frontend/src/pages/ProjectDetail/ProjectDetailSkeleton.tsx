import { Skeleton } from '@/components/ui/skeleton';

const ProjectDetailSkeleton = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-6 border-b">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Skeleton className="h-9 w-32" />
        </div>
      </section>
      <section className="w-full py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="h-6 w-1/2" />
            <Skeleton className="h-40 w-full" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailSkeleton;
