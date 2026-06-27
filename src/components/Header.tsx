import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/dcc-logo.jpg";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Latest Jobs", path: "/jobs" },
  { label: "Build Your CV", path: "/cv" },
  { label: "Contact Us", path: "/contact" },
  { label: "FAQ", path: "/faq" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 md:px-6 transition-all duration-500">
      <div
        className="container-narrow flex items-center justify-between h-16 md:h-18 px-6 rounded-2xl transition-all duration-500"
        style={{
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.03)',
        }}
      >
        <Link
          to="/"
          onClick={(e) => {
            // Scroll smoothly to top
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3"
        >
          <img src={logo} alt="Doctor Career Consultancy" className="h-10 md:h-12 w-auto object-contain rounded-lg" />
          <span className="hidden sm:block font-normal text-2xl md:text-3xl text-foreground leading-tight tracking-wide" style={{ fontFamily: "'Great Vibes', cursive", letterSpacing: "0.02em", wordSpacing: "0.05em", background: 'linear-gradient(to right, #0F172A, #0284C7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', paddingBottom: "2px" }}>
            Doctor Career
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 rounded-lg text-xs font-semibold tracking-wide uppercase transition-colors duration-300 ${
                location.pathname === link.path
                  ? "bg-gradient-accent text-primary-foreground"
                  : "text-foreground/75 hover:text-foreground hover:bg-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://forms.gle/pRo9QmQH7uU5Sv868"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-2 bg-gradient-button text-primary-foreground px-5 py-2 rounded-lg text-xs font-bold tracking-wide uppercase hover:brightness-110 hover:scale-105 transition-all duration-300"
            style={{ boxShadow: 'var(--shadow-glow)' }}
          >
            <MessageCircle size={14} /> Apply Now
          </a>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors text-foreground"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-2 bg-[rgba(255,255,255,0.96)] backdrop-blur-xl border border-[rgba(15,23,42,0.08)] rounded-2xl overflow-hidden shadow-2xl"
          >
            <nav className="py-4 px-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg text-xs font-semibold tracking-wide uppercase transition-colors ${
                    location.pathname === link.path
                      ? "bg-gradient-accent text-primary-foreground"
                      : "text-foreground/70 hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://forms.gle/pRo9QmQH7uU5Sv868"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 bg-gradient-button text-primary-foreground px-4 py-3 rounded-lg text-xs font-bold tracking-wide uppercase"
              >
                <MessageCircle size={14} /> Apply Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
