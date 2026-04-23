import { Star } from "lucide-react";

const testimonials = [
  {
    "text": "Pat built a two-storey extension on the back of our house in Longford town. He priced it honestly, started on the date he said, and the finish was exactly what we asked for. Straight-talking and reliable.",
    "authorLine": "Homeowner, Co. Longford, undefined (two-storey extension)"
  },
  {
    "text": "We hired Pat for a full refurbishment of a rental property near Edgeworthstown. He managed the strip-out and rebuild without any drama — handed it back on time and within budget. We have already booked him for the next one.",
    "authorLine": "Landlord, Co. Longford, undefined (full property refurbishment)"
  },
  {
    "text": "Pat did the groundworks and foundations for our self-build in Roscommon. He clearly knew what he was doing — flagged a drainage issue before we hit trouble and sorted it without fuss. Would have no hesitation recommending him.",
    "authorLine": "Self-build client, Co. Roscommon, undefined (groundworks and foundations)"
  }
];

const TestimonialsSection = () => (
  <section className="py-20 section-alt">
    <div className="container">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow">
            <div className="flex gap-0.5 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm leading-relaxed mb-4 italic text-muted-foreground">"{t.text}"</p>
            <p className="text-sm font-semibold">— {t.authorLine}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
