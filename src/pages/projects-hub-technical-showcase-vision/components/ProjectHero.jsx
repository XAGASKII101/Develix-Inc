import React from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../../../lib/animations"; // adjust path

const ProjectHero = () => {
  return (
    <motion.section
      className="relative from-primary overflow-hidden"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-32 h-32 border border-secondary rounded-lg rotate-12"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 border border-secondary rounded-lg rotate-12"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-accent rounded-lg -rotate-12"></div>
        <div className="absolute bottom-10 left-1/3 w-20 h-20 border border-primary rounded-lg rotate-45"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div className="space-y-8" variants={staggerContainer}>
            <motion.div className="space-y-4" variants={fadeIn("up", 0.2)}>
              <div className="flex items-center space-x-3">
                <Icon name="Code2" size={16} className="text-primary" />
                <span className="font-inter font-semibold text-sm">
                  Technical Showcase
                </span>
              </div>

              <motion.h1
                className="font-space-grotesk font-bold text-4xl lg:text-6xl leading-tight"
                variants={fadeIn("up", 0.3)}
              >
                Projects That Define Innovation
              </motion.h1>

              <motion.p
                className="text-xl text-para leading-relaxed max-w-xl"
                variants={fadeIn("up", 0.4)}
              >
                Explore our flagship projects with detailed technical
                breakdowns, live demos, and transparent development insights
                from conception to deployment.
              </motion.p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeIn("up", 0.5)}
            >
              <Button
                variant="default"
                size="lg"
                iconName="Play"
                iconPosition="left"
              >
                View Live Demos
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Github"
                iconPosition="left"
              >
                Open Source Code
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20"
              variants={staggerContainer}
            >
              <motion.div className="text-center" variants={fadeIn("up", 0.4)}>
                <div className="text-2xl font-bold">3</div>
                <div className="text-sm text-primary-foreground/70">
                  Active Projects
                </div>
              </motion.div>
              <motion.div className="text-center" variants={fadeIn("up", 0.5)}>
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-sm text-primary-foreground/70">
                  Users Served
                </div>
              </motion.div>
              <motion.div className="text-center" variants={fadeIn("up", 0.6)}>
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-sm text-primary-foreground/70">Uptime</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            className="relative"
            variants={fadeIn("up", 0.3)} // subtle rise-in instead of slide
          >
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
                    <div>{"},"}</div>
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
            <motion.div
              className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-xl flex items-center justify-center"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Icon name="Zap" size={24} className="text-primary" />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Icon name="Cpu" size={20} className="text-primary" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectHero;
