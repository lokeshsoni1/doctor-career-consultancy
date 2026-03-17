import { CheckCircle2, Award, Users, TrendingUp } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const About = () => (
  <>
    <section className="hero-gradient section-padding text-center">
      <div className="container-narrow relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ letterSpacing: '-1.5px' }}>About Us</h1>
        <p className="text-white/50 max-w-2xl mx-auto" style={{ fontSize: '18px', lineHeight: '1.7' }}>
          Learn more about Doctor Career Consultancy and our mission
        </p>
      </div>
    </section>

    <section className="section-padding section-light">
      <div className="container-narrow max-w-3xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-[42px] font-bold mb-8" style={{ letterSpacing: '-1px' }}>Who We Are</h2>
          <p className="text-muted-foreground leading-relaxed mb-5" style={{ fontSize: '18px', lineHeight: '1.7' }}>
            Doctor Career Consultancy is a professional recruitment firm dedicated to providing reliable hiring solutions for businesses and meaningful career opportunities for candidates.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-5" style={{ fontSize: '18px', lineHeight: '1.7' }}>
            Over the years, we have built a strong reputation for delivering efficient recruitment services, quality candidate screening, and timely placements.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-5" style={{ fontSize: '18px', lineHeight: '1.7' }}>
            Our expertise and industry connections allow us to support companies in finding skilled professionals while helping candidates secure the right opportunities for career growth.
          </p>
          <p className="text-muted-foreground leading-relaxed font-semibold" style={{ fontSize: '18px', lineHeight: '1.7' }}>
            We believe that the right talent drives business success and the right opportunity transforms careers.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-padding section-dark">
      <div className="container-narrow">
        <AnimatedSection>
          <h2 className="text-3xl md:text-[42px] font-bold text-center mb-16 text-white" style={{ letterSpacing: '-1px' }}>Our Strengths</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Award, title: "7+ Years Experience", desc: "Over seven years of proven recruitment expertise across multiple industries." },
            { icon: Users, title: "Strong Network", desc: "Extensive connections with employers and candidates for perfect matching." },
            { icon: TrendingUp, title: "Long-Term Success", desc: "Focus on sustainable career growth and lasting business partnerships." },
          ].map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <div className="rounded-[20px] p-10 text-center hover-lift group" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(168,85,247,0.15))' }}>
                  <item.icon className="text-indigo-500" size={28} />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed" style={{ lineHeight: '1.7' }}>{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CEO Section */}
    <section className="section-padding section-light">
      <div className="container-narrow max-w-3xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-[42px] font-bold mb-10" style={{ letterSpacing: '-1px' }}>Company Leadership</h2>
          <div className="premium-card p-14">
            <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(135deg, #6366F1, #A855F7)' }}>
              <span className="text-3xl font-bold text-white">AK</span>
            </div>
            <h3 className="text-2xl font-bold mb-1">Anuradha Kadel</h3>
            <p className="gradient-text font-semibold mb-5">Owner & CEO</p>
            <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto" style={{ fontSize: '18px', lineHeight: '1.7' }}>
              With a passion for connecting talent with opportunity, Anuradha Kadel founded Doctor Career Consultancy with the vision of transforming how organizations find and retain the right professionals.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default About;
