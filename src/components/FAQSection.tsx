import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    "q": "Does Pat Quinn Construction take on self-build projects in Longford?",
    "a": "Yes. Self-build residential projects are a core part of the business. Pat works alongside your architect and engineer from groundworks through to structural completion."
  },
  {
    "q": "How do I get a quote for an extension or new build?",
    "a": "Call Pat directly on 087 250 7616 or email patquinnconstruction@gmail.com. He will arrange a site visit to assess the job and provide a written quotation."
  },
  {
    "q": "Is Pat Quinn Construction insured?",
    "a": "Yes. Pat Quinn Construction carries public liability insurance and all relevant cover for construction work on residential and commercial sites."
  },
  {
    "q": "What counties does Pat Quinn Construction cover?",
    "a": "The core area is Co. Longford and neighbouring counties — Westmeath, Roscommon, Cavan, and Leitrim. Larger projects may be considered further afield."
  },
  {
    "q": "How long does a typical house extension take?",
    "a": "A standard single-storey extension typically takes 8 to 14 weeks depending on size and specification. Pat will give you a realistic programme at the quotation stage — not a best-case estimate."
  },
  {
    "q": "Can Pat Quinn Construction handle planning permission or do I need to arrange that myself?",
    "a": "Pat can advise on what is likely to require planning and can liaise with your architect during the application process, but planning applications are typically handled by the architect or planning consultant you appoint."
  }
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a }
    }))
  };

  return (
    <section className="py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container max-w-3xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="divide-y divide-border">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left gap-4 hover:text-primary transition-colors">
                <span className="font-semibold">{faq.q}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <p className="pb-5 text-muted-foreground leading-relaxed">{faq.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
