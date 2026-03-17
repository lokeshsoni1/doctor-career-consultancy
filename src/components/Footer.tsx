import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/dcc-logo.jpg";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container-narrow section-padding pb-8">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-1">
          <img src={logo} alt="Doctor Career Consultancy" className="h-12 w-auto mb-4 rounded" />
          <p className="text-background/60 text-sm leading-relaxed">
            Best Placement Agency in Jaipur. Your trusted recruitment partner with 7+ years of industry experience.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-background/90">Quick Links</h4>
          <ul className="space-y-2">
            {[
              { label: "Home", path: "/" },
              { label: "About", path: "/about" },
              { label: "Services", path: "/services" },
              { label: "Latest Jobs", path: "/jobs" },
              { label: "Build Your CV", path: "/cv" },
              { label: "FAQ", path: "/faq" },
            ].map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="text-sm text-background/50 hover:text-background transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-background/90">Our Services</h4>
          <ul className="space-y-2 text-sm text-background/50">
            <li>Recruitment & Staffing</li>
            <li>Job Placement Services</li>
            <li>Industry-Specific Hiring</li>
            <li>End-to-End Hiring Support</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-background/90">Contact Us</h4>
          <ul className="space-y-3 text-sm text-background/50">
            <li className="flex items-start gap-2">
              <Phone size={16} className="mt-0.5 shrink-0" />
              +91 88750 61164
            </li>
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 shrink-0" />
              hr@doctorcareerconsultancy.in
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              Jaipur, Rajasthan, India
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10 pt-8 text-center text-sm text-background/40">
        © 2026 Doctor Career Consultancy. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
