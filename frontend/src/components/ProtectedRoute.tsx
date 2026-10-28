import { ReactNode } from 'react';

/**
 * ProtectedRoute — no pages in this app currently require authentication.
 * This component is a pass-through placeholder. If auth is added in the future,
 * wire in MockAuthContext (or a real AuthContext) and add redirect logic here.
 *
 * TODO: Real auth binding
 * import { useAuth } from '@/contexts/MockAuthContext';
 * const { isAuthenticated } = useAuth();
 * if (!isAuthenticated) return <Navigate to="/login" replace />;
 */

interface ProtectedRouteProps {
  children: ReactNode;
  requiredPermission?: string;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  return <>{children}</>;
};

export default ProtectedRoute;
