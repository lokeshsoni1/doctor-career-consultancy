import AnimatedSection from "@/components/AnimatedSection";

const CV = () => (
  <>
    <section className="hero-gradient section-padding text-center">
      <div className="container-narrow relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ letterSpacing: '-1.5px' }}>Build Your CV</h1>
        <p className="text-white/50 max-w-2xl mx-auto" style={{ fontSize: '18px', lineHeight: '1.7' }}>
          Create a professional ATS-friendly resume in minutes using our AI-powered builder.
        </p>
      </div>
    </section>

    <section className="py-4">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="rounded-[20px] overflow-hidden border border-border bg-card shadow-soft" style={{ height: "80vh" }}>
            <iframe
              src="https://resume-maker-ai-seven.vercel.app"
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
