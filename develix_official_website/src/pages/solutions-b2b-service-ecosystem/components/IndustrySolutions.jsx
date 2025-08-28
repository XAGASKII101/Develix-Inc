import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const IndustrySolutions = () => {
  const [activeIndustry, setActiveIndustry] = useState('fintech');

  const industries = {
    fintech: {
      title: "Fintech & Banking",
      description: "Revolutionary financial technology solutions for Nigerian banks and fintech companies",
      challenges: [
        "High fraud rates in digital transactions",
        "Complex regulatory compliance requirements",
        "Customer onboarding inefficiencies",
        "Limited financial inclusion in rural areas"
      ],
      solutions: [
        {
          name: "AI-Powered Fraud Detection",
          description: "Real-time transaction monitoring with 99.7% accuracy in fraud detection",
          impact: "₦500M+ fraud prevented annually",
          icon: "Shield"
        },
        {
          name: "Digital KYC Solutions",
          description: "Automated customer verification with biometric integration",
          impact: "90% faster onboarding process",
          icon: "UserCheck"
        },
        {
          name: "Blockchain Payment Rails",
          description: "Cross-border payment infrastructure with instant settlements",
          impact: "50% reduction in transaction costs",
          icon: "CreditCard"
        },
        {
          name: "Financial Inclusion Platform",
          description: "Mobile-first banking solutions for underserved communities",
          impact: "2M+ new users onboarded",
          icon: "Smartphone"
        }
      ],
      integrations: ["Paystack", "Flutterwave", "Interswitch", "Central Bank APIs"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop"
    },
    agriculture: {
      title: "Agriculture & Supply Chain",
      description: "Smart agriculture solutions leveraging IoT, blockchain, and AI for Nigerian farmers",
      challenges: [
        "Lack of supply chain transparency",
        "Post-harvest losses due to poor logistics",
        "Limited access to market information",
        "Difficulty in quality verification"
      ],
      solutions: [
        {
          name: "Blockchain Traceability",
          description: "Farm-to-market tracking system ensuring product authenticity",
          impact: "40% reduction in food waste",
          icon: "Wheat"
        },
        {
          name: "IoT Crop Monitoring",
          description: "Smart sensors for soil moisture, temperature, and crop health monitoring",
          impact: "35% increase in crop yields",
          icon: "Thermometer"
        },
        {
          name: "Market Price Intelligence",
          description: "AI-powered price prediction and market matching platform",
          impact: "25% increase in farmer income",
          icon: "TrendingUp"
        },
        {
          name: "Quality Assurance System",
          description: "Computer vision for automated quality grading and certification",
          impact: "99% accuracy in quality assessment",
          icon: "CheckCircle"
        }
      ],
      integrations: ["Weather APIs", "Commodity Exchanges", "Logistics Partners", "Government Databases"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop"
    },
    healthcare: {
      title: "Healthcare & Telemedicine",
      description: "Digital health solutions improving healthcare accessibility across Nigeria",
      challenges: [
        "Limited access to healthcare in rural areas",
        "Inefficient patient record management",
        "Shortage of medical specialists",
        "High cost of medical consultations"
      ],
      solutions: [
        {
          name: "Telemedicine Platform",
          description: "Video consultation platform connecting patients with specialists",
          impact: "80% reduction in consultation costs",
          icon: "Video"
        },
        {
          name: "Electronic Health Records",
          description: "Secure, interoperable patient data management system",
          impact: "60% improvement in care coordination",
          icon: "FileText"
        },
        {
          name: "AI Diagnostic Assistant",
          description: "Machine learning models for preliminary diagnosis and triage",
          impact: "95% accuracy in initial screening",
          icon: "Stethoscope"
        },
        {
          name: "Medication Management",
          description: "Smart prescription tracking and adherence monitoring",
          impact: "70% improvement in medication compliance",
          icon: "Pill"
        }
      ],
      integrations: ["Hospital Management Systems", "Pharmacy Networks", "Insurance Providers", "Medical Devices"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop"
    },
    ecommerce: {
      title: "E-commerce & Retail",
      description: "Next-generation e-commerce solutions for Nigerian online retailers",
      challenges: [
        "High cart abandonment rates",
        "Complex logistics and delivery challenges",
        "Limited payment options for customers",
        "Inventory management inefficiencies"
      ],
      solutions: [
        {
          name: "AI-Powered Recommendations",
          description: "Personalized product recommendations increasing conversion rates",
          impact: "45% increase in average order value",
          icon: "Target"
        },
        {
          name: "Smart Inventory Management",
          description: "Predictive analytics for optimal stock levels and demand forecasting",
          impact: "30% reduction in inventory costs",
          icon: "Package"
        },
        {
          name: "Multi-Channel Payment Gateway",
          description: "Integrated payment solutions supporting all Nigerian payment methods",
          impact: "25% reduction in cart abandonment",
          icon: "CreditCard"
        },
        {
          name: "Logistics Optimization",
          description: "Route optimization and delivery tracking for last-mile efficiency",
          impact: "50% faster delivery times",
          icon: "Truck"
        }
      ],
      integrations: ["Payment Gateways", "Logistics Partners", "Social Media Platforms", "Analytics Tools"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
    }
  };

  const industryKeys = [
    { key: 'fintech', label: 'Fintech', icon: 'Building' },
    { key: 'agriculture', label: 'Agriculture', icon: 'Wheat' },
    { key: 'healthcare', label: 'Healthcare', icon: 'Heart' },
    { key: 'ecommerce', label: 'E-commerce', icon: 'ShoppingCart' }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-medium mb-6">
            <Icon name="Building2" size={16} className="mr-2" />
            Industry Solutions
          </div>
          <h2 className="text-3xl lg:text-5xl font-space-grotesk font-bold text-foreground mb-6">
            Tailored Solutions for
            <span className="block text-primary mt-2">African Industries</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Industry-specific solutions addressing unique challenges in Nigerian markets. 
            From fintech to agriculture, we understand local needs and global standards.
          </p>
        </div>

        {/* Industry Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {industryKeys?.map((industry) => (
            <button
              key={industry?.key}
              onClick={() => setActiveIndustry(industry?.key)}
              className={`flex items-center px-6 py-3 rounded-xl font-medium brand-transition ${
                activeIndustry === industry?.key
                  ? 'bg-primary text-primary-foreground brand-shadow-card'
                  : 'bg-card text-foreground hover:bg-primary/10 hover:text-primary border border-border'
              }`}
            >
              <Icon name={industry?.icon} size={20} className="mr-2" />
              {industry?.label}
            </button>
          ))}
        </div>

        {/* Active Industry Content */}
        <div className="space-y-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Industry Overview */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl lg:text-3xl font-space-grotesk font-bold text-foreground mb-4">
                  {industries?.[activeIndustry]?.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {industries?.[activeIndustry]?.description}
                </p>
              </div>

              {/* Key Challenges */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h4 className="font-space-grotesk font-bold text-foreground mb-4 flex items-center">
                  <Icon name="AlertTriangle" size={20} className="text-accent mr-2" />
                  Key Industry Challenges
                </h4>
                <div className="space-y-3">
                  {industries?.[activeIndustry]?.challenges?.map((challenge, index) => (
                    <div key={index} className="flex items-start">
                      <Icon name="Minus" size={16} className="text-muted-foreground mr-3 mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Integration Partners */}
              <div>
                <h4 className="font-space-grotesk font-bold text-foreground mb-4 flex items-center">
                  <Icon name="Link" size={20} className="text-secondary mr-2" />
                  Key Integrations
                </h4>
                <div className="flex flex-wrap gap-2">
                  {industries?.[activeIndustry]?.integrations?.map((integration, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full font-medium"
                    >
                      {integration}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Industry Image */}
            <div className="relative overflow-hidden rounded-xl brand-shadow-card">
              <Image 
                src={industries?.[activeIndustry]?.image}
                alt={`${industries?.[activeIndustry]?.title} solutions`}
                className="w-full h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-primary-foreground">
                  <div className="text-lg font-space-grotesk font-bold mb-1">
                    {industries?.[activeIndustry]?.title}
                  </div>
                  <div className="text-sm opacity-90">
                    Transforming Nigerian Industries
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Solutions Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {industries?.[activeIndustry]?.solutions?.map((solution, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-8 border border-border brand-shadow-card hover:border-primary/20 brand-transition group brand-hover-lift"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 brand-transition">
                    <Icon name={solution?.icon} size={28} className="text-primary" />
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div>
                      <h4 className="text-xl font-space-grotesk font-bold text-foreground mb-2">
                        {solution?.name}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {solution?.description}
                      </p>
                    </div>

                    <div className="bg-accent/10 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Icon name="TrendingUp" size={16} className="text-accent mr-2" />
                        <span className="text-sm font-medium text-foreground">Business Impact</span>
                      </div>
                      <p className="text-sm font-bold text-accent">{solution?.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 pt-12 border-t border-border">
          <h3 className="text-2xl font-space-grotesk font-bold text-foreground mb-4">
            Ready to Transform Your Industry?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our industry-specific solutions can address your unique challenges 
            and drive measurable business outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="default" 
              size="lg"
              className="bg-primary hover:bg-primary/90 font-semibold brand-hover-lift"
              iconName="Calendar"
              iconPosition="left"
            >
              Schedule Industry Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              iconName="FileText"
              iconPosition="left"
            >
              Download Industry Report
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutions;