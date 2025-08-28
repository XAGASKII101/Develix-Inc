import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import SolutionsB2BServiceEcosystem from './pages/solutions-b2b-service-ecosystem';
import ProjectsHub from './pages/projects-hub-technical-showcase-vision';
import AboutEcosystemPage from './pages/about-ecosystem-founder-stories-culture';
import ContactPartnershipsMultiEngagementHub from './pages/contact-partnerships-multi-engagement-hub';
import AppsConsumerMarketplace from './pages/apps-consumer-marketplace-early-access';
import Homepage from './pages/homepage-dual-path-ai-technology-hub';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<AboutEcosystemPage />} />
        <Route path="/solutions-b2b-service-ecosystem" element={<SolutionsB2BServiceEcosystem />} />
        <Route path="/projects-hub-technical-showcase-vision" element={<ProjectsHub />} />
        <Route path="/about-ecosystem-founder-stories-culture" element={<AboutEcosystemPage />} />
        <Route path="/contact-partnerships-multi-engagement-hub" element={<ContactPartnershipsMultiEngagementHub />} />
        <Route path="/apps-consumer-marketplace-early-access" element={<AppsConsumerMarketplace />} />
        <Route path="/homepage-dual-path-ai-technology-hub" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
