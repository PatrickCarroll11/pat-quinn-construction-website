import { CheckCircle2, Home, Building2, Hammer, Wrench, PaintBucket, Shovel } from "lucide-react";
import CTASection from "@/components/CTASection";

const serviceDetails = [
  {
    title: "New House Builds",
    seo: "New House Builder Longford",
    description:
      "Pat Quinn Construction has been delivering new residential builds across Co. Longford since 2005. From breaking ground to structural completion, Pat manages the build process hands-on. Suitable for self-build clients and property developers working across the Midlands.",
    features: [
      "Full build from foundations to structural completion",
      "Residential and light commercial new builds",
      "Longford and surrounding counties covered",
      "Works alongside architects and engineers",
      "Established site management since 2005",
    ],
    icon: Home,
  },
  {
    title: "Extensions & Renovations",
    seo: "House Extensions Longford Builder",
    description:
      "Extensions are one of the most common requests Pat receives — whether it is a kitchen extension, a rear addition, or a two-storey build-up. Structural alterations and internal renovations are handled in-house. Work is planned to keep disruption manageable for families living on site.",
    features: [
      "Single-storey and two-storey extensions",
      "Kitchen and living area additions",
      "Structural wall removals and alterations",
      "Full internal renovation fit-out",
      "Longford, Westmeath, and Roscommon coverage",
    ],
    icon: Building2,
  },
  {
    title: "Groundworks & Site Preparation",
    seo: "Groundworks Site Preparation Longford",
    description:
      "Groundworks underpin every build — and getting them right saves money at every stage that follows. Pat Quinn Construction handles full site prep, from clearing and levelling through to foundations and drainage. Longford's ground conditions are well known to Pat after two decades on local sites.",
    features: [
      "Site clearing and levelling",
      "Foundation excavation and construction",
      "Drainage installation and connection",
      "Soakaway and percolation trenching",
      "Suitable for self-build and developer plots",
    ],
    icon: Shovel,
  },
  {
    title: "Concrete Works",
    seo: "Concrete Works Foundations Longford",
    description:
      "From strip foundations to floor slabs and external paths, concrete work requires accuracy and the right mix for the application. Pat Quinn Construction handles concrete works for new builds, standalone slabs, and site infrastructure. All pours are planned and supervised on site.",
    features: [
      "Strip and pad foundation construction",
      "Concrete floor slabs and screeds",
      "External paths, aprons, and yard areas",
      "Retaining structures and kerbing",
      "Residential and small commercial projects",
    ],
    icon: Hammer,
  },
  {
    title: "Roofing & Structural Work",
    seo: "Structural Roofing Builder Longford",
    description:
      "Pat Quinn Construction carries out structural roofing as part of new builds and as a standalone service for existing properties. This includes roof construction, structural repairs, and building fabric upgrades. Load-bearing and structural alterations are managed directly by Pat.",
    features: [
      "New roof construction on builds",
      "Structural roof repairs and replacement",
      "Attic conversions and dormer construction",
      "Load-bearing alterations and steel installation",
      "Commercial and residential properties",
    ],
    icon: Wrench,
  },
  {
    title: "Refurbishments & Property Upgrades",
    seo: "Property Refurbishment Longford Builder",
    description:
      "Older properties across Longford and the Midlands often need significant work before they are fit for modern living or letting. Pat Quinn Construction carries out full refurbishments from strip-out through to handover — including structural, fabric, and general finishing works. Regularly engaged by landlords and property investors.",
    features: [
      "Full property strip-out and rebuild",
      "Structural and fabric upgrades",
      "Window, door, and roofline replacement",
      "Period property renovation experience",
      "Landlord and investor project handovers",
    ],
    icon: PaintBucket,
  },
];

export default function Services() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
            Co. Longford &amp; The Midlands
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
            Construction Services
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/75 max-w-2xl leading-relaxed">
            New builds, extensions, groundworks, concrete works, roofing, and
            full property refurbishments — delivered by Pat Quinn Construction
            from Drumlish, Co. Longford since 2005.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="flex flex-col gap-10">
            {serviceDetails.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  key={index}
                  className="rounded-xl border border-border shadow-sm hover:shadow-lg hover:border-accent/20 transition-all duration-300 p-8 bg-card"
                >
                  <div className="flex flex-col md:flex-row md:gap-10 gap-6">
                    {/* Left column: icon + title + badge */}
                    <div className="md:w-64 flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group hover:bg-accent transition-colors duration-200">
                        <Icon className="h-6 w-6 text-accent group-hover:text-accent-foreground" />
                      </div>
                      <h2 className="text-2xl font-bold text-card-foreground mb-3 leading-tight">
                        {service.title}
                      </h2>
                      <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent bg-accent/10 rounded-md px-3 py-1">
                        {service.seo}
                      </span>
                    </div>

                    {/* Right column: description + features */}
                    <div className="flex-1">
                      <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                        {service.description}
                      </p>

                      <div className="border-t border-border pt-6">
                        <p className="text-sm font-semibold uppercase tracking-widest text-card-foreground mb-4">
                          What's Included
                        </p>
                        <ul className="flex flex-col gap-3">
                          {service.features.map((feature, fIndex) => (
                            <li
                              key={fIndex}
                              className="flex items-start gap-3 text-card-foreground"
                            >
                              <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                              <span className="text-sm leading-relaxed">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}