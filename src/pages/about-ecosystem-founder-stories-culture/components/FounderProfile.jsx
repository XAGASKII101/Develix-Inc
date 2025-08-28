import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const FounderProfile = ({ founder }) => {
  return (
    <div className="bg-card rounded-2xl p-8 brand-shadow-card brand-transition brand-hover-lift">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div className="relative">
            <div className="w-48 h-48 rounded-2xl overflow-hidden bg-muted">
              <Image
                src={founder?.image}
                alt={`${founder?.name} - ${founder?.role}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
              <Icon name={founder?.icon} size={24} className="text-primary-foreground" />
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="flex-1">
          <div className="mb-6">
            <h3 className="text-2xl font-space-grotesk font-bold text-foreground mb-2">
              {founder?.name}
            </h3>
            <p className="text-lg text-primary font-inter font-semibold mb-2">
              {founder?.role}
            </p>
            <p className="text-muted-foreground font-inter">
              {founder?.tagline}
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {founder?.stats?.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-space-grotesk font-bold text-primary mb-1">
                  {stat?.value}
                </div>
                <div className="text-sm text-muted-foreground font-inter">
                  {stat?.label}
                </div>
              </div>
            ))}
          </div>

          {/* Bio */}
          <div className="prose prose-gray max-w-none">
            <p className="text-foreground font-inter leading-relaxed">
              {founder?.bio}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            {founder?.social?.map((link, index) => (
              <a
                key={index}
                href={link?.url}
                className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center brand-transition"
                aria-label={`${founder?.name} on ${link?.platform}`}
              >
                <Icon name={link?.icon} size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderProfile;