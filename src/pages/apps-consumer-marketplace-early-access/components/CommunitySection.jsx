import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CommunitySection = () => {
  const [activeTab, setActiveTab] = useState('discussions');

  const communityStats = [
    { label: 'Active Members', value: '2,847', icon: 'Users' },
    { label: 'Beta Testers', value: '1,234', icon: 'TestTube' },
    { label: 'Feature Requests', value: '89', icon: 'Lightbulb' },
    { label: 'Bug Reports', value: '23', icon: 'Bug' }
  ];

  const discussions = [
    {
      id: 1,
      title: "Elixa Coin wallet integration with local banks",
      author: "Adebayo Ogundimu",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      category: "Feature Request",
      replies: 24,
      likes: 67,
      timeAgo: "2 hours ago",
      isHot: true,
      preview: "Has anyone tested the new bank integration feature? I\'m particularly interested in how it works with GTBank and Access Bank..."
    },
    {
      id: 2,
      title: "Vendra AI understanding Nigerian Pidgin English",
      author: "Chioma Nwankwo",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      category: "Discussion",
      replies: 18,
      likes: 43,
      timeAgo: "4 hours ago",
      isHot: false,
      preview: "The AI is getting better at understanding Pidgin! Yesterday I asked \'Wetin be the weather for tomorrow?\' and it understood perfectly..."
    },
    {
      id: 3,
      title: "Mobile data optimization suggestions",
      author: "Kemi Adebisi",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      category: "Feedback",
      replies: 31,
      likes: 89,
      timeAgo: "6 hours ago",
      isHot: true,
      preview: "Living in an area with expensive data, I've noticed the apps are quite data-efficient. Here are some additional optimizations that could help..."
    },
    {
      id: 4,
      title: "Beta testing group for small business features",
      author: "Emeka Okafor",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      category: "Beta Testing",
      replies: 12,
      likes: 28,
      timeAgo: "1 day ago",
      isHot: false,
      preview: "I run a small electronics shop in Alaba Market. Would love to test business-focused features with other entrepreneurs..."
    }
  ];

  const betaPrograms = [
    {
      id: 1,
      name: "Elixa Coin Mobile Wallet",
      description: "Test the next generation of cryptocurrency wallet designed for African users",
      participants: 456,
      status: "Active",
      requirements: ["Android 8.0+", "Stable internet", "Nigerian phone number"],
      nextMilestone: "Multi-signature support",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=200&fit=crop"
    },
    {
      id: 2,
      name: "Vendra AI Assistant",
      description: "Help train our AI to better understand Nigerian languages and contexts",
      participants: 234,
      status: "Recruiting",
      requirements: ["Fluent in English + local language", "Business experience", "Regular feedback"],
      nextMilestone: "Voice recognition training",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop"
    }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Feature Request': return 'bg-accent/20 text-accent';
      case 'Discussion': return 'bg-secondary/20 text-secondary';
      case 'Feedback': return 'bg-success/20 text-success';
      case 'Beta Testing': return 'bg-primary/20 text-primary';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="bg-muted/30 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-space-grotesk font-bold text-3xl lg:text-4xl text-foreground mb-4">
            Join Our Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with fellow early adopters, share feedback, and help shape the future of AI-powered apps for Africa
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {communityStats?.map((stat, index) => (
            <div key={index} className="bg-card rounded-lg border border-border p-6 text-center brand-shadow-card">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name={stat?.icon} size={24} className="text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{stat?.value}</div>
              <div className="text-sm text-muted-foreground">{stat?.label}</div>
            </div>
          ))}
        </div>

        {/* Community Tabs */}
        <div className="bg-card rounded-xl border border-border brand-shadow-card">
          <div className="border-b border-border">
            <div className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('discussions')}
                className={`py-4 border-b-2 font-medium brand-transition ${
                  activeTab === 'discussions' ?'border-primary text-primary' :'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                Community Discussions
              </button>
              <button
                onClick={() => setActiveTab('beta')}
                className={`py-4 border-b-2 font-medium brand-transition ${
                  activeTab === 'beta' ?'border-primary text-primary' :'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                Beta Programs
              </button>
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'discussions' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-space-grotesk font-semibold text-xl text-foreground">
                    Recent Discussions
                  </h3>
                  <Button variant="outline" iconName="Plus" iconPosition="left">
                    Start Discussion
                  </Button>
                </div>

                <div className="space-y-4">
                  {discussions?.map((discussion) => (
                    <div key={discussion?.id} className="border border-border rounded-lg p-4 hover:bg-muted/50 brand-transition">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                          <Image 
                            src={discussion?.avatar} 
                            alt={discussion?.author}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-2">
                            <h4 className="font-semibold text-foreground hover:text-primary cursor-pointer brand-transition">
                              {discussion?.title}
                            </h4>
                            {discussion?.isHot && (
                              <span className="bg-error/20 text-error px-2 py-1 rounded text-xs font-medium">
                                Hot
                              </span>
                            )}
                          </div>
                          
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                            {discussion?.preview}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <span>by {discussion?.author}</span>
                              <span>•</span>
                              <span>{discussion?.timeAgo}</span>
                              <span className={`px-2 py-1 rounded text-xs ${getCategoryColor(discussion?.category)}`}>
                                {discussion?.category}
                              </span>
                            </div>
                            
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <div className="flex items-center space-x-1">
                                <Icon name="MessageCircle" size={14} />
                                <span>{discussion?.replies}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Icon name="Heart" size={14} />
                                <span>{discussion?.likes}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-4">
                  <Button variant="outline">
                    View All Discussions
                  </Button>
                </div>
              </div>
            )}

            {activeTab === 'beta' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-space-grotesk font-semibold text-xl text-foreground">
                    Beta Testing Programs
                  </h3>
                  <Button variant="outline" iconName="TestTube" iconPosition="left">
                    Apply to Test
                  </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {betaPrograms?.map((program) => (
                    <div key={program?.id} className="border border-border rounded-lg overflow-hidden">
                      <div className="h-32 overflow-hidden">
                        <Image 
                          src={program?.image} 
                          alt={program?.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-foreground">{program?.name}</h4>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            program?.status === 'Active' ?'bg-success/20 text-success' :'bg-accent/20 text-accent'
                          }`}>
                            {program?.status}
                          </span>
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-4">
                          {program?.description}
                        </p>
                        
                        <div className="space-y-3 mb-4">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Participants:</span>
                            <span className="font-medium text-foreground">{program?.participants}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Next Milestone:</span>
                            <span className="font-medium text-foreground">{program?.nextMilestone}</span>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <h5 className="text-sm font-medium text-foreground mb-2">Requirements:</h5>
                          <ul className="space-y-1">
                            {program?.requirements?.map((req, index) => (
                              <li key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <Icon name="Check" size={12} className="text-success flex-shrink-0" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <Button
                          variant={program?.status === 'Active' ? 'default' : 'outline'}
                          fullWidth
                          iconName={program?.status === 'Active' ? 'Play' : 'Clock'}
                          iconPosition="left"
                        >
                          {program?.status === 'Active' ? 'Join Beta' : 'Join Waitlist'}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Community CTA */}
        <div className="text-center mt-12">
          <div className="bg-card rounded-xl border border-border p-8 brand-shadow-card">
            <h3 className="font-space-grotesk font-bold text-2xl text-foreground mb-4">
              Ready to Join Our Community?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get exclusive access to beta features, connect with other users, and help shape the future of AI-powered apps for Africa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                iconName="Users"
                iconPosition="left"
                className="bg-primary hover:bg-primary/90"
              >
                Join Community
              </Button>
              <Button
                variant="outline"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Start Discussion
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;