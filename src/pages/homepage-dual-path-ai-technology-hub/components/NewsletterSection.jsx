import React, { useState } from "react";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import Icon from "../../../components/AppIcon";
import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/animations";

const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(""); // for validation error

  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (!email || !validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail("");
    }, 2000);
  };

  const benefits = [
    {
      icon: "Zap",
      title: "Early Access",
      description: "Be first to try new features and apps",
    },
    {
      icon: "TrendingUp",
      title: "Industry Insights",
      description: "Weekly AI and tech trends from Africa",
    },
    {
      icon: "Users",
      title: "Community Updates",
      description: "Developer stories and ecosystem news",
    },
    {
      icon: "Gift",
      title: "Exclusive Content",
      description: "Behind-the-scenes founder updates",
    },
  ];

  if (isSubscribed) {
    return (
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon
                name="CheckCircle"
                size={40}
                className="text-primary-foreground"
              />
            </div>

            <h2 className="font-space-grotesk font-bold text-3xl text-foreground mb-4">
              Welcome to the Develix Community!
            </h2>

            <p className="font-inter text-lg text-muted-foreground mb-8">
              Thank you for subscribing. You'll receive your first newsletter
              with exclusive insights and early access opportunities within the
              next 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="bg-primary hover:bg-primary/90 font-inter font-semibold"
                iconName="Smartphone"
                iconPosition="left"
                onClick={() => (window.location.href = "/marketplace")}
              >
                Explore Apps
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-inter font-semibold"
                iconName="Building2"
                iconPosition="left"
                onClick={() => (window.location.href = "/solutions")}
              >
                View Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className="inline-flex items-center bg-primary/10 rounded-full mb-6">
                <Icon name="Mail" size={16} className="text-primary mr-2" />
                <span className="text-primary font-inter font-medium text-sm">
                  Stay Connected
                </span>
              </div>

              <h2 className="font-space-grotesk font-bold text-3xl md:text-4xl text-foreground mb-6">
                Join the Innovation Journey
              </h2>

              <p className="font-inter text-lg text-muted-foreground mb-8">
                Get exclusive insights into African tech innovation, early
                access to our latest apps, and behind-the-scenes updates from
                our founders. Join 2,500+ innovators already in our community.
              </p>

              {/* Benefits Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {benefits?.map((benefit, index) => (
                  <motion.div
                    key={benefit?.title}
                    variants={fadeIn("up", 0.2 + index * 0.15)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.4 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center flex-shrink-0 mt-1">
                      <Icon
                        name={benefit?.icon}
                        size={16}
                        className="text-secondary"
                      />
                    </div>
                    <div>
                      <h3 className="font-space-grotesk font-semibold text-foreground text-sm mb-1">
                        {benefit?.title}
                      </h3>
                      <p className="font-inter text-xs text-muted-foreground">
                        {benefit?.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Trust Indicators */}
              <motion.div
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className="flex items-center space-x-6 text-muted-foreground"
              >
                <div className="flex items-center">
                  <Icon name="Users" size={16} className="mr-2" />
                  <span className="font-inter text-sm">500+ subscribers</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Shield" size={16} className="mr-2" />
                  <span className="font-inter text-sm">No spam, ever</span>
                </div>
                <div className="flex items-center">
                  <Icon name="X" size={16} className="mr-2" />
                  <span className="font-inter text-sm">
                    Unsubscribe anytime
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Form */}
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="lg:pl-8"
            >
              <div className="bg-card rounded-2xl p-8 border border-border brand-shadow-card">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="email"
                      label="Email Address"
                      placeholder="example@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e?.target?.value)}
                      required
                      error={error}
                      className="mb-4"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    loading={isLoading}
                    disabled={!email || isLoading}
                    className="bg-primary hover:bg-primary/90 font-inter font-semibold w-full"
                    iconName="ArrowRight"
                    iconPosition="right"
                  >
                    {isLoading ? "Subscribing..." : "Join the Community"}
                  </Button>

                  <p className="font-inter text-xs text-muted-foreground text-center">
                    By subscribing, you agree to our{" "}
                    <a href="#" className="text-primary hover:underline">
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-primary hover:underline">
                      Terms of Service
                    </a>
                    .
                  </p>
                </form>

                {/* Social Proof */}
                <motion.div
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.4 }}
                  className="mt-8 pt-6 border-t border-border"
                >
                  <p className="font-inter text-sm text-muted-foreground text-center mb-4">
                    Join innovators from leading companies:
                  </p>

                  <div className="flex items-center justify-center space-x-6 opacity-60">
                    <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                      <Icon name="Building2" size={16} />
                    </div>
                    <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                      <Icon name="Briefcase" size={16} />
                    </div>
                    <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                      <Icon name="Laptop" size={16} />
                    </div>
                    <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                      <Icon name="Smartphone" size={16} />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
