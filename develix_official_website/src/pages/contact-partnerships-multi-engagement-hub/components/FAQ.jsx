import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set([0])); // First item open by default

  const faqCategories = [
    {
      title: 'General Inquiries',
      faqs: [
        {
          question: 'What services does Develix offer?',
          answer: `We provide comprehensive AI and software development services including:\n\n• Custom AI solutions and machine learning models\n• Fintech application development (like Elixa Coin)\n• E-commerce platforms (like Vendra)\n• API integrations with Paystack, Flutterwave, and other platforms\n• Blockchain and cryptocurrency solutions\n• Enterprise software development\n• Mobile app development for iOS and Android`
        },
        {
          question: 'How quickly can you respond to inquiries?',
          answer: `Our response times vary by inquiry type:\n\n• Enterprise Solutions: 24 hours\n• Partnership & Investment: 24-48 hours\n• Media & Press: 48 hours\n• Developer Community: 72 hours\n• General Inquiries: 72 hours\n\nAll response times are during business hours (Monday-Friday, 9 AM - 6 PM WAT).`
        },
        {
          question: 'Do you work with international clients?',
          answer: `Yes! While we're proudly based in Lagos, Nigeria, we serve clients globally. We have experience working with:\n\n• Nigerian businesses and startups\n• International enterprises\n• Remote teams across different time zones\n• Clients in the US, UK, Canada, and other countries\n\nWe provide digital-first collaboration with optional in-person meetings for Lagos-based clients.`
        }
      ]
    },
    {
      title: 'Enterprise & Partnerships',
      faqs: [
        {
          question: 'What is your typical project timeline?',
          answer: `Project timelines vary based on complexity:\n\n• Simple integrations: 2-4 weeks\n• Custom applications: 2-6 months\n• Enterprise solutions: 3-12 months\n• Ongoing partnerships: Long-term relationships\n\nWe provide detailed project timelines during our initial consultation, including milestones and delivery schedules.`
        },
        {
          question: 'How do you handle project pricing?',
          answer: `We offer flexible pricing models:\n\n• Fixed-price projects for well-defined scopes\n• Time and materials for evolving requirements\n• Retainer agreements for ongoing partnerships\n• Revenue sharing for strategic collaborations\n\nPricing depends on project complexity, timeline, and resource requirements. We provide transparent quotes with no hidden fees.`
        },
        {
          question: 'What partnership opportunities are available?',answer: `We're open to various partnership models:\n\n• Technical integration partnerships\n• Joint product development\n• Revenue sharing agreements\n• Reseller and affiliate programs\n• Strategic business partnerships\n• Investment and funding partnerships\n\nContact us to discuss how we can collaborate and create mutual value.`
        }
      ]
    },
    {
      title: 'Technical & Development',
      faqs: [
        {
          question: 'What technologies do you specialize in?',
          answer: `Our technical expertise includes:\n\n• Frontend: React, Next.js, React Native, Flutter\n• Backend: Node.js, Python, Go, PHP\n• Databases: PostgreSQL, MongoDB, Redis\n• Cloud: AWS, Google Cloud, Microsoft Azure\n• Blockchain: Ethereum, Polygon, Solana\n• AI/ML: TensorFlow, PyTorch, OpenAI APIs\n• Payment: Paystack, Flutterwave, Stripe integrations`
        },
        {
          question: 'Do you provide API documentation and support?',
          answer: `Yes! We provide comprehensive technical support:\n\n• Detailed API documentation\n• SDK development for popular languages\n• Developer portal with examples and tutorials\n• Technical support during integration\n• Regular API updates and maintenance\n• Community forum for developers\n\nJoin our developer program for early access to new APIs and features.`
        },
        {
          question: 'How do you ensure code quality and security?',
          answer: `We maintain high standards through:\n\n• Code reviews and pair programming\n• Automated testing and CI/CD pipelines\n• Security audits and penetration testing\n• GDPR and data protection compliance\n• Regular security updates and patches\n• Enterprise-grade infrastructure\n• ISO 27001 and SOC 2 compliance`
        }
      ]
    }
  ];

  const toggleItem = (categoryIndex, faqIndex) => {
    const itemKey = `${categoryIndex}-${faqIndex}`;
    const newOpenItems = new Set(openItems);
    
    if (newOpenItems?.has(itemKey)) {
      newOpenItems?.delete(itemKey);
    } else {
      newOpenItems?.add(itemKey);
    }
    
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services, processes, and partnerships. 
            Can't find what you're looking for? Contact us directly.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqCategories?.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {/* Category Title */}
              <h3 className="font-space-grotesk text-2xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                {category?.title}
              </h3>

              {/* FAQ Items */}
              <div className="space-y-4">
                {category?.faqs?.map((faq, faqIndex) => {
                  const itemKey = `${categoryIndex}-${faqIndex}`;
                  const isOpen = openItems?.has(itemKey);

                  return (
                    <div
                      key={faqIndex}
                      className="bg-card rounded-xl border border-border brand-shadow-card overflow-hidden"
                    >
                      {/* Question */}
                      <button
                        onClick={() => toggleItem(categoryIndex, faqIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 brand-transition"
                      >
                        <h4 className="font-semibold text-foreground pr-4">
                          {faq?.question}
                        </h4>
                        <Icon
                          name={isOpen ? "ChevronUp" : "ChevronDown"}
                          size={20}
                          className={`text-muted-foreground brand-transition flex-shrink-0 ${
                            isOpen ? 'text-primary' : ''
                          }`}
                        />
                      </button>
                      {/* Answer */}
                      <div
                        className={`brand-transition overflow-hidden ${
                          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="px-6 pb-4 border-t border-border/50">
                          <div className="pt-4">
                            <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                              {faq?.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="MessageCircle" size={28} className="text-primary" />
            </div>
            <h3 className="font-space-grotesk text-xl font-bold text-foreground mb-2">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Can't find the answer you're looking for? Our team is here to help with any specific questions about your project or partnership needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@develix.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 brand-transition"
              >
                <Icon name="Mail" size={16} className="mr-2" />
                Email Us
              </a>
              <a
                href="tel:+2349012345678"
                className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted brand-transition"
              >
                <Icon name="Phone" size={16} className="mr-2" />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;