import React, { useState } from "react";
import Button from "../../../components/ui/Button";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const CommunitySection = () => {
  const [activeTab, setActiveTab] = useState("discussions");

  const communityStats = [
    { label: "Active Members", value: "2,847", icon: "Users" },
    { label: "Beta Testers", value: "1,234", icon: "TestTube" },
    { label: "Feature Requests", value: "89", icon: "Lightbulb" },
    { label: "Bug Reports", value: "23", icon: "Bug" },
  ];

  const discussions = [
    {
      id: 1,
      title: "Elixa Coin wallet integration with local banks",
      author: "Adebayo Ogundimu",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      category: "Feature Request",
      replies: 24,
      likes: 67,
      timeAgo: "2 hours ago",
      isHot: true,
      preview:
        "Has anyone tested the new bank integration feature? I'm particularly interested in how it works with GTBank and Access Bank...",
    },
    {
      id: 2,
      title: "Vendra AI understanding Nigerian Pidgin English",
      author: "Chioma Nwankwo",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      category: "Discussion",
      replies: 18,
      likes: 43,
      timeAgo: "4 hours ago",
      isHot: false,
      preview:
        "The AI is getting better at understanding Pidgin! Yesterday I asked 'Wetin be the weather for tomorrow?' and it understood perfectly...",
    },
    {
      id: 3,
      title: "Mobile data optimization suggestions",
      author: "Kemi Adebisi",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      category: "Feedback",
      replies: 31,
      likes: 89,
      timeAgo: "6 hours ago",
      isHot: true,
      preview:
        "Living in an area with expensive data, I've noticed the apps are quite data-efficient. Here are some additional optimizations that could help...",
    },
    {
      id: 4,
      title: "Beta testing group for small business features",
      author: "Emeka Okafor",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      category: "Beta Testing",
      replies: 12,
      likes: 28,
      timeAgo: "1 day ago",
      isHot: false,
      preview:
        "I run a small electronics shop in Alaba Market. Would love to test business-focused features with other entrepreneurs...",
    },
  ];

  const betaPrograms = [
    {
      id: 1,
      name: "Elixa Coin Mobile Wallet",
      description:
        "Test the next generation of cryptocurrency wallet designed for African users",
      participants: 456,
      status: "Active",
      requirements: [
        "Android 8.0+",
        "Stable internet",
        "Nigerian phone number",
      ],
      nextMilestone: "Multi-signature support",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=200&fit=crop",
    },
    {
      id: 2,
      name: "Vendra AI Assistant",
      description:
        "Help train our AI to better understand Nigerian languages and contexts",
      participants: 234,
      status: "Recruiting",
      requirements: [
        "Fluent in English + local language",
        "Business experience",
        "Regular feedback",
      ],
      nextMilestone: "Voice recognition training",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop",
    },
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case "Feature Request":
        return "bg-accent/20 text-accent";
      case "Discussion":
        return "bg-secondary/20 text-secondary";
      case "Feedback":
        return "bg-success/20 text-success";
      case "Beta Testing":
        return "bg-primary/20 text-primary";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="bg-muted/30 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Community CTA */}
        <div className="text-center mt-12">
          <div className="bg-card rounded-xl border border-border p-8 brand-shadow-card">
            <h3 className="font-space-grotesk font-bold text-2xl text-foreground mb-4">
              Ready to Join Our Community?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get exclusive access to beta features, connect with other users,
              and help shape the future of AI-powered apps for Africa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                iconName="Users"
                iconPosition="left"
                className="bg-primary hover:bg-hover-bg duration-150 brand-hover-lift"
              >
                Join Community
              </Button>
              <Button
                variant="outline"
                iconName="MessageCircle"
                className="border-primary-foreground/20 hover:border-accent"
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
