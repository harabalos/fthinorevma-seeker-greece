import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Αρχική', path: '/' },
    { name: 'Πώς Λειτουργεί', path: '/how-it-works' },
    { name: 'Συχνές Ερωτήσεις', path: '/faq' },
    { name: 'Επικοινωνία', path: '/contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary border-b shadow-md transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/9a52fe6d-aa1e-40d7-913d-071a61dab65b.png" 
              alt="Follow Up" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-bold text-white">
              FOLLOW UP
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors hover:text-white/80 ${
                  location.pathname === item.path
                    ? 'text-white font-medium'
                    : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Phone & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:210265051" 
              className="flex items-center space-x-2 text-white hover:text-white/80 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">210265051</span>
            </a>
            <Button asChild size="sm" variant="outline" className="border-white text-primary hover:bg-dark-blue hover:border-dark-blue hover:text-white">
              <Link to="/contact">Δωρεάν Ανάλυση</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-primary border-t border-white/20">
            <div className="flex flex-col py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2 transition-colors hover:text-white/80 ${
                    location.pathname === item.path
                      ? 'text-white font-medium bg-white/10'
                      : 'text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-4 border-t border-white/20">
                <a 
                  href="tel:210265051" 
                  className="flex items-center space-x-2 text-white hover:text-white/80 transition-colors mb-3"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">210265051</span>
                </a>
                <Button asChild className="w-full" variant="outline" onClick={() => setIsOpen(false)}>
                  <Link to="/contact" className="border-white text-white hover:bg-dark-blue hover:border-dark-blue">
                    Δωρεάν Ανάλυση
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;