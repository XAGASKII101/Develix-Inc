import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const FounderSection = () => {
  const founders = [
    {
      id: 'alexius',
      name: 'Alexius Chukwuemeka',
      role: 'Chief Executive Officer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      story: `From Lagos streets to Silicon Valley dreams. Started coding at 14, built first startup at 19. Believes technology should empower every African entrepreneur to compete globally.`,
      achievements: ['Forbes 30 Under 30', '3x Startup Founder', 'Y Combinator Alumni'],
      quote: "Innovation isn\'t about complexity—it\'s about solving problems that matter.",
      linkedin: '#',
      twitter: '#'
    },
    {
      id: 'jerome',
      name: 'Jerome Okafor',
      role: 'Chief Technology Officer',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      story: `Self-taught developer turned AI architect. Built Nigeria's first blockchain voting system. Passionate about making advanced technology accessible to African developers.`,
      achievements: ['MIT AI Research', 'Blockchain Pioneer', 'Open Source Advocate'],
      quote: "Code is poetry, but impact is the applause that matters.",
      linkedin: '#',twitter: '#'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Icon name="Heart" size={16} className="text-primary mr-2" />
            <span className="text-primary font-inter font-medium text-sm">
              From Lagos to Global Innovation
            </span>
          </div>
          
          <h2 className="font-space-grotesk font-bold text-3xl md:text-4xl text-foreground mb-6">
            Meet the Visionaries Behind{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Develix
            </span>
          </h2>
          
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
            Two Nigerian innovators on a mission to bridge the gap between African talent and global opportunities through practical technology solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {founders?.map((founder) => (
            <div key={founder?.id} className="group">
              <div className="bg-card rounded-2xl p-8 border border-border brand-shadow-card brand-transition group-hover:brand-shadow-modal group-hover:-translate-y-2">
                {/* Header */}
                <div className="flex items-start space-x-6 mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden">
                      <Image 
                        src={founder?.avatar}
                        alt={founder?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                      <Icon name="Verified" size={14} className="text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-space-grotesk font-bold text-xl text-foreground mb-1">
                      {founder?.name}
                    </h3>
                    <p className="font-inter text-primary font-medium mb-3">
                      {founder?.role}
                    </p>
                    
                    <div className="flex space-x-3">
                      <a 
                        href={founder?.linkedin}
                        className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground brand-transition"
                      >
                        <Icon name="Linkedin" size={16} />
                      </a>
                      <a 
                        href={founder?.twitter}
                        className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground brand-transition"
                      >
                        <Icon name="Twitter" size={16} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="mb-6">
                  <Icon name="Quote" size={24} className="text-secondary mb-3" />
                  <blockquote className="font-inter text-foreground italic text-lg leading-relaxed">
                    "{founder?.quote}"
                  </blockquote>
                </div>

                {/* Story */}
                <p className="font-inter text-muted-foreground leading-relaxed mb-6">
                  {founder?.story}
                </p>

                {/* Achievements */}
                <div className="space-y-3">
                  <h4 className="font-space-grotesk font-semibold text-foreground text-sm uppercase tracking-wide">
                    Key Achievements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {founder?.achievements?.map((achievement, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-secondary/10 text-secondary rounded-full font-inter text-sm font-medium"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-space-grotesk font-bold text-2xl text-primary-foreground mb-4">
              Ready to Build the Future Together?
            </h3>
            <p className="font-inter text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Join our mission to democratize technology across Africa and beyond. Whether you're an enterprise seeking solutions or a developer wanting to contribute, we'd love to connect.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/about-ecosystem-founder-stories-culture">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-inter font-semibold"
                  iconName="Users"
                  iconPosition="left"
                >
                  Our Story
                </Button>
              </Link>
              
              <Link to="/contact-partnerships-multi-engagement-hub">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-inter font-semibold"
                  iconName="MessageCircle"
                  iconPosition="left"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;