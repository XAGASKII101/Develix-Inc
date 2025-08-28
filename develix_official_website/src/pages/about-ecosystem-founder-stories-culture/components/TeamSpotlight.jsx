import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TeamSpotlight = ({ member }) => {
  return (
    <div className="bg-card rounded-xl p-6 brand-shadow-card brand-transition brand-hover-lift">
      {/* Profile Header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="relative">
          <div className="w-16 h-16 rounded-full overflow-hidden bg-muted">
            <Image
              src={member?.avatar}
              alt={`${member?.name} - ${member?.role}`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full border-2 border-card"></div>
        </div>
        
        <div className="flex-1">
          <h4 className="text-lg font-space-grotesk font-bold text-foreground">
            {member?.name}
          </h4>
          <p className="text-sm text-primary font-inter font-medium">
            {member?.role}
          </p>
          <p className="text-xs text-muted-foreground font-inter">
            {member?.location}
          </p>
        </div>
      </div>
      {/* Background */}
      <div className="mb-4">
        <h5 className="text-sm font-inter font-semibold text-foreground mb-2">
          Background
        </h5>
        <p className="text-sm text-muted-foreground font-inter leading-relaxed">
          {member?.background}
        </p>
      </div>
      {/* Skills */}
      <div className="mb-4">
        <h5 className="text-sm font-inter font-semibold text-foreground mb-2">
          Expertise
        </h5>
        <div className="flex flex-wrap gap-2">
          {member?.skills?.map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-primary/10 text-primary text-xs font-inter font-medium rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      {/* Contribution */}
      <div className="mb-4">
        <h5 className="text-sm font-inter font-semibold text-foreground mb-2">
          Key Contribution
        </h5>
        <div className="flex items-start gap-2">
          <Icon name="Target" size={16} className="text-accent mt-0.5 flex-shrink-0" />
          <p className="text-sm text-foreground font-inter">
            {member?.contribution}
          </p>
        </div>
      </div>
      {/* Fun Fact */}
      {member?.funFact && (
        <div className="p-3 bg-accent/10 rounded-lg">
          <div className="flex items-start gap-2">
            <Icon name="Smile" size={16} className="text-accent mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-inter font-semibold text-foreground mb-1">
                Fun Fact:
              </p>
              <p className="text-xs text-muted-foreground font-inter">
                {member?.funFact}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamSpotlight;