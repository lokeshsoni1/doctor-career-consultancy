import { Users, Briefcase, Building2, Target, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { Tilt } from "@/components/Tilt";
import { Case } from "@/components/ui/cases-with-infinite-scroll";

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
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Comprehensive recruitment solutions for employers and job seekers
        </p>
      </div>
    </section>

    {/* Custom background image overlay mapped with light 4px blur overlay */}
    <div
      style={{
        backgroundImage: 'url("https://res.cloudinary.com/dbpdexty8/image/upload/v1781410987/samples/canvas.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(255, 255, 255, 0.75)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          zIndex: -1,
        }}
      />
      <Case />
    </div>

    <section className="section-padding">
      <div className="container-narrow text-center">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Ready to Get Started?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Contact us today to discuss your recruitment needs or explore career opportunities.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gradient-button text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:brightness-110 hover:scale-105 transition-all duration-300 text-sm"
            style={{ boxShadow: 'var(--shadow-glow)' }}
          >
            Contact Us <ArrowRight size={18} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default Services;
