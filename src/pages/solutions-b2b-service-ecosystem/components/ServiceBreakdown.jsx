import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceBreakdown = () => {
  const [activeService, setActiveService] = useState('ai');

  const services = {
    ai: {
      title: "AI Development Solutions",
      description: "Custom artificial intelligence solutions tailored for Nigerian enterprises",
      applications: [
        {
          title: "Banking Chatbots",
          description: "AI-powered customer service for Nigerian banks with local language support",
          metrics: "85% reduction in support tickets, 24/7 availability",
          technologies: ["Natural Language Processing", "Machine Learning", "Multi-language Support"],
          icon: "MessageSquare"
        },
        {
          title: "Fraud Detection",
          description: "Real-time transaction monitoring for fintech platforms",
          metrics: "99.7% accuracy, ₦500M+ fraud prevented annually",
          technologies: ["Deep Learning", "Pattern Recognition", "Real-time Analytics"],
          icon: "Shield"
        },
        {
          title: "Predictive Analytics",
          description: "Business intelligence and forecasting for retail chains",
          metrics: "30% improvement in inventory optimization",
          technologies: ["Time Series Analysis", "Statistical Modeling", "Data Visualization"],
          icon: "TrendingUp"
        }
      ]
    },
    blockchain: {
      title: "Blockchain Integration",
      description: "Secure, transparent blockchain solutions for supply chain and finance",
      applications: [
        {
          title: "Agricultural Supply Chain",
          description: "Farm-to-market traceability for Nigerian agricultural products",
          metrics: "40% reduction in food waste, 100% traceability",
          technologies: ["Smart Contracts", "IoT Integration", "Mobile Apps"],
          icon: "Wheat"
        },
        {
          title: "Digital Identity",
          description: "Secure identity verification for financial services",
          metrics: "99.9% security rating, 5-second verification",
          technologies: ["Decentralized Identity", "Biometric Integration", "KYC Automation"],
          icon: "UserCheck"
        },
        {
          title: "Payment Solutions",
          description: "Cross-border payment infrastructure with Paystack integration",
          metrics: "50% lower transaction fees, instant settlements",
          technologies: ["DeFi Protocols", "Multi-currency Support", "API Integration"],
          icon: "CreditCard"
        }
      ]
    },
    software: {
      title: "Custom Software Development",
      description: "Tailored applications designed for African market needs",
      applications: [
        {
          title: "E-commerce Platforms",
          description: "Full-stack e-commerce solutions with local payment integration",
          metrics: "300% increase in online sales, mobile-first design",
          technologies: ["React/Next.js", "Node.js", "Payment Gateway APIs"],
          icon: "ShoppingCart"
        },
        {
          title: "Healthcare Management",
          description: "Patient management systems for Nigerian healthcare providers",
          metrics: "60% improvement in patient flow, HIPAA compliant",
          technologies: ["Electronic Health Records", "Telemedicine", "Data Security"],
          icon: "Heart"
        },
        {
          title: "Educational Platforms",
          description: "Learning management systems for African educational institutions",
          metrics: "200% increase in student engagement, offline capability",
          technologies: ["Progressive Web Apps", "Video Streaming", "Assessment Tools"],
          icon: "GraduationCap"
        }
      ]
    },
    transformation: {
      title: "Digital Transformation",
      description: "Complete digital ecosystem overhaul for traditional businesses",
      applications: [
        {
          title: "Process Automation",
          description: "Workflow automation for manufacturing and logistics companies",
          metrics: "70% reduction in manual processes, 24/7 operations",
          technologies: ["RPA", "Workflow Engines", "Integration Platforms"],
          icon: "Cog"
        },
        {
          title: "Cloud Migration",
          description: "Secure migration to cloud infrastructure with local data centers",
          metrics: "50% cost reduction, 99.9% uptime guarantee",
          technologies: ["AWS", "Google Cloud", "Azure", "Hybrid Solutions"],
          icon: "Cloud"
        },
        {
          title: "Data Analytics",
          description: "Business intelligence dashboards for data-driven decision making",
          metrics: "40% improvement in decision speed, real-time insights",
          technologies: ["Big Data", "Machine Learning", "Visualization Tools"],
          icon: "BarChart"
        }
      ]
    }
  };

  const serviceKeys = [
    { key: 'ai', label: 'AI Development', icon: 'Brain' },
    { key: 'blockchain', label: 'Blockchain', icon: 'Link' },
    { key: 'software', label: 'Custom Software', icon: 'Code' },
    { key: 'transformation', label: 'Digital Transform', icon: 'Zap' }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            <Icon name="Layers" size={16} className="mr-2" />
            Service Breakdown
          </div>
          <h2 className="text-3xl lg:text-5xl font-space-grotesk font-bold text-foreground mb-6">
            Real-World Applications
            <span className="block text-secondary mt-2">Delivering Measurable Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore detailed breakdowns of our services with actual project outcomes, 
            technologies used, and measurable business impact for Nigerian enterprises.
          </p>
        </div>

        {/* Service Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {serviceKeys?.map((service) => (
            <button
              key={service?.key}
              onClick={() => setActiveService(service?.key)}
              className={`flex items-center px-6 py-3 rounded-xl font-medium brand-transition ${
                activeService === service?.key
                  ? 'bg-primary text-primary-foreground brand-shadow-card'
                  : 'bg-surface text-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              <Icon name={service?.icon} size={20} className="mr-2" />
              {service?.label}
            </button>
          ))}
        </div>

        {/* Active Service Content */}
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-space-grotesk font-bold text-foreground mb-4">
              {services?.[activeService]?.title}
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {services?.[activeService]?.description}
            </p>
          </div>

          {/* Applications Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {services?.[activeService]?.applications?.map((app, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-8 border border-border brand-shadow-card hover:border-primary/20 brand-transition group brand-hover-lift"
              >
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-primary/20 brand-transition">
                    <Icon name={app?.icon} size={28} className="text-primary" />
                  </div>
                  <h4 className="text-xl font-space-grotesk font-bold text-foreground">
                    {app?.title}
                  </h4>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {app?.description}
                </p>

                {/* Metrics */}
                <div className="bg-accent/10 rounded-lg p-4 mb-6">
                  <div className="flex items-center mb-2">
                    <Icon name="TrendingUp" size={16} className="text-accent mr-2" />
                    <span className="text-sm font-medium text-foreground">Key Results</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{app?.metrics}</p>
                </div>

                {/* Technologies */}
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Icon name="Settings" size={16} className="text-primary mr-2" />
                    <span className="text-sm font-medium text-foreground">Technologies Used</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {app?.technologies?.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center pt-12">
            <Button 
              variant="default" 
              size="lg"
              className="bg-primary hover:bg-primary/90 font-semibold brand-hover-lift"
              iconName="ArrowRight"
              iconPosition="right"
            >
              Discuss Your Project Requirements
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBreakdown;