import React from 'react';
import Icon from '../../../components/AppIcon';

const JourneyTimeline = ({ milestones }) => {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>
      <div className="space-y-12">
        {milestones?.map((milestone, index) => (
          <div key={index} className="relative flex items-start gap-8">
            {/* Timeline Node */}
            <div className="relative z-10 flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center brand-shadow-card">
                <Icon name={milestone?.icon} size={24} className="text-primary-foreground" />
              </div>
              {milestone?.isHighlight && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <Icon name="Star" size={12} className="text-accent-foreground" />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pb-8">
              <div className="bg-card rounded-xl p-6 brand-shadow-card brand-transition brand-hover-lift">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <h4 className="text-xl font-space-grotesk font-bold text-foreground">
                    {milestone?.title}
                  </h4>
                  <span className="text-sm font-inter font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mt-2 lg:mt-0 w-fit">
                    {milestone?.year}
                  </span>
                </div>
                
                <p className="text-muted-foreground font-inter leading-relaxed mb-4">
                  {milestone?.description}
                </p>

                {milestone?.achievements && (
                  <div className="space-y-2">
                    <h5 className="text-sm font-inter font-semibold text-foreground mb-2">
                      Key Achievements:
                    </h5>
                    <ul className="space-y-1">
                      {milestone?.achievements?.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {milestone?.impact && (
                  <div className="mt-4 p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
                    <p className="text-sm font-inter font-medium text-foreground">
                      <Icon name="Lightbulb" size={16} className="inline mr-2 text-accent" />
                      Impact: {milestone?.impact}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JourneyTimeline;