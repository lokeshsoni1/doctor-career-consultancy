import { CheckCircle2, Award, Users, TrendingUp } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import anuradhaImg from "@/assets/anuradha_kadel.jpeg";
import arunImg from "@/assets/arun_kadel.jpeg";
import abhishekImg from "@/assets/abhishek_kadel.jpeg";
import { Tilt } from "@/components/Tilt";

const About = () => (
  <>
    <section className="hero-gradient section-padding text-center">
      <div className="container-narrow">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Us</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Learn more about Doctor Career Consultancy and our mission
        </p>
      </div>
    </section>

    <section className="section-padding bg-[#F8FAFC]">
      <div className="container-narrow max-w-3xl mx-auto">
        <AnimatedSection>
          <div
            className="rounded-3xl p-10"
            style={{
              backgroundImage: 'url("https://res.cloudinary.com/dbpdexty8/image/upload/v1781410986/samples/cup-on-a-table.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
              zIndex: 1,
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)',
            }}
          >
            {/* Soft glassmorphism overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)',
                zIndex: -1,
              }}
            />
            <h2 className="text-3xl font-bold mb-6 text-[#0F172A]">Who We Are</h2>
            <p className="text-slate-700 leading-relaxed mb-4 font-semibold">
              Doctor Career Consultancy is a professional recruitment firm dedicated to providing reliable hiring solutions for businesses and meaningful career opportunities for candidates.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4 font-semibold">
              Over the years, we have built a strong reputation for delivering efficient recruitment services, quality candidate screening, and timely placements.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4 font-semibold">
              Our expertise and industry connections allow us to support companies in finding skilled professionals while helping candidates secure the right opportunities for career growth.
            </p>
            <p className="text-slate-800 leading-relaxed font-bold">
              We believe that the right talent drives business success and the right opportunity transforms careers.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-narrow">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Strengths</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Award, title: "7+ Years Experience", desc: "Over seven years of proven recruitment expertise across multiple industries." },
            { icon: Users, title: "Strong Network", desc: "Extensive connections with employers and candidates for perfect matching." },
            { icon: TrendingUp, title: "Long-Term Success", desc: "Focus on sustainable career growth and lasting business partnerships." },
          ].map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <Tilt className="h-full">
                <div className="glass-card rounded-2xl p-8 text-center hover-lift h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <item.icon className="text-accent" size={28} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Tilt>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Leadership Section */}
    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-8 text-foreground text-center">Company Leadership</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {[
            {
              image: anuradhaImg,
              name: "Anuradha Kadel",
              role: "Co-Founder",
              desc: "Anuradha Kadel is an experienced HR professional with over 10 years in the recruitment industry. She specializes in identifying the right talent and matching candidates with roles that align with their skills and career goals.\nAs the Co-Owner of Doctor Career, she is dedicated to helping individuals find suitable job opportunities based on their CVs, while supporting organizations in hiring the right people. Her practical approach and industry insight make her a trusted partner in the hiring process.",
            },
            {
              image: arunImg,
              name: "Arun Kadel",
              role: "Co-Founder",
              desc: "A strategic leader with deep insights into operations and talent management, Arun Kadel plays a key role in driving business growth and building strong client relationships. His focus on efficiency and long-term partnerships strengthens the foundation of the organization.",
            },
            {
              image: abhishekImg,
              name: "Abhishek Kadel",
              role: "Co-Founder",
              desc: "With a strong understanding of modern recruitment trends and technology-driven hiring, Abhishek Kadel contributes to optimizing processes and enhancing candidate experiences. His forward-thinking approach helps the company stay ahead in a competitive hiring landscape.",
            },
          ].map((leader, i) => (
            <AnimatedSection key={leader.name} delay={i * 0.1} className="h-full">
              <Tilt className="h-full">
                <div
                  className="rounded-3xl p-10 text-center h-full flex flex-col hover-lift"
                  style={{
                    backgroundImage: 'url("https://res.cloudinary.com/dbpdexty8/image/upload/v1781410986/samples/cup-on-a-table.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                    zIndex: 1,
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.5)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)',
                  }}
                >
                  {/* Soft glassmorphism overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(255, 255, 255, 0.7)',
                      backdropFilter: 'blur(4px)',
                      WebkitBackdropFilter: 'blur(4px)',
                      zIndex: -1,
                    }}
                  />
                  <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-6 overflow-hidden">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "50% 20%" }}
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-1 text-[#0F172A]">{leader.name}</h3>
                  <p className="text-accent font-semibold mb-4">{leader.role}</p>
                  <p className="text-slate-800 leading-relaxed font-semibold whitespace-pre-line text-sm">{leader.desc}</p>
                </div>
              </Tilt>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default About;
