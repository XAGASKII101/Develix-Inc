import React from 'react';
import Icon from '../../../components/AppIcon';

const CultureCard = ({ culture }) => {
  return (
    <div className="bg-card rounded-xl p-6 brand-shadow-card brand-transition brand-hover-lift h-full">
      {/* Icon & Title */}
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${culture?.iconBg}`}>
          <Icon name={culture?.icon} size={24} className={culture?.iconColor} />
        </div>
        <h3 className="text-xl font-space-grotesk font-bold text-foreground">
          {culture?.title}
        </h3>
      </div>
      {/* Description */}
      <p className="text-muted-foreground font-inter leading-relaxed mb-6">
        {culture?.description}
      </p>
      {/* Examples */}
      <div className="space-y-3">
        <h4 className="text-sm font-inter font-semibold text-foreground mb-3">
          In Practice:
        </h4>
        {culture?.examples?.map((example, index) => (
          <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
            <Icon name="ArrowRight" size={16} className="text-primary mt-0.5 flex-shrink-0" />
            <span className="text-sm text-foreground font-inter">{example}</span>
          </div>
        ))}
      </div>
      {/* Quote */}
      {culture?.quote && (
        <div className="mt-6 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
          <blockquote className="text-sm font-inter italic text-foreground">
            "{culture?.quote}"
          </blockquote>
          <cite className="text-xs text-muted-foreground mt-2 block">
            - {culture?.quoteAuthor}
          </cite>
        </div>
      )}
    </div>
  );
};

export default CultureCard;