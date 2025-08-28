import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const UserTestimonials = ({ project }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => 
      prev === project?.testimonials?.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => 
      prev === 0 ? project?.testimonials?.length - 1 : prev - 1
    );
  };

  const getUserTypeColor = (type) => {
    switch (type?.toLowerCase()) {
      case 'enterprise': return 'bg-blue-100 text-blue-800';
      case 'individual': return 'bg-green-100 text-green-800';
      case 'developer': return 'bg-purple-100 text-purple-800';
      case 'startup': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-card rounded-2xl border border-border brand-shadow-card p-6">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h3 className="font-space-grotesk font-bold text-2xl text-foreground">
            User Testimonials
          </h3>
          <p className="text-muted-foreground">
            Real feedback from users who have experienced {project?.name} in action.
          </p>
        </div>

        {/* Main Testimonial */}
        {project?.testimonials && project?.testimonials?.length > 0 && (
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8">
              {/* Quote Icon */}
              <div className="absolute top-4 left-4 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Quote" size={16} className="text-primary" />
              </div>

              {/* Testimonial Content */}
              <div className="space-y-4 pt-4">
                <blockquote className="text-lg leading-relaxed text-foreground italic">
                  "{project?.testimonials?.[activeTestimonial]?.content}"
                </blockquote>

                {/* User Info */}
                <div className="flex items-center space-x-4">
                  <Image 
                    src={project?.testimonials?.[activeTestimonial]?.avatar}
                    alt={project?.testimonials?.[activeTestimonial]?.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-foreground">
                      {project?.testimonials?.[activeTestimonial]?.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {project?.testimonials?.[activeTestimonial]?.role} at {project?.testimonials?.[activeTestimonial]?.company}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      getUserTypeColor(project?.testimonials?.[activeTestimonial]?.userType)
                    }`}>
                      {project?.testimonials?.[activeTestimonial]?.userType}
                    </span>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)]?.map((_, i) => (
                        <Icon 
                          key={i}
                          name="Star" 
                          size={14} 
                          className={`${
                            i < project?.testimonials?.[activeTestimonial]?.rating 
                              ? 'text-yellow-400 fill-current' :'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Impact Metrics */}
                {project?.testimonials?.[activeTestimonial]?.impact && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-border/50">
                    {project?.testimonials?.[activeTestimonial]?.impact?.map((metric, index) => (
                      <div key={index} className="text-center">
                        <div className="text-lg font-bold text-primary">{metric?.value}</div>
                        <div className="text-xs text-muted-foreground">{metric?.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-6">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center hover:bg-muted brand-transition"
                  disabled={project?.testimonials?.length <= 1}
                >
                  <Icon name="ChevronLeft" size={16} className="text-foreground" />
                </button>

                <div className="flex items-center space-x-2">
                  {project?.testimonials?.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-2 h-2 rounded-full brand-transition ${
                        index === activeTestimonial ? 'bg-primary' : 'bg-border hover:bg-muted-foreground'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center hover:bg-muted brand-transition"
                  disabled={project?.testimonials?.length <= 1}
                >
                  <Icon name="ChevronRight" size={16} className="text-foreground" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {project?.testimonials?.slice(1, 7)?.map((testimonial, index) => (
            <div 
              key={index}
              className="p-4 bg-muted/30 rounded-lg border border-border hover:border-primary/20 brand-transition cursor-pointer"
              onClick={() => setActiveTestimonial(index + 1)}
            >
              <div className="space-y-3">
                {/* Mini Quote */}
                <p className="text-sm text-muted-foreground line-clamp-3">
                  "{testimonial?.content?.substring(0, 120)}..."
                </p>

                {/* User Info */}
                <div className="flex items-center space-x-2">
                  <Image 
                    src={testimonial?.avatar}
                    alt={testimonial?.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm text-foreground truncate">
                      {testimonial?.name}
                    </div>
                    <div className="text-xs text-muted-foreground truncate">
                      {testimonial?.company}
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Star" size={12} className="text-yellow-400 fill-current" />
                    <span className="text-xs text-muted-foreground">{testimonial?.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="pt-6 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-primary">{project?.testimonialStats?.totalReviews || 0}</div>
              <div className="text-sm text-muted-foreground">Total Reviews</div>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="flex items-center justify-center space-x-1">
                <span className="text-2xl font-bold text-primary">{project?.testimonialStats?.averageRating || 0}</span>
                <Icon name="Star" size={16} className="text-yellow-400 fill-current" />
              </div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-primary">{project?.testimonialStats?.satisfactionRate || 0}%</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-primary">{project?.testimonialStats?.recommendationRate || 0}%</div>
              <div className="text-sm text-muted-foreground">Would Recommend</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTestimonials;