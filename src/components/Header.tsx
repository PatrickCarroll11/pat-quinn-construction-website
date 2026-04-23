import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10">
          <p className="text-xs font-medium tracking-wide text-primary-foreground/80 hidden sm:block">
            Longford's Established Building Contractor Since 2005
          </p>
          <a
            href="tel:0872507616"
            className="flex items-center gap-2 text-xs font-semibold text-primary-foreground hover:text-accent transition-colors ml-auto sm:ml-0"
          >
            <Phone className="h-3.5 w-3.5" />
            087 250 7616
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 md:h-20 py-3">
            {/* Brand Mark */}
            <Link to="/" className="flex flex-col leading-tight group py-1">
              <span className="font-heading font-bold text-xl tracking-tight text-foreground group-hover:text-primary transition-colors">
                Pat Quinn
              </span>
              <span className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mt-0.5">
                Construction
              </span>
              <span className="block h-0.5 w-10 bg-accent mt-1 rounded-full transition-all duration-300 group-hover:w-full" />
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-4 py-2.5 text-sm font-semibold transition-all duration-200 rounded-lg ${
                    isActive(link.to)
                      ? "text-accent bg-accent/8 border-b-2 border-accent"
                      : "text-foreground hover:text-accent hover:bg-accent/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:0872507616"
                className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent/10 hover:bg-accent transition-colors duration-200 group">
                  <Phone className="h-4 w-4 text-accent" />
                </span>
                087 250 7616
              </a>
              <Button
                asChild
                className="bg-accent text-accent-foreground px-6 py-3 font-bold rounded-lg shadow-lg hover:bg-accent/90 hover:shadow-xl transition-all duration-200"
              >
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2.5 rounded-lg text-foreground hover:text-accent hover:bg-accent/5 transition-colors"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-background shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive(link.to)
                      ? "text-accent bg-accent/8 border-l-2 border-accent pl-5"
                      : "text-foreground hover:text-accent hover:bg-accent/5 hover:pl-5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-5 pt-5 border-t border-border flex flex-col gap-3">
                <a
                  href="tel:0872507616"
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold text-foreground hover:text-accent hover:bg-accent/5 transition-all duration-200"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent/10">
                    <Phone className="h-4 w-4 text-accent" />
                  </span>
                  087 250 7616
                </a>
                <Button
                  asChild
                  className="bg-accent text-accent-foreground px-6 py-4 font-bold rounded-xl shadow-lg hover:bg-accent/90 hover:shadow-xl transition-all duration-200 w-full text-base"
                >
                  <Link to="/contact" onClick={() => setMobileOpen(false)}>
                    Get a Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}