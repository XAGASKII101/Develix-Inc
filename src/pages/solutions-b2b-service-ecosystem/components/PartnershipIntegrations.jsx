import React from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";
import Image from "../../../components/AppImage";

import { motion } from "framer-motion";
import { fadeUp } from "../../../lib/animations";

const PartnershipIntegrations = () => {
  const partnerCategories = [
    {
      title: "Payment Gateways",
      description:
        "Seamless integration with leading African payment processors",
      partners: [
        {
          name: "Paystack",
          logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop",
          description:
            "Direct API integration for card payments, bank transfers, and mobile money",
          features: [
            "Real-time payments",
            "Fraud protection",
            "Multi-currency support",
          ],
          integrationTime: "2-3 days",
        },
        {
          name: "Flutterwave",
          logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop",
          description:
            "Comprehensive payment solutions across Africa and globally",
          features: [
            "Cross-border payments",
            "Recurring billing",
            "Payment analytics",
          ],
          integrationTime: "3-5 days",
        },
        {
          name: "Interswitch",
          logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop",
          description: "Nigeria's leading payment infrastructure provider",
          features: ["POS integration", "Bank transfers", "Bill payments"],
          integrationTime: "5-7 days",
        },
      ],
    },
    {
      title: "Cloud Infrastructure",
      description: "Enterprise-grade cloud services for scalable applications",
      partners: [
        {
          name: "Amazon Web Services",
          logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=120&h=60&fit=crop",
          description:
            "Comprehensive cloud computing platform with global reach",
          features: ["Auto-scaling", "99.9% uptime", "Global CDN"],
          integrationTime: "1-2 weeks",
        },
        {
          name: "Google Cloud Platform",
          logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=120&h=60&fit=crop",
          description: "Advanced AI and machine learning capabilities",
          features: ["AI/ML services", "BigQuery analytics", "Kubernetes"],
          integrationTime: "1-2 weeks",
        },
        {
          name: "Microsoft Azure",
          logo: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?w=120&h=60&fit=crop",
          description:
            "Enterprise-focused cloud solutions with hybrid capabilities",
          features: ["Active Directory", "DevOps tools", "Hybrid cloud"],
          integrationTime: "2-3 weeks",
        },
      ],
    },
    {
      title: "Blockchain Networks",
      description:
        "Integration with leading blockchain platforms and protocols",
      partners: [
        {
          name: "Polygon",
          logo: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=120&h=60&fit=crop",
          description:
            "Ethereum-compatible blockchain with low transaction costs",
          features: ["Low gas fees", "Fast transactions", "DeFi ecosystem"],
          integrationTime: "1-2 weeks",
        },
        {
          name: "Binance Smart Chain",
          logo: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=120&h=60&fit=crop",
          description:
            "High-performance blockchain for DeFi and NFT applications",
          features: [
            "High throughput",
            "EVM compatible",
            "Cross-chain bridges",
          ],
          integrationTime: "1-2 weeks",
        },
        {
          name: "Ethereum",
          logo: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=120&h=60&fit=crop",
          description:
            "Leading smart contract platform with extensive ecosystem",
          features: ["Smart contracts", "DeFi protocols", "NFT standards"],
          integrationTime: "2-3 weeks",
        },
      ],
    },
    {
      title: "Enterprise Tools",
      description: "Seamless integration with existing enterprise software",
      partners: [
        {
          name: "Microsoft 365",
          logo: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?w=120&h=60&fit=crop",
          description: "Complete productivity suite integration",
          features: ["Single sign-on", "Teams integration", "SharePoint sync"],
          integrationTime: "3-5 days",
        },
        {
          name: "Salesforce",
          logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop",
          description: "CRM integration for customer data synchronization",
          features: ["Lead management", "Sales automation", "Custom objects"],
          integrationTime: "1-2 weeks",
        },
        {
          name: "SAP",
          logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop",
          description: "Enterprise resource planning system integration",
          features: [
            "ERP integration",
            "Financial data sync",
            "Workflow automation",
          ],
          integrationTime: "2-4 weeks",
        },
      ],
    },
  ];

  const integrationProcess = [
    {
      step: 1,
      title: "Assessment & Planning",
      description:
        "We analyze your existing systems and plan the integration strategy",
      duration: "1-2 days",
      icon: "Search",
    },
    {
      step: 2,
      title: "API Configuration",
      description:
        "Configure APIs and establish secure connections with partner systems",
      duration: "2-5 days",
      icon: "Settings",
    },
    {
      step: 3,
      title: "Testing & Validation",
      description:
        "Comprehensive testing to ensure seamless data flow and functionality",
      duration: "1-3 days",
      icon: "CheckCircle",
    },
    {
      step: 4,
      title: "Deployment & Monitoring",
      description: "Go-live deployment with continuous monitoring and support",
      duration: "1 day",
      icon: "Rocket",
    },
  ];

  return (
    <motion.section
      className="py-20 bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={fadeUp} custom={0}>
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Link" size={16} className="mr-2" />
            Partnership Integrations
          </div>
          <h2 className="text-3xl lg:text-5xl font-space-grotesk font-bold text-foreground mb-6">
            Seamless Integration with
            <span className="block text-primary mt-2">Your Existing Tools</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with leading platforms and services through our pre-built
            integrations. From payment gateways to enterprise software, we
            ensure smooth data flow.
          </p>
        </motion.div>

        {/* Partner Categories */}
        <motion.div className="space-y-16" variants={fadeUp} custom={1}>
          {partnerCategories?.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-8">
              <motion.div
                className="text-center"
                variants={fadeUp}
                custom={categoryIndex + 1}
              >
                <h3 className="text-2xl lg:text-3xl font-space-grotesk font-bold text-foreground mb-4">
                  {category?.title}
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {category?.description}
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-3 gap-8">
                {category?.partners?.map((partner, partnerIndex) => (
                  <motion.div
                    key={partnerIndex}
                    className="bg-card rounded-xl p-8 border border-border brand-shadow-card hover:border-primary/20 brand-transition group brand-hover-lift"
                    variants={fadeUp}
                    custom={partnerIndex + 1}
                  >
                    {/* Partner Card */}
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-surface rounded-lg flex items-center justify-center mr-4 overflow-hidden">
                        <Image
                          src={partner?.logo}
                          alt={`${partner?.name} logo`}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <div>
                        <h4 className="text-xl font-space-grotesk font-bold text-foreground">
                          {partner?.name}
                        </h4>
                        <div className="flex items-center mt-1">
                          <Icon
                            name="Clock"
                            size={14}
                            className="text-accent mr-1"
                          />
                          <span className="text-sm text-accent font-medium">
                            {partner?.integrationTime}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {partner?.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center">
                        <Icon
                          name="Zap"
                          size={16}
                          className="text-secondary mr-2"
                        />
                        <span className="text-sm font-medium text-foreground">
                          Key Features
                        </span>
                      </div>
                      <div className="space-y-2">
                        {partner?.features?.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <Icon
                              name="Check"
                              size={14}
                              className="text-accent mr-2 flex-shrink-0"
                            />
                            <span className="text-sm text-muted-foreground">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      fullWidth
                      className="group-hover:border-primary group-hover:text-primary"
                      iconName="ExternalLink"
                      iconPosition="right"
                    >
                      View Integration Details
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Integration Process */}
        <motion.div
          className="mt-20 pt-16 border-t border-border"
          variants={fadeUp}
          custom={2}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-space-grotesk font-bold text-foreground mb-4">
              Our Integration Process
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A streamlined 4-step process ensuring smooth integration with
              minimal disruption to your existing operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {integrationProcess?.map((process, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={fadeUp}
                custom={index + 1}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto group-hover:bg-primary/20 brand-transition">
                    <Icon
                      name={process.icon}
                      size={28}
                      className="text-primary"
                    />
                  </div>
                </div>

                <h4 className="text-lg font-space-grotesk font-bold text-foreground mb-2">
                  {process.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                  {process.description}
                </p>
                <div className="inline-flex items-center px-3 py-1 bg-accent/10 rounded-full">
                  <Icon name="Clock" size={14} className="mr-1" />
                  <span className="text-xs font-medium">
                    {process.duration}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16 pt-12 border-t border-border"
          variants={fadeUp}
          custom={3}
        >
          <h3 className="text-2xl font-space-grotesk font-bold text-foreground mb-4">
            Need a Custom Integration?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't see your platform listed? We can build custom integrations for
            any system or service your business relies on.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              className="bg-primary hover:bg-hover-bg duration-150 font-semibold brand-hover-lift"
              iconName="MessageSquare"
              iconPosition="left"
            >
              Discuss Custom Integration
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground/20 hover:border-accent"
              iconName="FileText"
              iconPosition="left"
            >
              View Integration Catalog
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PartnershipIntegrations;
