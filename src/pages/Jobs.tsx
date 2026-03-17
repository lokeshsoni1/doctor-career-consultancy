import { MessageCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Jobs = () => {
  return (
    <>
      <section className="hero-gradient section-padding text-center">
        <div className="container-narrow relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ letterSpacing: '-1.5px' }}>Latest Job Opportunity</h1>
          <p className="text-white/50 max-w-2xl mx-auto" style={{ fontSize: '18px', lineHeight: '1.7' }}>
            Apply now via WhatsApp — we're hiring!
          </p>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="container-narrow max-w-2xl mx-auto">
          <AnimatedSection>
            <div className="premium-card accent-border-left p-10 md:p-14">
              <h3 className="text-2xl font-bold mb-4">🚀 Urgent Hiring – Customer Support Executive</h3>
              <p className="gradient-text font-semibold mb-6">📍 Location: Sitapura, Jaipur</p>

              <div className="mb-5">
                <p className="font-semibold mb-2">Salary:</p>
                <ul className="text-muted-foreground space-y-1 ml-4" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  <li>₹16,000 CTC – Hindi Process</li>
                  <li>₹18,000 CTC – English Process</li>
                </ul>
              </div>

              <div className="mb-5">
                <p className="font-semibold mb-2">Work Details:</p>
                <ul className="text-muted-foreground space-y-1 ml-4" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  <li>5 Days Working</li>
                  <li>Rotational Shifts</li>
                  <li>Rotational Week Off</li>
                </ul>
              </div>

              <div className="mb-5">
                <p className="font-semibold mb-2">Eligibility:</p>
                <ul className="text-muted-foreground space-y-1 ml-4" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  <li>Good communication skills (Hindi / English)</li>
                  <li>Basic computer knowledge</li>
                  <li>Freshers & experienced both can apply</li>
                </ul>
              </div>

              <div className="mb-8">
                <p className="font-semibold mb-2">Special Perks (For Candidates Outside Jaipur):</p>
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
    </>
  );
};

export default Jobs;
