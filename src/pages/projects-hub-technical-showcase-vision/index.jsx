import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/ui/Header";
import ProjectHero from "./components/ProjectHero";
import ProjectCard from "./components/ProjectCard";
import TechnicalSpecs from "./components/TechnicalSpecs";
import LiveDemo from "./components/LiveDemo";
import DevelopmentTimeline from "./components/DevelopmentTimeline";
import UserTestimonials from "./components/UserTestimonials";
import FutureRoadmap from "./components/FutureRoadmap";
import Icon from "../../components/AppIcon";
import Button from "../../components/ui/Button";
import Footer from "components/ui/Footer";

import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../../lib/animations"; // update path

const ProjectsHub = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  // Mock project data
  const projects = [
    {
      id: "elixa-coin",
      name: "Elixa Coin",
      type: "Blockchain",
      status: "Live",
      description:
        "Revolutionary blockchain platform enabling seamless cryptocurrency transactions with advanced smart contract capabilities and DeFi integration.",
      fullDescription: `Elixa Coin represents our flagship blockchain innovation, built on cutting-edge technology to provide users with fast, secure, and cost-effective cryptocurrency transactions. The platform features advanced smart contract capabilities, comprehensive DeFi integration, and a user-friendly interface that makes blockchain technology accessible to everyone.\n\nOur blockchain infrastructure supports high-throughput transactions while maintaining decentralization and security. With built-in governance mechanisms, users can participate in platform decisions and shape the future of the ecosystem.`,
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
      techStack: [
        "Solidity",
        "React",
        "Node.js",
        "Web3.js",
        "IPFS",
        "PostgreSQL",
      ],
      users: "25,000+",
      uptime: "99.9%",
      launchDate: "Jan 2024",
      demoUrl: "https://demo.elixacoin.com",
      keyFeatures: [
        "Lightning-fast transactions (< 3 seconds)",
        "Low transaction fees (< $0.01)",
        "Smart contract automation",
        "DeFi yield farming",
        "Cross-chain compatibility",
        "Mobile wallet integration",
      ],
      recentUpdates: [
        {
          title: "Smart Contract Upgrade v2.1",
          date: "2 days ago",
        },
        {
          title: "Mobile App Beta Release",
          date: "1 week ago",
        },
        {
          title: "Partnership with Paystack",
          date: "2 weeks ago",
        },
      ],
      architecture: {
        overview: [
          {
            component: "Blockchain Layer",
            description: "Custom proof-of-stake consensus mechanism",
          },
          {
            component: "Smart Contracts",
            description: "Solidity-based automated execution layer",
          },
          {
            component: "API Gateway",
            description: "RESTful and GraphQL endpoints",
          },
          {
            component: "Frontend Interface",
            description: "React-based user dashboard",
          },
        ],
        dataFlow: [
          {
            step: "Transaction Initiation",
            description: "User initiates transaction through wallet",
          },
          {
            step: "Validation",
            description: "Network validators verify transaction",
          },
          {
            step: "Block Creation",
            description: "Validated transactions added to block",
          },
          {
            step: "Consensus",
            description: "Network reaches consensus on new block",
          },
        ],
        techLayers: [
          {
            name: "Frontend",
            icon: "Monitor",
            technologies: [
              { name: "React", version: "18.2.0" },
              { name: "TypeScript", version: "4.9.0" },
              { name: "Tailwind CSS", version: "3.2.0" },
            ],
          },
          {
            name: "Backend",
            icon: "Server",
            technologies: [
              { name: "Node.js", version: "18.0.0" },
              { name: "Express", version: "4.18.0" },
              { name: "PostgreSQL", version: "14.0" },
            ],
          },
          {
            name: "Blockchain",
            icon: "Link",
            technologies: [
              { name: "Solidity", version: "0.8.17" },
              { name: "Web3.js", version: "1.8.0" },
              { name: "IPFS", version: "0.62.0" },
            ],
          },
        ],
      },
      performance: {
        metrics: [
          {
            value: "3,000",
            label: "TPS",
            description: "Transactions per second",
          },
          {
            value: "< 3s",
            label: "Finality",
            description: "Transaction confirmation",
          },
          {
            value: "99.9%",
            label: "Uptime",
            description: "Network availability",
          },
          {
            value: "$0.001",
            label: "Gas Fee",
            description: "Average transaction cost",
          },
        ],
        loadTesting: [
          {
            scenario: "Peak Load",
            result: "2,850 TPS",
            metric: "Sustained throughput",
          },
          {
            scenario: "Stress Test",
            result: "4,200 TPS",
            metric: "Maximum capacity",
          },
          {
            scenario: "Endurance",
            result: "24 hours",
            metric: "Continuous operation",
          },
        ],
        optimizations: [
          {
            title: "Database Indexing",
            description: "Optimized query performance for transaction history",
            improvement: "40% faster queries",
          },
          {
            title: "Caching Layer",
            description: "Redis implementation for frequently accessed data",
            improvement: "60% reduced latency",
          },
        ],
      },
      security: {
        measures: [
          {
            title: "Multi-Signature Wallets",
            description: "Enhanced security for high-value transactions",
            status: "Active",
          },
          {
            title: "Smart Contract Audits",
            description: "Regular third-party security assessments",
            status: "Quarterly",
          },
          {
            title: "Penetration Testing",
            description: "Comprehensive security vulnerability testing",
            status: "Monthly",
          },
        ],
        audits: [
          {
            auditor: "CertiK",
            date: "Dec 2024",
            scope: "Smart Contracts & Infrastructure",
            result: "Passed",
            score: 95,
          },
          {
            auditor: "Quantstamp",
            date: "Nov 2024",
            scope: "Blockchain Security",
            result: "Passed",
            score: 92,
          },
        ],
        compliance: [
          { name: "ISO 27001", level: "Certified" },
          { name: "SOC 2", level: "Type II" },
          { name: "GDPR", level: "Compliant" },
          { name: "AML/KYC", level: "Compliant" },
        ],
      },
      api: {
        endpoints: [
          {
            method: "GET",
            path: "/api/v1/transactions",
            description: "Retrieve transaction history",
            rateLimit: "1000/hour",
          },
          {
            method: "POST",
            path: "/api/v1/transfer",
            description: "Initiate token transfer",
            rateLimit: "100/hour",
          },
          {
            method: "GET",
            path: "/api/v1/balance",
            description: "Check wallet balance",
            rateLimit: "500/hour",
          },
        ],
        sdks: [
          {
            language: "JavaScript",
            version: "1.2.0",
            description: "Full-featured SDK for web applications",
            downloads: "15,000+",
          },
          {
            language: "Python",
            version: "1.1.0",
            description: "Backend integration library",
            downloads: "8,500+",
          },
          {
            language: "React Native",
            version: "1.0.0",
            description: "Mobile app development kit",
            downloads: "3,200+",
          },
        ],
      },
      demos: [
        {
          title: "Wallet Interface",
          description:
            "Experience the user-friendly wallet interface with real-time balance updates",
          icon: "Wallet",
          type: "interactive",
          url: "https://demo.elixacoin.com/wallet",
          features: [
            {
              name: "Send Transaction",
              description: "Send tokens to any wallet address",
              icon: "Send",
              example: 'elixacoin.send("0x123...", 100)',
            },
            {
              name: "Transaction History",
              description: "View complete transaction history",
              icon: "History",
              example: "elixacoin.getHistory()",
            },
          ],
          stats: [
            { value: "2.5s", label: "Avg Response" },
            { value: "99.9%", label: "Success Rate" },
            { value: "$0.001", label: "Avg Fee" },
            { value: "24/7", label: "Availability" },
          ],
        },
        {
          title: "Smart Contracts",
          description:
            "Explore automated smart contract execution and DeFi features",
          icon: "Code",
          type: "video",
          url: "https://demo.elixacoin.com/contracts",
          stats: [
            { value: "500+", label: "Active Contracts" },
            { value: "₦2.5M", label: "Total Locked" },
            { value: "15%", label: "Avg APY" },
            { value: "1,200", label: "Users" },
          ],
        },
      ],
      timeline: [
        {
          phase: "Planning",
          startDate: "Jan 2023",
          endDate: "Mar 2023",
          status: "Completed",
          progress: 100,
          description:
            "Initial concept development, market research, and technical architecture planning.",
          achievements: [
            "Completed market analysis and competitor research",
            "Defined technical architecture and blockchain specifications",
            "Assembled core development team",
            "Secured initial funding round",
          ],
          challenges: [
            {
              issue: "Consensus mechanism selection",
              solution:
                "Chose Proof-of-Stake after extensive research and testing",
            },
          ],
          insights: [
            {
              author: "Alexius",
              role: "CEO",
              quote:
                "The planning phase taught us the importance of thorough market research before diving into development.",
            },
          ],
          metrics: [
            { value: "50+", label: "Research Hours" },
            { value: "15", label: "Interviews" },
            { value: "3", label: "Prototypes" },
            { value: "₦5M", label: "Funding" },
          ],
        },
        {
          phase: "Development",
          startDate: "Apr 2023",
          endDate: "Nov 2023",
          status: "Completed",
          progress: 100,
          description:
            "Core blockchain development, smart contract creation, and frontend interface building.",
          achievements: [
            "Developed custom blockchain infrastructure",
            "Created comprehensive smart contract library",
            "Built user-friendly web interface",
            "Implemented security measures and testing",
          ],
          challenges: [
            {
              issue: "Scalability bottlenecks",
              solution:
                "Implemented sharding and optimized consensus algorithm",
            },
            {
              issue: "Smart contract gas optimization",
              solution: "Refactored contracts to reduce gas consumption by 40%",
            },
          ],
          insights: [
            {
              author: "Jerome",
              role: "CTO",
              quote:
                "Building a blockchain from scratch taught us invaluable lessons about distributed systems and consensus mechanisms.",
            },
          ],
          metrics: [
            { value: "50,000+", label: "Lines of Code" },
            { value: "200+", label: "Tests Written" },
            { value: "15", label: "Sprints" },
            { value: "8", label: "Team Members" },
          ],
        },
        {
          phase: "Testing",
          startDate: "Dec 2023",
          endDate: "Jan 2024",
          status: "Completed",
          progress: 100,
          description:
            "Comprehensive testing including security audits, performance testing, and user acceptance testing.",
          achievements: [
            "Passed comprehensive security audits",
            "Achieved target performance metrics",
            "Completed beta testing with 500+ users",
            "Fixed all critical and high-priority issues",
          ],
          challenges: [
            {
              issue: "Load testing revealed performance issues",
              solution: "Optimized database queries and implemented caching",
            },
          ],
          insights: [
            {
              author: "Sarah",
              role: "QA Lead",
              quote:
                "Thorough testing revealed edge cases we never considered, making the platform much more robust.",
            },
          ],
          metrics: [
            { value: "500+", label: "Beta Users" },
            { value: "1,000+", label: "Test Cases" },
            { value: "99.9%", label: "Test Coverage" },
            { value: "0", label: "Critical Bugs" },
          ],
        },
        {
          phase: "Deployment",
          startDate: "Jan 2024",
          endDate: "Feb 2024",
          status: "Completed",
          progress: 100,
          description:
            "Production deployment, monitoring setup, and initial user onboarding.",
          achievements: [
            "Successfully deployed to production",
            "Onboarded first 1,000 users",
            "Achieved 99.9% uptime in first month",
            "Processed over 100,000 transactions",
          ],
          metrics: [
            { value: "1,000+", label: "Initial Users" },
            { value: "100K+", label: "Transactions" },
            { value: "99.9%", label: "Uptime" },
            { value: "24/7", label: "Monitoring" },
          ],
        },
        {
          phase: "Maintenance",
          startDate: "Feb 2024",
          endDate: "Ongoing",
          status: "In-Progress",
          progress: 85,
          description:
            "Ongoing maintenance, feature updates, and community support.",
          achievements: [
            "Released 5 major updates",
            "Grew user base to 25,000+",
            "Maintained 99.9% uptime",
            "Added mobile wallet support",
          ],
          metrics: [
            { value: "25K+", label: "Active Users" },
            { value: "5", label: "Major Updates" },
            { value: "99.9%", label: "Uptime" },
            { value: "24/7", label: "Support" },
          ],
        },
      ],
      totalDuration: "14 months",
      teamSize: "12 members",
      milestonesCompleted: "25",
      overallProgress: 95,
      testimonials: [
        {
          name: "Adebayo Ogundimu",
          role: "Fintech Entrepreneur",
          company: "PayTech Solutions",
          userType: "Enterprise",
          avatar: "https://randomuser.me/api/portraits/men/32.jpg",
          content: `Elixa Coin has revolutionized how we handle cryptocurrency transactions in our fintech platform. The integration was seamless, and the transaction speeds are incredible. Our customers love the low fees and the reliability of the network.`,
          rating: 5,
          impact: [
            { value: "40%", label: "Cost Reduction" },
            { value: "3x", label: "Faster Transactions" },
            { value: "99.9%", label: "Uptime Achieved" },
          ],
        },
        {
          name: "Fatima Al-Hassan",
          role: "Crypto Trader",
          company: "Independent",
          userType: "Individual",
          avatar: "https://randomuser.me/api/portraits/women/44.jpg",
          content: `As someone who trades cryptocurrencies daily, I need a platform that's fast, reliable, and cost-effective. Elixa Coin delivers on all fronts. The mobile wallet is intuitive, and I've never experienced any downtime.`,
          rating: 5,
          impact: [
            { value: "60%", label: "Trading Efficiency" },
            { value: "90%", label: "Fee Savings" },
            { value: "100%", label: "Satisfaction" },
          ],
        },
        {
          name: "Michael Chen",
          role: "Blockchain Developer",
          company: "TechCorp",
          userType: "Developer",
          avatar: "https://randomuser.me/api/portraits/men/28.jpg",
          content: `The developer experience with Elixa Coin is outstanding. The API documentation is comprehensive, the SDKs are well-maintained, and the smart contract capabilities are powerful yet easy to use.`,
          rating: 5,
        },
        {
          name: "Amina Kone",
          role: "Startup Founder",
          company: "AfriPay",
          userType: "Startup",
          avatar: "https://randomuser.me/api/portraits/women/36.jpg",
          content: `Elixa Coin enabled us to launch our payment platform in record time. The blockchain infrastructure is solid, and the support team is incredibly responsive.`,
          rating: 4,
        },
        {
          name: "David Okafor",
          role: "Investment Manager",
          company: "Venture Capital Ltd",
          userType: "Enterprise",
          avatar: "https://randomuser.me/api/portraits/men/41.jpg",
          content: `We've invested in several blockchain projects, but Elixa Coin stands out for its technical excellence and real-world utility. The team's execution has been flawless.`,
          rating: 5,
        },
        {
          name: "Grace Mbeki",
          role: "DeFi Enthusiast",
          company: "Crypto Community",
          userType: "Individual",
          avatar: "https://randomuser.me/api/portraits/women/29.jpg",
          content: `The DeFi features on Elixa Coin are game-changing. I've been earning consistent yields through their staking program, and the smart contracts work flawlessly.`,
          rating: 5,
        },
      ],
      testimonialStats: {
        totalReviews: 247,
        averageRating: 4.8,
        satisfactionRate: 96,
        recommendationRate: 94,
      },
    },
    {
      id: "vendra-ai",
      name: "Vendra AI",
      type: "AI Platform",
      status: "Beta",
      description:
        "Advanced AI-powered automation platform that streamlines business processes with intelligent workflows and machine learning capabilities.",
      fullDescription: `Vendra AI is our cutting-edge artificial intelligence platform designed to revolutionize business automation. Built with state-of-the-art machine learning algorithms, Vendra AI can understand, learn, and adapt to your business processes, providing intelligent automation solutions that grow with your organization.\n\nThe platform features natural language processing, computer vision, predictive analytics, and automated decision-making capabilities. Whether you're looking to automate customer service, optimize supply chains, or enhance data analysis, Vendra AI provides the tools and intelligence you need.`,
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      techStack: [
        "Python",
        "TensorFlow",
        "React",
        "FastAPI",
        "PostgreSQL",
        "Redis",
      ],
      users: "12,500+",
      uptime: "99.8%",
      launchDate: "Jun 2024",
      demoUrl: "https://demo.vendra.ai",
      keyFeatures: [
        "Natural Language Processing",
        "Computer Vision Analytics",
        "Predictive Modeling",
        "Automated Workflows",
        "Real-time Decision Making",
        "Custom AI Model Training",
      ],
      recentUpdates: [
        {
          title: "GPT-4 Integration Complete",
          date: "3 days ago",
        },
        {
          title: "New Computer Vision Models",
          date: "1 week ago",
        },
        {
          title: "API Rate Limits Increased",
          date: "2 weeks ago",
        },
      ],
      architecture: {
        overview: [
          {
            component: "AI Engine",
            description: "Core machine learning and AI processing unit",
          },
          {
            component: "Workflow Manager",
            description: "Automated process orchestration system",
          },
          {
            component: "Data Pipeline",
            description: "Real-time data processing and transformation",
          },
          {
            component: "API Gateway",
            description: "Secure API access and rate limiting",
          },
        ],
        dataFlow: [
          {
            step: "Data Ingestion",
            description: "Raw data collected from various sources",
          },
          {
            step: "Preprocessing",
            description: "Data cleaning and transformation",
          },
          {
            step: "AI Processing",
            description: "Machine learning model inference",
          },
          {
            step: "Action Execution",
            description: "Automated actions based on AI decisions",
          },
        ],
        techLayers: [
          {
            name: "Frontend",
            icon: "Monitor",
            technologies: [
              { name: "React", version: "18.2.0" },
              { name: "TypeScript", version: "4.9.0" },
              { name: "D3.js", version: "7.6.0" },
            ],
          },
          {
            name: "AI/ML",
            icon: "Brain",
            technologies: [
              { name: "Python", version: "3.11.0" },
              { name: "TensorFlow", version: "2.11.0" },
              { name: "PyTorch", version: "1.13.0" },
            ],
          },
          {
            name: "Backend",
            icon: "Server",
            technologies: [
              { name: "FastAPI", version: "0.88.0" },
              { name: "PostgreSQL", version: "14.0" },
              { name: "Redis", version: "7.0.0" },
            ],
          },
        ],
      },
      performance: {
        metrics: [
          {
            value: "250ms",
            label: "Response Time",
            description: "Average API response",
          },
          { value: "95%", label: "Accuracy", description: "AI model accuracy" },
          {
            value: "99.8%",
            label: "Uptime",
            description: "Service availability",
          },
          {
            value: "10K",
            label: "Requests/min",
            description: "Peak throughput",
          },
        ],
        loadTesting: [
          {
            scenario: "AI Inference",
            result: "8,500 req/min",
            metric: "Sustained throughput",
          },
          {
            scenario: "Data Processing",
            result: "1.2M records/hour",
            metric: "Batch processing",
          },
          {
            scenario: "Concurrent Users",
            result: "5,000 users",
            metric: "Simultaneous sessions",
          },
        ],
        optimizations: [
          {
            title: "Model Quantization",
            description: "Reduced model size while maintaining accuracy",
            improvement: "3x faster inference",
          },
          {
            title: "GPU Acceleration",
            description: "Leveraged CUDA for parallel processing",
            improvement: "5x performance boost",
          },
        ],
      },
      security: {
        measures: [
          {
            title: "Data Encryption",
            description: "End-to-end encryption for all data processing",
            status: "Active",
          },
          {
            title: "Model Security",
            description: "Protection against adversarial attacks",
            status: "Active",
          },
          {
            title: "Access Controls",
            description: "Role-based access control system",
            status: "Active",
          },
        ],
        audits: [
          {
            auditor: "AI Security Labs",
            date: "Nov 2024",
            scope: "AI Model Security & Data Privacy",
            result: "Passed",
            score: 88,
          },
        ],
        compliance: [
          { name: "GDPR", level: "Compliant" },
          { name: "SOC 2", level: "Type I" },
          { name: "ISO 27001", level: "In Progress" },
        ],
      },
      api: {
        endpoints: [
          {
            method: "POST",
            path: "/api/v1/predict",
            description: "Make AI predictions",
            rateLimit: "1000/hour",
          },
          {
            method: "POST",
            path: "/api/v1/workflow",
            description: "Create automated workflow",
            rateLimit: "100/hour",
          },
          {
            method: "GET",
            path: "/api/v1/analytics",
            description: "Retrieve analytics data",
            rateLimit: "500/hour",
          },
        ],
        sdks: [
          {
            language: "Python",
            version: "2.1.0",
            description: "Full-featured AI/ML integration library",
            downloads: "22,000+",
          },
          {
            language: "JavaScript",
            version: "1.8.0",
            description: "Frontend AI integration toolkit",
            downloads: "18,500+",
          },
        ],
      },
      demos: [
        {
          title: "AI Assistant",
          description:
            "Experience intelligent conversation and task automation",
          icon: "MessageSquare",
          type: "interactive",
          url: "https://demo.vendra.ai/assistant",
          features: [
            {
              name: "Natural Language Query",
              description: "Ask questions in plain English",
              icon: "MessageCircle",
              example: 'vendra.ask("What are my top performing products?")',
            },
            {
              name: "Automated Reports",
              description: "Generate insights automatically",
              icon: "FileText",
              example: 'vendra.generateReport("sales", "monthly")',
            },
          ],
          stats: [
            { value: "95%", label: "Accuracy" },
            { value: "250ms", label: "Response Time" },
            { value: "50+", label: "Languages" },
            { value: "24/7", label: "Availability" },
          ],
        },
      ],
      timeline: [
        {
          phase: "Planning",
          startDate: "Jan 2024",
          endDate: "Feb 2024",
          status: "Completed",
          progress: 100,
          description:
            "AI strategy development and technical architecture planning.",
          achievements: [
            "Defined AI model requirements",
            "Selected machine learning frameworks",
            "Designed system architecture",
            "Assembled AI development team",
          ],
          metrics: [
            { value: "30+", label: "Research Papers" },
            { value: "10", label: "Model Prototypes" },
            { value: "5", label: "Team Members" },
            { value: "₦8M", label: "Funding" },
          ],
        },
        {
          phase: "Development",
          startDate: "Mar 2024",
          endDate: "May 2024",
          status: "Completed",
          progress: 100,
          description: "Core AI model development and platform building.",
          achievements: [
            "Trained initial AI models",
            "Built data processing pipeline",
            "Created user interface",
            "Implemented API endpoints",
          ],
          metrics: [
            { value: "1M+", label: "Training Samples" },
            { value: "15", label: "AI Models" },
            { value: "95%", label: "Model Accuracy" },
            { value: "100+", label: "API Endpoints" },
          ],
        },
        {
          phase: "Testing",
          startDate: "May 2024",
          endDate: "Jun 2024",
          status: "Completed",
          progress: 100,
          description: "AI model validation and platform testing.",
          achievements: [
            "Validated AI model performance",
            "Conducted user acceptance testing",
            "Optimized system performance",
            "Fixed identified issues",
          ],
          metrics: [
            { value: "300+", label: "Beta Users" },
            { value: "95%", label: "Accuracy Rate" },
            { value: "250ms", label: "Response Time" },
            { value: "99.8%", label: "Uptime" },
          ],
        },
        {
          phase: "Deployment",
          startDate: "Jun 2024",
          endDate: "Jul 2024",
          status: "Completed",
          progress: 100,
          description: "Beta launch and initial user onboarding.",
          achievements: [
            "Launched beta version",
            "Onboarded first 1,000 users",
            "Processed 100K+ AI requests",
            "Achieved target performance metrics",
          ],
          metrics: [
            { value: "1,000+", label: "Beta Users" },
            { value: "100K+", label: "AI Requests" },
            { value: "99.8%", label: "Uptime" },
            { value: "4.7/5", label: "User Rating" },
          ],
        },
        {
          phase: "Enhancement",
          startDate: "Jul 2024",
          endDate: "Ongoing",
          status: "In-Progress",
          progress: 70,
          description: "Continuous improvement and feature expansion.",
          achievements: [
            "Added new AI models",
            "Improved accuracy by 15%",
            "Expanded to 12,500+ users",
            "Integrated with popular tools",
          ],
          metrics: [
            { value: "12.5K+", label: "Active Users" },
            { value: "25", label: "AI Models" },
            { value: "97%", label: "Accuracy" },
            { value: "50+", label: "Integrations" },
          ],
        },
      ],
      totalDuration: "12 months",
      teamSize: "8 members",
      milestonesCompleted: "18",
      overallProgress: 85,
      testimonials: [
        {
          name: "Kemi Adebayo",
          role: "Operations Manager",
          company: "LogiTech Nigeria",
          userType: "Enterprise",
          avatar: "https://randomuser.me/api/portraits/women/25.jpg",
          content: `Vendra AI has transformed our operations completely. What used to take our team hours now happens automatically. The AI accurately predicts our inventory needs and optimizes our supply chain in real-time.`,
          rating: 5,
          impact: [
            { value: "70%", label: "Time Saved" },
            { value: "45%", label: "Cost Reduction" },
            { value: "99%", label: "Accuracy" },
          ],
        },
        {
          name: "James Okonkwo",
          role: "Data Scientist",
          company: "Analytics Pro",
          userType: "Developer",
          avatar: "https://randomuser.me/api/portraits/men/33.jpg",
          content: `The machine learning capabilities of Vendra AI are impressive. The API is well-designed, and the model accuracy consistently exceeds our expectations. It's become an essential tool in our data science workflow.`,
          rating: 5,
        },
        {
          name: "Sarah Johnson",
          role: "Small Business Owner",
          company: "Johnson Retail",
          userType: "Individual",
          avatar: "https://randomuser.me/api/portraits/women/42.jpg",
          content: `As a small business owner, I was skeptical about AI, but Vendra AI made it accessible and affordable. It helps me understand my customers better and automate routine tasks.`,
          rating: 4,
        },
      ],
      testimonialStats: {
        totalReviews: 156,
        averageRating: 4.7,
        satisfactionRate: 92,
        recommendationRate: 89,
      },
    },
    {
      id: "fintech-suite",
      name: "FinTech Suite",
      type: "Fintech",
      status: "Development",
      description:
        "Comprehensive financial technology platform offering payment processing, digital banking, and financial analytics solutions.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      techStack: ["React", "Node.js", "MongoDB", "Stripe", "Plaid", "Docker"],
      users: "5,000+",
      uptime: "99.5%",
      launchDate: "Q2 2025",
      keyFeatures: [
        "Payment Processing",
        "Digital Wallet",
        "Financial Analytics",
        "Fraud Detection",
        "Compliance Tools",
        "API Integration",
      ],
      timeline: [
        {
          phase: "Planning",
          startDate: "Oct 2024",
          endDate: "Dec 2024",
          status: "Completed",
          progress: 100,
          description:
            "Financial services strategy and regulatory compliance planning.",
          metrics: [
            { value: "25+", label: "Regulations Studied" },
            { value: "8", label: "Team Members" },
            { value: "₦12M", label: "Funding" },
            { value: "3", label: "Months" },
          ],
        },
        {
          phase: "Development",
          startDate: "Jan 2025",
          endDate: "Apr 2025",
          status: "In-Progress",
          progress: 45,
          description: "Core platform development and payment integration.",
          metrics: [
            { value: "45%", label: "Progress" },
            { value: "20+", label: "Features" },
            { value: "500+", label: "Tests" },
            { value: "12", label: "Team Members" },
          ],
        },
      ],
      totalDuration: "8 months",
      teamSize: "12 members",
      milestonesCompleted: "8",
      overallProgress: 45,
      testimonials: [
        {
          name: "Adebola Fashola",
          role: "Financial Director",
          company: "Growth Capital",
          userType: "Enterprise",
          avatar: "https://randomuser.me/api/portraits/men/45.jpg",
          content: `Even in development, the FinTech Suite shows incredible promise. The team's attention to regulatory compliance and security gives us confidence in the final product.`,
          rating: 4,
        },
      ],
      testimonialStats: {
        totalReviews: 12,
        averageRating: 4.2,
        satisfactionRate: 85,
        recommendationRate: 80,
      },
    },
  ];

  const filters = [
    { id: "all", label: "All Projects", count: projects?.length },
    {
      id: "blockchain",
      label: "Blockchain",
      count: projects?.filter((p) => p?.type === "Blockchain")?.length,
    },
    {
      id: "ai",
      label: "AI Platform",
      count: projects?.filter((p) => p?.type === "AI Platform")?.length,
    },
    {
      id: "fintech",
      label: "FinTech",
      count: projects?.filter((p) => p?.type === "Fintech")?.length,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects?.filter((project) =>
          project?.type?.toLowerCase()?.includes(activeFilter?.toLowerCase())
        );

  const featuredProject = projects?.[0]; // Elixa Coin as featured

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Projects Hub - Technical Showcase & Vision | Develix</title>
        <meta
          name="description"
          content="Explore Develix's flagship projects including Elixa Coin blockchain platform and Vendra AI automation suite. Detailed technical breakdowns, live demos, and development insights."
        />
        <meta
          name="keywords"
          content="Develix projects, Elixa Coin, Vendra AI, blockchain, artificial intelligence, technical showcase, Nigerian tech"
        />
      </Helmet>
      <Header />
      {/* Hero Section */}
      <ProjectHero />
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16 space-y-16">
        {/* Project Filters */}
        <motion.section
          className="space-y-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Heading */}
          <motion.div
            className="text-center space-y-4"
            variants={fadeIn("up", 0.1)}
          >
            <h2 className="font-space-grotesk font-bold text-3xl lg:text-4xl text-foreground">
              Our Project Portfolio
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our innovative solutions across blockchain, AI, and
              fintech with detailed technical insights and live demonstrations.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-2"
            variants={fadeIn("up", 0.15)}
          >
            {filters?.map((filter) => (
              <button
                key={filter?.id}
                onClick={() => setActiveFilter(filter?.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm brand-transition ${
                  activeFilter === filter?.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted-foreground/10 hover:text-foreground"
                }`}
              >
                <span>{filter?.label}</span>
                <span className="bg-background/20 px-2 py-0.5 rounded-full text-xs">
                  {filter?.count}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid lg:grid-cols-3 gap-6"
            variants={staggerContainer}
          >
            {filteredProjects?.map((project, index) => (
              <motion.div
                key={project?.id}
                variants={fadeIn("up", index * 0.1)} // stagger each card
              >
                <ProjectCard
                  project={project}
                  featured={index === 0 && activeFilter === "all"}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Featured Project Deep Dive */}
        <motion.section
          className="space-y-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Heading */}
          <motion.div
            className="text-center space-y-4"
            variants={fadeIn("up", 0.1)}
          >
            <h2 className="font-space-grotesk font-bold text-3xl lg:text-4xl text-foreground">
              Featured Project Deep Dive
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get an in-depth look at{" "}
              <span className="font-semibold text-foreground">
                {featuredProject?.name}
              </span>{" "}
              with comprehensive technical specifications, live demos, and
              development insights.
            </p>
          </motion.div>

          {/* Technical Specifications */}
          <motion.div variants={fadeIn("up", 0.15)}>
            <TechnicalSpecs project={featuredProject} />
          </motion.div>

          {/* Live Demo */}
          <motion.div variants={fadeIn("up", 0.25)}>
            <LiveDemo project={featuredProject} />
          </motion.div>

          {/* Development Timeline */}
          <motion.div variants={fadeIn("up", 0.35)}>
            <DevelopmentTimeline project={featuredProject} />
          </motion.div>

          {/* User Testimonials */}
          <motion.div variants={fadeIn("up", 0.45)}>
            <UserTestimonials project={featuredProject} />
          </motion.div>
        </motion.section>

        {/* Future Roadmap */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="font-space-grotesk font-bold text-3xl lg:text-4xl text-foreground">
              What's Next?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our ambitious roadmap for the next year, featuring
              exciting new projects and major platform enhancements.
            </p>
          </div>

          <FutureRoadmap />
        </section>

        {/* Call to Action */}
        <section className="text-center space-y-8 py-16">
          <div className="space-y-4">
            <h2 className="font-space-grotesk font-bold text-3xl lg:text-4xl text-foreground">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join us in creating innovative solutions that solve real-world
              problems. Whether you're a developer, investor, or potential
              partner, we'd love to hear from you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              className="bg-primary hover:bg-primary/90 brand-hover-lift"
              iconName="Code"
              iconPosition="left"
            >
              Explore APIs
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Users"
              iconPosition="left"
            >
              Join Community
            </Button>
            <Button
              variant="ghost"
              size="lg"
              iconName="MessageSquare"
              iconPosition="left"
            >
              Contact Team
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-border">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground">
                Active Projects
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">42K+</div>
              <div className="text-sm text-muted-foreground">Total Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">
                Average Uptime
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">₦50M+</div>
              <div className="text-sm text-muted-foreground">
                Value Processed
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProjectsHub;
