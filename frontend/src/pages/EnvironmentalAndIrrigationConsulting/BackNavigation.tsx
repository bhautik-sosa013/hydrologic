import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BackNavigation = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full py-6 border-b">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate(-1)}
          className="pl-0 hover:pl-2 transition-all"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Services
        </Button>
      </div>
    </section>
  );
};

export default BackNavigation;
