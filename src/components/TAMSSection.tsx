import { CheckCircle2, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const badges = [
  "Public Liability Insured",
  "Established 2005",
  "Residential & Commercial",
];

export function TAMSSection() {
  return (
    <section className="bg-primary/[0.04] border-y border-primary/10 py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col items-center text-center gap-6">

          {/* Trade Icon */}
          <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-2">
            <HardHat className="h-8 w-8 text-accent" />
          </div>

          {/* Label */}
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Credentials & Insurance
          </p>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-2">
            Insured Builder Operating Since 2005
          </h2>

          {/* Body */}
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            Pat Quinn Construction carries full public liability insurance for all
            residential and commercial construction work. With nearly 20 years on
            Longford sites, the business has the track record and local knowledge
            to manage your project with confidence.
          </p>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground px-8 py-4 rounded-lg shadow-lg font-bold text-base hover:opacity-90 transition-opacity mt-2"
          >
            <Link to="/contact">Get a Free Quote</Link>
          </Button>

          {/* Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mt-6">
            {badges.map((badge) => (
              <div
                key={badge}
                className="flex items-center justify-center gap-3 rounded-xl border border-primary/10 bg-card shadow-sm px-6 py-5 hover:shadow-md hover:border-accent/20 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                </div>
                <span className="text-sm font-semibold text-foreground leading-snug text-left">
                  {badge}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}