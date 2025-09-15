import React from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const ProjectHero = () => {
  return (
    <section className="relative from-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-80">
        <div className="absolute top-20 left-20 w-32 h-32 border border-secondary rounded-lg rotate-12"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 border border-secondary rounded-lg rotate-12"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-accent rounded-lg -rotate-12"></div>
        <div className="absolute bottom-10 left-1/3 w-20 h-20 border border-primary rounded-lg rotate-45"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Icon name="Code2" size={16} className="text-primary" />
                <span className="font-inter font-semibold text-sm">
                  Technical Showcase
                </span>
              </div>

              <h1 className="font-space-grotesk font-bold text-4xl lg:text-6xl leading-tight">
                Projects That Define Innovation
              </h1>

              <p className="text-xl text-para leading-relaxed max-w-xl">
                Explore our flagship projects with detailed technical
                breakdowns, live demos, and transparent development insights
                from conception to deployment.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                className="font-semibold brand-hover-lift hover:bg-hover-bg duration-150"
                iconName="Play"
                iconPosition="left"
              >
                View Live Demos
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground/20 text-primary hover:border-accent duration-150"
                iconName="Github"
                iconPosition="left"
              >
                Open Source Code
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20">
              <div className="text-center">
                <div className="text-2xl font-bold">3</div>
                <div className="text-sm text-primary-foreground/70">
                  Active Projects
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-sm text-primary-foreground/70">
                  Users Served
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-sm text-primary-foreground/70">Uptime</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
              {/* Code Preview */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <span className="text-xs text-primary-foreground/60">
                    develix-projects.js
                  </span>
                </div>

                <div className="font-mono text-sm space-y-2 text-primary-foreground/90">
                  <div>
                    <span className="text-accent">const</span> projects = [
                  </div>
                  <div className="pl-4">
                    <div>{"{"}</div>
                    <div className="pl-4">
                      <div>
                        <span className="text-secondary">name:</span>{" "}
                        <span className="text-green-300">"Elixa Coin"</span>,
                      </div>
                      <div>
                        <span className="text-secondary">type:</span>{" "}
                        <span className="text-green-300">"Blockchain"</span>,
                      </div>
                      <div>
                        <span className="text-secondary">status:</span>{" "}
                        <span className="text-green-300">"Live"</span>,
                      </div>
                      <div>
                        <span className="text-secondary">users:</span>{" "}
                        <span className="text-yellow-300">25000</span>
                      </div>
                    </div>
                    <div>{"},"} </div>
                  </div>
                  <div className="pl-4">
                    <div>{"{"}</div>
                    <div className="pl-4">
                      <div>
                        <span className="text-secondary">name:</span>{" "}
                        <span className="text-green-300">"Vendra AI"</span>,
                      </div>
                      <div>
                        <span className="text-secondary">type:</span>{" "}
                        <span className="text-green-300">"AI Platform"</span>,
                      </div>
                      <div>
                        <span className="text-secondary">status:</span>{" "}
                        <span className="text-green-300">"Beta"</span>,
                      </div>
                      <div>
                        <span className="text-secondary">users:</span>{" "}
                        <span className="text-yellow-300">12500</span>
                      </div>
                    </div>
                    <div>{"}"}</div>
                  </div>
                  <div>];</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-xl flex items-center justify-center animate-pulse">
              <Icon name="Zap" size={24} className="text-primary" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
              <Icon name="Cpu" size={20} className="text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
