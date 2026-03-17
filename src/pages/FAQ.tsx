import AnimatedSection from "@/components/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What industries does Doctor Career Consultancy serve?", a: "We serve multiple industries including BPO & Customer Support, Information Technology, Education & Training, and Administration & Operations." },
  { q: "How can I apply for a job through Doctor Career?", a: "You can browse our Jobs page to see current openings and apply directly via WhatsApp. You can also create your CV using our built-in resume builder and submit it to us for consideration." },
  { q: "Do you charge job seekers for placement services?", a: "Our primary focus is connecting talent with opportunities. Contact us to learn more about our process and any applicable terms." },
  { q: "How long does the recruitment process typically take?", a: "The timeline varies depending on the role and industry. Generally, our efficient process ensures placements are made within 2-4 weeks from initial screening." },
  { q: "What makes Doctor Career different from other recruitment agencies?", a: "With 7+ years of experience, a strong multi-industry network, quality candidate screening, and commitment to long-term success, we stand out through reliability and personalized service." },
  { q: "Can employers request candidates for specific skill sets?", a: "Absolutely. We specialize in industry-specific hiring and can source candidates with precise skill sets and experience levels tailored to your requirements." },
  { q: "How can I contact Doctor Career Consultancy?", a: "You can reach us through our Contact page, by phone at +91 88750 61164, or by email at hr@doctorcareerconsultancy.in." },
];

const FAQ = () => (
  <>
    <section className="hero-gradient section-padding text-center">
      <div className="container-narrow relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ letterSpacing: '-1.5px' }}>Frequently Asked Questions</h1>
        <p className="text-white/50 max-w-2xl mx-auto" style={{ fontSize: '18px', lineHeight: '1.7' }}>
          Find answers to common questions about our services
        </p>
      </div>
    </section>

    <section className="section-padding section-light">
      <div className="container-narrow max-w-3xl mx-auto">
        <AnimatedSection>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="premium-card px-8 border-none"
              >
                <AccordionTrigger className="text-left font-semibold text-sm hover:no-underline py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-6" style={{ lineHeight: '1.7' }}>
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default FAQ;
