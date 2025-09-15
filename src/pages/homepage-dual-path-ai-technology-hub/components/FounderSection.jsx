import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/animations"; // global animation utility
import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button";
import Image from "../../../components/AppImage";
import Icon from "../../../components/AppIcon";

const FounderSection = () => {
  const founders = [
    {
      id: "alexius",
      name: "Alexius Dubem",
      role: "CEO & Co-founder",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      story: `Software engineering student at UNIZIK with strong skills in HTML, CSS, and JavaScript. A passionate tech enthusiast since childhood, now building real-world solutions at just 17.`,
    },
    {
      id: "jerome",
      name: "Jerome Ebube",
      role: "CTO & Co-founder",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      story: `Forward-thinking young innovator with a strong passion for technology, entrepreneurship, and building platforms that empower the African digital economy.`,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Icon name="Heart" size={16} className="text-primary mr-2" />
            <span className="text-primary font-inter font-medium text-sm">
              Behind Develix
            </span>
          </div>

          <h2 className="font-space-grotesk font-bold text-3xl md:text-4xl text-foreground mb-6">
            Meet Our Founders
          </h2>

          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
            Young innovators shaping the future of African technology
          </p>
        </motion.div>

        {/* Founders list */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {founders?.map((founder, i) => (
            <motion.div
              key={founder?.id}
              variants={fadeIn("up", 0.2 + i * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 border border-border brand-shadow-card brand-transition group-hover:brand-shadow-modal group-hover:-translate-y-2">
                <div className="flex items-start space-x-6 mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden">
                      <Image
                        src={founder?.avatar}
                        alt={founder?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                      <Icon
                        name="Verified"
                        size={14}
                        className="text-primary"
                      />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-space-grotesk font-bold text-xl text-foreground mb-1">
                      {founder?.name}
                    </h3>
                    <p className="font-inter text-primary font-medium mb-3">
                      {founder?.role}
                    </p>
                  </div>
                </div>

                <p className="font-inter text-muted-foreground leading-relaxed mb-6">
                  {founder?.story}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-secondary rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-space-grotesk font-bold text-2xl text-primary mb-4">
              Ready to Build the Future Together?
            </h3>
            <p className="font-inter text-para mb-6 max-w-2xl mx-auto">
              Join thousands of businesses and individuals already using Develix
              technology to solve real problems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/about-us">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground brand-hover-lift font-inter font-semibold"
                  iconName="Users"
                  iconPosition="left"
                >
                  Our Story
                </Button>
              </Link>

              <Link to="/contact-us">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary-foreground text-primary-foreground hover:bg-accent hover:border-accent hover:text-primary-foreground font-inter font-semibold"
                  iconName="MessageCircle"
                  iconPosition="left"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderSection;
