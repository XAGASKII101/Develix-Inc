import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button";
import Icon from "../../../components/AppIcon";

const HeroSection = () => {
  const [currentDemo, setCurrentDemo] = useState(0);
  const [userType, setUserType] = useState("mixed"); // 'b2b', 'b2c', 'mixed'

  const demos = [
    {
      id: "elixa",
      title: "Elixa Coin",
      subtitle: "Blockchain Innovation",
      description:
        "Decentralized finance solutions built on Polygon network with smart contract automation",
      features: ["Smart Contracts", "DeFi Integration", "Cross-chain Support"],
      color: "from-secondary to-accent",
    },
    {
      id: "vendra",
      title: "Vendra AI",
      subtitle: "Intelligent Automation",
      description:
        "AI-powered business process automation with natural language processing capabilities",
      features: [
        "NLP Processing",
        "Workflow Automation",
        "Predictive Analytics",
      ],
      color: "from-primary to-secondary",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % demos?.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentDemoData = demos?.[currentDemo];

  return (
    <section className="relative min-h-screen  from-primary via-primary/95 to-primary/90 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/50 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-center flex flex-col items-center lg:items-start lg:text-start">
            <div className="mb-6 flex flex-col items-center lg:items-start">
              <div className="inline-flex items-center px-4 py-2 bg-secondary/20 rounded-full mb-6">
                <Icon name="Zap" size={16} className="mr-2" />
                <span className="font-inter font-medium text-sm">
                  Practical Innovation
                </span>
              </div>

              <h1 className="font-space-grotesk font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                AI & Software that solve real problems
              </h1>

              <p className="font-inter text-lg md:text-xl text-para mb-8 max-w-2xl">
                Building the future from Africa, for the world. Empowering
                businesses and consumers with cutting-edge technology that
                delivers measurable impact.
              </p>
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/solutions">
                <Button
                  variant="default"
                  size="lg"
                  className="hover:bg-hover-bg font-inter font-semibold w-full sm:w-auto duration-150 brand-hover-lift"
                  iconName="Building2"
                  iconPosition="left"
                >
                  Explore Solutions
                </Button>
              </Link>

              <Link to="/marketplace">
                <Button
                  variant="outline"
                  size="lg"
                  className="duration-150 border-primary-foreground/20 hover:border-accent font-inter w-full sm:w-auto"
                  iconName="Smartphone"
                  iconPosition="left"
                >
                  Discover Apps
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-primary-foreground/60">
              <div className="flex items-center">
                <Icon name="Users" size={16} className="mr-2" />
                <span className="font-inter text-sm">500+ Developers</span>
              </div>
              <div className="flex items-center">
                <Icon name="Globe" size={16} className="mr-2" />
                <span className="font-inter text-sm">12 Countries</span>
              </div>
              <div className="flex items-center">
                <Icon name="Award" size={16} className="mr-2" />
                <span className="font-inter text-sm">Enterprise Ready</span>
              </div>
            </div>
          </div>

          {/* Right Demo Showcase */}
          <div className="relative">
            <div className="bg-background/10 backdrop-blur-md rounded-2xl p-8 border border-primary-foreground/20 brand-shadow-modal">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${currentDemoData?.color} rounded-xl flex items-center justify-center duration-100`}
                  >
                    <Icon
                      name={currentDemoData?.id === "elixa" ? "Coins" : "Brain"}
                      size={24}
                      className="text-primary-foreground transition-all duration-100"
                    />
                  </div>

                  {/* Animate title + subtitle */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentDemo}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <h3 className="font-space-grotesk font-bold text-xl ">
                        {currentDemoData?.title}
                      </h3>
                      <p className="font-inter text-sm text-primary-foreground/70">
                        {currentDemoData?.subtitle}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Dots navigation */}
                <div className="flex space-x-2">
                  {demos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentDemo(index)}
                      className={`w-2 h-2 rounded-full brand-transition ${
                        index === currentDemo
                          ? "bg-secondary"
                          : "bg-primary-foreground/30"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Animate description */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentDemo + "-desc"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="font-inter text-primary-foreground/80 mb-6"
                >
                  {currentDemoData?.description}
                </motion.p>
              </AnimatePresence>

              {/* Animate features */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentDemo + "-features"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    staggerChildren: 0.1,
                  }}
                  className="grid grid-cols-1 gap-3 mb-6"
                >
                  {currentDemoData?.features?.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-center"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="text-secondary mr-3"
                      />
                      <span className="font-inter text-sm text-primary-foreground/90">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>

              <Link to="/projects-hub">
                <Button
                  variant="ghost"
                  className="text-secondary hover:bg-secondary/20 font-inter font-medium w-full"
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  View Live Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon
          name="ChevronDown"
          size={24}
          className="text-primary-foreground/60"
        />
      </div>
    </section>
  );
};

export default HeroSection;
