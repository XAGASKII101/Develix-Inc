import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const ProjectCard = ({ project, featured = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'live': return 'bg-green-100 text-green-800 border-green-200';
      case 'beta': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'development': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeIcon = (type) => {
    switch (type?.toLowerCase()) {
      case 'blockchain': return 'Link';
      case 'ai platform': return 'Brain';
      case 'fintech': return 'CreditCard';
      default: return 'Code';
    }
  };

  return (
    <div className={`bg-card rounded-2xl border border-border brand-shadow-card brand-transition hover:shadow-lg group ${
      featured ? 'lg:col-span-2 lg:row-span-2' : ''
    }`}>
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-t-2xl">
        <Image 
          src={project?.image} 
          alt={project?.name}
          className={`w-full object-cover brand-transition group-hover:scale-105 ${
            featured ? 'h-64 lg:h-80' : 'h-48'
          }`}
        />
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project?.status)}`}>
            <div className="w-2 h-2 bg-current rounded-full mr-2"></div>
            {project?.status}
          </span>
        </div>

        {/* Type Badge */}
        <div className="absolute top-4 right-4">
          <div className="bg-background/90 backdrop-blur-sm rounded-lg p-2">
            <Icon name={getTypeIcon(project?.type)} size={20} className="text-primary" />
          </div>
        </div>

        {/* Live Demo Button */}
        {project?.demoUrl && (
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 brand-transition">
            <Button 
              variant="default" 
              size="sm"
              className="bg-primary hover:bg-primary/90 brand-hover-lift"
              iconName="ExternalLink"
              iconPosition="right"
            >
              Live Demo
            </Button>
          </div>
        )}
      </div>
      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-space-grotesk font-bold text-xl text-foreground">
              {project?.name}
            </h3>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Icon name="Calendar" size={16} />
              <span className="text-sm">{project?.launchDate}</span>
            </div>
          </div>
          
          <p className="text-muted-foreground leading-relaxed">
            {isExpanded ? project?.fullDescription : project?.description}
          </p>
          
          {project?.fullDescription && project?.fullDescription !== project?.description && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-primary text-sm font-medium hover:underline brand-transition"
            >
              {isExpanded ? 'Show Less' : 'Read More'}
            </button>
          )}
        </div>

        {/* Tech Stack */}
        <div className="space-y-2">
          <h4 className="font-inter font-semibold text-sm text-foreground">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project?.techStack?.map((tech, index) => (
              <span 
                key={index}
                className="inline-flex items-center px-2 py-1 bg-muted rounded-md text-xs font-medium text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-4 py-4 border-t border-border">
          <div className="text-center">
            <div className="font-bold text-lg text-primary">{project?.users}</div>
            <div className="text-xs text-muted-foreground">Active Users</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-lg text-primary">{project?.uptime}</div>
            <div className="text-xs text-muted-foreground">Uptime</div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button 
            variant="default" 
            size="sm"
            className="flex-1 brand-hover-lift"
            iconName="Eye"
            iconPosition="left"
          >
            View Details
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="flex-1"
            iconName="Github"
            iconPosition="left"
          >
            Source Code
          </Button>
        </div>

        {/* Additional Info for Featured */}
        {featured && (
          <div className="space-y-4 pt-4 border-t border-border">
            <div className="space-y-2">
              <h4 className="font-inter font-semibold text-sm text-foreground">Key Features</h4>
              <ul className="space-y-1">
                {project?.keyFeatures?.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-inter font-semibold text-sm text-foreground">Recent Updates</h4>
              <div className="space-y-2">
                {project?.recentUpdates?.map((update, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-foreground">{update?.title}</div>
                      <div className="text-xs text-muted-foreground">{update?.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;