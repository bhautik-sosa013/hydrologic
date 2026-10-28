import { ReactNode } from 'react';
import Header from '@/components/Header';
import ErrorBoundary from '@/components/ErrorBoundary';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <ErrorBoundary catchAsyncErrors>
          {children}
        </ErrorBoundary>
      </main>
    </div>
  );
};

export default AppLayout;
