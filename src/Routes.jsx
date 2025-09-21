import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import SolutionsB2BServiceEcosystem from "./pages/solutions-b2b-service-ecosystem";
import ProjectsHub from "./pages/projects-hub-technical-showcase-vision";
import AboutEcosystemPage from "./pages/about-ecosystem-founder-stories-culture";
import ContactPartnershipsMultiEngagementHub from "./pages/contact-partnerships-multi-engagement-hub";
import AppsConsumerMarketplace from "./pages/apps-consumer-marketplace-early-access";
import Homepage from "./pages/homepage-dual-path-ai-technology-hub";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          {/* Define your route here */}
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<AboutEcosystemPage />} />
          <Route path="/solutions" element={<SolutionsB2BServiceEcosystem />} />
          <Route path="/projects-hub" element={<ProjectsHub />} />
          <Route
            path="/contact-us"
            element={<ContactPartnershipsMultiEngagementHub />}
          />
          <Route path="/marketplace" element={<AppsConsumerMarketplace />} />
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
