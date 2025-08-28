import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TransparencyCommitment = () => {
  const [activeReport, setActiveReport] = useState(0);

  const reports = [
    {
      title: "Q3 2024 Progress Report",
      date: "September 2024",
      type: "Quarterly Update",
      highlights: [
        "Launched Elixa Coin beta with 1,200+ early adopters",
        "Secured Series A funding of $2.3M from African VCs",
        "Expanded team to 18 members across Lagos and Abuja",
        "Achieved 99.9% uptime across all platform services"
      ],
      challenges: [
        "Regulatory compliance delays in 3 African markets",
        "Scaling infrastructure to meet growing demand",
        "Talent acquisition in competitive Nigerian tech market"
      ],
      metrics: {
        revenue: "+145%",
        users: "12,500+",
        partnerships: "8 new"
      }
    },
    {
      title: "Funding Transparency Report",
      date: "August 2024",
      type: "Financial Update",
      highlights: [
        "Total funding raised: $2.3M Series A",
        "Lead investor: Ventures Platform (Lagos)",
        "60% allocated to product development",
        "25% for team expansion and talent acquisition"
      ],
      challenges: [
        "Extended due diligence process (6 months)",
        "Valuation negotiations in emerging market context",
        "Balancing growth with sustainable burn rate"
      ],
      metrics: {
        runway: "24 months",
        utilization: "78%",
        reserves: "$1.8M"
      }
    },
    {
      title: "Community Impact Report",
      date: "July 2024",
      type: "Social Impact",
      highlights: [
        "Trained 500+ developers through free workshops",
        "Partnered with 12 Nigerian universities",
        "Open-sourced 3 key development tools",
        "Created 45 direct jobs in Nigerian tech sector"
      ],
      challenges: [
        "Limited internet access in rural training locations",
        "Language barriers in technical education",
        "Sustainable funding for community programs"
      ],
      metrics: {
        beneficiaries: "2,800+",
        workshops: "24 held",
        graduates: "89%"
      }
    }
  ];

  const commitments = [
    {
      icon: "FileText",
      title: "Regular Reporting",
      description: "Quarterly progress reports covering product development, financial health, and community impact.",
      frequency: "Every 3 months"
    },
    {
      icon: "DollarSign",
      title: "Financial Transparency",
      description: "Open sharing of funding rounds, revenue metrics, and how we allocate resources.",
      frequency: "Bi-annually"
    },
    {
      icon: "AlertTriangle",
      title: "Challenge Disclosure",
      description: "Honest discussions about obstacles we face and how we\'re addressing them.",
      frequency: "As needed"
    },
    {
      icon: "Users",
      title: "Community Updates",
      description: "Regular communication with our user base about product changes and company direction.",
      frequency: "Monthly"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl lg:text-4xl font-space-grotesk font-bold text-foreground mb-4">
          Transparency Commitment
        </h2>
        <p className="text-lg text-muted-foreground font-inter max-w-3xl mx-auto leading-relaxed">
          We believe in radical transparency as a growing Nigerian tech company. Here's how we keep our community, partners, and stakeholders informed about our journey.
        </p>
      </div>
      {/* Commitment Principles */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {commitments?.map((commitment, index) => (
          <div key={index} className="bg-card rounded-xl p-6 brand-shadow-card brand-transition brand-hover-lift">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Icon name={commitment?.icon} size={24} className="text-primary" />
            </div>
            <h3 className="text-lg font-space-grotesk font-bold text-foreground mb-2">
              {commitment?.title}
            </h3>
            <p className="text-sm text-muted-foreground font-inter leading-relaxed mb-3">
              {commitment?.description}
            </p>
            <div className="inline-flex items-center gap-1 px-2 py-1 bg-accent/10 rounded-full">
              <Icon name="Clock" size={12} className="text-accent" />
              <span className="text-xs text-accent font-inter font-medium">
                {commitment?.frequency}
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* Recent Reports */}
      <div className="bg-card rounded-2xl p-8 brand-shadow-card">
        <h3 className="text-2xl font-space-grotesk font-bold text-foreground mb-8 text-center">
          Recent Transparency Reports
        </h3>

        {/* Report Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {reports?.map((report, index) => (
            <button
              key={index}
              onClick={() => setActiveReport(index)}
              className={`px-4 py-2 rounded-lg font-inter font-medium text-sm brand-transition ${
                activeReport === index
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {report?.type}
            </button>
          ))}
        </div>

        {/* Active Report */}
        <div className="space-y-6">
          <div className="text-center">
            <h4 className="text-xl font-space-grotesk font-bold text-foreground mb-2">
              {reports?.[activeReport]?.title}
            </h4>
            <p className="text-muted-foreground font-inter">
              Published {reports?.[activeReport]?.date}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Highlights */}
            <div className="space-y-4">
              <h5 className="text-lg font-space-grotesk font-bold text-foreground flex items-center gap-2">
                <Icon name="TrendingUp" size={20} className="text-success" />
                Key Highlights
              </h5>
              <div className="space-y-3">
                {reports?.[activeReport]?.highlights?.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-success/5 rounded-lg">
                    <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground font-inter">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges */}
            <div className="space-y-4">
              <h5 className="text-lg font-space-grotesk font-bold text-foreground flex items-center gap-2">
                <Icon name="AlertTriangle" size={20} className="text-warning" />
                Challenges & Learnings
              </h5>
              <div className="space-y-3">
                {reports?.[activeReport]?.challenges?.map((challenge, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-warning/5 rounded-lg">
                    <Icon name="AlertCircle" size={16} className="text-warning mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground font-inter">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="bg-muted/30 rounded-xl p-6">
            <h5 className="text-lg font-space-grotesk font-bold text-foreground mb-4 text-center">
              Key Metrics
            </h5>
            <div className="grid grid-cols-3 gap-6 text-center">
              {Object.entries(reports?.[activeReport]?.metrics)?.map(([key, value], index) => (
                <div key={index} className="space-y-1">
                  <div className="text-2xl font-space-grotesk font-bold text-primary">
                    {value}
                  </div>
                  <div className="text-sm text-muted-foreground font-inter capitalize">
                    {key?.replace(/([A-Z])/g, ' $1')?.trim()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Contact for More Info */}
      <div className="text-center bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8">
        <h3 className="text-xl font-space-grotesk font-bold text-foreground mb-2">
          Questions About Our Transparency?
        </h3>
        <p className="text-muted-foreground font-inter mb-4">
          We're always happy to provide more details about our operations, challenges, and progress.
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-inter font-medium brand-transition hover:bg-primary/90">
          <Icon name="Mail" size={16} />
          transparency@develix.com
        </div>
      </div>
    </div>
  );
};

export default TransparencyCommitment;