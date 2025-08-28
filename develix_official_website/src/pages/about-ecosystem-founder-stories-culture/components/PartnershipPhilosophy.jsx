import React from 'react';
import Icon from '../../../components/AppIcon';

const PartnershipPhilosophy = () => {
  const principles = [
    {
      icon: "Handshake",
      title: "Long-term Value Creation",
      description: "We prioritize sustainable relationships over quick wins, focusing on mutual growth and shared success.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: "Shield",
      title: "Trust & Transparency",
      description: "Open communication, honest feedback, and transparent processes form the foundation of all our partnerships.",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: "Target",
      title: "Aligned Vision",
      description: "We partner with organizations that share our commitment to making technology accessible and impactful.",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: "Zap",
      title: "Innovation Together",
      description: "Collaborative innovation where each partner brings unique strengths to create breakthrough solutions.",
      color: "text-success",
      bgColor: "bg-success/10"
    }
  ];

  const partnerTypes = [
    {
      category: "Enterprise Clients",
      approach: "Deep partnership approach with dedicated account management, regular strategy sessions, and co-innovation opportunities.",
      examples: ["Quarterly business reviews", "Custom solution development", "Priority support channels"]
    },
    {
      category: "Technology Partners",
      approach: "Technical integration partnerships that enhance our platform capabilities while providing mutual value.",
      examples: ["API partnerships", "Joint product development", "Shared technical resources"]
    },
    {
      category: "Investment Partners",
      approach: "Strategic relationships with investors who bring more than capital - industry expertise, network access, and growth guidance.",
      examples: ["Board advisory roles", "Market expansion support", "Strategic introductions"]
    },
    {
      category: "Community Partners",
      approach: "Grassroots partnerships with educational institutions, NGOs, and community organizations to drive local impact.",
      examples: ["University programs", "Skills development initiatives", "Community tech centers"]
    }
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl lg:text-4xl font-space-grotesk font-bold text-foreground mb-4">
          Partnership Philosophy
        </h2>
        <p className="text-lg text-muted-foreground font-inter max-w-3xl mx-auto leading-relaxed">
          Our approach to partnerships is built on the belief that the best relationships are those where all parties grow together, creating value that extends far beyond individual transactions.
        </p>
      </div>
      {/* Core Principles */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {principles?.map((principle, index) => (
          <div key={index} className="bg-card rounded-xl p-6 brand-shadow-card brand-transition brand-hover-lift text-center">
            <div className={`w-16 h-16 ${principle?.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
              <Icon name={principle?.icon} size={24} className={principle?.color} />
            </div>
            <h3 className="text-lg font-space-grotesk font-bold text-foreground mb-3">
              {principle?.title}
            </h3>
            <p className="text-sm text-muted-foreground font-inter leading-relaxed">
              {principle?.description}
            </p>
          </div>
        ))}
      </div>
      {/* Partnership Approaches */}
      <div className="bg-card rounded-2xl p-8 brand-shadow-card">
        <h3 className="text-2xl font-space-grotesk font-bold text-foreground mb-8 text-center">
          Our Partnership Approaches
        </h3>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {partnerTypes?.map((type, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Users" size={16} className="text-primary" />
                </div>
                <h4 className="text-xl font-space-grotesk font-bold text-foreground">
                  {type?.category}
                </h4>
              </div>
              
              <p className="text-muted-foreground font-inter leading-relaxed">
                {type?.approach}
              </p>
              
              <div className="space-y-2">
                {type?.examples?.map((example, exIndex) => (
                  <div key={exIndex} className="flex items-center gap-2">
                    <Icon name="ArrowRight" size={14} className="text-accent flex-shrink-0" />
                    <span className="text-sm text-foreground font-inter">{example}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Success Metrics */}
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-space-grotesk font-bold text-foreground mb-2">
            Partnership Success Metrics
          </h3>
          <p className="text-muted-foreground font-inter">
            How we measure the success of our collaborative relationships
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-space-grotesk font-bold text-primary">95%</div>
            <div className="text-sm text-muted-foreground font-inter">Partner Retention Rate</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-space-grotesk font-bold text-secondary">3.2x</div>
            <div className="text-sm text-muted-foreground font-inter">Average Revenue Growth</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-space-grotesk font-bold text-accent">24/7</div>
            <div className="text-sm text-muted-foreground font-inter">Support Availability</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipPhilosophy;