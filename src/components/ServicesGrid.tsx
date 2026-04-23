import { Building2, HardHat, Shovel, Layers, Home } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = { Building2, HardHat, Shovel, Layers, Home };
const services = [
  {
    "icon": "Building2",
    "title": "New House Builds",
    "description": "Full new-build construction for homeowners and developers across Co. Longford and the Midlands. Pat manages the project from groundworks through to a finished structure."
  },
  {
    "icon": "HardHat",
    "title": "Extensions & Renovations",
    "description": "Single-storey and two-storey extensions for existing homes, including structural alterations and full internal renovations. Work is carried out with minimal disruption to the household."
  },
  {
    "icon": "Shovel",
    "title": "Groundworks & Site Preparation",
    "description": "Site clearance, foundations, drainage, and earthworks ahead of new construction. Over 20 years of groundworks experience across residential and light commercial sites."
  },
  {
    "icon": "Layers",
    "title": "Concrete Works",
    "description": "Foundations, slabs, paths, and concrete structures for residential and commercial projects. All concrete work is planned to spec and poured to exacting tolerances."
  },
  {
    "icon": "Home",
    "title": "Roofing & Structural Work",
    "description": "Structural roofing, roof repairs, and building fabric upgrades for homes and commercial properties. Pat handles load-bearing and structural alterations directly."
  },
  {
    "icon": "HardHat",
    "title": "Refurbishments & Property Upgrades",
    "description": "Full property refurbishments for landlords, investors, and homeowners bringing older stock up to standard. Work spans internal strip-outs through to finished handover."
  }
];

const ServicesGrid = () => (
  <section className="py-24 bg-background">
    <div className="container">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
          Pat Quinn Construction is a Longford-based building contractor operating since 2005, covering new builds, extensions, renovations, groundworks, and structural work. Based in the Bawn/Drumlish area, Pat works across Co. Longford and into Westmeath, Roscommon, Cavan, and Leitrim.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => {
          const Icon = iconMap[service.icon] || HardHat;
          return (
            <div key={service.title} className="group p-8 rounded-xl border border-border bg-card hover:shadow-lg hover:border-accent/30 transition-all duration-300 cursor-default">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent transition-colors duration-300">
                <Icon className="h-7 w-7 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ServicesGrid;
