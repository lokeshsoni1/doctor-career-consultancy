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
      <div className="container-narrow relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ letterSpacing: '-1.5px' }}>Our Services</h1>
        <p className="text-white/50 max-w-2xl mx-auto" style={{ fontSize: '18px', lineHeight: '1.7' }}>
          Comprehensive recruitment solutions for employers and job seekers
        </p>
      </div>
    </section>

    <section className="section-padding section-light">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.1}>
              <div className="premium-card p-12 h-full group">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(168,85,247,0.1))' }}>
                  <s.icon className="text-indigo-500" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed" style={{ fontSize: '18px', lineHeight: '1.7' }}>{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding section-dark">
      <div className="container-narrow text-center relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl md:text-[42px] font-bold mb-6 text-white" style={{ letterSpacing: '-1px' }}>Ready to Get Started?</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-10" style={{ fontSize: '18px', lineHeight: '1.7' }}>
            Contact us today to discuss your recruitment needs or explore career opportunities.
          </p>
          <Link to="/contact" className="btn-primary">
            Contact Us <ArrowRight size={18} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default Services;
