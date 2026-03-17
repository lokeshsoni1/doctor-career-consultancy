import { Users, Briefcase, Building2, Target, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  { icon: Users, title: "Recruitment & Staffing", desc: "Helping companies identify and hire skilled professionals for various roles. We source, screen, and present the best candidates to ensure a perfect fit for your organization." },
  { icon: Briefcase, title: "Job Placement Services", desc: "Supporting candidates in finding job opportunities that match their qualifications and career goals. We work closely with each candidate to understand their aspirations." },
  { icon: Building2, title: "Industry-Specific Hiring", desc: "Providing recruitment solutions tailored to the needs of different industries. Our deep industry knowledge ensures we find candidates who understand your sector." },
  { icon: Target, title: "End-to-End Hiring Support", desc: "From candidate sourcing and screening to interview coordination and final placement. We handle the entire recruitment lifecycle so you can focus on your business." },
];

const Services = () => (
  <>
    <section className="hero-gradient section-padding text-center">
      <div className="container-narrow">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Our Services</h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto">
          Comprehensive recruitment solutions for employers and job seekers
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-10 hover-lift h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <s.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-muted/50">
      <div className="container-narrow text-center">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Contact us today to discuss your recruitment needs or explore career opportunities.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover-lift text-sm"
          >
            Contact Us <ArrowRight size={18} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default Services;
