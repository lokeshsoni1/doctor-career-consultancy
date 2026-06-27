import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, Users, Building2, Target, CheckCircle2,
  Briefcase, GraduationCap, Headphones,
  Monitor, Settings, Star, Quote, MessageCircle,
  Calendar, ThumbsUp, ShieldCheck
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Tilt } from "@/components/Tilt";
import { TestimonialStack } from "@/components/ui/glass-testimonial-swiper";

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

const testimonialsData = [
  {
    id: 1,
    initials: 'RK',
    name: 'Rajesh Kumar',
    role: 'IT Professional',
    quote: "Doctor Career Consultancy helped me find my dream job in IT within just two weeks. Their team was professional and supportive throughout the process.",
    tags: [{ text: 'FEATURED', type: 'featured' }, { text: 'IT Placement', type: 'default' }] as { text: string; type: 'featured' | 'default' }[],
    stats: [{ icon: ShieldCheck, text: 'Verified Placement' }, { icon: Calendar, text: '2 weeks process' }],
    avatarGradient: 'linear-gradient(135deg, #0284C7, #0ea5e9)',
  },
  {
    id: 2,
    initials: 'PS',
    name: 'Priya Sharma',
    role: 'HR Manager',
    quote: "As an employer, I've been consistently impressed with the quality of candidates DCC provides. They truly understand our hiring needs.",
    tags: [{ text: 'Client Partner', type: 'default' }, { text: 'Recruitment', type: 'default' }] as { text: string; type: 'featured' | 'default' }[],
    stats: [{ icon: Users, text: '10+ hires' }, { icon: ThumbsUp, text: 'Highly Rated' }],
    avatarGradient: 'linear-gradient(135deg, #00f2fe, #0284C7)',
  },
  {
    id: 3,
    initials: 'AV',
    name: 'Amit Verma',
    role: 'Operations Lead',
    quote: "The team at DCC guided me through every step of my career transition. Their industry knowledge is unmatched. Highly recommended!",
    tags: [{ text: 'Career Shift', type: 'default' }] as { text: string; type: 'featured' | 'default' }[],
    stats: [{ icon: ShieldCheck, text: 'Verified Candidate' }],
    avatarGradient: 'linear-gradient(135deg, #7c3aed, #00f2fe)',
  },
];

const slideImages = [
  "https://res.cloudinary.com/dbpdexty8/image/upload/v1782564266/image1_cxxsgq.jpg",
  "https://res.cloudinary.com/dbpdexty8/image/upload/v1782564266/image2_ynzj2g.jpg",
  "https://res.cloudinary.com/dbpdexty8/image/upload/v1782564267/image4_bozjw9.jpg",
  "https://res.cloudinary.com/dbpdexty8/image/upload/v1782564268/image3_pzjxbr.jpg",
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-screen flex items-center pt-28 pb-16 md:pt-36 md:pb-24">
        {/* Slideshow background */}
        <div className="absolute inset-0 z-0">
          {slideImages.map((img, idx) => (
            <div
              key={img}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center"
              style={{
                backgroundImage: `url(${img})`,
                opacity: idx === currentSlide ? 1 : 0,
              }}
            />
          ))}
          {/* Readability overlay - fades out to transparent on the right */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.85) 45%, rgba(255,255,255,0) 80%)'
            }}
          />
        </div>

        <div className="container-narrow relative z-10 py-12">
          <div className="flex flex-col items-start text-left max-w-2xl mr-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full flex flex-col items-start"
            >
              <h1 className="text-3xl md:text-5xl lg:text-[3.25rem] xl:text-6xl font-extrabold text-foreground leading-[1.15] mb-6 tracking-tight">
                Connecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Skilled Professionals</span> With Leading Organizations
              </h1>
              <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed">
                Your trusted recruitment partner with 7+ years of experience in connecting talented professionals with reputable organizations across multiple industries.
              </p>
              <div className="flex flex-wrap gap-4 justify-start">
                <Link
                  to="/jobs"
                  className="inline-flex items-center gap-2 bg-gradient-button text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:brightness-110 hover:scale-105 transition-all duration-300 text-sm"
                  style={{ boxShadow: 'var(--shadow-glow)' }}
                >
                  View Job Opportunities <ArrowRight size={18} />
                </Link>
                <Link
                  to="/cv"
                  className="inline-flex items-center gap-2 border border-primary/30 text-foreground px-8 py-4 rounded-xl font-semibold hover:border-primary hover:bg-primary/5 transition-all duration-300 text-sm"
                >
                  Create Your CV
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    {/* Introduction */}
    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Welcome to <span className="gradient-text">Doctor Career Consultancy</span>
            </h2>
            <p className="text-sm text-accent font-semibold tracking-wider uppercase mb-4">
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
    <section className="section-padding">
      <div className="container-narrow">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Our Services</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Comprehensive recruitment solutions tailored to your needs
          </p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.1}>
              <Tilt className="h-full">
                <div className="glass-card rounded-2xl p-8 hover-lift h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <s.icon className="text-accent" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </Tilt>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Industries */}
    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Industries We Serve</h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <AnimatedSection key={ind.label} delay={i * 0.05}>
              <Tilt className="h-full">
                <div className="glass-card rounded-2xl p-6 text-center hover-lift h-full">
                  <ind.icon className="mx-auto mb-3 text-accent" size={32} />
                  <p className="text-sm font-medium text-foreground">{ind.label}</p>
                </div>
              </Tilt>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="section-padding">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              Why Choose <span className="gradient-text">Doctor Career</span>?
            </h2>
            <ul className="space-y-4">
              {reasons.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={20} />
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
              <p className="text-6xl md:text-7xl font-bold text-foreground mb-2">7+</p>
              <p className="text-muted-foreground font-medium">Years of Industry Experience</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Latest Job Opportunities */}
    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Latest Job Opportunities</h2>
          <p className="text-muted-foreground text-center mb-12">Featured positions — apply now</p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Job 0 – Customer Support Executive */}
          <AnimatedSection>
            <Tilt className="h-full">
              <div className="glass-card rounded-2xl p-8 hover-lift h-full flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-foreground">🚀 Urgent Hiring – Customer Support Executive</h3>
                <p className="text-accent font-medium mb-4">📍 Location: Sitapura, Jaipur</p>
                <div className="mb-3">
                  <p className="font-semibold mb-1 text-foreground">Salary:</p>
                  <ul className="text-muted-foreground space-y-1 ml-4 text-sm">
                    <li>₹16,000 CTC – Hindi Process</li>
                    <li>₹18,000 CTC – English Process</li>
                  </ul>
                </div>
                <div className="mb-3">
                  <p className="font-semibold mb-1 text-foreground">Work Details:</p>
                  <ul className="text-muted-foreground space-y-1 ml-4 text-sm">
                    <li>5 Days Working</li>
                    <li>Rotational Shifts</li>
                    <li>Rotational Week Off</li>
                  </ul>
                </div>
                <div className="mb-3">
                  <p className="font-semibold mb-1 text-foreground">Eligibility:</p>
                  <ul className="text-muted-foreground space-y-1 ml-4 text-sm">
                    <li>Good communication skills (Hindi / English)</li>
                    <li>Basic computer knowledge</li>
                    <li>Freshers & experienced both can apply</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <p className="font-semibold mb-1 text-foreground">Special Perks (For Candidates Outside Jaipur):</p>
                  <ul className="text-muted-foreground space-y-1 ml-4 text-sm">
                    <li>One-way travel ticket</li>
                    <li>14 Days Free Accommodation</li>
                    <li>₹10,000 Relocation Bonus</li>
                  </ul>
                </div>
                <p className="text-muted-foreground mb-5 text-sm">Interested candidates can DM or share their resume on WhatsApp now.</p>
                <div className="mt-auto">
                  <a href="https://forms.gle/pRo9QmQH7uU5Sv868" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-button text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:brightness-110 hover:scale-105 transition-all duration-300 text-sm" style={{ boxShadow: 'var(--shadow-glow)' }}>
                    <MessageCircle size={16} /> Apply Now
                  </a>
                </div>
              </div>
            </Tilt>
          </AnimatedSection>

          {/* Job 1 – International Chat Process */}
          <AnimatedSection delay={0.1}>
            <Tilt className="h-full">
              <div className="glass-card rounded-2xl p-8 hover-lift h-full flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-foreground">💬 International Chat Process</h3>
                <div className="mb-3">
                  <p className="font-semibold mb-1 text-foreground">Must have skills:</p>
                  <ul className="text-muted-foreground space-y-1 ml-4 text-sm">
                    <li>Strong communication skills</li>
                    <li>Good understanding of technical lingo and jargon</li>
                  </ul>
                </div>
                <div className="mb-3">
                  <p className="font-semibold mb-1 text-foreground">Eligibility:</p>
                  <ul className="text-muted-foreground space-y-1 ml-4 text-sm">
                    <li>Undergraduate with minimum 6 months documented experience</li>
                    <li>Graduate freshers</li>
                  </ul>
                </div>
                <div className="mb-3">
                  <p className="font-semibold mb-1 text-foreground">Ideal candidate should:</p>
                  <ul className="text-muted-foreground space-y-1 ml-4 text-sm">
                    <li>Comfortable with rotational shifts (preferably night shifts)</li>
                    <li>Comfortable with rotational week offs</li>
                    <li>Looking for a stable long-term career</li>
                  </ul>
                </div>
                <div className="mb-3">
                  <p className="font-semibold mb-1 text-foreground">Campaign details:</p>
                  <ul className="text-muted-foreground space-y-1 ml-4 text-sm">
                    <li>5 days working</li>
                    <li>10 hour shift (including 1 hour break)</li>
                    <li>Cab facility available post training</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <p className="font-semibold mb-1 text-foreground">CTC:</p>
                  <ul className="text-muted-foreground space-y-1 ml-4 text-sm">
                    <li>Voice: 28,800 CTC + 3,200 PLI monthly</li>
                    <li>Chat: 27,000 CTC + 3,000 PLI monthly</li>
                  </ul>
                </div>
                <div className="mt-auto">
                  <a href="https://forms.gle/pRo9QmQH7uU5Sv868" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-button text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:brightness-110 hover:scale-105 transition-all duration-300 text-sm" style={{ boxShadow: 'var(--shadow-glow)' }}>
                    <MessageCircle size={16} /> Apply Now
                  </a>
                </div>
              </div>
            </Tilt>
          </AnimatedSection>

          {/* Job 2 – Travel Chat Process */}
          <AnimatedSection delay={0.2}>
            <Tilt className="h-full">
              <div className="glass-card rounded-2xl p-8 hover-lift h-full flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-foreground">✈️ Travel Chat Process</h3>
                <p className="text-accent font-medium mb-4">📍 Location: Jaipur</p>
                <div className="space-y-2 text-sm mb-4">
                  <p><span className="font-semibold text-foreground">Process Type:</span> <span className="text-muted-foreground">Non-Technical</span></p>
                  <p><span className="font-semibold text-foreground">Communication:</span> <span className="text-muted-foreground">V5</span></p>
                  <p><span className="font-semibold text-foreground">Education:</span> <span className="text-muted-foreground">UG / Graduate</span></p>
                  <p><span className="font-semibold text-foreground">Experience:</span> <span className="text-muted-foreground">Freshers or Experienced</span></p>
                  <p><span className="font-semibold text-foreground">Salary:</span> <span className="text-muted-foreground">24,500 CTC + 2,500 PLI</span></p>
                  <p><span className="font-semibold text-foreground">Shift:</span> <span className="text-muted-foreground">Rotational (24x7)</span></p>
                  <p><span className="font-semibold text-foreground">Work Mode:</span> <span className="text-muted-foreground">Work From Office</span></p>
                  <p><span className="font-semibold text-foreground">Work Location:</span> <span className="text-muted-foreground">LIC Site, Pratap Nagar</span></p>
                  <p><span className="font-semibold text-foreground">Interview Mode:</span> <span className="text-muted-foreground">Face to Face & Virtual</span></p>
                </div>
                <div className="mt-auto">
                  <a href="https://forms.gle/pRo9QmQH7uU5Sv868" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-button text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:brightness-110 hover:scale-105 transition-all duration-300 text-sm" style={{ boxShadow: 'var(--shadow-glow)' }}>
                    <MessageCircle size={16} /> Apply Now
                  </a>
                </div>
              </div>
            </Tilt>
          </AnimatedSection>

          {/* Job 3 – Technical Support Executive */}
          <AnimatedSection delay={0.3}>
            <Tilt className="h-full">
              <div className="glass-card rounded-2xl p-8 hover-lift h-full flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-foreground">🖥️ Technical Support Executive</h3>
                <div className="mb-3">
                  <p className="font-semibold mb-1 text-foreground">Salary:</p>
                  <ul className="text-muted-foreground space-y-1 ml-4 text-sm">
                    <li>Graduate – 30K CTC</li>
                    <li>Graduate + 1 to 2 years BPO experience: 40K – 44K CTC</li>
                    <li>Graduate + 2+ years BPO experience: 44K – 46K CTC</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <p className="font-semibold mb-1 text-foreground">Work conditions:</p>
                  <ul className="text-muted-foreground space-y-1 ml-4 text-sm">
                    <li>5 days working</li>
                    <li>Rotational shifts</li>
                    <li>Rotational week offs</li>
                  </ul>
                </div>
                <div className="mt-auto">
                  <a href="https://forms.gle/pRo9QmQH7uU5Sv868" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-button text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:brightness-110 hover:scale-105 transition-all duration-300 text-sm" style={{ boxShadow: 'var(--shadow-glow)' }}>
                    <MessageCircle size={16} /> Apply Now
                  </a>
                </div>
              </div>
            </Tilt>
          </AnimatedSection>

          {/* Job 4 – Email Support Executive */}
          <AnimatedSection delay={0.4}>
            <Tilt className="h-full md:col-span-2 max-w-2xl mx-auto w-full">
              <div className="glass-card rounded-2xl p-8 hover-lift h-full flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-foreground">📧 Email Support Executive – Jaipur</h3>
                <div className="mb-3">
                  <p className="font-semibold mb-1 text-foreground">CTC:</p>
                  <p className="text-muted-foreground text-sm ml-4">₹36,000 – ₹38,000 per month</p>
                </div>
                <p className="text-muted-foreground text-sm mb-3">Teleperformance is hiring Email Support Executives for the Jaipur team.</p>
                <div className="mb-3">
                  <p className="font-semibold mb-1 text-foreground">Key responsibilities:</p>
                  <ul className="text-muted-foreground space-y-1 ml-4 text-sm">
                    <li>Respond to customer emails professionally</li>
                    <li>Resolve queries efficiently</li>
                    <li>Escalate complex issues when needed</li>
                    <li>Work with internal teams to ensure customer satisfaction</li>
                  </ul>
                </div>
                <div className="mb-3">
                  <p className="font-semibold mb-1 text-foreground">Salary & incentives:</p>
                  <ul className="text-muted-foreground space-y-1 ml-4 text-sm">
                    <li>CTC: ₹36,000 – ₹38,000</li>
                    <li>Training period in-hand: ₹30K – ₹32K</li>
                    <li>PLI: up to ₹1,000/month</li>
                  </ul>
                </div>
                <div className="mb-3">
                  <p className="font-semibold mb-1 text-foreground">Perks:</p>
                  <ul className="text-muted-foreground space-y-1 ml-4 text-sm">
                    <li>5 day working week</li>
                    <li>Paid training</li>
                    <li>14 days accommodation with breakfast</li>
                    <li>Travel reimbursement</li>
                    <li>Health & wellness coverage</li>
                    <li>Career growth opportunities</li>
                  </ul>
                </div>
                <p className="text-destructive text-sm font-medium mb-3">Important note: No leaves allowed during first 3 months of training.</p>
                <div className="mb-4">
                  <p className="font-semibold mb-1 text-foreground">Eligibility:</p>
                  <ul className="text-muted-foreground space-y-1 ml-4 text-sm">
                    <li>Graduation mandatory</li>
                    <li>Minimum 1 year international customer support experience</li>
                    <li>Strong written communication</li>
                    <li>Flexible with rotational shifts</li>
                  </ul>
                </div>
                <div className="mt-auto">
                  <a href="https://forms.gle/pRo9QmQH7uU5Sv868" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-button text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:brightness-110 hover:scale-105 transition-all duration-300 text-sm" style={{ boxShadow: 'var(--shadow-glow)' }}>
                    <MessageCircle size={16} /> Apply Now
                  </a>
                </div>
              </div>
            </Tilt>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="section-padding">
      <div className="container-narrow">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">What Our Clients Say</h2>
        </AnimatedSection>
        <div className="mt-8">
          <AnimatedSection delay={0.2}>
            <TestimonialStack testimonials={testimonialsData} />
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="hero-gradient rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Take the Next Step?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Whether you are a company looking for the right talent or a job seeker searching for the right opportunity, Doctor Career Consultancy is here to guide you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-button text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:brightness-110 hover:scale-105 transition-all duration-300 text-sm"
              style={{ boxShadow: 'var(--shadow-glow)' }}
            >
              Contact Us Today <ArrowRight size={18} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </>
  );
};

export default Index;
