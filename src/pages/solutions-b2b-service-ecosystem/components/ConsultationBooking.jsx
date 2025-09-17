import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";

import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../../../lib/animations";

const ConsultationBooking = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
  });

  const timeSlots = [
    { value: "09:00", label: "9:00 AM" },
    { value: "10:00", label: "10:00 AM" },
    { value: "11:00", label: "11:00 AM" },
    { value: "14:00", label: "2:00 PM" },
    { value: "15:00", label: "3:00 PM" },
    { value: "16:00", label: "4:00 PM" },
  ];

  const projectTypes = [
    { value: "ai-development", label: "AI Development" },
    { value: "blockchain", label: "Blockchain Integration" },
    { value: "custom-software", label: "Custom Software" },
    { value: "digital-transformation", label: "Digital Transformation" },
    { value: "consultation", label: "Strategic Consultation" },
  ];

  const budgetRanges = [
    { value: "50k-200k", label: "₦50,000 - ₦200,000" },
    { value: "200k-500k", label: "₦200,000 - ₦500,000" },
    { value: "500k-1m", label: "₦500,000 - ₦1,000,000" },
    { value: "1m-5m", label: "₦1,000,000 - ₦5,000,000" },
    { value: "5m+", label: "₦5,000,000+" },
  ];

  const timelineOptions = [
    { value: "1-2-weeks", label: "1-2 weeks" },
    { value: "1-month", label: "1 month" },
    { value: "2-3-months", label: "2-3 months" },
    { value: "3-6-months", label: "3-6 months" },
    { value: "6-months+", label: "6+ months" },
  ];

  const availableDates = [
    { date: "2025-08-29", day: "Thu", slots: 6 },
    { date: "2025-08-30", day: "Fri", slots: 4 },
    { date: "2025-09-02", day: "Mon", slots: 5 },
    { date: "2025-09-03", day: "Tue", slots: 3 },
    { date: "2025-09-04", day: "Wed", slots: 6 },
    { date: "2025-09-05", day: "Thu", slots: 2 },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    // Handle form submission
    console.log("Consultation booking:", {
      ...formData,
      selectedDate,
      selectedTime,
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={fadeIn("up", 0.2)}>
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            <Icon name="Calendar" size={16} className="mr-2" />
            Book Consultation
          </div>
          <h2 className="text-3xl lg:text-5xl font-space-grotesk font-bold text-foreground mb-6">
            Schedule Your Strategy
            <span className="block text-secondary mt-2">Session Today</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Book a founder-level technical discussion to explore how AI and
            blockchain can transform your business. Free 60-minute consultation
            with our technical team.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calendar & Time Selection */}
          <motion.div className="space-y-8" variants={slideIn("up", 0.3)}>
            <div className="bg-card rounded-xl p-8 border border-border brand-shadow-card">
              <h3 className="text-xl font-space-grotesk font-bold text-foreground mb-6">
                Select Date & Time
              </h3>

              {/* Date Selection */}
              <div className="space-y-4 mb-8">
                <h4 className="font-medium text-foreground">Available Dates</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {availableDates?.map((dateOption) => (
                    <button
                      key={dateOption?.date}
                      onClick={() => setSelectedDate(dateOption?.date)}
                      className={`p-4 rounded-lg border text-center brand-transition ${
                        selectedDate === dateOption?.date
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border hover:border-primary/50 hover:bg-primary/5"
                      }`}
                    >
                      <div className="font-medium">{dateOption?.day}</div>
                      <div className="text-sm text-muted-foreground">
                        {new Date(dateOption.date)?.toLocaleDateString(
                          "en-GB",
                          {
                            day: "numeric",
                            month: "short",
                          }
                        )}
                      </div>
                      <div className="text-xs text-accent mt-1">
                        {dateOption?.slots} slots
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              {selectedDate && (
                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">
                    Available Times
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {timeSlots?.map((slot) => (
                      <button
                        key={slot?.value}
                        onClick={() => setSelectedTime(slot?.value)}
                        className={`p-3 rounded-lg border text-center brand-transition ${
                          selectedTime === slot?.value
                            ? "border-secondary bg-secondary/10 text-secondary"
                            : "border-border hover:border-secondary/50 hover:bg-secondary/5"
                        }`}
                      >
                        {slot?.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Consultation Benefits */}
            <motion.div
              className="bg-card rounded-xl p-8 border border-border brand-shadow-card"
              variants={fadeIn("up", 0.4)}
            >
              <h3 className="text-xl font-space-grotesk font-bold text-foreground mb-6">
                What You'll Get
              </h3>
              <div className="space-y-4">
                {[
                  "60-minute technical discussion with founders",
                  "Custom solution architecture recommendations",
                  "Project timeline and budget estimation",
                  "Technology stack recommendations",
                  "Integration strategy with existing systems",
                  "Follow-up technical documentation",
                ]?.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-accent mr-3 flex-shrink-0"
                    />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            className="bg-card rounded-xl p-8 border border-border brand-shadow-card"
            variants={slideIn("up", 0.3)}
          >
            <h3 className="text-xl font-space-grotesk font-bold text-foreground mb-6">
              Your Information
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Full Name"
                  type="text"
                  name="name"
                  value={formData?.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                />
                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  value={formData?.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Company Name"
                  type="text"
                  name="company"
                  value={formData?.company}
                  onChange={handleInputChange}
                  placeholder="Your company"
                  required
                />
                <Input
                  label="Your Role"
                  type="text"
                  name="role"
                  value={formData?.role}
                  onChange={handleInputChange}
                  placeholder="CEO, CTO, etc."
                  required
                />
              </div>

              <Input
                label="Phone Number"
                type="tel"
                name="phone"
                value={formData?.phone}
                onChange={handleInputChange}
                placeholder="+234 xxx xxx xxxx"
                required
              />

              <Select
                label="Project Type"
                options={projectTypes}
                value={formData?.projectType}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, projectType: value }))
                }
                placeholder="Select project type"
                required
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Select
                  label="Budget Range"
                  options={budgetRanges}
                  value={formData?.budget}
                  onChange={(value) =>
                    setFormData((prev) => ({ ...prev, budget: value }))
                  }
                  placeholder="Select budget range"
                />
                <Select
                  label="Timeline"
                  options={timelineOptions}
                  value={formData?.timeline}
                  onChange={(value) =>
                    setFormData((prev) => ({ ...prev, timeline: value }))
                  }
                  placeholder="Project timeline"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">
                  Project Description
                </label>
                <textarea
                  name="description"
                  value={formData?.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Tell us about your project requirements, challenges, and goals..."
                />
              </div>

              {/* Selected Date/Time Display */}
              {selectedDate && selectedTime && (
                <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                  <div className="flex items-center">
                    <Icon
                      name="Calendar"
                      size={20}
                      className="text-primary mr-3"
                    />
                    <div>
                      <div className="font-medium text-foreground">
                        Selected:{" "}
                        {new Date(selectedDate)?.toLocaleDateString("en-GB", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        at{" "}
                        {
                          timeSlots?.find(
                            (slot) => slot?.value === selectedTime
                          )?.label
                        }
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <Button
                type="submit"
                variant="default"
                size="lg"
                fullWidth
                disabled={!selectedDate || !selectedTime}
                className="bg-primary hover:bg-primary/90 font-semibold brand-hover-lift"
                iconName="Calendar"
                iconPosition="left"
              >
                Book Consultation Session
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By booking, you agree to our terms of service. We'll send a
                calendar invite with meeting details to your email.
              </p>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ConsultationBooking;
