import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

import { motion } from "framer-motion";

const ContactOptions = () => {
  const [selectedOption, setSelectedOption] = useState("enterprise");

  const contactOptions = [
    {
      id: "enterprise",
      title: "Enterprise Solutions",
      description: "Custom AI & software development for businesses",
      icon: "Building2",
      color: "text-primary",
      bgColor: "bg-primary/5",
      borderColor: "border-primary/20",
      features: [
        "Direct founder consultation",
        "Custom solution architecture",
        "Technical feasibility assessment",
        "24-hour response guarantee",
      ],
      cta: "Book Consultation",
      responseTime: "24 hours",
    },
    {
      id: "partnership",
      title: "Partnership & Integration",
      description: "Collaborate on fintech, AI, and blockchain projects",
      icon: "Handshake",
      color: "text-secondary",
      bgColor: "bg-secondary/5",
      borderColor: "border-secondary/20",
      features: [
        "API integration opportunities",
        "Joint development projects",
        "Revenue sharing models",
        "Technical documentation access",
      ],
      cta: "Explore Partnership",
      responseTime: "48 hours",
    },
    {
      id: "investor",
      title: "Investor Relations",
      description: "Funding discussions and strategic partnerships",
      icon: "TrendingUp",
      color: "text-accent",
      bgColor: "bg-accent/5",
      borderColor: "border-accent/20",
      features: [
        "Pitch deck access",
        "Financial projections",
        "Market analysis reports",
        "Due diligence materials",
      ],
      cta: "Schedule Meeting",
      responseTime: "24 hours",
    },
    {
      id: "media",
      title: "Media & Press",
      description: "Press inquiries and founder interviews",
      icon: "Mic",
      color: "text-success",
      bgColor: "bg-success/5",
      borderColor: "border-success/20",
      features: [
        "Founder interview availability",
        "Press kit access",
        "High-resolution assets",
        "Company background materials",
      ],
      cta: "Media Inquiry",
      responseTime: "48 hours",
    },
    {
      id: "developer",
      title: "Developer Community",
      description: "Join our ecosystem and access APIs",
      icon: "Code",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      features: [
        "API documentation access",
        "Beta testing opportunities",
        "Developer program enrollment",
        "Community forum access",
      ],
      cta: "Join Community",
      responseTime: "72 hours",
    },
    {
      id: "general",
      title: "General Inquiries",
      description: "Questions about our products and services",
      icon: "HelpCircle",
      color: "text-muted-foreground",
      bgColor: "bg-muted",
      borderColor: "border-border",
      features: [
        "Product information",
        "Service availability",
        "Pricing inquiries",
        "General support",
      ],
      cta: "Send Message",
      responseTime: "72 hours",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }} // 👈 only triggers when 30% in view
        >
          <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold text-foreground mb-4">
            Choose Your Engagement Path
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We've designed specific pathways for different types of
            relationships and inquiries. Select the option that best matches
            your needs.
          </p>
        </motion.div>

        {/* Contact Options Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {contactOptions?.map((option) => (
            <motion.div
              key={option?.id}
              className={`relative p-6 rounded-xl border-2 brand-transition cursor-pointer brand-hover-lift ${
                selectedOption === option?.id
                  ? `${option?.borderColor} ${option?.bgColor} brand-shadow-card`
                  : "border-border bg-card hover:border-primary/20 hover:bg-primary/5"
              }`}
              onClick={() => setSelectedOption(option?.id)}
              variants={{
                hidden: { opacity: 0, scale: 0.95, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-lg ${option?.bgColor} flex items-center justify-center mb-4`}
              >
                <Icon name={option?.icon} size={24} className={option?.color} />
              </div>

              {/* Content */}
              <h3 className="font-space-grotesk text-xl font-bold text-foreground mb-2">
                {option?.title}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                {option?.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {option?.features?.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center text-sm text-muted-foreground"
                  >
                    <Icon
                      name="Check"
                      size={16}
                      className={`${option?.color} mr-2 flex-shrink-0`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Response Time */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-muted-foreground">
                  Response time:
                </span>
                <span className={`text-xs font-medium ${option?.color}`}>
                  {option?.responseTime}
                </span>
              </div>

              {/* CTA Button */}
              <Button
                variant={selectedOption === option?.id ? "default" : "outline"}
                fullWidth
                size="sm"
                className="brand-transition"
              >
                {option?.cta}
              </Button>

              {/* Selection Indicator */}
              {selectedOption === option?.id && (
                <div className="absolute top-4 right-4">
                  <div
                    className={`w-6 h-6 rounded-full ${option?.bgColor} border-2 ${option?.borderColor} flex items-center justify-center`}
                  >
                    <Icon name="Check" size={14} className={option?.color} />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Button
            variant="default"
            size="lg"
            iconName="Calendar"
            iconPosition="left"
            className="bg-primary hover:bg-hover-bg duration-150 brand-hover-lift"
          >
            Schedule Direct Call
          </Button>
          <Button
            variant="outline"
            size="lg"
            iconName="MessageSquare"
            iconPosition="left"
            className="duration-150 border-primary-foreground/20 bg-white hover:border-accent"
          >
            Start Live Chat
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactOptions;
