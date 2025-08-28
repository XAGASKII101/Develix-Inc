import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustSignals = () => {
  const trustElements = [
    {
      icon: 'Shield',
      title: 'Nigerian Business Registration',
      description: 'RC: 1234567 - Registered with Corporate Affairs Commission',
      color: 'text-primary',
      bgColor: 'bg-primary/5'
    },
    {
      icon: 'Lock',
      title: 'Data Security & Privacy',
      description: 'GDPR compliant with enterprise-grade security measures',
      color: 'text-secondary',
      bgColor: 'bg-secondary/5'
    },
    {
      icon: 'Award',
      title: 'Industry Certifications',
      description: 'ISO 27001 certified, SOC 2 Type II compliant',
      color: 'text-accent',
      bgColor: 'bg-accent/5'
    },
    {
      icon: 'Users',
      title: 'Trusted by 500+ Clients',
      description: 'From Lagos startups to Fortune 500 companies',
      color: 'text-success',
      bgColor: 'bg-success/5'
    }
  ];

  const partnerLogos = [
    { name: 'Paystack', logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop&crop=center' },
    { name: 'Flutterwave', logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop&crop=center' },
    { name: 'AWS', logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop&crop=center' },
    { name: 'Google Cloud', logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop&crop=center' },
    { name: 'Polygon', logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop&crop=center' },
    { name: 'Microsoft', logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop&crop=center' }
  ];

  const complianceItems = [
    'GDPR Compliant',
    'SOC 2 Type II',
    'ISO 27001',
    'PCI DSS Level 1',
    'Nigerian Data Protection',
    'Enterprise SLA'
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted & Compliant
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We maintain the highest standards of security, compliance, and business practices 
            to ensure your data and projects are in safe hands.
          </p>
        </div>

        {/* Trust Elements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustElements?.map((element, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 ${element?.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <Icon name={element?.icon} size={28} className={element?.color} />
              </div>
              <h3 className="font-space-grotesk text-lg font-bold text-foreground mb-2">
                {element?.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {element?.description}
              </p>
            </div>
          ))}
        </div>

        {/* Partner Logos */}
        <div className="mb-16">
          <h3 className="text-center font-space-grotesk text-xl font-bold text-foreground mb-8">
            Trusted Integration Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partnerLogos?.map((partner, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="w-24 h-12 bg-card rounded-lg border border-border flex items-center justify-center brand-transition hover:border-primary/20 hover:brand-shadow-card">
                  <img
                    src={partner?.logo}
                    alt={`${partner?.name} logo`}
                    className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 brand-transition"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance & Security */}
        <div className="bg-card rounded-2xl p-8 brand-shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-space-grotesk text-2xl font-bold text-foreground mb-4">
                Security & Compliance
              </h3>
              <p className="text-muted-foreground mb-6">
                We adhere to international security standards and maintain comprehensive 
                compliance certifications to protect your data and ensure regulatory compliance.
              </p>
              
              {/* Compliance List */}
              <div className="grid grid-cols-2 gap-3">
                {complianceItems?.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="CheckCircle" size={16} className="text-success flex-shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              {/* Security Illustration */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={36} className="text-primary" />
                </div>
                <h4 className="font-space-grotesk text-lg font-bold text-foreground mb-2">
                  Enterprise-Grade Security
                </h4>
                <p className="text-sm text-muted-foreground">
                  Your data is protected with bank-level encryption and security measures
                </p>
              </div>

              {/* Floating Security Badges */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-success rounded-full flex items-center justify-center brand-shadow-card">
                <Icon name="Lock" size={20} className="text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center brand-shadow-card">
                <Icon name="Award" size={20} className="text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Security */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/5 border border-primary/20 rounded-full px-6 py-3">
            <Icon name="Mail" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">
              Security concerns? Contact: security@develix.com
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;