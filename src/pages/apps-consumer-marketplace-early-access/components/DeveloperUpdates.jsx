import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const DeveloperUpdates = () => {
  const [selectedUpdate, setSelectedUpdate] = useState(0);

  const updates = [
    {
      id: 1,
      title: "Elixa Coin Mobile Wallet Progress",
      author: "Jerome Okwara",
      role: "Chief Technology Officer",
      date: "2025-08-25",
      readTime: "3 min read",
      category: "Development",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      excerpt: "Major breakthrough in our mobile wallet architecture. The new security layer is now 40% faster while maintaining bank-level encryption.",
      content: `We've made significant progress on the Elixa Coin mobile wallet this week. The team has successfully implemented our new security architecture that reduces transaction processing time by 40% while maintaining the highest security standards.\n\nKey achievements this sprint:\n• Completed biometric authentication integration\n• Optimized blockchain sync for mobile networks\n• Enhanced offline transaction queuing\n• Improved battery efficiency by 25%\n\nNext week, we'll be focusing on the user interface refinements based on our beta tester feedback. The wallet is feeling more intuitive with each iteration.`,
      tags: ["Mobile", "Security", "Performance"],
      likes: 127,
      comments: 23
    },
    {
      id: 2,
      title: "Vendra AI Assistant Beta Testing Results",
      author: "Jerome Okwara",
      role: "Chief Technology Officer",
      date: "2025-08-22",
      readTime: "4 min read",
      category: "Testing",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      excerpt: "Our beta testers are loving Vendra\'s natural language processing. 94% satisfaction rate and some incredible use cases emerging.",
      content: `The Vendra AI Assistant beta testing phase has exceeded our expectations. With over 500 beta testers across Nigeria, we're seeing incredible adoption and creative use cases.\n\nBeta Testing Highlights:\n• 94% user satisfaction rate\n• Average session time: 12 minutes\n• 78% of users complete onboarding\n• Most popular feature: Smart scheduling\n\nUser feedback has been invaluable. Many are using Vendra for business automation in ways we hadn't anticipated. Small business owners are particularly excited about the inventory management features.\n\nWe're now working on expanding language support to include Pidgin English and major Nigerian languages based on user requests.`,
      tags: ["AI", "Beta Testing", "User Experience"],
      likes: 89,
      comments: 31
    },
    {
      id: 3,
      title: "Behind the Scenes: Building for Africa",
      author: "Jerome Okwara",
      role: "Chief Technology Officer",
      date: "2025-08-20",
      readTime: "5 min read",
      category: "Culture",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=400&fit=crop",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      excerpt: "Why we\'re building technology that works for African realities - from intermittent internet to diverse payment preferences.",
      content: `Building technology for Africa requires a different mindset. We can't just adapt Western solutions; we need to build from the ground up with African realities in mind.\n\nOur Design Principles:\n• Offline-first architecture for unreliable internet\n• Low-bandwidth optimization for data costs\n• Multiple payment method integration\n• Multi-language support from day one\n• Battery-efficient mobile apps\n\nEvery feature we build is tested on 2G networks and older Android devices. This isn't just about accessibility - it's about ensuring our technology truly serves everyone.\n\nThe result? Apps that work beautifully in Lagos traffic, rural areas with poor connectivity, and everywhere in between.`,
      tags: ["Africa", "Design", "Accessibility"],
      likes: 156,
      comments: 42
    }
  ];

  const currentUpdate = updates?.[selectedUpdate];

  return (
    <div className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-space-grotesk font-bold text-3xl lg:text-4xl text-foreground mb-4">
            Developer Updates
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get behind-the-scenes insights from our CTO Jerome as he shares the journey of building AI-powered apps for Africa
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Update List */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {updates?.map((update, index) => (
                <div
                  key={update?.id}
                  onClick={() => setSelectedUpdate(index)}
                  className={`p-4 rounded-lg border cursor-pointer brand-transition ${
                    selectedUpdate === index
                      ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50 hover:bg-muted/50'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                      <Image 
                        src={update?.image} 
                        alt={update?.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground text-sm mb-1 line-clamp-2">
                        {update?.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <span>{update?.date}</span>
                        <span>•</span>
                        <span>{update?.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-3 mt-2">
                        <div className="flex items-center space-x-1">
                          <Icon name="Heart" size={12} className="text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{update?.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="MessageCircle" size={12} className="text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{update?.comments}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Update Detail */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl border border-border brand-shadow-card">
              <div className="relative h-64 rounded-t-xl overflow-hidden">
                <Image 
                  src={currentUpdate?.image} 
                  alt={currentUpdate?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {currentUpdate?.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image 
                      src={currentUpdate?.avatar} 
                      alt={currentUpdate?.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{currentUpdate?.author}</h4>
                    <p className="text-sm text-muted-foreground">{currentUpdate?.role}</p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="text-sm text-muted-foreground">{currentUpdate?.date}</p>
                    <p className="text-xs text-muted-foreground">{currentUpdate?.readTime}</p>
                  </div>
                </div>

                <h1 className="font-space-grotesk font-bold text-2xl text-foreground mb-4">
                  {currentUpdate?.title}
                </h1>

                <p className="text-lg text-muted-foreground mb-6">
                  {currentUpdate?.excerpt}
                </p>

                <div className="prose prose-gray max-w-none mb-6">
                  {currentUpdate?.content?.split('\n')?.map((paragraph, index) => (
                    <p key={index} className="text-foreground mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div className="flex items-center space-x-2">
                    {currentUpdate?.tags?.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary brand-transition">
                      <Icon name="Heart" size={16} />
                      <span className="text-sm">{currentUpdate?.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary brand-transition">
                      <Icon name="MessageCircle" size={16} />
                      <span className="text-sm">{currentUpdate?.comments}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary brand-transition">
                      <Icon name="Share2" size={16} />
                      <span className="text-sm">Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Button
                variant="outline"
                iconName="Bell"
                iconPosition="left"
              >
                Subscribe to Updates
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperUpdates;