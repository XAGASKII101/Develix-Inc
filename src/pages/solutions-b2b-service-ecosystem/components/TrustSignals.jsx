import React from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";
import Image from "../../../components/AppImage";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "../../../lib/animations";

const TrustSignals = () => {
  const certifications = [
    {
      name: "Nigerian Business Registration",
      description:
        "Officially registered with Corporate Affairs Commission (CAC)",
      number: "RC 1234567",
      icon: "Building",
      verified: true,
    },
    {
      name: "ISO 27001 Security Certified",
      description: "International standard for information security management",
      number: "ISO/IEC 27001:2013",
      icon: "Shield",
      verified: true,
    },
    {
      name: "PCI DSS Compliant",
      description: "Payment Card Industry Data Security Standard compliance",
      number: "Level 1 Merchant",
      icon: "CreditCard",
      verified: true,
    },
    {
      name: "GDPR Compliant",
      description:
        "General Data Protection Regulation compliance for EU clients",
      number: "GDPR Article 25",
      icon: "Lock",
      verified: true,
    },
  ];

  const clientTestimonials = [
    {
      id: 1,
      name: "Adebayo Ogundimu",
      role: "Chief Technology Officer",
      company: "First Bank Nigeria",
      testimonial: `Develix delivered beyond our expectations. Their AI chatbot solution reduced our customer service workload by 85% while maintaining the high-quality service our customers expect. The team's understanding of the Nigerian banking landscape was exceptional.`,
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      projectValue: "₦15M",
      completionDate: "March 2024",
    },
    {
      id: 2,
      name: "Fatima Abdullahi",
      role: "Head of Digital Innovation",
      company: "Dangote Group",
      testimonial: `The blockchain supply chain solution transformed our operations completely. We now have 100% traceability from farm to consumer, which has significantly improved our quality control and reduced waste. Develix's technical expertise is world-class.`,
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      projectValue: "₦25M",
      completionDate: "January 2024",
    },
    {
      id: 3,
      name: "Chinedu Okwu",
      role: "Founder & CEO",
      company: "PayNow Fintech",
      testimonial: `Working with Develix was a game-changer for our startup. They built our entire fintech platform from scratch, including fraud detection and payment processing. Their understanding of Nigerian payment systems is unmatched.`,
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      projectValue: "₦8M",
      completionDate: "February 2024",
    },
  ];

  const securityMeasures = [
    {
      title: "End-to-End Encryption",
      description: "All data transmission protected with AES-256 encryption",
      icon: "Lock",
      implementation: "Implemented across all systems",
    },
    {
      title: "Multi-Factor Authentication",
      description: "Biometric and token-based authentication systems",
      icon: "Fingerprint",
      implementation: "Standard on all applications",
    },
    {
      title: "Regular Security Audits",
      description: "Monthly penetration testing and vulnerability assessments",
      icon: "Search",
      implementation: "Continuous monitoring",
    },
    {
      title: "Compliance Monitoring",
      description: "Automated compliance checking for regulatory requirements",
      icon: "CheckCircle",
      implementation: "Real-time compliance tracking",
    },
  ];

  const companyMetrics = [
    {
      metric: "50+",
      label: "Enterprise Clients",
      description: "Trusted by leading Nigerian companies",
      icon: "Building",
    },
    {
      metric: "₦2.5B+",
      label: "Cost Savings Generated",
      description: "Measurable business impact delivered",
      icon: "TrendingUp",
    },
    {
      metric: "99.9%",
      label: "System Uptime",
      description: "Reliable, enterprise-grade infrastructure",
      icon: "Activity",
    },
    {
      metric: "24/7",
      label: "Technical Support",
      description: "Round-the-clock monitoring and support",
      icon: "Headphones",
    },
  ];

  const awards = [
    {
      title: "Nigeria Tech Innovation Award 2024",
      category: "Best AI Solution",
      organization: "Nigeria Tech Awards",
      year: "2024",
    },
    {
      title: "Fintech Excellence Award",
      category: "Best Blockchain Implementation",
      organization: "Lagos Fintech Week",
      year: "2024",
    },
    {
      title: "Digital Transformation Leader",
      category: "Enterprise Solutions",
      organization: "African Tech Summit",
      year: "2023",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-medium mb-6">
            <Icon name="Award" size={16} className="mr-2" />
            Trust & Credibility
          </div>
          <h2 className="text-3xl lg:text-5xl font-space-grotesk font-bold text-foreground mb-6">
            Trusted by Nigeria's
            <span className="block text-primary mt-2">Leading Enterprises</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our track record speaks for itself. From certifications to client
            testimonials, see why enterprises trust Develix with their most
            critical technology projects.
          </p>
        </motion.div>

        {/* Company Metrics */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-4 gap-8 mb-16"
        >
          {companyMetrics?.map((metric, index) => (
            <motion.div
              key={index}
              variants={fadeInUp(0.2)}
              className="text-center bg-card rounded-xl p-8 border border-border brand-shadow-card brand-hover-lift"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name={metric?.icon} size={32} className="text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">
                {metric?.metric}
              </div>
              <div className="font-space-grotesk font-bold text-foreground mb-2">
                {metric?.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {metric?.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <motion.div variants={fadeInUp(0.2)} className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-space-grotesk font-bold text-foreground mb-4">
              Certifications & Compliance
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We maintain the highest standards of security, compliance, and
              business practices to protect your data and ensure regulatory
              compliance.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {certifications?.map((cert, index) => (
              <motion.div
                key={index}
                variants={fadeInUp(0.2)}
                className="bg-card rounded-xl p-8 border border-border brand-shadow-card hover:border-primary/20 brand-transition"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name={cert?.icon} size={28} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h4 className="font-space-grotesk font-bold text-foreground mr-2">
                        {cert?.name}
                      </h4>
                      {cert?.verified && (
                        <div className="flex items-center px-2 py-1 bg-accent/10 rounded-full">
                          <Icon
                            name="CheckCircle"
                            size={14}
                            className="text-accent mr-1"
                          />
                          <span className="text-xs font-medium text-accent">
                            Verified
                          </span>
                        </div>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-3 leading-relaxed">
                      {cert?.description}
                    </p>
                    <div className="text-sm font-medium text-secondary">
                      Certificate: {cert?.number}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Client Testimonials */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <motion.div variants={fadeInUp(0.2)} className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-space-grotesk font-bold text-foreground mb-4">
              Client Testimonials
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear directly from our enterprise clients about their experience
              working with Develix and the results they've achieved.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {clientTestimonials?.map((testimonial) => (
              <motion.div
                key={testimonial?.id}
                variants={fadeInUp(0.2)}
                className="bg-card rounded-xl p-8 border border-border brand-shadow-card brand-hover-lift"
              >
                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial?.rating)]?.map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={20}
                      className="text-accent fill-current"
                    />
                  ))}
                </div>

                {/* Testimonial */}
                <blockquote className="text-muted-foreground italic mb-6 leading-relaxed">
                  "{testimonial?.testimonial}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center space-x-4 mb-6">
                  <Image
                    src={testimonial?.image}
                    alt={testimonial?.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-space-grotesk font-bold text-foreground">
                      {testimonial?.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial?.role}
                    </div>
                    <div className="text-sm font-medium text-primary">
                      {testimonial?.company}
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="bg-surface rounded-lg p-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      Project Value:
                    </span>
                    <span className="font-medium text-foreground">
                      {testimonial?.projectValue}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Completed:</span>
                    <span className="font-medium text-foreground">
                      {testimonial?.completionDate}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Measures */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <motion.div variants={fadeInUp(0.2)} className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-space-grotesk font-bold text-foreground mb-4">
              Enterprise Security Standards
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your data security is our top priority. We implement bank-grade
              security measures to protect your sensitive information and
              business operations.
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-8">
            {securityMeasures?.map((measure, index) => (
              <motion.div
                key={index}
                variants={fadeInUp(0.2)}
                className="bg-card rounded-xl p-8 border border-border brand-shadow-card hover:border-secondary/20 brand-transition"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon
                      name={measure?.icon}
                      size={28}
                      className="text-secondary"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-space-grotesk font-bold text-foreground mb-2">
                      {measure?.title}
                    </h4>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {measure?.description}
                    </p>
                    <div className="inline-flex items-center px-3 py-1 bg-secondary/10 rounded-full">
                      <Icon
                        name="CheckCircle"
                        size={14}
                        className="text-secondary mr-1"
                      />
                      <span className="text-xs font-medium text-secondary">
                        {measure?.implementation}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Awards & Recognition */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <motion.div variants={fadeInUp(0.2)} className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-space-grotesk font-bold text-foreground mb-4">
              Awards & Recognition
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry recognition for our innovative solutions and commitment
              to excellence in Nigerian technology development.
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-3 gap-8">
            {awards?.map((award, index) => (
              <motion.div
                key={index}
                variants={fadeInUp(0.2)}
                className="text-center bg-card rounded-xl p-8 border border-border brand-shadow-card"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Icon name="Award" size={32} className="text-accent" />
                </div>
                <h4 className="font-space-grotesk font-bold text-foreground mb-2">
                  {award?.title}
                </h4>
                <div className="text-sm text-muted-foreground mb-2">
                  {award?.category}
                </div>
                <div className="text-sm font-medium text-primary mb-1">
                  {award?.organization}
                </div>
                <div className="text-xs text-muted-foreground">
                  {award?.year}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={fadeInUp(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-xl p-12"
        >
          <h3 className="text-2xl font-space-grotesk font-bold text-foreground mb-4">
            Join Our Trusted Enterprise Clients
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the same level of excellence and results that have made
            us the trusted technology partner for Nigeria's leading enterprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              className="bg-primary hover:bg-primary/90 font-semibold brand-hover-lift"
              iconName="Calendar"
              iconPosition="left"
            >
              Schedule Enterprise Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="FileText"
              iconPosition="left"
            >
              Download Security Whitepaper
            </Button>
          </div>
          <div className="mt-8 pt-6 border-t border-border/50">
            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Icon name="Shield" size={16} className="text-accent mr-2" />
                Bank-Grade Security
              </div>
              <div className="flex items-center">
                <Icon name="Award" size={16} className="text-accent mr-2" />
                Industry Certified
              </div>
              <div className="flex items-center">
                <Icon name="Users" size={16} className="text-accent mr-2" />
                50+ Enterprise Clients
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSignals;
