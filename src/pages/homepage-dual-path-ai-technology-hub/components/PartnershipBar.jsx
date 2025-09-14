import React from "react";
import Icon from "../../../components/AppIcon";

const PartnershipBar = () => {
  const partners = [
    {
      name: "Paystack",
      logo: "CreditCard",
      description: "Payment Processing",
      category: "fintech",
    },
    {
      name: "Flutterwave",
      logo: "Banknote",
      description: "Financial Infrastructure",
      category: "fintech",
    },
    {
      name: "Polygon",
      logo: "Hexagon",
      description: "Blockchain Network",
      category: "blockchain",
    },
    {
      name: "AWS",
      logo: "Cloud",
      description: "Cloud Infrastructure",
      category: "cloud",
    },
    {
      name: "Google Cloud",
      logo: "CloudCog",
      description: "AI & ML Services",
      category: "cloud",
    },
    {
      name: "Microsoft Azure",
      logo: "Server",
      description: "Enterprise Solutions",
      category: "cloud",
    },
  ];

  const stats = [
    {
      value: "500+",
      label: "Active Developers",
      icon: "Code",
    },
    {
      value: "2.5K+",
      label: "App Waitlist",
      icon: "Users",
    },
    {
      value: "50+",
      label: "Enterprise Clients",
      icon: "Building2",
    },
    {
      value: "12",
      label: "Countries Served",
      icon: "Globe",
    },
  ];

  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Partnership Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Icon name="Handshake" size={16} className="text-primary mr-2" />
              <span className="text-primary font-inter font-medium text-sm">
                Trusted Partnerships
              </span>
            </div>

            <h2 className="font-space-grotesk font-bold text-2xl md:text-3xl text-foreground mb-4">
              Integrated with Industry Leaders
            </h2>

            <p className="font-inter text-muted-foreground max-w-2xl mx-auto">
              Our solutions seamlessly integrate with the world's most trusted
              platforms and services, ensuring enterprise-grade reliability and
              performance.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners?.map((partner, index) => (
              <div
                key={partner?.name}
                className="group bg-card rounded-xl p-6 border border-border brand-shadow-card brand-transition hover:brand-shadow-modal hover:-translate-y-1 text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-primary group-hover:text-primary-foreground brand-transition">
                  <Icon name={partner?.logo} size={24} />
                </div>

                <h3 className="font-space-grotesk font-semibold text-foreground text-sm mb-1">
                  {partner?.name}
                </h3>

                <p className="font-inter text-xs text-muted-foreground">
                  {partner?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-secondary rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="font-space-grotesk font-bold text-2xl md:text-3xl text-primary mb-4">
              Growing Ecosystem Impact
            </h2>
            <p className="font-inter text-para max-w-2xl mx-auto">
              Real numbers that reflect our commitment to building meaningful
              technology solutions and fostering a thriving developer community.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats?.map((stat, index) => (
              <div
                key={stat?.label}
                className="text-center group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-primary-foreground/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-foreground group-hover:text-primary brand-transition">
                  <Icon
                    name={stat?.icon}
                    size={28}
                    className="text-primary group-hover:text-primary"
                  />
                </div>

                <div className="font-space-grotesk font-bold text-3xl md:text-4xl text-primary mb-2">
                  {stat?.value}
                </div>

                <div className="font-inter text-primary-foreground/80 text-sm">
                  {stat?.label}
                </div>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-8 border-t border-primary">
            <div className="flex items-center text-primary-foreground/80">
              <Icon name="Shield" size={16} className="mr-2" />
              <span className="font-inter text-sm">SOC 2 Compliant</span>
            </div>
            <div className="flex items-center text-primary-foreground/80">
              <Icon name="Lock" size={16} className="mr-2" />
              <span className="font-inter text-sm">ISO 27001 Certified</span>
            </div>
            <div className="flex items-center text-primary-foreground/80">
              <Icon name="Award" size={16} className="mr-2" />
              <span className="font-inter text-sm">GDPR Compliant</span>
            </div>
            <div className="flex items-center text-primary-foreground/80">
              <Icon name="Verified" size={16} className="mr-2" />
              <span className="font-inter text-sm">Enterprise Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipBar;
