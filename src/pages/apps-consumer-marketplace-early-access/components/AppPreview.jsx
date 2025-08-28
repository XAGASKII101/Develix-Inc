import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const AppPreview = ({ app, onJoinWaitlist }) => {
  const [activeScreen, setActiveScreen] = useState(0);

  const getAppScreenshots = (appName) => {
    if (appName === 'Elixa Coin') {
      return [
        {
          title: "Wallet Dashboard",
          description: "Clean, intuitive interface showing your crypto portfolio with real-time Nigerian Naira conversion",
          image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=600&fit=crop"
        },
        {
          title: "Send & Receive",
          description: "Simple QR code scanning and contact-based transfers with biometric security",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=600&fit=crop"
        },
        {
          title: "Local Integration",
          description: "Direct integration with Nigerian banks and mobile money platforms",
          image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=600&fit=crop"
        }
      ];
    } else {
      return [
        {
          title: "AI Chat Interface",
          description: "Natural conversation in English and Nigerian Pidgin with context awareness",
          image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=600&fit=crop"
        },
        {
          title: "Smart Automation",
          description: "Set up business workflows and personal tasks with simple voice commands",
          image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=600&fit=crop"
        },
        {
          title: "Local Context",
          description: "Understands Nigerian business practices, holidays, and cultural nuances",
          image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=300&h=600&fit=crop"
        }
      ];
    }
  };

  const screenshots = getAppScreenshots(app?.name);

  return (
    <div className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* App Preview */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative mx-auto w-80 h-[640px] bg-gray-900 rounded-[3rem] p-2 brand-shadow-modal">
                <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-background flex items-center justify-between px-6 text-xs text-foreground z-10">
                    <span>9:41</span>
                    <div className="flex items-center space-x-1">
                      <Icon name="Signal" size={12} />
                      <Icon name="Wifi" size={12} />
                      <Icon name="Battery" size={12} />
                    </div>
                  </div>

                  {/* Screenshot */}
                  <div className="pt-8 h-full">
                    <Image 
                      src={screenshots?.[activeScreen]?.image} 
                      alt={screenshots?.[activeScreen]?.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Navigation Dots */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {screenshots?.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveScreen(index)}
                        className={`w-2 h-2 rounded-full brand-transition ${
                          activeScreen === index ? 'bg-primary' : 'bg-muted'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center animate-pulse">
                <Icon name="Sparkles" size={24} className="text-accent" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center animate-bounce">
                <Icon name="Zap" size={16} className="text-secondary" />
              </div>
            </div>
          </div>

          {/* App Details */}
          <div className="order-1 lg:order-2">
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon 
                    name={app?.name === 'Elixa Coin' ? 'Coins' : 'Bot'} 
                    size={32} 
                    className="text-primary" 
                  />
                </div>
                <div>
                  <h1 className="font-space-grotesk font-bold text-3xl text-foreground">
                    {app?.name}
                  </h1>
                  <p className="text-muted-foreground">
                    {app?.name === 'Elixa Coin' ? 'Cryptocurrency Wallet' : 'AI Assistant'}
                  </p>
                </div>
              </div>

              <p className="text-lg text-foreground leading-relaxed mb-6">
                {app?.fullDescription}
              </p>
            </div>

            {/* Current Screen Info */}
            <div className="bg-card rounded-lg border border-border p-6 mb-6 brand-shadow-card">
              <h3 className="font-space-grotesk font-semibold text-lg text-foreground mb-2">
                {screenshots?.[activeScreen]?.title}
              </h3>
              <p className="text-muted-foreground">
                {screenshots?.[activeScreen]?.description}
              </p>
            </div>

            {/* Key Features */}
            <div className="mb-8">
              <h3 className="font-space-grotesk font-semibold text-lg text-foreground mb-4">
                Why You'll Love It
              </h3>
              <div className="space-y-3">
                {app?.features?.slice(0, 4)?.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={14} className="text-success" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">{app?.waitlistCount}</div>
                <div className="text-sm text-muted-foreground">Waitlist</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">{app?.rating}</div>
                <div className="text-sm text-muted-foreground">Beta Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">{app?.expectedLaunch}</div>
                <div className="text-sm text-muted-foreground">Launch</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <Button
                variant="default"
                fullWidth
                iconName="Bell"
                iconPosition="left"
                onClick={() => onJoinWaitlist(app)}
                className="bg-primary hover:bg-primary/90 text-lg py-3"
              >
                Join Early Access Waitlist
              </Button>
              
              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  fullWidth
                  iconName="Play"
                  iconPosition="left"
                >
                  Watch Demo
                </Button>
                <Button
                  variant="outline"
                  fullWidth
                  iconName="Share2"
                  iconPosition="left"
                >
                  Share
                </Button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={16} className="text-success" />
                  <span>Bank-level security</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Smartphone" size={16} className="text-primary" />
                  <span>Mobile optimized</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Zap" size={16} className="text-accent" />
                  <span>Low data usage</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Screenshot Navigation */}
        <div className="mt-12 lg:hidden">
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {screenshots?.map((screenshot, index) => (
              <button
                key={index}
                onClick={() => setActiveScreen(index)}
                className={`flex-shrink-0 p-4 rounded-lg border brand-transition ${
                  activeScreen === index
                    ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                }`}
              >
                <h4 className="font-medium text-foreground text-sm mb-1">
                  {screenshot?.title}
                </h4>
                <p className="text-xs text-muted-foreground max-w-32">
                  {screenshot?.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPreview;