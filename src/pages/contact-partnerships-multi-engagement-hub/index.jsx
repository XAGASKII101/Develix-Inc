import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/ui/Header";
import ContactHero from "./components/ContactHero";
import ContactOptions from "./components/ContactOptions";
import ContactForm from "./components/ContactForm";
import OfficeInfo from "./components/OfficeInfo";
import TrustSignals from "./components/TrustSignals";
import FAQ from "./components/FAQ";

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
        <footer className="bg-primary text-primary-foreground py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-primary"
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
                  <span className="font-space-grotesk font-bold text-xl">
                    Develix
                  </span>
                </div>
                <p className="text-primary-foreground/80 mb-4 max-w-md">
                  Building the future of African technology with AI-powered
                  solutions that solve real problems for businesses and
                  consumers worldwide.
                </p>
                <p className="text-sm text-primary-foreground/60">
                  © {new Date()?.getFullYear()} Develix Technologies. All rights
                  reserved.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="/"
                      className="text-primary-foreground/80 hover:text-secondary brand-transition"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/solutions"
                      className="text-primary-foreground/80 hover:text-secondary brand-transition"
                    >
                      Solutions
                    </a>
                  </li>
                  <li>
                    <a
                      href="/marketplace"
                      className="text-primary-foreground/80 hover:text-secondary brand-transition"
                    >
                      Apps
                    </a>
                  </li>
                  <li>
                    <a
                      href="/projects-hub"
                      className="text-primary-foreground/80 hover:text-secondary brand-transition"
                    >
                      Projects
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-sm text-primary-foreground/80">
                  <li>hello@develix.com</li>
                  <li>+234 901 234 5678</li>
                  <li>Lagos, Nigeria</li>
                  <li>Mon-Fri: 9AM-6PM WAT</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ContactPartnershipsMultiEngagementHub;
