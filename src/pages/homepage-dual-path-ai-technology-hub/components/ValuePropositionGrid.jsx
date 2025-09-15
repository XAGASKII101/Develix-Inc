import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button";
import Icon from "../../../components/AppIcon";
import { motion } from "framer-motion";
import {
  containerVariants,
  listVariants,
  itemVariants,
} from "../../../lib/animations";

const ValuePropositionGrid = () => {
  const valueProps = [
    {
      id: "practical-innovation",
      icon: "Lightbulb",
      title: "Practical Innovation",
      subtitle: "Technology that Works",
      description:
        "We don't build for the sake of building. Every solution addresses real-world challenges with measurable outcomes and genuine impact.",
      features: [
        "Problem-first approach",
        "Measurable ROI",
        "User-centric design",
        "Scalable architecture",
      ],
      color: "from-secondary to-accent",
      link: "/solutions",
    },
    {
      id: "african-perspective",
      icon: "Globe",
      title: "African Perspective, Global Standards",
      subtitle: "Local Insight, World-Class Quality",
      description:
        "Born in Nigeria, built for the world. We understand African markets while delivering solutions that compete on the global stage.",
      features: [
        "Cultural understanding",
        "Global best practices",
        "Local market expertise",
        "International compliance",
      ],
      color: "from-primary to-secondary",
      link: "/about-us",
    },
    {
      id: "community-first",
      icon: "Users",
      title: "Community-First Development",
      subtitle: "Built Together, Stronger Together",
      description:
        "Our ecosystem thrives on collaboration. From open-source contributions to developer partnerships, we grow together.",
      features: [
        "Open source commitment",
        "Developer community",
        "Transparent roadmaps",
        "Collaborative innovation",
      ],
      color: "from-accent to-primary",
      link: "/projects-hub",
    },
  ];

  return (
    <motion.section
      className="py-20 bg-surface"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div className="text-center mb-16" variants={containerVariants}>
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Icon name="Target" size={16} className="text-primary mr-2" />
            <span className="text-primary font-inter font-medium text-sm">
              Our Core Values
            </span>
          </div>

          <h2 className="font-space-grotesk font-bold text-3xl md:text-4xl text-foreground mb-6">
            Why Choose Develix
          </h2>

          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
            Three pillars that define our approach to technology and drive every
            decision we make in building solutions for the future.
          </p>
        </motion.div>

        {/* Value Props */}
        <motion.div
          className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {valueProps?.map((prop) => (
            <motion.div key={prop?.id} variants={itemVariants}>
              <div className="bg-card rounded-2xl p-8 border border-border brand-shadow-card brand-transition group-hover:brand-shadow-modal group-hover:-translate-y-2 h-full flex flex-col group relative">
                {/* Header */}
                <div className="mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${prop?.color} rounded-2xl flex items-center justify-center mb-4`}
                  >
                    <Icon
                      name={prop?.icon}
                      size={28}
                      className="text-primary-foreground"
                    />
                  </div>

                  <h3 className="font-space-grotesk font-bold text-xl text-foreground mb-2">
                    {prop?.title}
                  </h3>

                  <p className="font-inter text-primary font-medium text-sm">
                    {prop?.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="font-inter text-muted-foreground leading-relaxed mb-6 flex-1">
                  {prop?.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {prop?.features?.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                      <span className="font-inter text-sm text-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link to={prop?.link}>
                  <Button
                    variant="ghost"
                    className="text-primary hover:bg-primary/10 font-inter font-medium w-full group-hover:bg-primary group-hover:text-primary-foreground"
                    iconName="ArrowRight"
                    iconPosition="right"
                  >
                    Learn More
                  </Button>
                </Link>

                {/* Decorative Element */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-accent rounded-full opacity-60 group-hover:opacity-100 brand-transition"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="bg-card rounded-2xl p-8 border border-border brand-shadow-card max-w-4xl mx-auto">
            <h3 className="font-space-grotesk font-bold text-2xl text-foreground mb-4">
              Experience Our Values in Action
            </h3>
            <p className="font-inter text-muted-foreground mb-6 max-w-2xl mx-auto">
              Don't just take our word for it. Explore our live projects, read
              our case studies, and see how we're transforming ideas into
              impactful solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/projects-hub">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-primary hover:bg-primary/90 font-inter font-semibold brand-hover-lift"
                  iconName="Code"
                  iconPosition="left"
                >
                  View Projects
                </Button>
              </Link>

              <Link to="/solutions">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary-foreground/20 text-primary hover:bg-accent hover:border-accent hover:text-primary-foreground font-inter font-semibold"
                  iconName="Building2"
                  iconPosition="left"
                >
                  Enterprise Solutions
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ValuePropositionGrid;
