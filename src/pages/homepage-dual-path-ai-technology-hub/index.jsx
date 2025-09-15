import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/ui/Header";
import HeroSection from "./components/HeroSection";
import ValuePropositionGrid from "./components/ValuePropositionGrid";
import FounderSection from "./components/FounderSection";
import PartnershipBar from "./components/PartnershipBar";
import NewsletterSection from "./components/NewsletterSection";
import Footer from "components/ui/Footer";

const Homepage = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Develix - AI & Software that solve real problems | Building the future
          from Africa, for the world
        </title>
        <meta
          name="description"
          content="Develix is Nigeria's premier AI-first technology company offering enterprise solutions and consumer apps. From Lagos to global innovation with practical technology that delivers measurable impact."
        />
        <meta
          name="keywords"
          content="AI, software development, Nigeria tech, blockchain, fintech, enterprise solutions, consumer apps, African innovation"
        />
        <meta
          property="og:title"
          content="Develix - AI & Software that solve real problems"
        />
        <meta
          property="og:description"
          content="Building the future from Africa, for the world. Practical innovation with measurable impact."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://develix.com/" />
        <link rel="canonical" href="https://develix.com/" />
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

        <Footer />
      </div>
    </>
  );
};

export default Homepage;
