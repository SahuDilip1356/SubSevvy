import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#benefits' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleSignIn = () => {
    navigate('/login');
  };

  const handleStartFreeScan = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/signup');
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-serif font-bold text-coral">
            SubSavvy
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray hover:text-dark transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <button
                onClick={() => navigate('/dashboard')}
                className="bg-coral text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-coral-dark transition-all hover:shadow-lg"
              >
                Go to Dashboard
              </button>
            ) : (
              <>
                <button
                  onClick={handleSignIn}
                  className="text-gray hover:text-dark font-medium transition-colors"
                >
                  Sign In
                </button>
                <button
                  onClick={handleStartFreeScan}
                  className="bg-coral text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-coral-dark transition-all hover:shadow-lg"
                >
                  Start Free Scan
                </button>
              </>
            )}
          </div>

          <button
            className="md:hidden text-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-lightest">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-gray hover:text-dark transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              {user ? (
                <button
                  onClick={() => {
                    navigate('/dashboard');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-coral text-white px-6 py-3 rounded-lg font-semibold hover:bg-coral-dark transition-all"
                >
                  Go to Dashboard
                </button>
              ) : (
                <>
                  <button
                    onClick={() => {
                      handleSignIn();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-gray hover:text-dark font-medium transition-colors py-2"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => {
                      handleStartFreeScan();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-coral text-white px-6 py-3 rounded-lg font-semibold hover:bg-coral-dark transition-all"
                  >
                    Start Free Scan
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
