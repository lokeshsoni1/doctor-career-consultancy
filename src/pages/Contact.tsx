import { Phone, Mail, MapPin, MessageCircle, Instagram, Linkedin } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Contact = () => {
  return (
    <>
      <section className="hero-gradient section-padding text-center">
        <div className="container-narrow">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our team today
          </p>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-narrow max-w-xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-8 text-center text-foreground">Contact Information</h2>
            <div className="space-y-6 mb-10">
              {[
                { icon: Phone, label: "Phone", value: "+91 88750 61164" },
                { icon: Mail, label: "Email", value: "hr@doctorcareerconsultancy.in" },
                { icon: MapPin, label: "Address", value: "Jaipur, Rajasthan, India" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-foreground">{item.label}</p>
                    <p className="text-muted-foreground text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
              <a
                href="https://www.instagram.com/doctorcareerconsultants?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 hover:scale-105 transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Instagram className="text-accent" size={20} />
                </div>
                <div>
                  <p className="font-medium text-sm text-foreground">Instagram</p>
                  <p className="text-muted-foreground text-sm group-hover:text-accent transition-colors">Follow us on Instagram also</p>
                </div>
              </a>
            </div>

            <a
              href="https://wa.me/918875061164"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-button text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:brightness-110 hover:scale-105 transition-all duration-300 text-sm w-full justify-center"
              style={{ boxShadow: 'var(--shadow-glow)' }}
            >
              <MessageCircle size={18} /> Chat on WhatsApp Now
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Contact;
