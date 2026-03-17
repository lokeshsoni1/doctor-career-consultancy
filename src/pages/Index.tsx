import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, Users, Building2, Target, CheckCircle2,
  Briefcase, GraduationCap, Headphones,
  Monitor, Settings, Star, Quote, MessageCircle
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const industries = [
  { icon: Headphones, label: "BPO & Customer Support" },
  { icon: Monitor, label: "Information Technology (IT)" },
  { icon: GraduationCap, label: "Education & Training" },
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

const Index = () => (
  <>
    {/* Hero */}
    <section className="hero-gradient relative overflow-hidden min-h-[90vh] flex items-center">
      <div className="container-narrow relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-white/50 text-sm font-medium tracking-wider uppercase mb-4">
            Best Placement Agency in Jaipur
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-[72px] font-extrabold text-white leading-[1.08] mb-6" style={{ letterSpacing: '-2px' }}>
            Connecting Skilled Professionals With <span className="gradient-text">Leading Organizations</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl leading-relaxed" style={{ lineHeight: '1.7' }}>
            Your trusted recruitment partner with 7+ years of experience in connecting talented professionals with reputable organizations across multiple industries.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/jobs" className="btn-primary">
              View Job Opportunities <ArrowRight size={18} />
            </Link>
            <Link to="/cv" className="btn-ghost">
              Create Your CV
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Introduction */}
    <section className="section-padding section-light">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-[42px] font-bold mb-6 leading-tight" style={{ letterSpacing: '-1px' }}>
              Welcome to <span className="gradient-text">Doctor Career Consultancy</span>
            </h2>
            <p className="text-sm font-semibold tracking-wider uppercase mb-4 gradient-text">
              Your Trusted Recruitment Partner with 7+ Years of Industry Experience
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4" style={{ fontSize: '18px', lineHeight: '1.7' }}>
              At Doctor Career Consultancy, we specialize in connecting talented professionals with leading organizations across multiple industries. With over 7 years of experience in the recruitment and staffing industry, we are committed to helping companies find the right talent and assisting job seekers in building successful careers.
            </p>
            <p className="text-muted-foreground leading-relaxed" style={{ fontSize: '18px', lineHeight: '1.7' }}>
              Our team focuses on understanding the needs of both employers and candidates to ensure the perfect match for long-term success.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Services */}
    <section className="section-padding section-dark">
      <div className="container-narrow">
        <AnimatedSection>
          <h2 className="text-3xl md:text-[42px] font-bold text-center mb-4 text-white" style={{ letterSpacing: '-1px' }}>Our Services</h2>
          <p className="text-slate-400 text-center mb-16 max-w-xl mx-auto" style={{ fontSize: '18px', lineHeight: '1.7' }}>
            Comprehensive recruitment solutions tailored to your needs
          </p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.1}>
              <div className="premium-card p-12 group" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(168,85,247,0.15))' }}>
                  <s.icon className="text-indigo-500" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{s.title}</h3>
                <p className="text-slate-400 leading-relaxed" style={{ lineHeight: '1.7' }}>{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Industries */}
    <section className="section-padding section-light">
      <div className="container-narrow">
        <AnimatedSection>
          <h2 className="text-3xl md:text-[42px] font-bold text-center mb-16" style={{ letterSpacing: '-1px' }}>Industries We Serve</h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <AnimatedSection key={ind.label} delay={i * 0.05}>
              <div className="premium-card p-8 text-center group">
                <ind.icon className="mx-auto mb-4 text-indigo-500 transition-all duration-300 group-hover:scale-115 group-hover:text-violet-500" size={36} />
                <p className="text-sm font-semibold text-foreground">{ind.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="section-padding section-dark">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-[42px] font-bold mb-10 text-white" style={{ letterSpacing: '-1px' }}>
              Why Choose <span className="gradient-text">Doctor Career</span>?
            </h2>
            <ul className="space-y-5">
              {reasons.map((r) => (
                <li key={r} className="flex items-start gap-4">
                  <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={22} />
                  <span className="text-white font-medium" style={{ fontSize: '18px' }}>{r}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-400 mt-8 leading-relaxed" style={{ fontSize: '18px', lineHeight: '1.7' }}>
              Our goal is to create successful partnerships between employers and talented professionals.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="rounded-3xl p-16 text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #6366F1, #A855F7)' }}>
              <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), transparent 60%)' }} />
              <p className="text-7xl md:text-8xl font-extrabold text-white mb-2 relative z-10">7+</p>
              <p className="text-white/70 font-medium text-lg relative z-10">Years of Industry Experience</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Latest Job Opportunity */}
    <section className="section-padding section-light">
      <div className="container-narrow">
        <AnimatedSection>
          <h2 className="text-3xl md:text-[42px] font-bold text-center mb-4" style={{ letterSpacing: '-1px' }}>Latest Job Opportunity</h2>
          <p className="text-muted-foreground text-center mb-16" style={{ fontSize: '18px' }}>Featured position — apply now via WhatsApp</p>
        </AnimatedSection>
        <AnimatedSection>
          <div className="premium-card accent-border-left p-10 md:p-14 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">🚀 Urgent Hiring – Customer Support Executive</h3>
            <p className="gradient-text font-semibold mb-6">📍 Location: Sitapura, Jaipur</p>

            <div className="mb-5">
              <p className="font-semibold mb-2 text-foreground">Salary:</p>
              <ul className="text-muted-foreground space-y-1 ml-4" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                <li>₹16,000 CTC – Hindi Process</li>
                <li>₹18,000 CTC – English Process</li>
              </ul>
            </div>

            <div className="mb-5">
              <p className="font-semibold mb-2 text-foreground">Work Details:</p>
              <ul className="text-muted-foreground space-y-1 ml-4" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                <li>5 Days Working</li>
                <li>Rotational Shifts</li>
                <li>Rotational Week Off</li>
              </ul>
            </div>

            <div className="mb-5">
              <p className="font-semibold mb-2 text-foreground">Eligibility:</p>
              <ul className="text-muted-foreground space-y-1 ml-4" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                <li>Good communication skills (Hindi / English)</li>
                <li>Basic computer knowledge</li>
                <li>Freshers & experienced both can apply</li>
              </ul>
            </div>

            <div className="mb-8">
              <p className="font-semibold mb-2 text-foreground">Special Perks (For Candidates Outside Jaipur):</p>
              <ul className="text-muted-foreground space-y-1 ml-4" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                <li>One-way travel ticket</li>
                <li>14 Days Free Accommodation</li>
                <li>₹10,000 Relocation Bonus</li>
              </ul>
            </div>

            <p className="text-muted-foreground mb-8" style={{ fontSize: '18px', lineHeight: '1.7' }}>
              Interested candidates can DM or share their resume on WhatsApp now.
            </p>

            <a
              href="https://wa.me/918875061164"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-success"
            >
              <MessageCircle size={18} /> Apply Now
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Testimonials */}
    <section className="section-padding section-dark">
      <div className="container-narrow">
        <AnimatedSection>
          <h2 className="text-3xl md:text-[42px] font-bold text-center mb-16 text-white" style={{ letterSpacing: '-1px' }}>What Our Clients Say</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <div className="rounded-[20px] p-10 hover-lift" style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <Quote className="text-indigo-500/40 mb-5" size={36} />
                <p className="text-slate-300 leading-relaxed mb-8" style={{ fontSize: '16px', lineHeight: '1.7' }}>{t.text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #6366F1, #A855F7)' }}>
                    <Star className="text-white" size={16} />
                  </div>
                  <p className="font-semibold text-sm text-white">{t.name}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding section-light">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="rounded-3xl p-14 md:p-20 text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0F172A, #1E293B)' }}>
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(99,102,241,0.15), transparent 60%), radial-gradient(ellipse at 70% 30%, rgba(168,85,247,0.1), transparent 60%)' }} />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-[42px] font-bold text-white mb-6" style={{ letterSpacing: '-1px' }}>
                Ready to Take the Next Step?
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                Whether you are a company looking for the right talent or a job seeker searching for the right opportunity, Doctor Career Consultancy is here to guide you.
              </p>
              <Link to="/contact" className="btn-primary">
                Contact Us Today <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default Index;
