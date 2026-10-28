import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { cn } from '@/lib/utils';
import { FetchProjectsResult } from './projectsData';

interface ProjectsPaginationProps {
  projectsData: FetchProjectsResult;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  getPaginationItems: () => (number | 'ellipsis')[];
}

const ProjectsPagination = ({
  projectsData,
  page,
  setPage,
  getPaginationItems,
}: ProjectsPaginationProps) => {
  if (projectsData.totalPages <= 1) return null;

  return (
    <div className="mt-12">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className={cn(
                page === 1 && 'pointer-events-none opacity-50'
              )}
            />
          </PaginationItem>

          {getPaginationItems().map((item, idx) =>
            item === 'ellipsis' ? (
              <PaginationItem key={`ellipsis-${idx}`}>
                <PaginationEllipsis />
              </PaginationItem>
            ) : (
              <PaginationItem key={item}>
                <PaginationLink
                  isActive={page === item}
                  onClick={() => setPage(item)}
                >
                  {item}
                </PaginationLink>
              </PaginationItem>
            )
          )}

          <PaginationItem>
            <PaginationNext
              onClick={() => setPage((p) => Math.min(projectsData.totalPages, p + 1))}
              className={cn(
                page === projectsData.totalPages && 'pointer-events-none opacity-50'
              )}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default ProjectsPagination;
