import { ReactNode, useEffect, useRef } from "react";
import { MessageCircle } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import Lenis from "lenis";
import { StarfieldCanvas } from "./StarfieldCanvas";

const Layout = ({ children }: { children: ReactNode }) => {
  const scrollProgressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollProgressRef.current) {
        scrollProgressRef.current.style.width = `${scrollPercent}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      lenis.destroy();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-background text-foreground">
      {/* Starfield Particle Background */}
      <StarfieldCanvas />
      {/* Scroll Progress Bar */}
      <div 
        ref={scrollProgressRef}
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-primary to-accent z-[100] transition-all duration-100 ease-out"
        style={{ width: '0%' }}
      />

      {/* Background Decorative Mesh Orbs */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[60%] right-[-10%] w-[600px] h-[600px] rounded-full bg-accent/10 blur-[150px] pointer-events-none z-0" />

      <Header />
      <main className="flex-1 pt-0 relative z-10">{children}</main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/918875061164"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[hsl(142,70%,45%)] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};

export default Layout;
