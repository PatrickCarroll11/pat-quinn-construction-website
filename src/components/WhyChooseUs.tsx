import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Operating in Longford since 2005",
  "Hands-on contractor — Pat manages every project directly",
  "Covers new builds, extensions, groundworks, and refurbishments",
  "Based in Drumlish — deep knowledge of local ground conditions and planning",
  "Works across Longford, Westmeath, Roscommon, Cavan, and Leitrim",
  "Suitable for self-build clients, developers, and landlords",
  "Experienced in structural and load-bearing alterations",
  "Free on-site quotations across Co. Longford"
];

const WhyChooseUs = () => (
  <section className="py-20 section-alt">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Pat Quinn Construction?</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Pat Quinn Construction has been operating on Longford sites since 2005 — that is nearly two decades of local builds, extensions, and groundworks in this county. Pat is hands-on at every stage, which means the person you speak to on the phone is the same person managing the work on site.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {reasons.map((reason) => (
              <div key={reason} className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                <span className="text-sm font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="bg-primary rounded-xl p-8 text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">Get Your Free Quote Today</h3>
            <p className="opacity-90 mb-6">Tell us what you need and we'll get back to you with a clear, fixed price — no obligation.</p>
            <div className="space-y-3">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 shrink-0" /><span>No hidden costs</span></div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 shrink-0" /><span>Fixed-price quotes upfront</span></div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 shrink-0" /><span>Fast response across Longford area</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
