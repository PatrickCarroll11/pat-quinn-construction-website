import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const SECTION_LABEL = "Example Work — Real Photos to Follow";
const SECTION_NOTE  = "Ask us about our recent projects across Longford and surrounding areas.";
const recentProjects = [
  {
    "id": "house-extension-longford",
    "title": "Two-Storey Extension, Co. Longford",
    "description": "Built a 42sqm two-storey rear extension for a family home outside Granard, including a ground-floor open-plan kitchen-diner and a master bedroom above. Block construction with full insulation upgrade brought the house to A3 BER rating.",
    "image": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "new-build-roscommon",
    "title": "New Build Bungalow, Co. Roscommon",
    "description": "Completed a 178sqm four-bedroom dormer bungalow on a rural site near Strokestown, from foundation to handover in 11 months. Passive-slab floor system and triple-glazed windows were specified to meet near-zero energy standards.",
    "image": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "renovation-westmeath",
    "title": "Full House Renovation, Co. Westmeath",
    "description": "Stripped and fully renovated a 1970s semi-detached in Athlone, replacing the roof, rewiring, replumbing, and fitting a new kitchen and bathroom throughout. External insulated render system reduced heating costs by an estimated 40% for the homeowners.",
    "image": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&auto=format&fit=crop"
  }
];

const RecentWork = () => (
  <section className="py-24 section-alt">
    <div className="container">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{SECTION_LABEL}</h2>
        {SECTION_NOTE && <p className="text-muted-foreground max-w-2xl mx-auto">{SECTION_NOTE}</p>}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        {recentProjects.map((project) => (
          <Link key={project.id} to="/projects" className="group block rounded-xl overflow-hidden border border-border bg-card hover:shadow-lg hover:border-accent/20 transition-all duration-300">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-base mb-1">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center">
        <Button asChild variant="outline" className="px-6">
          <Link to="/projects" className="flex items-center gap-2">
            View All Projects <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

export default RecentWork;