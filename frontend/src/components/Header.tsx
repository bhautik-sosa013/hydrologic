import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Droplets } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

/*
 * TODO: Real API binding — fetch current authenticated user if auth is added
 * import { apiService } from '@/lib/api';
 * const response = await apiService.get({ endpoint: '/auth/me' });
 * setUser(response.data);
 */

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Technology', path: '/technology' },
  { label: 'Industries', path: '/industries' },
  { label: 'Contact', path: '/contact' },
];

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    'text-sm font-medium transition-colors hover:text-primary',
    isActive ? 'text-primary' : 'text-foreground/80'
  );

const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    'block px-3 py-2 rounded-md text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground',
    isActive ? 'bg-accent text-accent-foreground' : 'text-foreground/80'
  );

const Header = () => {
  const isMobile = useIsMobile();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <button
          onClick={handleLogoClick}
          className="flex items-center gap-2 focus:outline-none"
          aria-label="Go to homepage"
        >
          <Droplets className="h-7 w-7 text-primary" />
          <span className="text-lg font-bold tracking-tight text-foreground">
            Hydrologic Innovation
          </span>
        </button>

        {/* Desktop nav */}
        {!isMobile && (
          <nav className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={navLinkClass}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        )}

        {/* Desktop CTA */}
        {!isMobile && (
          <div className="hidden md:flex items-center gap-3">
            <Button asChild size="sm">
              <Link to="/contact">Get Consultation</Link>
            </Button>
          </div>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <Sheet open={drawerOpen} onOpenChange={setDrawerOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open navigation menu">
                {drawerOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 pt-10">
              <div className="flex flex-col gap-1 mt-4">
                {NAV_ITEMS.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === '/'}
                    className={mobileNavLinkClass}
                    onClick={() => setDrawerOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ))}
                <div className="mt-4 px-3">
                  <Button asChild className="w-full" onClick={() => setDrawerOpen(false)}>
                    <Link to="/contact">Get Consultation</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </header>
  );
};

export default Header;
