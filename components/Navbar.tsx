
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'About', href: '/#about', isInternal: true },
    { name: 'Projects', href: '/#projects', isInternal: true },
    { name: 'Skills', href: '/#skills', isInternal: true },
    { name: 'Blog', href: '/blog', isInternal: false },
    { name: 'Contact', href: '/#contact', isInternal: true },
  ];

  const handleNavClick = (href: string, isInternal: boolean) => {
    setIsOpen(false);
    if (isInternal && location.pathname !== '/') {
      navigate('/');
      // Timeout to allow navigation to complete before scrolling
      setTimeout(() => {
        const id = href.replace('/#', '');
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-brand-gray/50">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-lg md:text-xl font-bold tracking-tighter flex items-center gap-1 md:gap-2 group">
          <span className="text-brand-orange">&lt;</span>
          <span>VK</span>
          <span className="text-brand-orange">/&gt;</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.isInternal ? (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (location.pathname === '/') {
                    e.preventDefault();
                    const id = link.href.replace('/#', '');
                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    handleNavClick(link.href, true);
                  }
                }}
                className="text-sm font-medium text-zinc-400 hover:text-brand-orange transition-colors"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-zinc-400 hover:text-brand-orange transition-colors"
              >
                {link.name}
              </Link>
            )
          ))}
          <a
            href="https://docs.google.com/document/d/1example-resume-link/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-full border border-brand-orange text-brand-orange text-sm font-semibold hover:bg-brand-orange hover:text-black transition-all"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden glass border-b border-brand-gray h-screen absolute top-16 left-0 right-0 p-6 flex flex-col gap-6 animate-fade-in">
          {navLinks.map((link) => (
            link.isInternal ? (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.href, true)}
                className="text-2xl font-bold hover:text-brand-orange"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold hover:text-brand-orange"
              >
                {link.name}
              </Link>
            )
          ))}
          <a
            href="#"
            className="mt-4 w-full py-4 text-center rounded-xl bg-brand-orange text-black font-bold"
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
