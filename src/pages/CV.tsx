import AnimatedSection from "@/components/AnimatedSection";

const CV = () => (
  <>
    <section className="hero-gradient section-padding text-center">
      <div className="container-narrow">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Create Your CV</h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto">
          Build a professional resume without leaving our website
        </p>
      </div>
    </section>

    <section className="py-4">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="rounded-2xl overflow-hidden border border-border bg-card" style={{ height: "80vh" }}>
            <iframe
              src="https://resume-maker-ai.vercel.app"
              title="Resume Maker"
              className="w-full h-full border-0"
              allow="clipboard-write"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default CV;
