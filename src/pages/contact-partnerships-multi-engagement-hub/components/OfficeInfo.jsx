import React from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

import { motion } from "framer-motion";
import { fadeUp } from "../../../lib/animations";

const OfficeInfo = () => {
  const officeDetails = {
    address: "Plot 123, Admiralty Way\nLekki Phase 1, Lagos\nNigeria",
    phone: "+234 901 234 5678",
    email: "develix.inc@gmail.com",
    businessHours: [
      { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM WAT" },
      { day: "Saturday", hours: "10:00 AM - 2:00 PM WAT" },
      { day: "Sunday", hours: "Closed" },
    ],
    coordinates: "6.4474,3.4106", // Lagos coordinates
  };

  const contactMethods = [
    {
      icon: "Phone",
      title: "Phone",
      value: officeDetails?.phone,
      description: "Call us during business hours",
      action: "Call Now",
      href: `tel:${officeDetails?.phone}`,
      color: "text-primary",
    },
    {
      icon: "Mail",
      title: "Email",
      value: officeDetails?.email,
      description: "Send us an email anytime",
      action: "Send Email",
      href: `mailto:${officeDetails?.email}`,
      color: "text-secondary",
    },
    {
      icon: "MessageSquare",
      title: "WhatsApp",
      value: "+234 901 234 5678",
      description: "Chat with us on WhatsApp",
      action: "Start Chat",
      href: "https://wa.me/2349012345678",
      color: "text-success",
    },
    {
      icon: "MapPin",
      title: "Visit Us",
      value: "Lagos Office",
      description: "Schedule an in-person meeting",
      action: "Get Directions",
      href: `https://www.google.com/maps?q=${officeDetails?.coordinates}`,
      color: "text-accent",
    },
  ];

  const socialLinks = [
    {
      icon: "Twitter",
      href: "https://twitter.com/develixtech",
      label: "Twitter",
    },
    {
      icon: "Linkedin",
      href: "https://linkedin.com/company/develix",
      label: "LinkedIn",
    },
    { icon: "Github", href: "https://github.com/develix", label: "GitHub" },
    {
      icon: "Youtube",
      href: "https://youtube.com/@develixtech",
      label: "YouTube",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Office Information */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // 👈 ensures trigger when 30% visible
          >
            <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold text-foreground mb-6">
              Visit Our Lagos Office
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Located in the heart of Lagos tech ecosystem, our office is open
              for meetings, consultations, and collaborative sessions. We're
              proud to be building the future of African technology from
              Nigeria.
            </p>

            {/* Address */}
            <div className="bg-card rounded-xl p-6 brand-shadow-card mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Office Address
                  </h3>
                  <p className="text-muted-foreground whitespace-pre-line">
                    {officeDetails?.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-card rounded-xl p-6 brand-shadow-card mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={24} className="text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-4">
                    Business Hours
                  </h3>
                  <div className="space-y-2">
                    {officeDetails?.businessHours?.map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center"
                      >
                        <span className="text-muted-foreground">
                          {schedule?.day}
                        </span>
                        <span className="font-medium text-foreground">
                          {schedule?.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Methods Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactMethods?.map((method, index) => (
                <a
                  key={index}
                  href={method?.href}
                  target={
                    method?.href?.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    method?.href?.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="block p-4 bg-card rounded-lg border border-border hover:border-primary/20 brand-transition brand-hover-lift"
                >
                  <div className="flex items-center space-x-3">
                    <Icon
                      name={method?.icon}
                      size={20}
                      className={method?.color}
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground text-sm">
                        {method?.title}
                      </h4>
                      <p className="text-xs text-muted-foreground truncate">
                        {method?.value}
                      </p>
                    </div>
                    <Icon
                      name="ExternalLink"
                      size={16}
                      className="text-muted-foreground"
                    />
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks?.map((social, index) => (
                  <a
                    key={index}
                    href={social?.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-muted hover:bg-primary/10 rounded-lg flex items-center justify-center brand-transition group"
                    aria-label={social?.label}
                  >
                    <Icon
                      name={social?.icon}
                      size={20}
                      className="text-muted-foreground group-hover:text-primary brand-transition"
                    />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }} // stagger effect
          >
            <div className="bg-card rounded-xl overflow-hidden brand-shadow-card">
              <div className="h-96 lg:h-[500px] relative">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="Develix Lagos Office"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${officeDetails?.coordinates}&z=14&output=embed`}
                  className="border-0"
                />

                {/* Map Overlay */}
                <div className="absolute top-4 left-4 right-4">
                  <div className="bg-background/95 backdrop-blur-sm rounded-lg p-4 brand-shadow-card">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <Icon
                          name="MapPin"
                          size={16}
                          className="text-primary-foreground"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm">
                          Develix HQ
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          Lekki, Lagos
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Actions */}
              <div className="p-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="default"
                    size="sm"
                    iconName="Navigation"
                    iconPosition="left"
                    className="flex-1"
                    onClick={() =>
                      window.open(
                        `https://www.google.com/maps?q=${officeDetails?.coordinates}`,
                        "_blank"
                      )
                    }
                  >
                    Get Directions
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Calendar"
                    iconPosition="left"
                    className="flex-1"
                  >
                    Schedule Visit
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OfficeInfo;
