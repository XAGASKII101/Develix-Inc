import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const CaseStudyPreviews = () => {
  const caseStudies = [
    {
      id: 1,
      title: "First Bank Nigeria - AI Customer Service",
      client: "First Bank of Nigeria",
      industry: "Banking & Finance",
      challenge: "High volume of customer inquiries overwhelming support staff, leading to long wait times and customer dissatisfaction.",
      solution: "Deployed multilingual AI chatbot with natural language processing capabilities, integrated with core banking systems.",
      results: {
        primary: "85% reduction in support tickets",
        secondary: ["24/7 customer service availability", "₦120M annual cost savings", "95% customer satisfaction rate"],
        timeline: "3 months implementation"
      },
      technologies: ["Natural Language Processing", "Machine Learning", "API Integration", "Multi-language Support"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      testimonial: "Develix transformed our customer service operations. The AI chatbot handles 85% of inquiries automatically while maintaining our high service standards.",
      clientRole: "Head of Digital Banking"
    },
    {
      id: 2,
      title: "Dangote Group - Supply Chain Blockchain",
      client: "Dangote Group",
      industry: "Manufacturing & Agriculture",
      challenge: "Lack of transparency in supply chain leading to quality control issues and inefficient inventory management.",
      solution: "Implemented blockchain-based supply chain tracking system with IoT sensors and mobile applications for farmers and distributors.",
      results: {
        primary: "40% reduction in food waste",
        secondary: ["100% product traceability", "30% improvement in quality control", "₦2.1B inventory optimization"],
        timeline: "6 months rollout"
      },
      technologies: ["Blockchain", "Smart Contracts", "IoT Integration", "Mobile Development"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
      testimonial: "The blockchain solution provided unprecedented visibility into our supply chain. We can now track every product from farm to consumer.",
      clientRole: "Supply Chain Director"
    },
    {
      id: 3,
      title: "Jumia Nigeria - Fraud Detection System",
      client: "Jumia Nigeria",
      industry: "E-commerce & Fintech",
      challenge: "Rising fraud rates affecting customer trust and causing significant financial losses in online transactions.",
      solution: "Developed real-time fraud detection system using machine learning algorithms and behavioral analysis.",
      results: {
        primary: "99.7% fraud detection accuracy",
        secondary: ["₦500M+ fraud prevented annually", "50% reduction in false positives", "2-second transaction processing"],
        timeline: "4 months development"
      },
      technologies: ["Machine Learning", "Real-time Analytics", "Behavioral Analysis", "API Development"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      testimonial: "Develix's fraud detection system has been game-changing. We've prevented millions in losses while improving customer experience.",
      clientRole: "Chief Technology Officer"
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-medium mb-6">
            <Icon name="Award" size={16} className="mr-2" />
            Success Stories
          </div>
          <h2 className="text-3xl lg:text-5xl font-space-grotesk font-bold text-foreground mb-6">
            Proven Results for
            <span className="block text-primary mt-2">Nigerian Enterprises</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real case studies showcasing measurable outcomes, cost savings, and efficiency gains 
            achieved by our enterprise clients across various industries.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-16">
          {caseStudies?.map((study, index) => (
            <div 
              key={study?.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                      {study?.industry}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {study?.results?.timeline}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-space-grotesk font-bold text-foreground">
                    {study?.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Challenge:</strong> {study?.challenge}
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Solution:</strong> {study?.solution}
                  </p>
                </div>

                {/* Results */}
                <div className="bg-card rounded-xl p-6 border border-border brand-shadow-card">
                  <div className="flex items-center mb-4">
                    <Icon name="TrendingUp" size={20} className="text-accent mr-2" />
                    <h4 className="font-space-grotesk font-bold text-foreground">Key Results</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="text-2xl font-bold text-primary">
                      {study?.results?.primary}
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {study?.results?.secondary?.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center">
                          <Icon name="Check" size={16} className="text-accent mr-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Icon name="Settings" size={16} className="text-primary mr-2" />
                    <span className="font-medium text-foreground">Technologies Used</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {study?.technologies?.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-primary/5 rounded-xl p-6 border-l-4 border-primary">
                  <div className="flex items-start space-x-4">
                    <Icon name="Quote" size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-foreground italic mb-3 leading-relaxed">
                        "{study?.testimonial}"
                      </p>
                      <div className="text-sm">
                        <div className="font-medium text-foreground">{study?.client}</div>
                        <div className="text-muted-foreground">{study?.clientRole}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="relative overflow-hidden rounded-xl brand-shadow-card group">
                  <Image 
                    src={study?.image}
                    alt={`${study?.client} case study`}
                    className="w-full h-80 lg:h-96 object-cover group-hover:scale-105 brand-transition"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-primary-foreground">
                      <div className="text-lg font-space-grotesk font-bold mb-1">
                        {study?.client}
                      </div>
                      <div className="text-sm opacity-90">
                        {study?.industry}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 pt-12 border-t border-border">
          <h3 className="text-2xl font-space-grotesk font-bold text-foreground mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join these leading Nigerian enterprises in leveraging AI and blockchain technology 
            to drive measurable business outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="default" 
              size="lg"
              className="bg-primary hover:bg-primary/90 font-semibold brand-hover-lift"
              iconName="Calendar"
              iconPosition="left"
            >
              Schedule Strategy Session
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              iconName="FileText"
              iconPosition="left"
            >
              Download Case Study Details
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyPreviews;