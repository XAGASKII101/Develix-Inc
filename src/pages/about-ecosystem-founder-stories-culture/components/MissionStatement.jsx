import React from "react";
import Icon from "../../../components/AppIcon";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../../lib/animations";

const MissionStatement = () => {
  const initiatives = [
    {
      icon: "Users",
      title: "Accessibility First",
      description:
        "Building technology that works for everyone, regardless of technical background or economic status",
      examples: [
        "Multi-language support",
        "Offline-capable apps",
        "Low-bandwidth optimization",
      ],
    },
    {
      icon: "GraduationCap",
      title: "Education & Outreach",
      description:
        "Empowering the next generation of African tech innovators through knowledge sharing",
      examples: [
        "Free coding workshops",
        "University partnerships",
        "Open-source contributions",
      ],
    },
    {
      icon: "Heart",
      title: "Community Impact",
      description:
        "Creating solutions that address real challenges faced by African communities",
      examples: [
        "Financial inclusion tools",
        "Healthcare accessibility",
        "Agricultural technology",
      ],
    },
  ];

  return (
    <motion.div
      className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-2xl p-8 lg:p-12"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp(0)}
    >
      {/* Header */}
      <motion.div className="text-center mb-12" variants={fadeInUp(0)}>
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
            <Icon
              name="Compass"
              size={24}
              className="text-primary-foreground"
            />
          </div>
          <h2 className="text-3xl lg:text-4xl font-space-grotesk font-bold text-foreground">
            Our Mission
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.blockquote
            className="text-2xl lg:text-3xl font-space-grotesk font-bold text-primary mb-6 leading-tight"
            variants={fadeInUp(0)}
          >
            "Technology that works for everyone"
          </motion.blockquote>
          <motion.p
            className="text-lg text-muted-foreground font-inter leading-relaxed"
            variants={fadeInUp(0)}
          >
            We believe that advanced technology should be accessible, practical,
            and beneficial to all people across Africa and beyond. Our mission
            drives every product decision, partnership choice, and community
            initiative we undertake.
          </motion.p>
        </div>
      </motion.div>

      {/* Initiatives Grid */}
      <motion.div
        className="grid lg:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {initiatives?.map((initiative, index) => (
          <motion.div
            key={index}
            className="bg-card rounded-xl p-6 brand-shadow-card"
            variants={fadeInUp(0)}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon
                  name={initiative?.icon}
                  size={20}
                  className="text-primary"
                />
              </div>
              <h3 className="text-xl font-space-grotesk font-bold text-foreground">
                {initiative?.title}
              </h3>
            </div>

            <p className="text-muted-foreground font-inter leading-relaxed mb-4">
              {initiative?.description}
            </p>

            <div className="space-y-2">
              {initiative?.examples?.map((example, exIndex) => (
                <div key={exIndex} className="flex items-center gap-2">
                  <Icon
                    name="CheckCircle"
                    size={16}
                    className="text-success flex-shrink-0"
                  />
                  <span className="text-sm text-foreground font-inter">
                    {example}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div className="text-center mt-12" variants={fadeInUp(0)}>
        <motion.div
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent/20 rounded-full"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <Icon name="Sparkles" size={20} className="text-accent" />
          <span className="text-accent font-inter font-semibold">
            Join us in building technology that truly serves humanity
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default MissionStatement;
