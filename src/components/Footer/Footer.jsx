import { Facebook, Instagram, Linkedin } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content py-10 flex flex-col min-h-9">
      {/* Top row - main sections */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center md:text-left w-full max-w-6xl mx-auto">
        {/* Column 1: Brand / Title */}
        <div>
          <h2 className="text-2xl font-bold mb-4">CS — Ticket System</h2>
          <p className="text-sm opacity-80">
            Modern ticket management for teams that value clarity and speed.
            Built to help you support your customers better every day.
          </p>
        </div>

        {/* Column 2: Company */}
        <div>
          <h6 className="footer-title mb-4">Company</h6>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="link link-hover">About Us</a>
            </li>
            <li>
              <a className="link link-hover">Our Mission</a>
            </li>
            <li>
              <a className="link link-hover">Contact Sales</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h6 className="footer-title mb-4">Services</h6>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="link link-hover">Products & Services</a>
            </li>
            <li>
              <a className="link link-hover">Customer Stories</a>
            </li>
            <li>
              <a className="link link-hover">Download Apps</a>
            </li>
            <li>
              <a className="link link-hover">Join Us</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Information */}
        <div>
          <h6 className="footer-title mb-4">Information</h6>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="link link-hover">Privacy Policy</a>
            </li>
            <li>
              <a className="link link-hover">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        {/* Column 5: Social Links */}
        <div>
          <h6 className="footer-title mb-4">Social Links</h6>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Instagram />
              <span>Instagram</span>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Linkedin />
              <span>LinkedIn</span>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Facebook />
              <span>Facebook</span>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <a className="link link-hover">support@cs ticket system</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright line */}
      <div className="mt-auto pt-6 border-t border-neutral-content/20 w-full text-center text-sm opacity-70">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
