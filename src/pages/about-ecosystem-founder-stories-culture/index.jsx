import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/ui/Header";
import Icon from "../../components/AppIcon";
import FounderProfile from "./components/FounderProfile";
import JourneyTimeline from "./components/JourneyTimeline";
import CultureCard from "./components/CultureCard";
import TeamSpotlight from "./components/TeamSpotlight";
import MissionStatement from "./components/MissionStatement";
import PartnershipPhilosophy from "./components/PartnershipPhilosophy";
import TransparencyCommitment from "./components/TransparencyCommitment";
import Footer from "components/ui/Footer";

const AboutEcosystemPage = () => {
  const [activeSection, setActiveSection] = useState("founders");
  const [currentLanguage, setCurrentLanguage] = useState("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
    setCurrentLanguage(savedLanguage);
  }, []);

  // Mock data for founders
  const founders = [
    {
      name: "Alexius Chukwuemeka",
      role: "Chief Executive Officer & Co-Founder",
      tagline:
        "Visionary leader bridging African innovation with global markets",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      icon: "Crown",
      bio: `Born in Lagos and raised in Abuja, Alexius discovered his passion for technology while helping his grandmother's small business go digital in 2018. After studying Computer Science at the University of Lagos and working with fintech startups across West Africa, he realized that most advanced technologies weren't reaching the people who needed them most. This insight led to the founding of Develix with a mission to make AI and blockchain accessible to everyone, from Lagos street vendors to London enterprises.`,
      stats: [
        { value: "6+", label: "Years Experience" },
        { value: "12", label: "Products Launched" },
        { value: "50K+", label: "Lives Impacted" },
      ],
      social: [
        { platform: "LinkedIn", icon: "Linkedin", url: "#" },
        { platform: "Twitter", icon: "Twitter", url: "#" },
        { platform: "GitHub", icon: "Github", url: "#" },
      ],
    },
    {
      name: "Jerome Adebayo",
      role: "Chief Technology Officer & Co-Founder",
      tagline: "Technical architect building scalable solutions for Africa",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      icon: "Code",
      bio: `Jerome's journey began in Ibadan, where he taught himself programming at age 14 using a shared computer at a local cyber café. After earning a scholarship to study Software Engineering at Obafemi Awolowo University, he worked with international tech companies remotely while staying rooted in Nigeria. His experience building systems that work reliably despite infrastructure challenges makes him uniquely qualified to lead Develix's technical vision of creating robust, accessible technology for emerging markets.`,
      stats: [
        { value: "8+", label: "Years Coding" },
        { value: "25+", label: "Systems Built" },
        { value: "99.9%", label: "Uptime Record" },
      ],
      social: [
        { platform: "LinkedIn", icon: "Linkedin", url: "#" },
        { platform: "GitHub", icon: "Github", url: "#" },
        { platform: "Stack Overflow", icon: "Code", url: "#" },
      ],
    },
  ];

  // Mock data for company journey
  const journeyMilestones = [
    {
      year: "2019",
      title: "The Spark",
      icon: "Lightbulb",
      description:
        "Alexius and Jerome meet at a Lagos tech meetup, bonding over shared frustration with technology that doesn't serve African communities effectively.",
      achievements: [
        "First collaborative project: mobile payment solution for local markets",
        "Validated concept with 200+ small business owners",
        "Won University of Lagos Innovation Challenge",
      ],
      impact:
        "Realized that accessible technology could transform entire communities",
      isHighlight: true,
    },
    {
      year: "2020",
      title: "Foundation & Focus",
      icon: "Building",
      description:
        "Officially founded Develix during the pandemic, focusing on digital solutions that work even with limited infrastructure.",
      achievements: [
        "Registered company in Lagos, Nigeria",
        "Built first MVP for offline-capable business management",
        "Secured initial funding from family and friends",
      ],
      impact: "Helped 50+ businesses stay operational during lockdowns",
    },
    {
      year: "2021",
      title: "First Major Success",
      icon: "Trophy",
      description:
        "Launched our first commercial product, gaining traction across West Africa and attracting international attention.",
      achievements: [
        "Reached 1,000+ active users across 5 countries",
        "Featured in TechCrunch Africa",
        "Established partnerships with Paystack and Flutterwave",
      ],
      impact: "Proved that African-built solutions could compete globally",
      isHighlight: true,
    },
    {
      year: "2022",
      title: "Team Expansion",
      icon: "Users",
      description:
        "Grew from 2 founders to a team of 12, bringing together diverse talents from across Nigeria and beyond.",
      achievements: [
        "Hired senior developers from Google and Microsoft",
        "Established remote-first culture",
        "Opened physical office in Victoria Island, Lagos",
      ],
      impact: "Created high-quality tech jobs in the Nigerian market",
    },
    {
      year: "2023",
      title: "AI & Blockchain Focus",
      icon: "Zap",
      description:
        "Pivoted to focus on AI and blockchain solutions, beginning development of Elixa Coin and advanced AI tools.",
      achievements: [
        "Launched AI research division",
        "Started Elixa Coin development",
        "Secured Series A funding of $2.3M",
      ],
      impact: "Positioned Develix as a leader in next-generation African tech",
      isHighlight: true,
    },
    {
      year: "2024",
      title: "Global Recognition",
      icon: "Globe",
      description:
        "Achieved international recognition while staying true to our African roots and community-first approach.",
      achievements: [
        "Elixa Coin beta launch with 1,200+ users",
        "Vendra marketplace platform development",
        "Expanded to serve clients in 12 countries",
      ],
      impact:
        "Demonstrated that African innovation can lead global conversations",
    },
  ];

  // Mock data for company culture
  const cultureValues = [
    {
      title: "Practical Innovation",
      icon: "Lightbulb",
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      description:
        "We don't build technology for the sake of technology. Every solution we create must solve real problems and improve real lives.",
      examples: [
        "Offline-first design for areas with unreliable internet",
        "Multi-language support for diverse African markets",
        "Simple interfaces that work for all education levels",
      ],
      quote: "Innovation without impact is just expensive experimentation.",
      quoteAuthor: "Alexius Chukwuemeka, CEO",
    },
    {
      title: "Community First",
      icon: "Heart",
      iconBg: "bg-secondary/10",
      iconColor: "text-secondary",
      description:
        "Our success is measured by the positive impact we have on the communities we serve, not just our revenue numbers.",
      examples: [
        "Free coding workshops in underserved communities",
        "Open-source contributions to benefit all developers",
        "Mentorship programs for young African technologists",
      ],
      quote: "Technology should lift communities, not leave them behind.",
      quoteAuthor: "Jerome Adebayo, CTO",
    },
    {
      title: "Radical Transparency",
      icon: "Eye",
      iconBg: "bg-accent/10",
      iconColor: "text-accent",
      description:
        "We believe in open communication about our successes, failures, and everything in between.",
      examples: [
        "Quarterly public reports on company progress",
        "Open discussion of challenges and setbacks",
        "Transparent pricing and business practices",
      ],
      quote:
        "Trust is built through consistent transparency, not perfect performance.",
      quoteAuthor: "Company Values",
    },
    {
      title: "Excellence & Humility",
      icon: "Award",
      iconBg: "bg-success/10",
      iconColor: "text-success",
      description:
        "We strive for world-class quality while remaining humble and always ready to learn from others.",
      examples: [
        "Rigorous code review and testing processes",
        "Continuous learning and skill development",
        "Respectful collaboration with all stakeholders",
      ],
      quote: "Great work speaks for itself, but great character speaks louder.",
      quoteAuthor: "Team Philosophy",
    },
  ];

  // Mock data for team members
  const teamMembers = [
    {
      name: "Adaora Okafor",
      role: "Lead Product Designer",
      location: "Lagos, Nigeria",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      background:
        "Former design lead at Andela, passionate about creating intuitive interfaces that work across diverse user contexts and technical constraints.",
      skills: [
        "UI/UX Design",
        "User Research",
        "Accessibility",
        "Design Systems",
      ],
      contribution:
        "Led the design of Elixa Coin's user interface, achieving 94% user satisfaction in beta testing.",
      funFact:
        "Speaks 4 Nigerian languages and uses this linguistic diversity to inform inclusive design decisions.",
    },
    {
      name: "Kemi Adeleke",
      role: "Senior Backend Engineer",
      location: "Abuja, Nigeria",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      background:
        "Previously at Microsoft Azure, specializing in distributed systems and blockchain infrastructure. Returned to Nigeria to contribute to local tech ecosystem.",
      skills: ["Node.js", "Blockchain", "Cloud Architecture", "API Design"],
      contribution:
        "Architected the scalable backend infrastructure that powers all Develix platforms with 99.9% uptime.",
      funFact:
        "Maintains a popular tech blog in Yoruba, making complex programming concepts accessible to local developers.",
    },
    {
      name: "David Okonkwo",
      role: "AI Research Engineer",
      location: "Port Harcourt, Nigeria",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      background:
        "PhD in Machine Learning from University of Nigeria, Nsukka. Focused on developing AI models that work effectively with limited computational resources.",
      skills: ["Machine Learning", "NLP", "Computer Vision", "Edge Computing"],
      contribution:
        "Developed lightweight AI models that run efficiently on mobile devices, enabling AI access in low-resource environments.",
      funFact:
        "Grew up in a rural village without electricity and now builds AI systems - living proof of technology's transformative power.",
    },
    {
      name: "Fatima Hassan",
      role: "Community Manager",
      location: "Kano, Nigeria",
      avatar:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
      background:
        "Former journalist and community organizer, passionate about bridging the gap between technology and everyday users across Northern Nigeria.",
      skills: [
        "Community Building",
        "Content Strategy",
        "Public Speaking",
        "Cultural Translation",
      ],
      contribution:
        "Built and manages our 5,000+ member developer community, with 85% active monthly participation.",
      funFact:
        "Organizes monthly 'Tech in Hausa' workshops, making programming concepts accessible in local languages.",
    },
  ];

  const sections = [
    { id: "founders", label: "Founders", icon: "Users" },
    { id: "journey", label: "Our Journey", icon: "Map" },
    { id: "culture", label: "Culture", icon: "Heart" },
    { id: "team", label: "Team", icon: "Star" },
    { id: "mission", label: "Mission", icon: "Compass" },
    { id: "partnerships", label: "Partnerships", icon: "Handshake" },
    { id: "transparency", label: "Transparency", icon: "Eye" },
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About Ecosystem - Founder Stories & Culture | Develix</title>
        <meta
          name="description"
          content="Meet the founders and team behind Develix. Learn about our culture, mission, and commitment to making advanced technology accessible across Africa."
        />
        <meta
          name="keywords"
          content="Develix founders, company culture, African tech, startup story, transparency, mission"
        />
      </Helmet>
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex text-center items-center justify-center flex-col mb-4">
              <div className="inline-flex items-center px-4 pb-4 pt-10 bg-secondary/20 rounded-full text-sm font-medium">
                <Icon name="Users" size={16} className="mr-2" />
                About us
              </div>
              <h1 className="text-4xl lg:text-6xl font-space-grotesk font-bold text-foreground mb-2">
                Our Story
              </h1>
              <p className="text-lg text-para font-inter font-semibold">
                From Adazi to the World
              </p>
            </div>

            <p className="text-xl text-para font-inter max-w-4xl mx-auto leading-relaxed">
              Founded in 2025 by 17-year-old Alexius Dubem and 16-year-old
              Jerome Ebube in Anambra State — a journey from a spark of dreams
              to trials, reality, and a passion for technology.
            </p>
          </div>

          {/* Navigation Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {sections?.map((section) => (
              <button
                key={section?.id}
                onClick={() => scrollToSection(section?.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-inter font-medium text-sm brand-transition ${
                  activeSection === section?.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary brand-shadow-card"
                }`}
              >
                <Icon name={section?.icon} size={16} />
                {section?.label}
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Founders Section */}
      <section id="founders" className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-space-grotesk font-bold text-foreground mb-4">
              Meet Our Founders
            </h2>
            <p className="text-lg text-muted-foreground font-inter max-w-3xl mx-auto">
              Two passionate technologists united by a shared vision of making
              advanced technology accessible across Africa and beyond.
            </p>
          </div>

          <div className="space-y-12">
            {founders?.map((founder, index) => (
              <FounderProfile key={index} founder={founder} />
            ))}
          </div>
        </div>
      </section>
      {/* Journey Section */}
      <section id="journey" className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-space-grotesk font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground font-inter max-w-3xl mx-auto">
              From a chance meeting at a Lagos tech meetup to building one of
              Africa's most promising technology companies.
            </p>
          </div>

          <JourneyTimeline milestones={journeyMilestones} />
        </div>
      </section>
      {/* Culture Section */}
      <section id="culture" className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-space-grotesk font-bold text-foreground mb-4">
              Our Culture
            </h2>
            <p className="text-lg text-muted-foreground font-inter max-w-3xl mx-auto">
              The values and principles that guide everything we do, from
              product decisions to community relationships.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {cultureValues?.map((culture, index) => (
              <CultureCard key={index} culture={culture} />
            ))}
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section id="team" className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-space-grotesk font-bold text-foreground mb-4">
              Team Spotlight
            </h2>
            <p className="text-lg text-muted-foreground font-inter max-w-3xl mx-auto">
              Meet some of the talented individuals who bring diverse
              backgrounds and shared commitment to African tech advancement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers?.map((member, index) => (
              <TeamSpotlight key={index} member={member} />
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
              <Icon name="Users" size={20} className="text-primary" />
              <span className="text-primary font-inter font-semibold">
                18 team members across Nigeria and growing
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* Mission Section */}
      <section id="mission" className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <MissionStatement />
        </div>
      </section>
      {/* Partnerships Section */}
      <section id="partnerships" className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <PartnershipPhilosophy />
        </div>
      </section>
      {/* Transparency Section */}
      <section id="transparency" className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <TransparencyCommitment />
        </div>
      </section>
      {/* Footer CTA */}
      <Footer />
    </div>
  );
};

export default AboutEcosystemPage;
