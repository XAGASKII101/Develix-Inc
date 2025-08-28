import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import Icon from '../AppIcon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { 
      name: 'Home', 
      path: '/homepage-dual-path-ai-technology-hub',
      description: 'AI & Software Solutions Hub'
    },
    { 
      name: 'Solutions', 
      path: '/solutions-b2b-service-ecosystem',
      description: 'B2B Service Ecosystem'
    },
    { 
      name: 'Apps', 
      path: '/apps-consumer-marketplace-early-access',
      description: 'Consumer Marketplace'
    },
    { 
      name: 'Projects', 
      path: '/projects-hub-technical-showcase-vision',
      description: 'Technical Showcase'
    },
    { 
      name: 'About', 
      path: '/about-ecosystem-founder-stories-culture',
      description: 'Founder Stories & Culture'
    }
  ];

  const secondaryItems = [
    { 
      name: 'Contact', 
      path: '/contact-partnerships-multi-engagement-hub',
      description: 'Partnerships & Engagement'
    }
  ];

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 brand-transition ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border brand-shadow-card' 
          : 'bg-transparent'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-6 lg:px-8">
          {/* Logo */}
          <Link 
            to="/homepage-dual-path-ai-technology-hub" 
            className="flex items-center space-x-3 brand-transition hover:opacity-80"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className="text-primary-foreground"
                >
                  <path 
                    d="M12 2L2 7L12 12L22 7L12 2Z" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <path 
                    d="M2 17L12 22L22 17" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <path 
                    d="M2 12L12 17L22 12" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-space-grotesk font-bold text-lg text-foreground">
                Develix
              </span>
              <span className="font-inter text-xs text-muted-foreground -mt-1">
                Afrofuturist Tech
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`relative px-4 py-2 rounded-lg font-inter font-medium text-sm brand-transition group ${
                  isActivePath(item?.path)
                    ? 'text-primary bg-primary/5' :'text-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                {item?.name}
                {isActivePath(item?.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent rounded-full"></div>
                )}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-primary text-primary-foreground text-xs rounded-md opacity-0 group-hover:opacity-100 brand-transition pointer-events-none whitespace-nowrap">
                  {item?.description}
                </div>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/contact-partnerships-multi-engagement-hub">
              <Button variant="ghost" size="sm" className="font-inter font-medium">
                Contact
              </Button>
            </Link>
            <Button 
              variant="default" 
              size="sm" 
              className="bg-primary hover:bg-primary/90 font-inter font-semibold brand-hover-lift"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-muted brand-transition"
            aria-label="Toggle menu"
          >
            <Icon 
              name={isMenuOpen ? "X" : "Menu"} 
              size={24} 
              className="text-foreground" 
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden brand-transition overflow-hidden ${
            isMenuOpen 
              ? 'max-h-screen opacity-100' :'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 py-4 bg-background border-t border-border brand-shadow-card">
            <nav className="space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMenu}
                  className={`block px-4 py-3 rounded-lg font-inter font-medium brand-transition ${
                    isActivePath(item?.path)
                      ? 'text-primary bg-primary/10 border-l-4 border-primary' :'text-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="text-base">{item?.name}</span>
                    <span className="text-sm text-muted-foreground mt-1">
                      {item?.description}
                    </span>
                  </div>
                </Link>
              ))}
              
              {secondaryItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMenu}
                  className={`block px-4 py-3 rounded-lg font-inter font-medium brand-transition ${
                    isActivePath(item?.path)
                      ? 'text-primary bg-primary/10 border-l-4 border-primary' :'text-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="text-base">{item?.name}</span>
                    <span className="text-sm text-muted-foreground mt-1">
                      {item?.description}
                    </span>
                  </div>
                </Link>
              ))}
            </nav>

            <div className="mt-6 pt-4 border-t border-border">
              <Button 
                variant="default" 
                fullWidth 
                className="bg-primary hover:bg-primary/90 font-inter font-semibold"
                onClick={closeMenu}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;