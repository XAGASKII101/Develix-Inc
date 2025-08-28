import React from 'react';
import Icon from '../../../components/AppIcon';

const MissionStatement = () => {
  const initiatives = [
    {
      icon: "Users",
      title: "Accessibility First",
      description: "Building technology that works for everyone, regardless of technical background or economic status",
      examples: ["Multi-language support", "Offline-capable apps", "Low-bandwidth optimization"]
    },
    {
      icon: "GraduationCap",
      title: "Education & Outreach",
      description: "Empowering the next generation of African tech innovators through knowledge sharing",
      examples: ["Free coding workshops", "University partnerships", "Open-source contributions"]
    },
    {
      icon: "Heart",
      title: "Community Impact",
      description: "Creating solutions that address real challenges faced by African communities",
      examples: ["Financial inclusion tools", "Healthcare accessibility", "Agricultural technology"]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-2xl p-8 lg:p-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
            <Icon name="Compass" size={24} className="text-primary-foreground" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-space-grotesk font-bold text-foreground">
            Our Mission
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <blockquote className="text-2xl lg:text-3xl font-space-grotesk font-bold text-primary mb-6 leading-tight">
            "Technology that works for everyone"
          </blockquote>
          <p className="text-lg text-muted-foreground font-inter leading-relaxed">
            We believe that advanced technology should be accessible, practical, and beneficial to all people across Africa and beyond. Our mission drives every product decision, partnership choice, and community initiative we undertake.
          </p>
        </div>
      </div>
      {/* Initiatives Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {initiatives?.map((initiative, index) => (
          <div key={index} className="bg-card rounded-xl p-6 brand-shadow-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name={initiative?.icon} size={20} className="text-primary" />
              </div>
              <h3 className="text-xl font-space-grotesk font-bold text-foreground">
                {initiative?.title}
              </h3>
            </div>
            
            <p className="text-muted-foreground font-inter leading-relaxed mb-4">
              {initiative?.description}
            </p>
            
            <div className="space-y-2">
              {initiative?.examples?.map((example, exIndex) => (
                <div key={exIndex} className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={16} className="text-success flex-shrink-0" />
                  <span className="text-sm text-foreground font-inter">{example}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Call to Action */}
      <div className="text-center mt-12">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/20 rounded-full">
          <Icon name="Sparkles" size={20} className="text-accent" />
          <span className="text-accent font-inter font-semibold">
            Join us in building technology that truly serves humanity
          </span>
        </div>
      </div>
    </div>
  );
};

export default MissionStatement;