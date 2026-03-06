import { useState, useMemo } from "react";
import { MapPin, Building2, Search } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const allJobs = [
  { title: "Cardiologist", company: "Apollo Hospital", location: "Delhi", salary: "₹3L/month" },
  { title: "General Physician", company: "Fortis Healthcare", location: "Mumbai", salary: "₹2L/month" },
  { title: "Orthopedic Surgeon", company: "Max Healthcare", location: "Gurgaon", salary: "₹4L/month" },
  { title: "Pediatrician", company: "AIIMS", location: "Delhi", salary: "₹3L/month" },
  { title: "BPO Team Lead", company: "Genpact", location: "Delhi", salary: "₹50K/month" },
  { title: "IT Support Engineer", company: "Infosys", location: "Bangalore", salary: "₹60K/month" },
  { title: "Sales Manager", company: "HDFC Bank", location: "Mumbai", salary: "₹80K/month" },
  { title: "HR Executive", company: "Wipro", location: "Pune", salary: "₹45K/month" },
];

const Jobs = () => {
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  const locations = useMemo(() => [...new Set(allJobs.map((j) => j.location))], []);

  const filtered = useMemo(
    () =>
      allJobs.filter(
        (j) =>
          (j.title.toLowerCase().includes(search.toLowerCase()) ||
            j.company.toLowerCase().includes(search.toLowerCase())) &&
          (!locationFilter || j.location === locationFilter)
      ),
    [search, locationFilter]
  );

  return (
    <>
      <section className="hero-gradient section-padding text-center">
        <div className="container-narrow">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Job Opportunities</h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Browse current openings from top organizations
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-6 mb-10 flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <input
                  type="text"
                  placeholder="Search by title or company..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="px-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="">All Locations</option>
                {locations.map((l) => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((job, i) => (
              <AnimatedSection key={`${job.title}-${job.company}`} delay={i * 0.05}>
                <div className="glass-card rounded-2xl p-8 hover-lift">
                  <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                  <div className="flex items-center gap-2 text-primary font-medium text-sm mb-1">
                    <Building2 size={14} /> {job.company}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                    <MapPin size={14} /> {job.location}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground font-bold text-lg">{job.salary}</span>
                    <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg text-sm font-medium hover-lift">
                      Apply Now
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No jobs found matching your criteria.</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Jobs;
