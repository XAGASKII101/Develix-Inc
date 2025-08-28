import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const WaitlistModal = ({ isOpen, onClose, app }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interests: [],
    notifications: {
      email: true,
      sms: false,
      push: true
    },
    priority: 'standard'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const interestOptions = [
    'Early beta access',
    'Feature development updates',
    'Community discussions',
    'Technical documentation',
    'Integration opportunities'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleInterestChange = (interest, checked) => {
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev?.interests, interest]
        : prev?.interests?.filter(i => i !== interest)
    }));
  };

  const handleNotificationChange = (type, checked) => {
    setFormData(prev => ({
      ...prev,
      notifications: {
        ...prev?.notifications,
        [type]: checked
      }
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <div className="bg-card rounded-xl border border-border brand-shadow-modal max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="Bell" size={24} className="text-primary" />
              </div>
              <div>
                <h2 className="font-space-grotesk font-bold text-xl text-foreground">
                  Join Waitlist
                </h2>
                <p className="text-sm text-muted-foreground">
                  Get early access to {app?.name}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-lg brand-transition"
            >
              <Icon name="X" size={20} className="text-muted-foreground" />
            </button>
          </div>

          {isSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircle" size={32} className="text-success" />
              </div>
              <h3 className="font-space-grotesk font-bold text-lg text-foreground mb-2">
                Welcome to the Waitlist!
              </h3>
              <p className="text-muted-foreground mb-4">
                You'll be among the first to know when {app?.name} launches.
              </p>
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="text-sm text-foreground">
                  <strong>Your position:</strong> #{Math.floor(Math.random() * 1000) + 1}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Expected notification: {app?.expectedLaunch}
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <Input
                  label="Full Name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData?.name}
                  onChange={(e) => handleInputChange('name', e?.target?.value)}
                  required
                />

                <Input
                  label="Email Address"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData?.email}
                  onChange={(e) => handleInputChange('email', e?.target?.value)}
                  description="We'll send you updates about early access"
                  required
                />

                <Input
                  label="Phone Number (Optional)"
                  type="tel"
                  placeholder="+234 xxx xxx xxxx"
                  value={formData?.phone}
                  onChange={(e) => handleInputChange('phone', e?.target?.value)}
                  description="For SMS notifications about beta releases"
                />
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">What interests you most?</h4>
                <div className="space-y-2">
                  {interestOptions?.map((interest, index) => (
                    <Checkbox
                      key={index}
                      label={interest}
                      checked={formData?.interests?.includes(interest)}
                      onChange={(e) => handleInterestChange(interest, e?.target?.checked)}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">Notification Preferences</h4>
                <div className="space-y-2">
                  <Checkbox
                    label="Email updates"
                    description="Product updates and launch notifications"
                    checked={formData?.notifications?.email}
                    onChange={(e) => handleNotificationChange('email', e?.target?.checked)}
                  />
                  <Checkbox
                    label="SMS notifications"
                    description="Critical updates and beta access"
                    checked={formData?.notifications?.sms}
                    onChange={(e) => handleNotificationChange('sms', e?.target?.checked)}
                  />
                  <Checkbox
                    label="Push notifications"
                    description="In-app updates when available"
                    checked={formData?.notifications?.push}
                    onChange={(e) => handleNotificationChange('push', e?.target?.checked)}
                  />
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">Access Priority</h4>
                <div className="space-y-2">
                  <label className="flex items-center space-x-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-muted/50 brand-transition">
                    <input
                      type="radio"
                      name="priority"
                      value="standard"
                      checked={formData?.priority === 'standard'}
                      onChange={(e) => handleInputChange('priority', e?.target?.value)}
                      className="text-primary"
                    />
                    <div>
                      <div className="font-medium text-foreground">Standard Access</div>
                      <div className="text-sm text-muted-foreground">Join the general waitlist</div>
                    </div>
                  </label>
                  <label className="flex items-center space-x-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-muted/50 brand-transition">
                    <input
                      type="radio"
                      name="priority"
                      value="developer"
                      checked={formData?.priority === 'developer'}
                      onChange={(e) => handleInputChange('priority', e?.target?.value)}
                      className="text-primary"
                    />
                    <div>
                      <div className="font-medium text-foreground">Developer Priority</div>
                      <div className="text-sm text-muted-foreground">Early API access and integration support</div>
                    </div>
                  </label>
                </div>
              </div>

              <div className="flex space-x-3">
                <Button
                  type="button"
                  variant="outline"
                  fullWidth
                  onClick={onClose}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="default"
                  fullWidth
                  loading={isSubmitting}
                  iconName="Bell"
                  iconPosition="left"
                  className="bg-primary hover:bg-primary/90"
                >
                  {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default WaitlistModal;