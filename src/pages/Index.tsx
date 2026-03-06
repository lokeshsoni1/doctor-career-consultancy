import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, Users, Building2, Target, CheckCircle2,
  Briefcase, GraduationCap, Car, ShoppingBag, Headphones,
  Monitor, Settings, Star, Quote
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import logo from "@/assets/dcc-logo.jpg";

const industries = [
  { icon: Headphones, label: "BPO & Customer Support" },
  { icon: Monitor, label: "Information Technology (IT)" },
  { icon: GraduationCap, label: "Education & Training" },
  { icon: ShoppingBag, label: "Jewellery Industry" },
  { icon: Car, label: "Automobile Sector" },
  { icon: Target, label: "Sales & Marketing" },
  { icon: Settings, label: "Administration & Operations" },
];

const services = [
  { icon: Users, title: "Recruitment & Staffing", desc: "Helping companies identify and hire skilled professionals for various roles." },
  { icon: Briefcase, title: "Job Placement Services", desc: "Supporting candidates in finding job opportunities that match their qualifications and career goals." },
  { icon: Building2, title: "Industry-Specific Hiring", desc: "Providing recruitment solutions tailored to the needs of different industries." },
  { icon: Target, title: "End-to-End Hiring Support", desc: "From candidate sourcing and screening to interview coordination and final placement." },
];

const reasons = [
  "7+ Years of Recruitment Experience",
  "Strong Network Across Multiple Industries",
  "Reliable and Efficient Hiring Process",
  "Quality Candidate Screening",
  "Commitment to Long-Term Success",
];

const testimonials = [
  { name: "Rajesh Kumar", text: "Doctor Career Consultancy helped me find my dream job in IT within just two weeks. Their team was professional and supportive throughout the process." },
  { name: "Priya Sharma", text: "As an employer, I've been consistently impressed with the quality of candidates DCC provides. They truly understand our hiring needs." },
  { name: "Amit Verma", text: "The team at DCC guided me through every step of my career transition. Their industry knowledge is unmatched. Highly recommended!" },
];

const jobs = [
  { title: "Cardiologist", company: "Apollo Hospital", location: "Delhi", salary: "₹3L/month" },
  { title: "General Physician", company: "Fortis Healthcare", location: "Mumbai", salary: "₹2L/month" },
  { title: "Orthopedic Surgeon", company: "Max Healthcare", location: "Gurgaon", salary: "₹4L/month" },
];

const Index = () => (
  <>
    {/* Hero */}
    <section className="hero-gradient relative overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsla(0,0%,100%,0.1),transparent_60%)]" />
      <div className="container-narrow relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <img src={logo} alt="DCC" className="h-16 w-auto rounded-lg" />
            <span className="text-primary-foreground/60 text-sm font-medium tracking-wider uppercase">
              Be Wise Take Our Advice
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Connecting Skilled Professionals With Leading Organizations
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-2xl leading-relaxed">
            Your trusted recruitment partner with 7+ years of experience in connecting talented professionals with reputable organizations across multiple industries.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/jobs"
              className="inline-flex items-center gap-2 bg-card text-foreground px-8 py-4 rounded-xl font-semibold hover-lift text-sm"
            >
              View Job Opportunities <ArrowRight size={18} />
            </Link>
            <Link
              to="/cv"
              className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 px-8 py-4 rounded-xl font-semibold hover-lift text-sm"
            >
              Create Your CV
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Introduction */}
    <section className="section-padding">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Welcome to <span className="gradient-text">Doctor Career Consultancy</span>
            </h2>
            <p className="text-sm text-primary font-semibold tracking-wider uppercase mb-4">
              Your Trusted Recruitment Partner with 7+ Years of Industry Experience
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At Doctor Career Consultancy, we specialize in connecting talented professionals with leading organizations across multiple industries. With over 7 years of experience in the recruitment and staffing industry, we are committed to helping companies find the right talent and assisting job seekers in building successful careers.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team focuses on understanding the needs of both employers and candidates to ensure the perfect match for long-term success.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Services */}
    <section className="section-padding bg-muted/50">
      <div className="container-narrow">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Comprehensive recruitment solutions tailored to your needs
          </p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-8 hover-lift">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <s.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Industries */}
    <section className="section-padding">
      <div className="container-narrow">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Industries We Serve</h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <AnimatedSection key={ind.label} delay={i * 0.05}>
              <div className="glass-card rounded-2xl p-6 text-center hover-lift">
                <ind.icon className="mx-auto mb-3 text-primary" size={32} />
                <p className="text-sm font-medium">{ind.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="section-padding bg-muted/50">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why Choose <span className="gradient-text">Doctor Career</span>?
            </h2>
            <ul className="space-y-4">
              {reasons.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} />
                  <span className="text-foreground font-medium">{r}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground mt-6 leading-relaxed">
              Our goal is to create successful partnerships between employers and talented professionals.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="hero-gradient rounded-3xl p-12 text-center">
              <p className="text-6xl md:text-7xl font-bold text-primary-foreground mb-2">7+</p>
              <p className="text-primary-foreground/70 font-medium">Years of Industry Experience</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Job Opportunities Preview */}
    <section className="section-padding">
      <div className="container-narrow">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Latest Job Opportunities</h2>
          <p className="text-muted-foreground text-center mb-12">Featured positions from top organizations</p>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {jobs.map((job, i) => (
            <AnimatedSection key={job.title} delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-6 hover-lift">
                <h3 className="font-semibold text-lg mb-2">{job.title}</h3>
                <p className="text-primary font-medium text-sm mb-1">{job.company}</p>
                <p className="text-muted-foreground text-sm mb-3">{job.location}</p>
                <p className="text-foreground font-bold">{job.salary}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/jobs"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover-lift text-sm"
          >
            View All Jobs <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="section-padding bg-muted/50">
      <div className="container-narrow">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-8 hover-lift">
                <Quote className="text-primary/30 mb-4" size={32} />
                <p className="text-muted-foreground leading-relaxed mb-6">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Star className="text-primary" size={16} />
                  </div>
                  <p className="font-semibold text-sm">{t.name}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="hero-gradient rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Take the Next Step?
            </h2>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-8 leading-relaxed">
              Whether you are a company looking for the right talent or a job seeker searching for the right opportunity, Doctor Career Consultancy is here to guide you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-card text-foreground px-8 py-4 rounded-xl font-semibold hover-lift text-sm"
            >
              Contact Us Today <ArrowRight size={18} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default Index;
