import { MessageCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Jobs = () => {
  return (
    <>
      <section className="hero-gradient section-padding text-center">
        <div className="container-narrow">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Latest Job Opportunity</h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Apply now via WhatsApp — we're hiring!
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow max-w-2xl mx-auto">
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-8 md:p-10 hover-lift">
              <h3 className="text-2xl font-bold mb-4">🚀 Urgent Hiring – Customer Support Executive</h3>
              <p className="text-primary font-medium mb-4">📍 Location: Sitapura, Jaipur</p>

              <div className="mb-4">
                <p className="font-semibold mb-1">Salary:</p>
                <ul className="text-muted-foreground space-y-1 ml-4">
                  <li>₹16,000 CTC – Hindi Process</li>
                  <li>₹18,000 CTC – English Process</li>
                </ul>
              </div>

              <div className="mb-4">
                <p className="font-semibold mb-1">Work Details:</p>
                <ul className="text-muted-foreground space-y-1 ml-4">
                  <li>5 Days Working</li>
                  <li>Rotational Shifts</li>
                  <li>Rotational Week Off</li>
                </ul>
              </div>

              <div className="mb-4">
                <p className="font-semibold mb-1">Eligibility:</p>
                <ul className="text-muted-foreground space-y-1 ml-4">
                  <li>Good communication skills (Hindi / English)</li>
                  <li>Basic computer knowledge</li>
                  <li>Freshers & experienced both can apply</li>
                </ul>
              </div>

              <div className="mb-6">
                <p className="font-semibold mb-1">Special Perks (For Candidates Outside Jaipur):</p>
                <ul className="text-muted-foreground space-y-1 ml-4">
                  <li>One-way travel ticket</li>
                  <li>14 Days Free Accommodation</li>
                  <li>₹10,000 Relocation Bonus</li>
                </ul>
              </div>

              <p className="text-muted-foreground mb-6">
                Interested candidates can DM or share their resume on WhatsApp now.
              </p>

              <a
                href="https://wa.me/918875061164"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover-lift text-sm"
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
