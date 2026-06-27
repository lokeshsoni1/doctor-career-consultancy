import { useState, useEffect, useRef } from "react";
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
import { Case } from "@/components/ui/cases-with-infinite-scroll";

const industries = [
  { icon: Headphones, label: "BPO & Customer Support" },
  { icon: Monitor, label: "Information Technology (IT)" },
  { icon: GraduationCap, label: "Education & Training" },
  { icon: Settings, label: "Administration & Operations" },
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
    initials: 'RM',
    name: "Rohan Malhotra",
    role: "Operations Manager",
    quote: "The team gave me the exact career roadmap I needed for a leadership pivot. Their placement support helped me secure a premium management role within weeks!",
    tags: [{ text: 'FEATURED', type: 'featured' }, { text: 'Operations', type: 'default' }] as { text: string; type: 'featured' | 'default' }[],
    stats: [{ icon: ShieldCheck, text: 'Verified Placement' }, { icon: Calendar, text: '4 weeks process' }],
    avatarGradient: 'linear-gradient(135deg, #0284C7, #0ea5e9)',
  },
  {
    id: 2,
    initials: 'PN',
    name: "Priyanka Nair",
    role: "HR Specialist",
    quote: "Highly professional recruitment agency! They guided me through strategic profile building and connected me with top-tier corporate organizations effortlessly.",
    tags: [{ text: 'Corporate Partner', type: 'default' }, { text: 'HR Specialist', type: 'default' }] as { text: string; type: 'featured' | 'default' }[],
    stats: [{ icon: ShieldCheck, text: 'Verified Candidate' }],
    avatarGradient: 'linear-gradient(135deg, #00f2fe, #0284C7)',
  },
  {
    id: 3,
    initials: 'AS',
    name: "Amit Sharma",
    role: "Business Analyst",
    quote: "I was confused about changing industries, but their experts pointed me in the right direction and landed me a fantastic corporate strategist role.",
    tags: [{ text: 'Career Shift', type: 'default' }] as { text: string; type: 'featured' | 'default' }[],
    stats: [{ icon: ShieldCheck, text: 'Verified Placement' }],
    avatarGradient: 'linear-gradient(135deg, #7c3aed, #00f2fe)',
  },
  {
    id: 4,
    initials: 'SI',
    name: "Sneha Iyer",
    role: "Software Engineer",
    quote: "Brilliant experience. From resume fine-tuning to technical interview prep, their end-to-end guidance was the turning point in my job search journey.",
    tags: [{ text: 'Engineering', type: 'default' }] as { text: string; type: 'featured' | 'default' }[],
    stats: [{ icon: ShieldCheck, text: 'Verified Placement' }],
    avatarGradient: 'linear-gradient(135deg, #f43f5e, #fb7185)',
  },
  {
    id: 5,
    initials: 'VJ',
    name: "Vikram Joshi",
    role: "Project Lead",
    quote: "They don't just share random job listings; they analyze your core potential and show you the right career path. Highly recommended for professionals!",
    tags: [{ text: 'Management', type: 'default' }] as { text: string; type: 'featured' | 'default' }[],
    stats: [{ icon: ShieldCheck, text: 'Verified Candidate' }],
    avatarGradient: 'linear-gradient(135deg, #10b981, #34d399)',
  },
  {
    id: 6,
    initials: 'AD',
    name: "Ananya Desai",
    role: "Marketing Executive",
    quote: "Thanks to this agency, I got shortlisted at my dream digital firm. Their mock interview rounds boosted my confidence immensely before the final selection.",
    tags: [{ text: 'Marketing', type: 'default' }] as { text: string; type: 'featured' | 'default' }[],
    stats: [{ icon: ShieldCheck, text: 'Verified Placement' }],
    avatarGradient: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
  },
  {
    id: 7,
    initials: 'SV',
    name: "Sandeep Verma",
    role: "Supply Chain Head",
    quote: "Incredible network of premium corporate companies. They managed my profile seamlessly and handled the entire salary negotiation process perfectly.",
    tags: [{ text: 'Supply Chain', type: 'default' }] as { text: string; type: 'featured' | 'default' }[],
    stats: [{ icon: ShieldCheck, text: 'Verified Placement' }],
    avatarGradient: 'linear-gradient(135deg, #6366f1, #818cf8)',
  },
  {
    id: 8,
    initials: 'MK',
    name: "Meera Krishnan",
    role: "Talent Acquisition",
    quote: "The mentorship here is unmatched. They genuinely care about placing you in roles and organizational cultures where you can excel long-term.",
    tags: [{ text: 'Mentorship', type: 'default' }] as { text: string; type: 'featured' | 'default' }[],
    stats: [{ icon: ShieldCheck, text: 'Verified Candidate' }],
    avatarGradient: 'linear-gradient(135deg, #ec4899, #f472b6)',
  },
  {
    id: 9,
    initials: 'AC',
    name: "Alok Chawla",
    role: "Finance Associate",
    quote: "Outstanding staffing services! They matched my core analytical specialization with the perfect financial institution smoothly and quickly.",
    tags: [{ text: 'Finance', type: 'default' }] as { text: string; type: 'featured' | 'default' }[],
    stats: [{ icon: ShieldCheck, text: 'Verified Placement' }],
    avatarGradient: 'linear-gradient(135deg, #14b8a6, #2dd4bf)',
  },
  {
    id: 10,
    initials: 'RF',
    name: "Ritu Fernandez",
    role: "Customer Success Lead",
    quote: "Their industry-specific insights helped me pivot my career domain effortlessly. The final placement onboarding support was flawless.",
    tags: [{ text: 'Customer Success', type: 'default' }] as { text: string; type: 'featured' | 'default' }[],
    stats: [{ icon: ShieldCheck, text: 'Verified Placement' }],
    avatarGradient: 'linear-gradient(135deg, #8b5cf6, #a78bfa)',
  },
  {
    id: 11,
    initials: 'KR',
    name: "Kavita Rao",
    role: "Data Scientist",
    quote: "Finding the right high-growth startup role was stressful until I consulted them. They made the entire interview transit transparent and easy.",
    tags: [{ text: 'Data Science', type: 'default' }] as { text: string; type: 'featured' | 'default' }[],
    stats: [{ icon: ShieldCheck, text: 'Verified Placement' }],
    avatarGradient: 'linear-gradient(135deg, #f97316, #fb923c)',
  },
  {
    id: 12,
    initials: 'MG',
    name: "Manish Gupta",
    role: "Sales Director",
    quote: "A trusted partner for corporate career growth. They aligned my profile with tech organizations that matched my exact growth criteria.",
    tags: [{ text: 'Sales', type: 'default' }] as { text: string; type: 'featured' | 'default' }[],
    stats: [{ icon: ShieldCheck, text: 'Verified Candidate' }],
    avatarGradient: 'linear-gradient(135deg, #06b6d4, #22d3ee)',
  },
  {
    id: 13,
    initials: 'DA',
    name: "Divya Aggarwal",
    role: "Content Strategist",
    quote: "Fast, responsive, and highly professional. They mapped my portfolio to an incredible media position that I absolutely love.",
    tags: [{ text: 'Creative', type: 'default' }] as { text: string; type: 'featured' | 'default' }[],
    stats: [{ icon: ShieldCheck, text: 'Verified Placement' }],
    avatarGradient: 'linear-gradient(135deg, #d946ef, #e879f9)',
  },
  {
    id: 14,
    initials: 'RB',
    name: "Rahul Bannerjee",
    role: "Administrative Officer",
    quote: "They helped me identify my operational strengths and guided me directly to top-tier administrative and facility management roles.",
    tags: [{ text: 'Operations', type: 'default' }] as { text: string; type: 'featured' | 'default' }[],
    stats: [{ icon: ShieldCheck, text: 'Verified Candidate' }],
    avatarGradient: 'linear-gradient(135deg, #64748b, #94a3b8)',
  },
  {
    id: 15,
    initials: 'NK',
    name: "Neha Kapoor",
    role: "Product Manager",
    quote: "The best decision I made for my career acceleration. Their personalized placement strategy helped me stand out in a highly competitive job market.",
    tags: [{ text: 'Product Management', type: 'default' }] as { text: string; type: 'featured' | 'default' }[],
    stats: [{ icon: ShieldCheck, text: 'Verified Placement' }],
    avatarGradient: 'linear-gradient(135deg, #4f46e5, #6366f1)',
  }
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
    }, 3000);
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
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out bg-cover"
              style={{
                backgroundImage: `url(${img})`,
                backgroundPosition: '75% center',
                opacity: idx === currentSlide ? 1 : 0,
              }}
            />
          ))}
          {/* Asymmetric left-side soft white linear gradient overlay */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              background: 'linear-gradient(to right, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.6) 40%, rgba(255, 255, 255, 0) 100%)'
            }}
          />
        </div>

        <div className="container-narrow relative z-10 py-12 flex items-center min-h-[calc(100vh-140px)]">
          <div className="flex flex-col items-center text-center md:items-start md:text-left max-w-xl lg:max-w-[45%] mr-auto w-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-full flex flex-col items-center md:items-start"
            >
              <h1 className="text-3xl md:text-5xl lg:text-[3.25rem] xl:text-6xl font-extrabold text-foreground leading-[1.15] mb-6 tracking-tight text-center md:text-left">
                Connecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Skilled Professionals</span> With Leading Organizations
              </h1>
              <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed text-center md:text-left mx-auto md:mx-0">
                Your trusted recruitment partner with 7+ years of experience in connecting talented professionals with reputable organizations across multiple industries.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
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
    <Case />

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
    <section className="section-padding" style={{ background: 'linear-gradient(135deg, #FFFDF9 0%, #FDF6EC 50%, #F7EFE5 100%)' }}>
      <div className="container-narrow">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">What Our Clients Say</h2>
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
