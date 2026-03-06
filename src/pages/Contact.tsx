import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
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
        <div className="container-narrow">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Contact Us</h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Get in touch with our team today
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                {(["name", "email", "phone"] as const).map((field) => (
                  <div key={field}>
                    <input
                      type={field === "email" ? "email" : "text"}
                      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                      value={form[field]}
                      onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
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
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                  />
                  {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover-lift text-sm"
                >
                  Send Message <Send size={16} />
                </button>
              </form>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6 mb-8">
                {[
                  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
                  { icon: Mail, label: "Email", value: "info@doctorcareerconsultancy.com" },
                  { icon: MapPin, label: "Address", value: "New Delhi, India" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{item.label}</p>
                      <p className="text-muted-foreground text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl overflow-hidden border border-border h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754725782!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1699900000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Office Location"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
