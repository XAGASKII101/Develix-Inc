import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import Icon from "../AppIcon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    {
      name: "Home",
      path: "/",
      description: "AI & Software Solutions Hub",
    },
    {
      name: "Solutions",
      path: "/solutions",
      description: "B2B Service Ecosystem",
    },
    {
      name: "Apps",
      path: "/marketplace",
      description: "Consumer Marketplace",
    },
    {
      name: "Projects",
      path: "/projects-hub",
      description: "Technical Showcase",
    },
    {
      name: "About",
      path: "/about-us",
      description: "Founder Stories & Culture",
    },
  ];

  const secondaryItems = [
    {
      name: "Contact",
      path: "/contact-us",
      description: "Partnerships & Engagement",
    },
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
          ? "bg-background/95 backdrop-blur-md border-b border-border brand-shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-6 lg:px-8 2xl:px-28">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 brand-transition hover:opacity-80"
            onClick={closeMenu}
          >
            <div>
              <img className="w-16 h-16" src="/Develix_Logo.webp" />
            </div>

            <div className="flex flex-col">
              <span className="font-space-grotesk font-bold text-lg text-foreground">
                Develix Inc
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
                    ? "text-primary bg-primary/5"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
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
            <Link to="/contact-us">
              <Button
                variant="ghost"
                size="sm"
                className="font-inter font-medium duration-150"
              >
                Contact
              </Button>
            </Link>
            <Button
              variant="default"
              size="sm"
              className="hover:bg-hover-bg font-inter font-semibold =duration-150"
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
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 py-4 bg-background border-t border-border brand-shadow-card">
            <nav className="space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMenu}
                  className={`block px-4 py-3 rounded-lg font-inter font-medium duration-100 ${
                    isActivePath(item?.path)
                      ? "text-primary bg-primary/10 border-l-4 border-primary"
                      : "text-foreground hover:border-l-4 hover:text-primary hover:bg-surface"
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
                  className={`block px-4 py-3 rounded-lg font-inter font-medium duration-100 ${
                    isActivePath(item?.path)
                      ? "text-primary bg-primary/10 border-l-4 border-primary"
                      : "text-foreground hover:border-l-4 hover:text-primary hover:bg-surface"
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
