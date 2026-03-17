import { ReactNode } from "react";
import { MessageCircle } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1 pt-16 md:pt-20">{children}</main>
    <Footer />

    {/* Floating WhatsApp Button */}
    <a
      href="https://wa.me/918875061164"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-heavy hover:scale-110 transition-all duration-300"
      style={{ background: 'linear-gradient(135deg, #22C55E, #16A34A)' }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="text-white" />
    </a>
  </div>
);

export default Layout;
