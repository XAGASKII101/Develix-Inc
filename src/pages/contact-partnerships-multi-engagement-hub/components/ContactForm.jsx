import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    inquiryType: '',
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    projectBudget: '',
    timeline: '',
    message: '',
    newsletter: false,
    privacy: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const inquiryTypes = [
    { value: 'enterprise', label: 'Enterprise Solutions', description: 'Custom AI & software development' },
    { value: 'partnership', label: 'Partnership & Integration', description: 'Collaboration opportunities' },
    { value: 'investor', label: 'Investor Relations', description: 'Funding and strategic partnerships' },
    { value: 'media', label: 'Media & Press', description: 'Press inquiries and interviews' },
    { value: 'developer', label: 'Developer Community', description: 'API access and community' },
    { value: 'general', label: 'General Inquiry', description: 'Questions and support' }
  ];

  const budgetRanges = [
    { value: 'under-10k', label: 'Under $10,000' },
    { value: '10k-50k', label: '$10,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k-500k', label: '$100,000 - $500,000' },
    { value: 'over-500k', label: 'Over $500,000' },
    { value: 'discuss', label: 'Let\'s discuss' }
  ];

  const timelineOptions = [
    { value: 'asap', label: 'ASAP' },
    { value: '1-3-months', label: '1-3 months' },
    { value: '3-6-months', label: '3-6 months' },
    { value: '6-12-months', label: '6-12 months' },
    { value: 'flexible', label: 'Flexible timeline' }
  ];

  const countryOptions = [
    { value: 'ng', label: 'Nigeria' },
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
    { value: 'au', label: 'Australia' },
    { value: 'de', label: 'Germany' },
    { value: 'fr', label: 'France' },
    { value: 'other', label: 'Other' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        inquiryType: '',
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        country: '',
        projectBudget: '',
        timeline: '',
        message: '',
        newsletter: false,
        privacy: false
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getResponseTime = () => {
    switch (formData?.inquiryType) {
      case 'enterprise': case'investor':
        return '24 hours';
      case 'partnership': case'media':
        return '48 hours';
      default:
        return '72 hours';
    }
  };

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you within our guaranteed response time. 
            All fields marked with * are required.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-card rounded-2xl brand-shadow-card p-8">
          {submitStatus === 'success' && (
            <div className="mb-8 p-4 bg-success/10 border border-success/20 rounded-lg">
              <div className="flex items-center">
                <Icon name="CheckCircle" size={20} className="text-success mr-3" />
                <div>
                  <h4 className="font-semibold text-success">Message Sent Successfully!</h4>
                  <p className="text-sm text-success/80 mt-1">
                    We'll respond within {getResponseTime()}. Check your email for confirmation.
                  </p>
                </div>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-8 p-4 bg-error/10 border border-error/20 rounded-lg">
              <div className="flex items-center">
                <Icon name="AlertCircle" size={20} className="text-error mr-3" />
                <div>
                  <h4 className="font-semibold text-error">Submission Failed</h4>
                  <p className="text-sm text-error/80 mt-1">
                    Please try again or contact us directly at hello@develix.com
                  </p>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Inquiry Type */}
            <Select
              label="Type of Inquiry *"
              description="This helps us route your message to the right team"
              options={inquiryTypes}
              value={formData?.inquiryType}
              onChange={(value) => handleInputChange('inquiryType', value)}
              placeholder="Select inquiry type"
              required
              searchable
            />

            {/* Response Time Indicator */}
            {formData?.inquiryType && (
              <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                <div className="flex items-center">
                  <Icon name="Clock" size={16} className="text-primary mr-2" />
                  <span className="text-sm font-medium text-primary">
                    Expected response time: {getResponseTime()}
                  </span>
                </div>
              </div>
            )}

            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="First Name *"
                type="text"
                placeholder="Enter your first name"
                value={formData?.firstName}
                onChange={(e) => handleInputChange('firstName', e?.target?.value)}
                required
              />
              <Input
                label="Last Name *"
                type="text"
                placeholder="Enter your last name"
                value={formData?.lastName}
                onChange={(e) => handleInputChange('lastName', e?.target?.value)}
                required
              />
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Email Address *"
                type="email"
                placeholder="your.email@company.com"
                value={formData?.email}
                onChange={(e) => handleInputChange('email', e?.target?.value)}
                required
              />
              <Input
                label="Phone Number"
                type="tel"
                placeholder="+234 xxx xxx xxxx"
                value={formData?.phone}
                onChange={(e) => handleInputChange('phone', e?.target?.value)}
              />
            </div>

            {/* Company and Country */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Company/Organization"
                type="text"
                placeholder="Your company name"
                value={formData?.company}
                onChange={(e) => handleInputChange('company', e?.target?.value)}
              />
              <Select
                label="Country *"
                options={countryOptions}
                value={formData?.country}
                onChange={(value) => handleInputChange('country', value)}
                placeholder="Select your country"
                required
                searchable
              />
            </div>

            {/* Project Details (for enterprise/partnership) */}
            {(formData?.inquiryType === 'enterprise' || formData?.inquiryType === 'partnership') && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Select
                  label="Project Budget"
                  description="Approximate budget range for your project"
                  options={budgetRanges}
                  value={formData?.projectBudget}
                  onChange={(value) => handleInputChange('projectBudget', value)}
                  placeholder="Select budget range"
                />
                <Select
                  label="Timeline"
                  description="When do you need this completed?"
                  options={timelineOptions}
                  value={formData?.timeline}
                  onChange={(value) => handleInputChange('timeline', value)}
                  placeholder="Select timeline"
                />
              </div>
            )}

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Message *
              </label>
              <textarea
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent brand-transition resize-none"
                rows={6}
                placeholder="Tell us about your project, partnership idea, or inquiry. The more details you provide, the better we can assist you."
                value={formData?.message}
                onChange={(e) => handleInputChange('message', e?.target?.value)}
                required
              />
              <p className="text-xs text-muted-foreground mt-1">
                Minimum 50 characters. Be specific about your needs and goals.
              </p>
            </div>

            {/* Checkboxes */}
            <div className="space-y-4">
              <Checkbox
                label="Subscribe to our newsletter"
                description="Get updates on new products, features, and African tech insights"
                checked={formData?.newsletter}
                onChange={(e) => handleInputChange('newsletter', e?.target?.checked)}
              />
              <Checkbox
                label="I agree to the Privacy Policy and Terms of Service *"
                description="We'll only use your information to respond to your inquiry"
                checked={formData?.privacy}
                onChange={(e) => handleInputChange('privacy', e?.target?.checked)}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <Button
                type="submit"
                variant="default"
                size="lg"
                fullWidth
                loading={isSubmitting}
                disabled={!formData?.privacy || !formData?.inquiryType || !formData?.firstName || !formData?.lastName || !formData?.email || !formData?.message}
                iconName="Send"
                iconPosition="right"
                className="bg-primary hover:bg-primary/90 brand-hover-lift"
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-3">
                By submitting this form, you agree to our Privacy Policy. 
                We'll respond within {getResponseTime()} during business hours.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;