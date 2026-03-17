import { useState } from "react";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { z } from "zod";
import AnimatedSection from "@/components/AnimatedSection";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email"),
  phone: z.string().trim().min(1, "Phone is required").max(20),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast({ title: "Message Sent!", description: "We'll get back to you soon." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <section className="hero-gradient section-padding text-center">
        <div className="container-narrow relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ letterSpacing: '-1.5px' }}>Contact Us</h1>
          <p className="text-white/50 max-w-2xl mx-auto" style={{ fontSize: '18px', lineHeight: '1.7' }}>
            Get in touch with our team today
          </p>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-16">
            <AnimatedSection>
              <h2 className="text-2xl font-bold mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                {(["name", "email", "phone"] as const).map((field) => (
                  <div key={field}>
                    <input
                      type={field === "email" ? "email" : "text"}
                      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                      value={form[field]}
                      onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl bg-white border border-border text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/40 transition-all shadow-soft"
                    />
                    {errors[field] && <p className="text-destructive text-xs mt-1">{errors[field]}</p>}
                  </div>
                ))}
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl bg-white border border-border text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/40 transition-all resize-none shadow-soft"
                  />
                  {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                </div>
                <button type="submit" className="btn-primary">
                  Send Message <Send size={16} />
                </button>
              </form>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-6 mb-10">
                {[
                  { icon: Phone, label: "Phone", value: "+91 88750 61164" },
                  { icon: Mail, label: "Email", value: "hr@doctorcareerconsultancy.in" },
                  { icon: MapPin, label: "Address", value: "Jaipur, Rajasthan, India" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(168,85,247,0.1))' }}>
                      <item.icon className="text-indigo-500" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{item.label}</p>
                      <p className="text-muted-foreground text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/918875061164"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-success w-full justify-center"
              >
                <MessageCircle size={18} /> Chat on WhatsApp Now
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
