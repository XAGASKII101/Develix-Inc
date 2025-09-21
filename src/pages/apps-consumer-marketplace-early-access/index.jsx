import React, { useState } from "react";
import Header from "../../components/ui/Header";
import HeroSection from "./components/HeroSection";
import AppCard from "./components/AppCard";
import AppPreview from "./components/AppPreview";
import DeveloperUpdates from "./components/DeveloperUpdates";
import CommunitySection from "./components/CommunitySection";
import WaitlistModal from "./components/WaitlistModal";
import Button from "../../components/ui/Button";
import Icon from "../../components/AppIcon";
import Image from "../../components/AppImage";
import Footer from "components/ui/Footer";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../lib/animations";

const AppsConsumerMarketplace = () => {
  const [selectedApp, setSelectedApp] = useState(null);
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [waitlistApp, setWaitlistApp] = useState(null);

  const apps = [
    {
      id: 1,
      name: "Elixa Coin",
      category: "fintech",
      status: "beta",
      statusLabel: "Beta Testing",
      description:
        "The first cryptocurrency wallet designed specifically for Africans. Send money across borders, pay bills, and manage your digital assets with ease.",
      fullDescription: `Elixa Coin revolutionizes how Africans interact with cryptocurrency. Built with deep understanding of local payment systems, mobile money integration, and the unique challenges of cross-border transactions in Africa.\n\nOur wallet seamlessly connects with Nigerian banks, supports multiple cryptocurrencies, and provides real-time Naira conversion rates. Whether you're sending money to family abroad, paying for online services, or building your crypto portfolio, Elixa Coin makes it simple and secure.`,
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      features: [
        "Bank-level security with biometric authentication",
        "Real-time Nigerian Naira conversion rates",
        "Integration with local banks and mobile money",
        "QR code payments and contact-based transfers",
        "Multi-signature wallet support",
        "Offline transaction queuing",
        "Low-fee cross-border transfers",
        "24/7 customer support in local languages",
      ],
      rating: 4.8,
      ratingCount: 234,
      waitlistCount: "5.2K",
      expectedLaunch: "Q1 2025",
      platforms: ["ios", "android", "web"],
      demoAvailable: true,
      integrations: ["GTBank", "Access Bank", "Paystack", "Flutterwave"],
    },
    {
      id: 2,
      name: "Vendra",
      category: "ai",
      status: "development",
      statusLabel: "In Development",
      description:
        "An AI assistant that speaks your language, understands your culture, and helps automate your business and personal tasks effortlessly.",
      fullDescription: `Vendra is more than just an AI assistant - it's your intelligent partner that understands Nigerian contexts, business practices, and cultural nuances. From managing your small business inventory to scheduling meetings around Nigerian holidays, Vendra gets it.\n\nTrained on African datasets and optimized for local use cases, Vendra can help with everything from writing professional emails in Nigerian English to automating repetitive business tasks. It works offline when needed and syncs when you're back online.`,
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      features: [
        "Natural conversation in English and Pidgin",
        "Understanding of Nigerian business contexts",
        "Smart task automation and scheduling",
        "Offline capability with sync when online",
        "Integration with popular Nigerian services",
        "Voice commands and text interaction",
        "Business workflow automation",
        "Cultural awareness and local holidays",
      ],
      rating: 4.6,
      ratingCount: 156,
      waitlistCount: "3.8K",
      expectedLaunch: "Q2 2025",
      platforms: ["ios", "android", "web"],
      demoAvailable: false,
      integrations: ["WhatsApp Business", "Google Calendar", "Slack"],
    },
  ];

  const comingSoonApps = [
    {
      id: 3,
      name: "Develix Pay",
      category: "fintech",
      description: "Unified payment solution for businesses across Africa",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      expectedLaunch: "Q3 2025",
      waitlistCount: "1.2K",
    },
    {
      id: 4,
      name: "Smart Inventory",
      category: "business",
      description: "AI-powered inventory management for African retailers",
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop",
      expectedLaunch: "Q4 2025",
      waitlistCount: "890",
    },
  ];

  const handleJoinWaitlist = (app = null) => {
    setWaitlistApp(app);
    setIsWaitlistModalOpen(true);
  };

  const handleCloseWaitlistModal = () => {
    setIsWaitlistModalOpen(false);
    setWaitlistApp(null);
  };

  const handleAppSelect = (app) => {
    setSelectedApp(app);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <HeroSection onJoinWaitlist={handleJoinWaitlist} />
      {/* Featured Apps */}
      <div className="bg-background py-16">
        <motion.div
          className="max-w-7xl mx-auto px-6 lg:px-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            variants={fadeIn("up", 0.2)}
          >
            <h2 className="font-space-grotesk font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Featured Apps
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our flagship applications designed to solve real problems
              for African users
            </p>
          </motion.div>

          {/* App Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {apps?.map((app, index) => (
              <motion.div
                key={app?.id}
                variants={fadeIn("up", index * 0.15)} // stagger effect
              >
                <AppCard app={app} onJoinWaitlist={handleJoinWaitlist} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      {/* App Preview Section */}
      {selectedApp && (
        <AppPreview app={selectedApp} onJoinWaitlist={handleJoinWaitlist} />
      )}
      {/* Quick Preview Cards */}
      <div className="bg-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-space-grotesk font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Experience the Future
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get a glimpse of how our apps will transform your daily digital
              experience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {apps?.map((app, i) => (
              <motion.div
                key={app?.id}
                onClick={() => handleAppSelect(app)}
                variants={fadeIn("up", 0.1 * i)} // stagger animations
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="bg-card rounded-xl border border-border p-6 cursor-pointer brand-shadow-card brand-transition brand-hover-lift hover:brand-shadow-modal"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon
                      name={app?.category === "fintech" ? "Coins" : "Bot"}
                      size={32}
                      className="text-primary"
                    />
                  </div>
                  <div>
                    <h3 className="font-space-grotesk font-bold text-xl text-foreground">
                      {app?.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {app?.category === "fintech"
                        ? "Cryptocurrency Wallet"
                        : "AI Assistant"}
                    </p>
                  </div>
                </div>

                <p className="text-foreground mb-4">{app?.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>{app?.waitlistCount} on waitlist</span>
                    <span>•</span>
                    <span>{app?.expectedLaunch}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="ArrowRight"
                    iconPosition="right"
                  >
                    Preview
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* Coming Soon Section */}
      <div className="bg-background py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={fadeIn("up", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="font-space-grotesk font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Coming Soon
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get early access to our upcoming applications and be the first to
              experience new innovations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {comingSoonApps?.map((app, i) => (
              <motion.div
                key={app?.id}
                variants={fadeIn("up", 0.15 * i)} // staggered animation
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="bg-card rounded-xl border border-border overflow-hidden brand-shadow-card brand-hover-lift"
              >
                <div className="relative h-48">
                  <Image
                    src={app?.image}
                    alt={app?.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-primary px-3 py-1 rounded-full text-xs font-semibold">
                      Coming Soon
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-space-grotesk font-bold text-xl text-foreground mb-2">
                    {app?.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {app?.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">
                        {app?.waitlistCount}
                      </span>{" "}
                      interested
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Expected:{" "}
                      <span className="font-medium text-foreground">
                        {app?.expectedLaunch}
                      </span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    fullWidth
                    iconName="Bell"
                    iconPosition="left"
                    onClick={() => handleJoinWaitlist(app)}
                  >
                    Get Notified
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* Developer Updates */}
      <DeveloperUpdates />
      {/* Community Section */}
      <CommunitySection />
      {/* Educational Content */}
      {/* <div className="bg-background py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-space-grotesk font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Understanding AI & Blockchain
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn how these technologies can improve your daily life,
              explained in simple terms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl border border-border p-6 brand-shadow-card">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Brain" size={24} className="text-secondary" />
              </div>
              <h3 className="font-space-grotesk font-semibold text-lg text-foreground mb-3">
                What is AI?
              </h3>
              <p className="text-muted-foreground mb-4">
                Artificial Intelligence helps computers understand and respond
                to human needs, making technology more helpful and intuitive.
              </p>
              <Button
                variant="ghost"
                size="sm"
                iconName="ArrowRight"
                iconPosition="right"
              >
                Learn More
              </Button>
            </div>

            <div className="bg-card rounded-xl border border-border p-6 brand-shadow-card">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Link" size={24} className="text-accent" />
              </div>
              <h3 className="font-space-grotesk font-semibold text-lg text-foreground mb-3">
                Blockchain Benefits
              </h3>
              <p className="text-muted-foreground mb-4">
                Secure, transparent technology that makes digital transactions
                safer and more affordable than traditional methods.
              </p>
              <Button
                variant="ghost"
                size="sm"
                iconName="ArrowRight"
                iconPosition="right"
              >
                Learn More
              </Button>
            </div>

            <div className="bg-card rounded-xl border border-border p-6 brand-shadow-card">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Shield" size={24} className="text-primary" />
              </div>
              <h3 className="font-space-grotesk font-semibold text-lg text-foreground mb-3">
                Your Privacy
              </h3>
              <p className="text-muted-foreground mb-4">
                We use advanced encryption and never share your personal data.
                Your information stays private and secure.
              </p>
              <Button
                variant="ghost"
                size="sm"
                iconName="ArrowRight"
                iconPosition="right"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div> */}
      {/* Final CTA */}
      <div className="bg-secondary py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-space-grotesk font-bold text-3xl lg:text-4xl text-primary mb-4">
            Ready to Experience the Future?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of early adopters who are already experiencing the
            next generation of African technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              iconName="Rocket"
              iconPosition="left"
              onClick={() => handleJoinWaitlist()}
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Join Early Access
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="MessageCircle"
              iconPosition="left"
              className="border-primary-foreground text-primary-foreground hover:bg-accent hover:border-accent"
            >
              Join Community
            </Button>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
      {/* Waitlist Modal */}
      <WaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={handleCloseWaitlistModal}
        app={waitlistApp}
      />
    </div>
  );
};

export default AppsConsumerMarketplace;
