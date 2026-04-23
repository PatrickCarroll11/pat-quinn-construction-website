import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container py-14">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h4 className="font-heading font-bold text-lg mb-3 text-accent">Pat Quinn Construction</h4>
          <p className="text-sm opacity-70 leading-relaxed mb-5">Pat Quinn Construction is a Longford-based building contractor operating since 2005. New builds, extensions, groundworks, and refurbishments across Longford, Westmeath, Roscommon, Cavan, and Leitrim.</p>
          <div className="space-y-2 text-sm opacity-80">
            <a href="tel:0872507616" className="flex items-center gap-2 hover:opacity-100 transition-opacity"><Phone className="h-4 w-4 text-accent shrink-0" />0872507616</a>
            <a href="mailto:patquinnconstruction@gmail.com" className="flex items-center gap-2 hover:opacity-100 transition-opacity"><Mail className="h-4 w-4 text-accent shrink-0" />patquinnconstruction@gmail.com</a>
          </div>
        </div>
        <div>
          <h4 className="text-xs font-semibold tracking-widest uppercase text-accent mb-4">Service Areas</h4>
          <ul className="space-y-1.5 text-sm opacity-70">
            <li>Co. Co. Longford</li>
            <li>Co. Co. Westmeath</li>
            <li>Co. Co. Roscommon</li>
            <li>Co. Co. Cavan</li>
            <li>Co. Co. Leitrim</li>
            <li>Co. Co. Offaly</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold tracking-widest uppercase text-accent mb-4">Contact</h4>
          <ul className="space-y-3 text-sm opacity-70">
            <li><a href="tel:0872507616" className="flex items-center gap-2 hover:opacity-100 transition-opacity"><Phone className="h-4 w-4 text-accent shrink-0" />0872507616</a></li>
            <li><a href="mailto:patquinnconstruction@gmail.com" className="flex items-center gap-2 hover:opacity-100 transition-opacity"><Mail className="h-4 w-4 text-accent shrink-0" />patquinnconstruction@gmail.com</a></li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" /><span>Longford, Ireland</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10 mt-12 pt-6 text-center text-xs opacity-40">
        © {new Date().getFullYear()} Pat Quinn Construction. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
