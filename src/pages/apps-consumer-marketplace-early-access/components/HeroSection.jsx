import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Button from "../../../components/ui/Button";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const HeroSection = ({ onJoinWaitlist }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const heroSlides = [
    {
      title: "AI-Powered Apps Designed for Everyone",
      subtitle:
        "Experience the future of technology with apps that understand African contexts, work on any device, and solve real problems in your daily life.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
      cta: "Explore Our Apps",
      stats: { users: "10K+", countries: "5", languages: "3" },
    },
    {
      title: "Elixa Coin: Crypto Made Simple",
      subtitle:
        "The first cryptocurrency wallet designed specifically for Africans. Send money across borders, pay bills, and manage your digital assets with ease.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=600&fit=crop",
      cta: "Join Elixa Waitlist",
      stats: { waitlist: "5.2K", features: "12", security: "Bank-level" },
    },
    {
      title: "Vendra: Your Intelligent Assistant",
      subtitle:
        "An AI assistant that speaks your language, understands your culture, and helps automate your business and personal tasks effortlessly.",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=600&fit=crop",
      cta: "Try Vendra Beta",
      stats: { accuracy: "94%", tasks: "50+", languages: "Pidgin+" },
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, heroSlides?.length]);

  const currentHero = heroSlides?.[currentSlide];

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-20 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-accent rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Content */}
          <div className="order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide + "-content"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="flex flex-col items-center text-center lg:items-start lg:text-start"
              >
                <div className="mb-6">
                  <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                    <Icon name="Sparkles" size={16} className="mr-2" />
                    Early Access Available
                  </div>

                  <h1 className="font-space-grotesk font-bold text-4xl lg:text-5xl xl:text-6xl text-foreground mb-6 leading-tight">
                    {currentHero?.title}
                  </h1>

                  <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
                    {currentHero?.subtitle}
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {Object.entries(currentHero?.stats)?.map(
                    ([key, value], index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="text-center lg:text-left"
                      >
                        <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1">
                          {value}
                        </div>
                        <div className="text-sm text-muted-foreground capitalize">
                          {key?.replace(/([A-Z])/g, " $1")?.trim()}
                        </div>
                      </motion.div>
                    )
                  )}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button
                    variant="default"
                    size="lg"
                    iconName="Rocket"
                    iconPosition="left"
                    onClick={() => onJoinWaitlist()}
                    className="bg-primary hover:bg-primary/90 brand-hover-lift"
                  >
                    {currentHero?.cta}
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary-foreground/20 hover:border-accent"
                    iconName="Play"
                    iconPosition="left"
                  >
                    Watch Demo
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Icon name="Shield" size={16} />
                    <span>Secure & Private</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Globe" size={16} />
                    <span>Made in Nigeria</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Users" size={16} />
                    <span>Community Driven</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Visual */}
          <div className="order-2 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide + "-image"}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative"
              >
                {/* Main Image */}
                <div className="relative rounded-2xl overflow-hidden brand-shadow-modal brand-hover-scale">
                  <Image
                    src={currentHero?.image}
                    alt={currentHero?.title}
                    className="w-full h-96 lg:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                </div>

                {/* Floating Cards */}
                <div className="absolute -top-4 -left-4 bg-card rounded-lg border border-border p-4 brand-shadow-card animate-bounce">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center">
                      <Icon name="Check" size={16} className="text-success" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">
                        Beta Ready
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Testing Phase
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-card rounded-lg border border-border p-4 brand-shadow-card animate-pulse">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <Icon name="Users" size={16} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">
                        10K+ Users
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Waitlist
                      </div>
                    </div>
                  </div>
                </div>

                {/* App Icons */}
                <div className="absolute top-1/2 -left-8 transform -translate-y-1/2">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-card rounded-xl border border-border flex items-center justify-center brand-shadow-card brand-hover-lift">
                      <Icon name="Coins" size={24} className="text-accent" />
                    </div>
                    <div className="w-12 h-12 bg-card rounded-xl border border-border flex items-center justify-center brand-shadow-card brand-hover-lift">
                      <Icon name="Bot" size={24} className="text-secondary" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Slide Navigation */}
        <div className="flex items-center justify-center mt-12 space-x-8">
          <div className="flex space-x-2">
            {heroSlides?.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`w-3 h-3 rounded-full brand-transition ${
                  currentSlide === index ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="p-2 hover:bg-muted rounded-lg brand-transition"
            >
              <Icon name={isAutoPlaying ? "Pause" : "Play"} size={16} />
            </button>
            <span>{isAutoPlaying ? "Auto-playing" : "Paused"}</span>
          </div>
        </div>

        {/* Quick Access */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card/50 backdrop-blur-sm rounded-xl border border-border p-6 text-center brand-shadow-card brand-hover-lift">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Smartphone" size={24} className="text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Mobile First</h3>
            <p className="text-sm text-muted-foreground">
              Optimized for African mobile networks and devices
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm rounded-xl border border-border p-6 text-center brand-shadow-card brand-hover-lift">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Languages" size={24} className="text-secondary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">
              Local Languages
            </h3>
            <p className="text-sm text-muted-foreground">
              Supports English, Pidgin, and major Nigerian languages
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm rounded-xl border border-border p-6 text-center brand-shadow-card brand-hover-lift">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Zap" size={24} className="text-accent" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Low Data</h3>
            <p className="text-sm text-muted-foreground">
              Designed to work efficiently on limited data plans
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
