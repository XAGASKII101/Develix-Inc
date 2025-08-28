import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ValuePropositionGrid from './components/ValuePropositionGrid';
import FounderSection from './components/FounderSection';
import PartnershipBar from './components/PartnershipBar';
import NewsletterSection from './components/NewsletterSection';

const Homepage = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Develix - AI & Software that solve real problems | Building the future from Africa, for the world</title>
        <meta 
          name="description" 
          content="Develix is Nigeria's premier AI-first technology company offering enterprise solutions and consumer apps. From Lagos to global innovation with practical technology that delivers measurable impact." 
        />
        <meta name="keywords" content="AI, software development, Nigeria tech, blockchain, fintech, enterprise solutions, consumer apps, African innovation" />
        <meta property="og:title" content="Develix - AI & Software that solve real problems" />
        <meta property="og:description" content="Building the future from Africa, for the world. Practical innovation with measurable impact." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://develix.com/homepage-dual-path-ai-technology-hub" />
        <link rel="canonical" href="https://develix.com/homepage-dual-path-ai-technology-hub" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <HeroSection />
          <ValuePropositionGrid />
          <FounderSection />
          <PartnershipBar />
          <NewsletterSection />
        </main>

        <footer className="bg-primary text-primary-foreground py-12">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
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
                <span className="font-space-grotesk font-bold text-xl">Develix</span>
              </div>
              
              <p className="font-inter text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
                Empowering businesses and consumers with cutting-edge AI and software solutions. 
                Building the future from Africa, for the world.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-6 text-primary-foreground/60 text-sm">
                <span>© {new Date()?.getFullYear()} Develix. All rights reserved.</span>
                <span>•</span>
                <a href="#" className="hover:text-primary-foreground brand-transition">Privacy Policy</a>
                <span>•</span>
                <a href="#" className="hover:text-primary-foreground brand-transition">Terms of Service</a>
                <span>•</span>
                <span>Made with ❤️ in Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Homepage;