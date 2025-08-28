import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingFramework = () => {
  const [selectedPlan, setSelectedPlan] = useState('growth');

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter Package',
      description: 'Perfect for small businesses and startups',
      price: '₦150,000',
      period: 'per project',
      popular: false,
      features: [
        'Basic AI chatbot implementation',
        'Simple payment gateway integration',
        'Mobile-responsive web application',
        'Basic analytics dashboard',
        '3 months of support',
        'Documentation and training'
      ],
      limitations: [
        'Up to 1,000 monthly users',
        'Basic customization options',
        'Email support only'
      ],
      deliverables: [
        'Functional web/mobile application',
        'Source code and documentation',
        'Basic user training session'
      ],
      timeline: '4-6 weeks',
      bestFor: 'Small businesses, MVPs, proof of concepts'
    },
    {
      id: 'growth',
      name: 'Growth Package',
      description: 'Ideal for growing businesses with advanced needs',
      price: '₦500,000',
      period: 'per project',
      popular: true,
      features: [
        'Advanced AI solutions with ML models',
        'Multiple payment gateway integrations',
        'Custom blockchain implementation',
        'Advanced analytics and reporting',
        'API development and integration',
        '6 months of support and maintenance',
        'Performance optimization',
        'Security audit and compliance'
      ],
      limitations: [
        'Up to 10,000 monthly users',
        'Standard customization included',
        'Priority email and phone support'
      ],
      deliverables: [
        'Fully customized application',
        'API documentation',
        'Comprehensive training program',
        'Performance monitoring setup'
      ],
      timeline: '8-12 weeks',
      bestFor: 'Growing companies, established businesses, feature-rich applications'
    },
    {
      id: 'enterprise',
      name: 'Enterprise Package',
      description: 'Comprehensive solutions for large organizations',
      price: '₦2,000,000+',
      period: 'per project',
      popular: false,
      features: [
        'Full-scale digital transformation',
        'Custom AI and blockchain solutions',
        'Enterprise-grade security implementation',
        'Multi-platform development',
        'Advanced integrations and APIs',
        '12 months of support and maintenance',
        'Dedicated project manager',
        'On-site training and consultation',
        'Scalability planning and implementation',
        '24/7 monitoring and support'
      ],
      limitations: [
        'Unlimited users and transactions',
        'Full customization and white-labeling',
        'Dedicated support team'
      ],
      deliverables: [
        'Complete digital ecosystem',
        'Comprehensive documentation',
        'Staff training and certification',
        'Ongoing strategic consultation'
      ],
      timeline: '16-24 weeks',
      bestFor: 'Large enterprises, complex systems, mission-critical applications'
    }
  ];

  const additionalServices = [
    {
      name: 'Technical Consultation',
      description: 'Strategic technology planning and architecture review',
      price: '₦50,000',
      unit: 'per day',
      icon: 'Users'
    },
    {
      name: 'Code Review & Audit',
      description: 'Comprehensive security and performance audit',
      price: '₦100,000',
      unit: 'per audit',
      icon: 'Search'
    },
    {
      name: 'Staff Training',
      description: 'Technical training for your development team',
      price: '₦75,000',
      unit: 'per session',
      icon: 'GraduationCap'
    },
    {
      name: 'Ongoing Maintenance',
      description: 'Monthly maintenance and updates',
      price: '₦25,000',
      unit: 'per month',
      icon: 'Settings'
    }
  ];

  const projectFactors = [
    {
      factor: 'Project Complexity',
      description: 'Simple integrations vs. complex AI/blockchain solutions',
      impact: 'Low to High',
      icon: 'Layers'
    },
    {
      factor: 'Timeline Requirements',
      description: 'Standard delivery vs. expedited development',
      impact: 'Standard to +30%',
      icon: 'Clock'
    },
    {
      factor: 'Integration Scope',
      description: 'Number of third-party systems to integrate',
      impact: 'Per integration',
      icon: 'Link'
    },
    {
      factor: 'Customization Level',
      description: 'Standard features vs. highly customized solutions',
      impact: 'Standard to +50%',
      icon: 'Palette'
    },
    {
      factor: 'Support Duration',
      description: 'Extended support and maintenance periods',
      impact: 'Per month',
      icon: 'Shield'
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            <Icon name="DollarSign" size={16} className="mr-2" />
            Transparent Pricing
          </div>
          <h2 className="text-3xl lg:text-5xl font-space-grotesk font-bold text-foreground mb-6">
            Clear, Transparent
            <span className="block text-secondary mt-2">Project Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No hidden fees, no surprises. Our transparent pricing framework helps you 
            plan your technology investment with confidence.
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {pricingPlans?.map((plan) => (
            <div 
              key={plan?.id}
              className={`relative bg-card rounded-xl p-8 border brand-shadow-card brand-transition brand-hover-lift ${
                plan?.popular 
                  ? 'border-primary ring-2 ring-primary/20' :'border-border hover:border-primary/20'
              }`}
            >
              {plan?.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-space-grotesk font-bold text-foreground mb-2">
                  {plan?.name}
                </h3>
                <p className="text-muted-foreground mb-6">{plan?.description}</p>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">{plan?.price}</span>
                  <span className="text-muted-foreground ml-2">{plan?.period}</span>
                </div>
                
                <div className="text-sm text-muted-foreground mb-6">
                  Timeline: {plan?.timeline}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-medium text-foreground mb-3 flex items-center">
                    <Icon name="Check" size={16} className="text-accent mr-2" />
                    Included Features
                  </h4>
                  <div className="space-y-2">
                    {plan?.features?.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <Icon name="Check" size={14} className="text-accent mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-3 flex items-center">
                    <Icon name="Info" size={16} className="text-secondary mr-2" />
                    Project Scope
                  </h4>
                  <div className="space-y-2">
                    {plan?.limitations?.map((limitation, index) => (
                      <div key={index} className="flex items-start">
                        <Icon name="Minus" size={14} className="text-secondary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{limitation}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-3 flex items-center">
                    <Icon name="Package" size={16} className="text-primary mr-2" />
                    Deliverables
                  </h4>
                  <div className="space-y-2">
                    {plan?.deliverables?.map((deliverable, index) => (
                      <div key={index} className="flex items-start">
                        <Icon name="Box" size={14} className="text-primary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-4 mb-6">
                <div className="text-sm font-medium text-foreground mb-1">Best For:</div>
                <div className="text-sm text-muted-foreground">{plan?.bestFor}</div>
              </div>

              <Button
                variant={plan?.popular ? "default" : "outline"}
                size="lg"
                fullWidth
                className={plan?.popular ? "bg-primary hover:bg-primary/90 font-semibold" : ""}
                iconName="ArrowRight"
                iconPosition="right"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-space-grotesk font-bold text-foreground mb-4">
              Additional Services
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Extend your project with these optional services for enhanced value and support.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {additionalServices?.map((service, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 border border-border brand-shadow-card hover:border-primary/20 brand-transition"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={service?.icon} size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-space-grotesk font-bold text-foreground">
                        {service?.name}
                      </h4>
                      <div className="text-right">
                        <div className="font-bold text-primary">{service?.price}</div>
                        <div className="text-xs text-muted-foreground">{service?.unit}</div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{service?.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Factors */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-space-grotesk font-bold text-foreground mb-4">
              Project Pricing Factors
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding what influences project costs helps you make informed decisions 
              about your technology investment.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-6">
            {projectFactors?.map((factor, index) => (
              <div 
                key={index}
                className="text-center bg-card rounded-xl p-6 border border-border brand-shadow-card"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={factor?.icon} size={28} className="text-accent" />
                </div>
                <h4 className="font-space-grotesk font-bold text-foreground mb-2">
                  {factor?.factor}
                </h4>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {factor?.description}
                </p>
                <div className="inline-flex items-center px-3 py-1 bg-secondary/10 rounded-full">
                  <span className="text-xs font-medium text-secondary">{factor?.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-xl p-12">
          <h3 className="text-2xl font-space-grotesk font-bold text-foreground mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your project requirements and get a 
            detailed quote tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="default" 
              size="lg"
              className="bg-primary hover:bg-primary/90 font-semibold brand-hover-lift"
              iconName="Calendar"
              iconPosition="left"
            >
              Schedule Free Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              iconName="Calculator"
              iconPosition="left"
            >
              Get Custom Quote
            </Button>
          </div>
          
          <div className="mt-8 pt-6 border-t border-border/50">
            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Icon name="Shield" size={16} className="text-accent mr-2" />
                No Hidden Fees
              </div>
              <div className="flex items-center">
                <Icon name="Clock" size={16} className="text-accent mr-2" />
                Fixed Timeline
              </div>
              <div className="flex items-center">
                <Icon name="CheckCircle" size={16} className="text-accent mr-2" />
                Quality Guarantee
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingFramework;