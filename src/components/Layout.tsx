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
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[hsl(142,70%,45%)] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  </div>
);

export default Layout;
