import { MessageCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Jobs = () => {
  return (
    <>
      <section className="hero-gradient section-padding text-center">
        <div className="container-narrow">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Latest Job Opportunities</h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Apply now via WhatsApp — we're hiring!
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Job 0 – Customer Support Executive */}
            <AnimatedSection>
              <div className="glass-card rounded-2xl p-8 hover-lift h-full flex flex-col">
                <h3 className="text-xl font-bold mb-3">🚀 Urgent Hiring – Customer Support Executive</h3>
                <p className="text-primary font-medium mb-4">📍 Location: Sitapura, Jaipur</p>
                <div className="mb-3">
                  <p className="font-semibold mb-1">Salary:</p>
                  <ul className="text-muted-foreground space-y-1 ml-4 text-sm">
                    <li>₹16,000 CTC – Hindi Process</li>
                    <li>₹18,000 CTC – English Process</li>
                  </ul>
                </div>
                <div className="mb-3">
                  <p className="font-semibold mb-1">Work Details:</p>
                  <ul className="text-muted-foreground space-y-1 ml-4 text-sm">
                    <li>5 Days Working</li>
                    <li>Rotational Shifts</li>
                    <li>Rotational Week Off</li>
                  </ul>
                </div>
                <div className="mb-3">
                  <p className="font-semibold mb-1">Eligibility:</p>
                  <ul className="text-muted-foreground space-y-1 ml-4 text-sm">
                    <li>Good communication skills (Hindi / English)</li>
                    <li>Basic computer knowledge</li>
                    <li>Freshers & experienced both can apply</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <p className="font-semibold mb-1">Special Perks (For Candidates Outside Jaipur):</p>
                  <ul className="text-muted-foreground space-y-1 ml-4 text-sm">
                    <li>One-way travel ticket</li>
                    <li>14 Days Free Accommodation</li>
                    <li>₹10,000 Relocation Bonus</li>
                  </ul>
                </div>
                <p className="text-muted-foreground mb-5 text-sm">Interested candidates can DM or share their resume on WhatsApp now.</p>
                <div className="mt-auto">
                  <a href="https://wa.me/918875061164" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover-lift text-sm">
                    <MessageCircle size={16} /> Apply Now
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Job 1 – International Chat Process */}
            <AnimatedSection delay={0.1}>
              <div className="glass-card rounded-2xl p-8 hover-lift h-full flex flex-col">
                <h3 className="text-xl font-bold mb-3">💬 International Chat Process</h3>
                <div className="mb-3">
                  <p className="font-semibold mb-1">Must have skills:</p>
                  <ul className="text-muted-foreground space-y-1 ml-4 text-sm">
                    <li>Strong communication skills</li>
                    <li>Good understanding of technical lingo and jargon</li>
                  </ul>
                </div>
                <div className="mb-3">
                  <p className="font-semibold mb-1">Eligibility:</p>
                  <ul className="text-muted-foreground space-y-1 ml-4 text-sm">
                    <li>Undergraduate with minimum 6 months documented experience</li>
                    <li>Graduate freshers</li>
                  </ul>
                </div>
                <div className="mb-3">
                  <p className="font-semibold mb-1">Ideal candidate should:</p>
                  <ul className="text-muted-foreground space-y-1 ml-4 text-sm">
                    <li>Comfortable with rotational shifts (preferably night shifts)</li>
                    <li>Comfortable with rotational week offs</li>
                    <li>Looking for a stable long-term career</li>
                  </ul>
                </div>
                <div className="mb-3">
                  <p className="font-semibold mb-1">Campaign details:</p>
                  <ul className="text-muted-foreground space-y-1 ml-4 text-sm">
                    <li>5 days working</li>
                    <li>10 hour shift (including 1 hour break)</li>
                    <li>Cab facility available post training</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <p className="font-semibold mb-1">CTC:</p>
                  <ul className="text-muted-foreground space-y-1 ml-4 text-sm">
                    <li>Voice: 28,800 CTC + 3,200 PLI monthly</li>
                    <li>Chat: 27,000 CTC + 3,000 PLI monthly</li>
                  </ul>
                </div>
                <div className="mt-auto">
                  <a href="https://wa.me/918875061164" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover-lift text-sm">
                    <MessageCircle size={16} /> Apply Now
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Job 2 – Travel Chat Process */}
            <AnimatedSection delay={0.2}>
              <div className="glass-card rounded-2xl p-8 hover-lift h-full flex flex-col">
                <h3 className="text-xl font-bold mb-3">✈️ Travel Chat Process</h3>
                <p className="text-primary font-medium mb-4">📍 Location: Jaipur</p>
                <div className="space-y-2 text-sm mb-4">
                  <p><span className="font-semibold">Process Type:</span> <span className="text-muted-foreground">Non-Technical</span></p>
                  <p><span className="font-semibold">Communication:</span> <span className="text-muted-foreground">V5</span></p>
                  <p><span className="font-semibold">Education:</span> <span className="text-muted-foreground">UG / Graduate</span></p>
                  <p><span className="font-semibold">Experience:</span> <span className="text-muted-foreground">Freshers or Experienced</span></p>
                  <p><span className="font-semibold">Salary:</span> <span className="text-muted-foreground">24,500 CTC + 2,500 PLI</span></p>
                  <p><span className="font-semibold">Shift:</span> <span className="text-muted-foreground">Rotational (24x7)</span></p>
                  <p><span className="font-semibold">Work Mode:</span> <span className="text-muted-foreground">Work From Office</span></p>
                  <p><span className="font-semibold">Work Location:</span> <span className="text-muted-foreground">LIC Site, Pratap Nagar</span></p>
                  <p><span className="font-semibold">Interview Mode:</span> <span className="text-muted-foreground">Face to Face & Virtual</span></p>
                </div>
                <div className="mt-auto">
                  <a href="https://wa.me/918875061164" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover-lift text-sm">
                    <MessageCircle size={16} /> Apply Now
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Job 3 – Technical Support Executive */}
            <AnimatedSection delay={0.3}>
              <div className="glass-card rounded-2xl p-8 hover-lift h-full flex flex-col">
                <h3 className="text-xl font-bold mb-3">🖥️ Technical Support Executive</h3>
                <div className="mb-3">
                  <p className="font-semibold mb-1">Salary:</p>
                  <ul className="text-muted-foreground space-y-1 ml-4 text-sm">
                    <li>Graduate – 30K CTC</li>
                    <li>Graduate + 1 to 2 years BPO experience: 40K – 44K CTC</li>
                    <li>Graduate + 2+ years BPO experience: 44K – 46K CTC</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <p className="font-semibold mb-1">Work conditions:</p>
                  <ul className="text-muted-foreground space-y-1 ml-4 text-sm">
                    <li>5 days working</li>
                    <li>Rotational shifts</li>
                    <li>Rotational week offs</li>
                  </ul>
                </div>
                <div className="mt-auto">
                  <a href="https://wa.me/918875061164" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover-lift text-sm">
                    <MessageCircle size={16} /> Apply Now
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Job 4 – Email Support Executive */}
            <AnimatedSection delay={0.4}>
              <div className="glass-card rounded-2xl p-8 hover-lift h-full flex flex-col md:col-span-2 max-w-2xl mx-auto w-full">
                <h3 className="text-xl font-bold mb-3">📧 Email Support Executive – Jaipur</h3>
                <div className="mb-3">
                  <p className="font-semibold mb-1">CTC:</p>
                  <p className="text-muted-foreground text-sm ml-4">₹36,000 – ₹38,000 per month</p>
                </div>
                <p className="text-muted-foreground text-sm mb-3">Teleperformance is hiring Email Support Executives for the Jaipur team.</p>
                <div className="mb-3">
                  <p className="font-semibold mb-1">Key responsibilities:</p>
                  <ul className="text-muted-foreground space-y-1 ml-4 text-sm">
                    <li>Respond to customer emails professionally</li>
                    <li>Resolve queries efficiently</li>
                    <li>Escalate complex issues when needed</li>
                    <li>Work with internal teams to ensure customer satisfaction</li>
                  </ul>
                </div>
                <div className="mb-3">
                  <p className="font-semibold mb-1">Salary & incentives:</p>
                  <ul className="text-muted-foreground space-y-1 ml-4 text-sm">
                    <li>CTC: ₹36,000 – ₹38,000</li>
                    <li>Training period in-hand: ₹30K – ₹32K</li>
                    <li>PLI: up to ₹1,000/month</li>
                  </ul>
                </div>
                <div className="mb-3">
                  <p className="font-semibold mb-1">Perks:</p>
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
                  <p className="font-semibold mb-1">Eligibility:</p>
                  <ul className="text-muted-foreground space-y-1 ml-4 text-sm">
                    <li>Graduation mandatory</li>
                    <li>Minimum 1 year international customer support experience</li>
                    <li>Strong written communication</li>
                    <li>Flexible with rotational shifts</li>
                  </ul>
                </div>
                <div className="mt-auto">
                  <a href="https://wa.me/918875061164" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover-lift text-sm">
                    <MessageCircle size={16} /> Apply Now
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Jobs;
