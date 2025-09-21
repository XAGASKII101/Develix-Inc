import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/ui/Header";
import HeroSection from "./components/HeroSection";
import ServiceBreakdown from "./components/ServiceBreakdown";
import CaseStudyPreviews from "./components/CaseStudyPreviews";
import TechnicalCapabilities from "./components/TechnicalCapabilities";
import ConsultationBooking from "./components/ConsultationBooking";
import IndustrySolutions from "./components/IndustrySolutions";
import PartnershipIntegrations from "./components/PartnershipIntegrations";
import PricingFramework from "./components/PricingFramework";
import TrustSignals from "./components/TrustSignals";
import { Link } from "react-router-dom";
import Footer from "components/ui/Footer";

const SolutionsB2BServiceEcosystem = () => {
  return (
    <>
      <Helmet>
        <title>
          Enterprise AI & Blockchain Solutions - Develix B2B Services
        </title>
        <meta
          name="description"
          content="Transform your business with enterprise-grade AI and blockchain solutions. Trusted by 50+ Nigerian companies. Custom software, digital transformation, and technical consulting services."
        />
        <meta
          name="keywords"
          content="enterprise AI, blockchain solutions, custom software development, digital transformation, Nigerian fintech, B2B technology services"
        />
        <meta
          property="og:title"
          content="Enterprise AI & Blockchain Solutions - Develix B2B Services"
        />
        <meta
          property="og:description"
          content="Transform your business with enterprise-grade AI and blockchain solutions built for African markets."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/solutions" />
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
        <Footer />
      </div>
    </>
  );
};

export default SolutionsB2BServiceEcosystem;
