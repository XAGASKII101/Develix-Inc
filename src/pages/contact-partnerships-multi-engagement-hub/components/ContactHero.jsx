import React from "react";
import Icon from "../../../components/AppIcon";
import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section className="relative from-primary via-primary/95 to-primary/90 text-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border border-secondary rounded-full"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-accent rounded-lg rotate-45"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-accent rounded-full"
          animate={{ x: [0, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 right-1/3 w-20 h-20 bg-secondary rounded-lg rotate-12"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-secondary/10 px-4 py-2 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Icon name="MessageSquare" size={16} />
            <span className="text-sm font-medium">
              Multiple Engagement Pathways
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="font-space-grotesk text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's Build the Future Together
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Whether you're an enterprise seeking AI solutions, a developer
            interested in partnerships, or an investor exploring opportunities -
            we have dedicated pathways for meaningful engagement.
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {[
              { value: "24h", label: "Enterprise Response" },
              { value: "48h", label: "Partnership Discussions" },
              { value: "Lagos", label: "Physical Office" },
              { value: "Global", label: "Digital Access" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-2xl md:text-3xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/70">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
