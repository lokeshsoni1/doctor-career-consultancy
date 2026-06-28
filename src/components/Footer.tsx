import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Linkedin, MessageCircle } from "lucide-react";
import logo from "@/assets/dcc-logo.jpg";

const Footer = () => (
  <footer
    className="relative overflow-hidden lazy-paint"
    style={{
      borderTop: '1px solid rgba(255, 255, 255, 0.4)',
      boxShadow: '0 -10px 30px rgba(0, 0, 0, 0.02)',
    }}
  >
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(255, 255, 255, 0.25)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        zIndex: -1,
      }}
    />
    <div className="container-narrow section-padding pb-8">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-1">
          <img src={logo} alt="Doctor Career Consultancy" className="h-12 w-auto mb-4 rounded" />
          <p className="text-slate-600 text-sm leading-relaxed font-medium">
            Your trusted recruitment partner with 7+ years of industry experience.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-[#0F172A] tracking-tight text-base">Quick Links</h4>
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
                <Link to={l.path} className="text-sm text-slate-600 hover:text-accent font-semibold transition-colors duration-300">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-[#0F172A] tracking-tight text-base">Our Services</h4>
          <ul className="space-y-2 text-sm text-slate-600 font-semibold">
            <li>Recruitment & Staffing</li>
            <li>Job Placement Services</li>
            <li>Industry-Specific Hiring</li>
            <li>End-to-End Hiring Support</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-[#0F172A] tracking-tight text-base">Contact Us</h4>
          <ul className="space-y-3 text-sm text-slate-600 font-semibold">
            <li className="flex items-start gap-2">
              <Phone size={16} className="mt-0.5 shrink-0 text-[#0284C7]" />
              +91 88750 61164
            </li>
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 shrink-0 text-[#0284C7]" />
              hr@doctorcareerconsultancy.in
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-[#0284C7]" />
              Jaipur, Rajasthan, India
            </li>
          </ul>
          <div className="mt-6">
            <h4 className="font-bold mb-3 text-[#0F172A] tracking-tight text-sm">Follow Us</h4>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/doctorcareerconsultants?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                style={{
                  background: 'rgba(255, 255, 255, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.8)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  color: '#E1306C' // Instagram Official Color
                }}
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/doctor-career-consultancy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                style={{
                  background: 'rgba(255, 255, 255, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.8)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  color: '#0A66C2' // LinkedIn Official Color
                }}
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://chat.whatsapp.com/BkykZAe9CTBCdnVS4zKWOK?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                style={{
                  background: 'rgba(255, 255, 255, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.8)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  color: '#25D366' // WhatsApp Official Color
                }}
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200/50 pt-8 text-center text-sm text-slate-500 font-semibold">
        © 2026 Doctor Career Consultancy. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
