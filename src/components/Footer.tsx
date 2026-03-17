import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/dcc-logo.jpg";

const Footer = () => (
  <footer style={{ background: 'linear-gradient(to bottom, #020617, #0F172A)' }}>
    <div className="container-narrow section-padding pb-8">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-1">
          <img src={logo} alt="Doctor Career Consultancy" className="h-12 w-auto mb-5 rounded-lg" />
          <p className="text-slate-400 text-sm leading-relaxed" style={{ lineHeight: '1.7' }}>
            Best Placement Agency in Jaipur. Your trusted recruitment partner with 7+ years of industry experience.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-5 text-white">Quick Links</h4>
          <ul className="space-y-3">
            {[
              { label: "Home", path: "/" },
              { label: "About", path: "/about" },
              { label: "Services", path: "/services" },
              { label: "Latest Jobs", path: "/jobs" },
              { label: "Build Your CV", path: "/cv" },
              { label: "FAQ", path: "/faq" },
            ].map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="text-sm text-slate-500 hover:text-indigo-400 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-5 text-white">Our Services</h4>
          <ul className="space-y-3 text-sm text-slate-500">
            <li>Recruitment & Staffing</li>
            <li>Job Placement Services</li>
            <li>Industry-Specific Hiring</li>
            <li>End-to-End Hiring Support</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-5 text-white">Contact Us</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex items-start gap-3">
              <Phone size={16} className="mt-0.5 shrink-0 text-indigo-500" />
              +91 88750 61164
            </li>
            <li className="flex items-start gap-3">
              <Mail size={16} className="mt-0.5 shrink-0 text-indigo-500" />
              hr@doctorcareerconsultancy.in
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-indigo-500" />
              Jaipur, Rajasthan, India
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 pt-8 text-center text-sm text-slate-600">
        © 2026 Doctor Career Consultancy. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
