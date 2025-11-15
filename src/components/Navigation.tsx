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
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
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
        isScrolled ? 'bg-navy-950/80 backdrop-blur-lg border-b border-white/10' : 'bg-navy-950/80 backdrop-blur-lg border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-cta rounded-lg" />
            <span className="text-xl font-bold text-white">SubSavvy</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-400 hover:text-white transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={handleSignIn}
              className="text-slate-400 hover:text-white transition-colors font-medium"
            >
              Sign In
            </button>
            <button
              onClick={handleStartFreeScan}
              className="bg-gradient-cta text-white px-6 py-2.5 rounded-xl font-semibold hover:shadow-glow-lg transition-all hover:-translate-y-0.5"
            >
              {user ? 'Go to Dashboard' : 'Start Free Scan'}
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-navy-900 border-t border-white/10">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-slate-400 hover:text-white transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <button
                onClick={() => {
                  handleSignIn();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-slate-400 hover:text-white font-medium transition-colors py-2"
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  handleStartFreeScan();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-gradient-cta text-white px-6 py-3 rounded-xl font-semibold hover:shadow-glow transition-all"
              >
                {user ? 'Go to Dashboard' : 'Start Free Scan'}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
