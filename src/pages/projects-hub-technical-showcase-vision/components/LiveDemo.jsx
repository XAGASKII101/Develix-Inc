import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LiveDemo = ({ project }) => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayDemo = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-card rounded-2xl border border-border brand-shadow-card overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h3 className="font-space-grotesk font-bold text-xl text-foreground">
              Live Demo - {project?.name}
            </h3>
            <p className="text-muted-foreground text-sm">
              Experience the actual functionality in real-time
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-muted-foreground">Live</span>
            </div>
          </div>
        </div>
      </div>
      {/* Demo Navigation */}
      <div className="p-6 border-b border-border bg-muted/30">
        <div className="flex items-center space-x-4 overflow-x-auto">
          {project?.demos?.map((demo, index) => (
            <button
              key={index}
              onClick={() => setActiveDemo(index)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap brand-transition ${
                activeDemo === index
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <Icon name={demo?.icon} size={16} />
              <span className="text-sm font-medium">{demo?.title}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Demo Content */}
      <div className="p-6">
        {project?.demos && project?.demos?.[activeDemo] && (
          <div className="space-y-6">
            {/* Demo Description */}
            <div className="space-y-2">
              <h4 className="font-space-grotesk font-bold text-lg text-foreground">
                {project?.demos?.[activeDemo]?.title}
              </h4>
              <p className="text-muted-foreground">
                {project?.demos?.[activeDemo]?.description}
              </p>
            </div>

            {/* Demo Interface */}
            <div className="bg-background border border-border rounded-xl overflow-hidden">
              {/* Browser Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-muted/50 border-b border-border">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-background rounded-md px-3 py-1 text-xs text-muted-foreground border border-border">
                    {project?.demos?.[activeDemo]?.url}
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={handlePlayDemo}
                  iconName={isPlaying ? "Pause" : "Play"}
                  iconPosition="left"
                >
                  {isPlaying ? 'Pause' : 'Play'}
                </Button>
              </div>

              {/* Demo Screen */}
              <div className="relative bg-gradient-to-br from-primary/5 to-secondary/5 min-h-[400px] flex items-center justify-center">
                {project?.demos?.[activeDemo]?.type === 'interactive' ? (
                  <div className="w-full max-w-2xl mx-auto p-6">
                    {/* Interactive Demo Content */}
                    <div className="space-y-4">
                      {project?.demos?.[activeDemo]?.features?.map((feature, index) => (
                        <div key={index} className="bg-card rounded-lg p-4 border border-border">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <Icon name={feature?.icon} size={20} className="text-primary" />
                              <span className="font-medium text-foreground">{feature?.name}</span>
                            </div>
                            <Button variant="outline" size="sm">
                              Try Now
                            </Button>
                          </div>
                          <p className="text-sm text-muted-foreground">{feature?.description}</p>
                          
                          {/* Feature Demo */}
                          <div className="mt-3 p-3 bg-muted/50 rounded-md">
                            <div className="font-mono text-xs text-foreground">
                              {feature?.example}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <Icon name="Play" size={32} className="text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-space-grotesk font-bold text-lg text-foreground">
                        Video Demo Available
                      </h4>
                      <p className="text-muted-foreground">
                        Watch a comprehensive walkthrough of {project?.demos?.[activeDemo]?.title}
                      </p>
                    </div>
                    <Button 
                      variant="default" 
                      size="lg"
                      onClick={handlePlayDemo}
                      iconName="Play"
                      iconPosition="left"
                      className="brand-hover-lift"
                    >
                      Watch Demo Video
                    </Button>
                  </div>
                )}

                {/* Loading Overlay */}
                {isPlaying && (
                  <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto"></div>
                      <div className="text-sm text-muted-foreground">Loading demo...</div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Demo Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project?.demos?.[activeDemo]?.stats?.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-lg font-bold text-primary">{stat?.value}</div>
                  <div className="text-xs text-muted-foreground">{stat?.label}</div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
              <Button 
                variant="default" 
                size="lg"
                className="flex-1 brand-hover-lift"
                iconName="ExternalLink"
                iconPosition="right"
              >
                Open Full Demo
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="flex-1"
                iconName="Code"
                iconPosition="left"
              >
                View Source
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                iconName="Share"
                iconPosition="left"
              >
                Share Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveDemo;