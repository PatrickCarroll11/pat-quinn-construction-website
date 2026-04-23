import { CheckCircle2 } from "lucide-react";
import CTASection from "@/components/CTASection";

const About = () => (
  <>
    <section className="bg-primary text-primary-foreground py-20">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About <span className="text-accent">Pat Quinn Construction</span></h1>
        <p className="text-lg opacity-80 max-w-2xl">Builder services you can rely on across Longford.</p>
      </div>
    </section>
    <section className="py-20">
      <div className="container max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Who We Are</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">Pat Quinn Construction has been a working fixture on building sites across Co. Longford since 2005. Based in the Bawn/Drumlish area, Pat built the business on residential work — new houses, extensions, and groundworks — before expanding into refurbishments and light commercial projects.</p>
        <p className="text-muted-foreground leading-relaxed mb-14">The approach is direct and practical: assess the job honestly, price it fairly, and deliver what was agreed. Clients across Longford, Westmeath, and Roscommon return because the process is straightforward and the work speaks for itself..</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">What Sets Us Apart</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {[{"title":"Established 2005","desc":"Pat Quinn Construction has been active on Longford sites for nearly 20 years, building a track record across residential and commercial projects."},{"title":"Drumlish-Based","desc":"Operating from the Bawn/Drumlish area of Co. Longford with deep local knowledge of ground conditions, planning, and site access across the county."},{"title":"Hands-On Contractor","desc":"Pat manages every project directly — no subcontracted project managers, no remote supervision."},{"title":"Midlands Coverage","desc":"Core coverage across Longford with regular work in Westmeath, Roscommon, Cavan, and Leitrim for the right project."},{"title":"Residential & Commercial","desc":"Experienced across self-builds, developer projects, landlord refurbishments, and small commercial construction work."}].map((item) => (
            <div key={item.title} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card">
              <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-sm">{item.title}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <CTASection />
  </>
);

export default About;
