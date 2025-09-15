import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-16">
                <img src="/Develix_Logo.webp" alt="" />
              </div>
              <div>
                <div className="font-space-grotesk font-bold text-2xl">
                  Develix Inc
                </div>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
              Empowering Africa’s enterprises with next-gen solutions in AI,
              blockchain, and cloud. We build scalable systems designed for the
              future of global business.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-space-grotesk font-bold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>AI Development</li>
              <li>Blockchain Integration</li>
              <li>Enterprise Cloud</li>
              <li>Custom Software</li>
              <li>Digital Transformation</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-space-grotesk font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>Careers</li>
              {/* <li>Partners</li> */}
              {/* <li>Blog & Insights</li> */}
              <li>Contact</li>
            </ul>
          </div>

          {/* Apps */}
          <div>
            <h4 className="font-space-grotesk font-bold mb-4">Apps</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Elixa Coin</li>
              <li>Vendra</li>
              {/* <li>CloudOps Dashboard</li>
            <li>Enterprise CRM</li> */}
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between border-t border-border pt-6 gap-4">
          <div className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Develix Technologies. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
