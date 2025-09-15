import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/ui/Header";
import ContactHero from "./components/ContactHero";
import ContactOptions from "./components/ContactOptions";
import ContactForm from "./components/ContactForm";
import OfficeInfo from "./components/OfficeInfo";
import TrustSignals from "./components/TrustSignals";
import FAQ from "./components/FAQ";
import Footer from "components/ui/Footer";

const ContactPartnershipsMultiEngagementHub = () => {
  return (
    <>
      <Helmet>
        <title>Contact & Partnerships - Multi-Engagement Hub | Develix</title>
        <meta
          name="description"
          content="Connect with Develix through multiple engagement pathways. Enterprise consultations, partnerships, investor relations, and community access. Lagos office with global reach."
        />
        <meta
          name="keywords"
          content="contact develix, partnerships, enterprise consultation, investor relations, lagos office, ai development contact"
        />
        <meta
          property="og:title"
          content="Contact & Partnerships - Multi-Engagement Hub | Develix"
        />
        <meta
          property="og:description"
          content="Connect with Develix through multiple engagement pathways. Enterprise consultations, partnerships, investor relations, and community access."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact & Partnerships - Multi-Engagement Hub | Develix"
        />
        <meta
          name="twitter:description"
          content="Connect with Develix through multiple engagement pathways. Enterprise consultations, partnerships, investor relations, and community access."
        />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-16">
          <ContactHero />
          <ContactOptions />
          <ContactForm />
          <OfficeInfo />
          <TrustSignals />
          <FAQ />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default ContactPartnershipsMultiEngagementHub;
