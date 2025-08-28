import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ServiceBreakdown from './components/ServiceBreakdown';
import CaseStudyPreviews from './components/CaseStudyPreviews';
import TechnicalCapabilities from './components/TechnicalCapabilities';
import ConsultationBooking from './components/ConsultationBooking';
import IndustrySolutions from './components/IndustrySolutions';
import PartnershipIntegrations from './components/PartnershipIntegrations';
import PricingFramework from './components/PricingFramework';
import TrustSignals from './components/TrustSignals';

const SolutionsB2BServiceEcosystem = () => {
  return (
    <>
      <Helmet>
        <title>Enterprise AI & Blockchain Solutions - Develix B2B Services</title>
        <meta 
          name="description" 
          content="Transform your business with enterprise-grade AI and blockchain solutions. Trusted by 50+ Nigerian companies. Custom software, digital transformation, and technical consulting services." 
        />
        <meta name="keywords" content="enterprise AI, blockchain solutions, custom software development, digital transformation, Nigerian fintech, B2B technology services" />
        <meta property="og:title" content="Enterprise AI & Blockchain Solutions - Develix B2B Services" />
        <meta property="og:description" content="Transform your business with enterprise-grade AI and blockchain solutions built for African markets." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/solutions-b2b-service-ecosystem" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          <HeroSection />
          <ServiceBreakdown />
          <CaseStudyPreviews />
          <TechnicalCapabilities />
          <IndustrySolutions />
          <PartnershipIntegrations />
          <PricingFramework />
          <TrustSignals />
          <ConsultationBooking />
        </main>

        {/* Footer */}
        <footer className="bg-primary text-primary-foreground py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary-foreground">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-space-grotesk font-bold text-xl">Develix</div>
                    <div className="text-sm opacity-80">Enterprise Solutions</div>
                  </div>
                </div>
                <p className="text-primary-foreground/80 mb-6 max-w-md">
                  Nigeria's premier AI-first technology partner for enterprise clients. 
                  Building the future of African business technology.
                </p>
                <div className="text-sm text-primary-foreground/60">
                  © {new Date()?.getFullYear()} Develix Technologies. All rights reserved.
                </div>
              </div>

              <div>
                <h4 className="font-space-grotesk font-bold mb-4">Solutions</h4>
                <ul className="space-y-2 text-sm text-primary-foreground/80">
                  <li>AI Development</li>
                  <li>Blockchain Integration</li>
                  <li>Custom Software</li>
                  <li>Digital Transformation</li>
                </ul>
              </div>

              <div>
                <h4 className="font-space-grotesk font-bold mb-4">Contact</h4>
                <ul className="space-y-2 text-sm text-primary-foreground/80">
                  <li>Lagos, Nigeria</li>
                  <li>+234 xxx xxx xxxx</li>
                  <li>enterprise@develix.com</li>
                  <li>24/7 Support Available</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default SolutionsB2BServiceEcosystem;