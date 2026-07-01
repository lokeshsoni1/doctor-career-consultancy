import AnimatedSection from "@/components/AnimatedSection";

const CV = () => (
  <>
    <section className="hero-gradient section-padding text-center">
      <div className="container-narrow">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Build Your CV</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Create a professional ATS-friendly resume in minutes using our AI-powered builder.
        </p>
      </div>
    </section>

    <section
      className="py-4 bg-secondary"
      style={{
        backgroundImage: 'url("https://res.cloudinary.com/dbpdexty8/image/upload/v1781410987/samples/canvas.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {/* Soft glassmorphism overlay */}
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
      <div className="w-full max-w-full px-0 mx-0">
        <AnimatedSection>
          <div className="w-full overflow-hidden">
            <iframe
              src="https://resume-maker-ai-seven.vercel.app"
              title="Resume Maker"
              style={{
                width: '100%',
                minHeight: '85vh',
                border: 'none',
                outline: 'none',
                margin: 0,
                display: 'block',
              }}
              allow="clipboard-write"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default CV;
