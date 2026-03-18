import { CheckCircle2, Award, Users, TrendingUp } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

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

    <section className="section-padding bg-secondary">
      <div className="container-narrow max-w-3xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Who We Are</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Doctor Career Consultancy is a professional recruitment firm dedicated to providing reliable hiring solutions for businesses and meaningful career opportunities for candidates.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Over the years, we have built a strong reputation for delivering efficient recruitment services, quality candidate screening, and timely placements.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our expertise and industry connections allow us to support companies in finding skilled professionals while helping candidates secure the right opportunities for career growth.
          </p>
          <p className="text-muted-foreground leading-relaxed font-medium">
            We believe that the right talent drives business success and the right opportunity transforms careers.
          </p>
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
              <div className="glass-card rounded-2xl p-8 text-center hover-lift">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="text-accent" size={28} />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CEO Section */}
    <section className="section-padding bg-secondary">
      <div className="container-narrow max-w-3xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-8 text-foreground">Company Leadership</h2>
          <div className="glass-card rounded-3xl p-10">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-accent">AK</span>
            </div>
            <h3 className="text-2xl font-bold mb-1 text-foreground">Anuradha Kadel</h3>
            <p className="text-accent font-medium mb-4">Owner & CEO</p>
            <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto">
              With a passion for connecting talent with opportunity, Anuradha Kadel founded Doctor Career Consultancy with the vision of transforming how organizations find and retain the right professionals.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default About;
