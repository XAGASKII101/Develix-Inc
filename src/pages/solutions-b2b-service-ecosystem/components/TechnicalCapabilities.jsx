import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TechnicalCapabilities = () => {
  const [activeTab, setActiveTab] = useState('apis');

  const capabilities = {
    apis: {
      title: "API Integrations & Development",
      description: "Seamless integration with existing enterprise systems and third-party services",
      features: [
        {
          name: "Payment Gateway APIs",
          description: "Direct integration with Paystack, Flutterwave, and international payment processors",
          metrics: "99.9% uptime, sub-200ms response times",
          icon: "CreditCard"
        },
        {
          name: "Banking APIs",
          description: "Secure connections to Nigerian banks for account verification and transactions",
          metrics: "Bank-grade security, real-time processing",
          icon: "Building"
        },
        {
          name: "Custom REST APIs",
          description: "Scalable API development with comprehensive documentation and testing",
          metrics: "10,000+ requests/minute capacity",
          icon: "Code"
        },
        {
          name: "Webhook Management",
          description: "Real-time event processing and notification systems",
          metrics: "Zero-latency event delivery",
          icon: "Zap"
        }
      ]
    },
    security: {
      title: "Enterprise Security Protocols",
      description: "Bank-grade security measures protecting your data and transactions",
      features: [
        {
          name: "End-to-End Encryption",
          description: "AES-256 encryption for all data transmission and storage",
          metrics: "Military-grade security standards",
          icon: "Lock"
        },
        {
          name: "Multi-Factor Authentication",
          description: "Biometric, SMS, and hardware token authentication options",
          metrics: "99.99% fraud prevention rate",
          icon: "Shield"
        },
        {
          name: "Compliance Management",
          description: "GDPR, PCI DSS, and Nigerian data protection compliance",
          metrics: "100% regulatory compliance",
          icon: "CheckCircle"
        },
        {
          name: "Penetration Testing",
          description: "Regular security audits and vulnerability assessments",
          metrics: "Monthly security reports",
          icon: "Search"
        }
      ]
    },
    scalability: {
      title: "Scalability & Performance",
      description: "Infrastructure designed to grow with your business needs",
      features: [
        {
          name: "Auto-Scaling Infrastructure",
          description: "Automatic resource allocation based on demand patterns",
          metrics: "Handle 10x traffic spikes seamlessly",
          icon: "TrendingUp"
        },
        {
          name: "Load Balancing",
          description: "Distributed traffic management across multiple servers",
          metrics: "99.9% uptime guarantee",
          icon: "BarChart"
        },
        {
          name: "CDN Integration",
          description: "Global content delivery network for optimal performance",
          metrics: "Sub-100ms response times globally",
          icon: "Globe"
        },
        {
          name: "Database Optimization",
          description: "High-performance database architecture with redundancy",
          metrics: "Petabyte-scale data handling",
          icon: "Database"
        }
      ]
    },
    monitoring: {
      title: "Monitoring & Analytics",
      description: "Real-time insights and proactive system monitoring",
      features: [
        {
          name: "Real-time Monitoring",
          description: "24/7 system health monitoring with instant alerts",
          metrics: "Sub-second issue detection",
          icon: "Activity"
        },
        {
          name: "Performance Analytics",
          description: "Detailed performance metrics and optimization recommendations",
          metrics: "99.9% accuracy in predictions",
          icon: "PieChart"
        },
        {
          name: "Custom Dashboards",
          description: "Tailored analytics dashboards for business intelligence",
          metrics: "Real-time data visualization",
          icon: "Monitor"
        },
        {
          name: "Automated Reporting",
          description: "Scheduled reports with actionable insights and recommendations",
          metrics: "Daily, weekly, monthly reports",
          icon: "FileText"
        }
      ]
    }
  };

  const tabs = [
    { key: 'apis', label: 'API Integration', icon: 'Code' },
    { key: 'security', label: 'Security', icon: 'Shield' },
    { key: 'scalability', label: 'Scalability', icon: 'TrendingUp' },
    { key: 'monitoring', label: 'Monitoring', icon: 'Activity' }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full text-secondary text-sm font-medium mb-6">
            <Icon name="Settings" size={16} className="mr-2" />
            Technical Excellence
          </div>
          <h2 className="text-3xl lg:text-5xl font-space-grotesk font-bold text-foreground mb-6">
            Enterprise-Grade
            <span className="block text-primary mt-2">Technical Capabilities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Robust technical infrastructure designed for enterprise requirements. 
            From API integrations to security protocols that CTOs trust.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs?.map((tab) => (
            <button
              key={tab?.key}
              onClick={() => setActiveTab(tab?.key)}
              className={`flex items-center px-6 py-3 rounded-xl font-medium brand-transition ${
                activeTab === tab?.key
                  ? 'bg-primary text-primary-foreground brand-shadow-card'
                  : 'bg-surface text-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              <Icon name={tab?.icon} size={20} className="mr-2" />
              {tab?.label}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-space-grotesk font-bold text-foreground mb-4">
              {capabilities?.[activeTab]?.title}
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {capabilities?.[activeTab]?.description}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {capabilities?.[activeTab]?.features?.map((feature, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-8 border border-border brand-shadow-card hover:border-primary/20 brand-transition group brand-hover-lift"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 brand-transition">
                    <Icon name={feature?.icon} size={28} className="text-primary" />
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div>
                      <h4 className="text-xl font-space-grotesk font-bold text-foreground mb-2">
                        {feature?.name}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature?.description}
                      </p>
                    </div>

                    <div className="bg-accent/10 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Icon name="Gauge" size={16} className="text-accent mr-2" />
                        <span className="text-sm font-medium text-foreground">Performance Metrics</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{feature?.metrics}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Server" size={32} className="text-primary" />
              </div>
              <h4 className="text-xl font-space-grotesk font-bold text-foreground mb-2">
                Infrastructure
              </h4>
              <p className="text-muted-foreground">
                AWS, Google Cloud, and Azure certified infrastructure with 99.9% uptime SLA
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Code2" size={32} className="text-secondary" />
              </div>
              <h4 className="text-xl font-space-grotesk font-bold text-foreground mb-2">
                Development Stack
              </h4>
              <p className="text-muted-foreground">
                Modern tech stack including React, Node.js, Python, and blockchain technologies
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-accent" />
              </div>
              <h4 className="text-xl font-space-grotesk font-bold text-foreground mb-2">
                Support Team
              </h4>
              <p className="text-muted-foreground">
                Dedicated technical support team with 24/7 availability and 2-hour response time
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 pt-12 border-t border-border">
          <h3 className="text-2xl font-space-grotesk font-bold text-foreground mb-4">
            Need Technical Documentation?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get detailed technical specifications, API documentation, and architecture diagrams 
            for your evaluation process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="default" 
              size="lg"
              className="bg-primary hover:bg-primary/90 font-semibold brand-hover-lift"
              iconName="Download"
              iconPosition="left"
            >
              Download Technical Specs
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              iconName="MessageSquare"
              iconPosition="left"
            >
              Speak with Technical Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalCapabilities;