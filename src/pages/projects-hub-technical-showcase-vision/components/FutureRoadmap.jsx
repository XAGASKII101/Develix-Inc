import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FutureRoadmap = () => {
  const [selectedQuarter, setSelectedQuarter] = useState('Q1-2025');

  const roadmapData = {
    'Q1-2025': {
      title: 'Q1 2025 - Foundation Enhancement',
      projects: [
        {
          name: 'Elixa Coin 2.0',
          description: 'Major blockchain upgrade with improved scalability and new DeFi features',
          status: 'In Development',
          progress: 75,
          features: ['Layer 2 Integration', 'Smart Contract Upgrades', 'Mobile Wallet', 'Staking Rewards'],
          timeline: 'March 2025',
          team: 'Blockchain Team',
          priority: 'High'
        },
        {
          name: 'Vendra AI Pro',
          description: 'Advanced AI capabilities with enterprise-grade features and integrations',
          status: 'Planning',
          progress: 25,
          features: ['Multi-language Support', 'API Gateway', 'Custom Models', 'Analytics Dashboard'],
          timeline: 'February 2025',
          team: 'AI Team',
          priority: 'High'
        }
      ]
    },
    'Q2-2025': {
      title: 'Q2 2025 - Market Expansion',
      projects: [
        {
          name: 'Develix Marketplace',
          description: 'Comprehensive platform for AI tools and blockchain services',
          status: 'Concept',
          progress: 10,
          features: ['Service Discovery', 'Payment Integration', 'User Reviews', 'Developer APIs'],
          timeline: 'June 2025',
          team: 'Full Stack Team',
          priority: 'Medium'
        },
        {
          name: 'Cross-Chain Bridge',
          description: 'Seamless asset transfer between different blockchain networks',
          status: 'Research',
          progress: 5,
          features: ['Multi-Chain Support', 'Atomic Swaps', 'Liquidity Pools', 'Security Audits'],
          timeline: 'May 2025',
          team: 'Blockchain Team',
          priority: 'Medium'
        }
      ]
    },
    'Q3-2025': {
      title: 'Q3 2025 - Innovation Focus',
      projects: [
        {
          name: 'AI-Powered Analytics',
          description: 'Advanced analytics platform with predictive capabilities',
          status: 'Concept',
          progress: 0,
          features: ['Predictive Models', 'Real-time Processing', 'Custom Dashboards', 'API Access'],
          timeline: 'September 2025',
          team: 'Data Science Team',
          priority: 'Low'
        },
        {
          name: 'Decentralized Identity',
          description: 'Blockchain-based identity verification and management system',
          status: 'Research',
          progress: 0,
          features: ['Self-Sovereign Identity', 'Biometric Integration', 'Privacy Controls', 'Compliance Tools'],
          timeline: 'August 2025',
          team: 'Security Team',
          priority: 'Low'
        }
      ]
    },
    'Q4-2025': {
      title: 'Q4 2025 - Global Scale',
      projects: [
        {
          name: 'Develix OS',
          description: 'Comprehensive operating system for decentralized applications',
          status: 'Vision',
          progress: 0,
          features: ['dApp Runtime', 'Integrated Wallet', 'Developer Tools', 'App Store'],
          timeline: 'December 2025',
          team: 'Platform Team',
          priority: 'Low'
        }
      ]
    }
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'in development': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'planning': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'concept': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'research': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'vision': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority?.toLowerCase()) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="bg-card rounded-2xl border border-border brand-shadow-card p-6">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h3 className="font-space-grotesk font-bold text-2xl text-foreground">
            Future Roadmap
          </h3>
          <p className="text-muted-foreground">
            Explore our upcoming projects and innovations planned for the next year.
          </p>
        </div>

        {/* Quarter Selector */}
        <div className="flex flex-wrap gap-2">
          {Object.keys(roadmapData)?.map((quarter) => (
            <button
              key={quarter}
              onClick={() => setSelectedQuarter(quarter)}
              className={`px-4 py-2 rounded-lg font-medium text-sm brand-transition ${
                selectedQuarter === quarter
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted-foreground/10 hover:text-foreground'
              }`}
            >
              {quarter}
            </button>
          ))}
        </div>

        {/* Selected Quarter Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h4 className="font-space-grotesk font-bold text-xl text-foreground">
              {roadmapData?.[selectedQuarter]?.title}
            </h4>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Icon name="Calendar" size={16} />
                <span>{selectedQuarter}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Folder" size={16} />
                <span>{roadmapData?.[selectedQuarter]?.projects?.length} Projects</span>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {roadmapData?.[selectedQuarter]?.projects?.map((project, index) => (
              <div key={index} className="bg-background border border-border rounded-xl p-6 space-y-4">
                {/* Project Header */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h5 className="font-space-grotesk font-bold text-lg text-foreground">
                      {project?.name}
                    </h5>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(project?.status)}`}>
                      {project?.status}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {project?.description}
                  </p>
                </div>

                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Development Progress</span>
                    <span className="font-medium text-foreground">{project?.progress}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full brand-transition"
                      style={{ width: `${project?.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <h6 className="font-inter font-semibold text-sm text-foreground">Key Features</h6>
                  <div className="grid grid-cols-2 gap-2">
                    {project?.features?.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <Icon name="Check" size={14} className="text-green-500" />
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-1">
                      <Icon name="Calendar" size={14} className="text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Timeline</span>
                    </div>
                    <div className="text-sm font-medium text-foreground">{project?.timeline}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-1">
                      <Icon name="Users" size={14} className="text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Team</span>
                    </div>
                    <div className="text-sm font-medium text-foreground">{project?.team}</div>
                  </div>
                </div>

                {/* Priority & Actions */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center space-x-2">
                    <Icon name="Flag" size={14} className={getPriorityColor(project?.priority)} />
                    <span className={`text-sm font-medium ${getPriorityColor(project?.priority)}`}>
                      {project?.priority} Priority
                    </span>
                  </div>
                  <Button variant="outline" size="sm" iconName="Eye" iconPosition="left">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Roadmap Summary */}
        <div className="pt-6 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-primary">8</div>
              <div className="text-sm text-muted-foreground">Total Projects</div>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-primary">2</div>
              <div className="text-sm text-muted-foreground">In Development</div>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-primary">₦50M</div>
              <div className="text-sm text-muted-foreground">Investment Planned</div>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-primary">12</div>
              <div className="text-sm text-muted-foreground">Months Timeline</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center pt-6 border-t border-border">
          <div className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-space-grotesk font-bold text-lg text-foreground">
                Want to be part of the journey?
              </h4>
              <p className="text-muted-foreground">
                Join our community to get early access to new features and provide feedback.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                variant="default" 
                size="lg"
                className="brand-hover-lift"
                iconName="Users"
                iconPosition="left"
              >
                Join Community
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                iconName="Bell"
                iconPosition="left"
              >
                Get Updates
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureRoadmap;