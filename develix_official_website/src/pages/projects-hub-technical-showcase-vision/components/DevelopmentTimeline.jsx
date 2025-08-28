import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const DevelopmentTimeline = ({ project }) => {
  const [selectedPhase, setSelectedPhase] = useState(null);

  const getPhaseStatus = (status) => {
    switch (status?.toLowerCase()) {
      case 'completed': return { color: 'bg-green-500', textColor: 'text-green-600', bgColor: 'bg-green-50' };
      case 'in-progress': return { color: 'bg-blue-500', textColor: 'text-blue-600', bgColor: 'bg-blue-50' };
      case 'upcoming': return { color: 'bg-gray-400', textColor: 'text-gray-600', bgColor: 'bg-gray-50' };
      default: return { color: 'bg-gray-400', textColor: 'text-gray-600', bgColor: 'bg-gray-50' };
    }
  };

  const getPhaseIcon = (phase) => {
    switch (phase?.toLowerCase()) {
      case 'planning': return 'FileText';
      case 'design': return 'Palette';
      case 'development': return 'Code';
      case 'testing': return 'TestTube';
      case 'deployment': return 'Rocket';
      case 'maintenance': return 'Settings';
      default: return 'Circle';
    }
  };

  return (
    <div className="bg-card rounded-2xl border border-border brand-shadow-card p-6">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h3 className="font-space-grotesk font-bold text-2xl text-foreground">
            Development Timeline
          </h3>
          <p className="text-muted-foreground">
            Track the journey from concept to deployment with key milestones and insights.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

          {/* Timeline Items */}
          <div className="space-y-8">
            {project?.timeline?.map((phase, index) => {
              const status = getPhaseStatus(phase?.status);
              const isSelected = selectedPhase === index;
              
              return (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className={`absolute left-6 w-4 h-4 ${status?.color} rounded-full border-4 border-background z-10`}></div>
                  {/* Content */}
                  <div className="ml-16">
                    <div 
                      className={`cursor-pointer brand-transition hover:shadow-md rounded-lg border border-border p-4 ${
                        isSelected ? 'bg-primary/5 border-primary/20' : 'bg-background hover:bg-muted/30'
                      }`}
                      onClick={() => setSelectedPhase(isSelected ? null : index)}
                    >
                      {/* Phase Header */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 ${status?.bgColor} rounded-lg flex items-center justify-center`}>
                            <Icon name={getPhaseIcon(phase?.phase)} size={16} className={status?.textColor} />
                          </div>
                          <div>
                            <h4 className="font-space-grotesk font-bold text-lg text-foreground">
                              {phase?.phase}
                            </h4>
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <Icon name="Calendar" size={14} />
                              <span>{phase?.startDate} - {phase?.endDate}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${status?.bgColor} ${status?.textColor}`}>
                            {phase?.status}
                          </span>
                          <Icon 
                            name={isSelected ? "ChevronUp" : "ChevronDown"} 
                            size={16} 
                            className="text-muted-foreground" 
                          />
                        </div>
                      </div>

                      {/* Phase Description */}
                      <p className="text-muted-foreground mb-3">
                        {phase?.description}
                      </p>

                      {/* Progress Bar */}
                      <div className="mb-3">
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-medium text-foreground">{phase?.progress}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${status?.color} brand-transition`}
                            style={{ width: `${phase?.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Expanded Content */}
                      {isSelected && (
                        <div className="space-y-4 pt-4 border-t border-border">
                          {/* Key Achievements */}
                          {phase?.achievements && (
                            <div className="space-y-2">
                              <h5 className="font-inter font-semibold text-sm text-foreground">Key Achievements</h5>
                              <div className="space-y-2">
                                {phase?.achievements?.map((achievement, achIndex) => (
                                  <div key={achIndex} className="flex items-start space-x-2">
                                    <Icon name="Check" size={16} className="text-green-500 mt-0.5" />
                                    <span className="text-sm text-muted-foreground">{achievement}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Challenges */}
                          {phase?.challenges && (
                            <div className="space-y-2">
                              <h5 className="font-inter font-semibold text-sm text-foreground">Challenges Overcome</h5>
                              <div className="space-y-2">
                                {phase?.challenges?.map((challenge, chalIndex) => (
                                  <div key={chalIndex} className="flex items-start space-x-2">
                                    <Icon name="AlertTriangle" size={16} className="text-yellow-500 mt-0.5" />
                                    <div className="flex-1">
                                      <div className="text-sm font-medium text-foreground">{challenge?.issue}</div>
                                      <div className="text-xs text-muted-foreground">{challenge?.solution}</div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Team Insights */}
                          {phase?.insights && (
                            <div className="space-y-2">
                              <h5 className="font-inter font-semibold text-sm text-foreground">Team Insights</h5>
                              <div className="space-y-3">
                                {phase?.insights?.map((insight, insightIndex) => (
                                  <div key={insightIndex} className="p-3 bg-muted/50 rounded-lg">
                                    <div className="flex items-center space-x-2 mb-1">
                                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                                        <span className="text-xs font-bold text-primary-foreground">
                                          {insight?.author?.charAt(0)}
                                        </span>
                                      </div>
                                      <span className="text-sm font-medium text-foreground">{insight?.author}</span>
                                      <span className="text-xs text-muted-foreground">{insight?.role}</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground italic">"{insight?.quote}"</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Metrics */}
                          {phase?.metrics && (
                            <div className="space-y-2">
                              <h5 className="font-inter font-semibold text-sm text-foreground">Phase Metrics</h5>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                {phase?.metrics?.map((metric, metricIndex) => (
                                  <div key={metricIndex} className="text-center p-3 bg-card border border-border rounded-lg">
                                    <div className="text-lg font-bold text-primary">{metric?.value}</div>
                                    <div className="text-xs text-muted-foreground">{metric?.label}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="pt-6 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-primary">{project?.totalDuration}</div>
              <div className="text-sm text-muted-foreground">Total Duration</div>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-primary">{project?.teamSize}</div>
              <div className="text-sm text-muted-foreground">Team Members</div>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-primary">{project?.milestonesCompleted}</div>
              <div className="text-sm text-muted-foreground">Milestones</div>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-primary">{project?.overallProgress}%</div>
              <div className="text-sm text-muted-foreground">Overall Progress</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentTimeline;