import React, { useState } from "react";
import Button from "../../../components/ui/Button";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/animations";

const AppCard = ({ app, onJoinWaitlist }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case "beta":
        return "bg-accent text-primary";
      case "development":
        return "bg-secondary/20 text-secondary";
      case "coming-soon":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "beta":
        return "Zap";
      case "development":
        return "Code";
      case "coming-soon":
        return "Clock";
      default:
        return "Clock";
    }
  };

  return (
    <motion.div
      className="bg-card rounded-xl border border-border brand-shadow-card brand-transition hover:brand-shadow-modal brand-hover-lift"
      variants={fadeIn("up", 0.2)}
    >
      <div className="relative overflow-hidden rounded-t-xl h-48">
        <Image
          src={app?.image}
          alt={app?.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
              app?.status
            )}`}
          >
            <Icon
              name={getStatusIcon(app?.status)}
              size={12}
              className="mr-1"
            />
            {app?.statusLabel}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <div className="bg-background/80 backdrop-blur-sm rounded-lg p-2">
            <Icon
              name={app?.category === "fintech" ? "Coins" : "Bot"}
              size={20}
              className="text-primary"
            />
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-space-grotesk font-bold text-xl text-foreground mb-1">
              {app?.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {app?.category === "fintech"
                ? "Cryptocurrency & Payments"
                : "AI Automation"}
            </p>
          </div>
          <div className="flex items-center space-x-1">
            {[...Array(5)]?.map((_, i) => (
              <Icon
                key={i}
                name="Star"
                size={14}
                className={
                  i < app?.rating ? "text-accent fill-current" : "text-muted"
                }
              />
            ))}
            <span className="text-sm text-muted-foreground ml-2">
              ({app?.ratingCount})
            </span>
          </div>
        </div>

        <p className="text-foreground mb-4 leading-relaxed">
          {isExpanded ? app?.fullDescription : app?.description}
        </p>

        {app?.fullDescription && app?.fullDescription !== app?.description && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary text-sm font-medium hover:text-primary/80 brand-transition mb-4"
          >
            {isExpanded ? "Show less" : "Read more"}
          </button>
        )}

        <div className="space-y-3 mb-6">
          <h4 className="font-space-grotesk font-semibold text-foreground">
            Key Features
          </h4>
          <div className="grid grid-cols-1 gap-2">
            {app?.features
              ?.slice(0, isExpanded ? app?.features?.length : 3)
              ?.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-success flex-shrink-0"
                  />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="text-lg font-bold text-foreground">
                {app?.waitlistCount}
              </div>
              <div className="text-xs text-muted-foreground">On Waitlist</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-foreground">
                {app?.expectedLaunch}
              </div>
              <div className="text-xs text-muted-foreground">
                Expected Launch
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {app?.platforms?.map((platform, index) => (
              <div
                key={index}
                className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center"
              >
                <Icon
                  name={
                    platform === "ios"
                      ? "Smartphone"
                      : platform === "android"
                      ? "Smartphone"
                      : "Globe"
                  }
                  size={16}
                  className="text-muted-foreground"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <Button
            variant="default"
            fullWidth
            iconName="Bell"
            iconPosition="left"
            onClick={() => onJoinWaitlist(app)}
            className="bg-primary hover:bg-primary/90"
          >
            Join Waitlist
          </Button>

          {app?.demoAvailable && (
            <Button
              variant="outline"
              fullWidth
              iconName="Play"
              iconPosition="left"
            >
              View Demo
            </Button>
          )}
        </div>

        {app?.integrations && app?.integrations?.length > 0 && (
          <div className="mt-6 pt-4 border-t border-border">
            <h5 className="text-sm font-semibold text-foreground mb-2">
              Integrates with
            </h5>
            <div className="flex items-center space-x-2">
              {app?.integrations?.map((integration, index) => (
                <div
                  key={index}
                  className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground"
                >
                  {integration}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default AppCard;
