import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-secondary rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent/20 rounded-lg rotate-45"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-accent rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-secondary/20 rounded-lg rotate-12"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-2 mb-8">
            <Icon name="MessageSquare" size={16} className="text-secondary" />
            <span className="text-sm font-medium text-secondary">Multiple Engagement Pathways</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-space-grotesk text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Let's Build the Future
            <span className="block text-secondary">Together</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Whether you're an enterprise seeking AI solutions, a developer interested in partnerships, 
            or an investor exploring opportunities - we have dedicated pathways for meaningful engagement.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2">24h</div>
              <div className="text-sm text-primary-foreground/70">Enterprise Response</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2">48h</div>
              <div className="text-sm text-primary-foreground/70">Partnership Discussions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2">Lagos</div>
              <div className="text-sm text-primary-foreground/70">Physical Office</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2">Global</div>
              <div className="text-sm text-primary-foreground/70">Digital Access</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;