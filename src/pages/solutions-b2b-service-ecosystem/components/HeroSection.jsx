import React from "react";
import Button from "../../../components/ui/Button";
import Icon from "../../../components/AppIcon";

const HeroSection = () => {
  const capabilities = [
    {
      id: 1,
      title: "AI Development",
      description: "Custom AI solutions for Nigerian enterprises",
      icon: "Brain",
      features: [
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "Chatbot Development",
      ],
    },
    {
      id: 2,
      title: "Blockchain Integration",
      description: "Secure, scalable blockchain solutions",
      icon: "Link",
      features: [
        "Smart Contracts",
        "DeFi Solutions",
        "Supply Chain",
        "Digital Identity",
      ],
    },
    {
      id: 3,
      title: "Custom Software",
      description: "Tailored applications for your business",
      icon: "Code",
      features: [
        "Web Applications",
        "Mobile Apps",
        "API Development",
        "System Integration",
      ],
    },
    {
      id: 4,
      title: "Digital Transformation",
      description: "Complete digital ecosystem overhaul",
      icon: "Zap",
      features: [
        "Process Automation",
        "Cloud Migration",
        "Data Analytics",
        "Digital Strategy",
      ],
    },
  ];

  return (
    <section className="relative from-primary via-primary/95 to-primary/90 text-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-secondary rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-accent rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-secondary rounded-full"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Hero Content */}
          <div className="space-y-8 flex flex-col text-center items-center lg:items-start lg:text-start">
            <div className="space-y-6 lg:mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-secondary/20 rounded-full text-sm font-medium">
                <Icon name="Sparkles" size={16} className="mr-2" />
                Enterprise Solutions
              </div>

              <h1 className="text-4xl lg:text-6xl font-space-grotesk font-bold leading-tight">
                Enterprise AI & Blockchain Solutions.
              </h1>

              <p className="text-xl text-para leading-relaxed max-w-xl">
                Transform your business with cutting-edge AI and blockchain
                solutions designed specifically for Nigerian enterprises. From
                fintech integrations to supply chain optimization.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="hover:bg-hover-bg duration-150 font-semibold brand-hover-lift"
                iconName="Calendar"
                iconPosition="left"
              >
                Schedule Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground/20 text-primary"
                iconName="Play"
                iconPosition="left"
              >
                View Case Studies
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8 border-t border-primary-foreground/20">
              <div className="text-center">
                <div className="text-2xl font-bold ">50+</div>
                <div className="text-sm text-para">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold ">₦2.5B+</div>
                <div className="text-sm text-para">Cost Savings Generated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold ">99.9%</div>
                <div className="text-sm text-para">Uptime Guarantee</div>
              </div>
            </div>
          </div>

          {/* Capability Matrix */}
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-space-grotesk font-bold mb-2">
                Our Core Capabilities
              </h3>
              <p className="text-primary-foreground/70">
                Interactive solutions matrix
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {capabilities?.map((capability) => (
                <div
                  key={capability?.id}
                  className="group bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20 hover:border-secondary/50 brand-transition cursor-pointer brand-hover-lift"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-secondary/30 brand-transition">
                      <Icon
                        name={capability?.icon}
                        size={24}
                        className="text-secondary"
                      />
                    </div>
                    <div>
                      <h4 className="font-space-grotesk font-bold text-lg">
                        {capability?.title}
                      </h4>
                    </div>
                  </div>

                  <p className="text-primary-foreground/70 text-sm mb-4">
                    {capability?.description}
                  </p>

                  <div className="space-y-2">
                    {capability?.features?.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <Icon
                          name="Check"
                          size={16}
                          className="text-accent mr-2 flex-shrink-0"
                        />
                        <span className="text-primary-foreground/80">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
