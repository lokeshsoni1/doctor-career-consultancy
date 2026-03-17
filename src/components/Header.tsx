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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-2xl shadow-soft border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-narrow flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Doctor Career Consultancy" className="h-10 w-auto rounded-lg" />
          <span className={`hidden sm:block font-bold text-lg transition-colors ${scrolled ? 'text-foreground' : 'text-white'}`}>
            Doctor Career
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                location.pathname === link.path
                  ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-medium"
                  : scrolled
                    ? "text-foreground/70 hover:text-foreground hover:bg-muted"
                    : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/918875061164"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 btn-success !py-2 !px-5 !rounded-xl"
          >
            <MessageCircle size={16} /> Apply Now
          </a>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 rounded-xl transition-colors ${scrolled ? 'text-foreground hover:bg-muted' : 'text-white hover:bg-white/10'}`}
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
            className="lg:hidden bg-white/95 backdrop-blur-2xl border-b border-border overflow-hidden"
          >
            <nav className="container-narrow py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white"
                      : "text-foreground/70 hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/918875061164"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 btn-success !py-3 !rounded-xl justify-center"
              >
                <MessageCircle size={16} /> Apply Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
