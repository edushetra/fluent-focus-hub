import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

/** Photos now point to /public/assets/testimonials/* (served at /assets/testimonials/*) */
const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Software Developer",
    city: "Bangalore",
    program: "1:1 Classes",
    before:
      "I was afraid to speak in team meetings and struggled with technical presentations.",
    after:
      "Now I confidently lead client calls and gave a presentation to 200+ people at our company conference.",
    rating: 5,
    videoUrl: "#",
    photo: "/assets/testimonials/Priya_Sharma.jpg",
  },
  {
    id: 2,
    name: "Rajesh Gupta",
    role: "Business Analyst",
    city: "Mumbai",
    program: "Small Group Classes",
    before:
      "My English was okay for reading and writing, but speaking fluently was a challenge.",
    after:
      "I can now participate actively in international calls and even mentor junior team members.",
    rating: 5,
    videoUrl: "#",
    photo: "/assets/testimonials/Rajesh_Gupta.png",
  },
  {
    id: 3,
    name: "Anita Desai",
    role: "Homemaker",
    city: "Delhi",
    program: "Big Group Classes",
    before:
      "I wanted to help my kids with their English and gain confidence for job interviews.",
    after:
      "I've started my own online tutoring business and feel confident speaking with parents and students.",
    rating: 5,
    videoUrl: "#",
    photo: "/assets/testimonials/Anita_Desai.jpeg",
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Sales Manager",
    city: "Pune",
    program: "1:1 Classes",
    before:
      "I was losing deals because I couldn't communicate value propositions effectively to clients.",
    after:
      "My sales have increased by 40% and I was promoted to Regional Sales Head last month.",
    rating: 5,
    videoUrl: "#",
    photo: "/assets/testimonials/Vikram_Singh.jpeg",
  },
  {
    id: 5,
    name: "Meera Patel",
    role: "College Student",
    city: "Ahmedabad",
    program: "Small Group Classes",
    before:
      "I was nervous about group discussions and couldn't express my ideas clearly.",
    after:
      "I won the college debate championship and got selected for the student council.",
    rating: 5,
    videoUrl: "#",
    photo: "/assets/testimonials/Meera_Patel.jpeg",
  },
  {
    id: 6,
    name: "Arjun Nair",
    role: "Team Lead",
    city: "Chennai",
    program: "Leadership Training",
    before:
      "Leading international teams was stressful due to communication barriers.",
    after:
      "I now manage a team of 25 across 3 countries and received 'Manager of the Year' award.",
    rating: 5,
    videoUrl: "#",
    photo: "/assets/testimonials/Arjun_Nair.jpeg",
  },
];

/** Initials fallback for missing photos */
function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join("");
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const pages = Math.ceil(testimonials.length / 2);

  // --- auto-rotate every 6s; pause on hover or while interacting
  const [paused, setPaused] = useState(false);
  const hoverRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = hoverRef.current;
    if (!el) return;

    const onEnter = () => setPaused(true);
    const onLeave = () => setPaused(false);

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setCurrentIndex((p) => (p + 1) % pages);
    }, 6000);
    return () => clearInterval(id);
  }, [paused, pages]);

  const nextTestimonial = () => {
    setPaused(true); // pause briefly on manual action
    setCurrentIndex((p) => (p + 1) % pages);
    // resume after a short delay
    setTimeout(() => setPaused(false), 2000);
  };

  const prevTestimonial = () => {
    setPaused(true);
    setCurrentIndex((p) => (p - 1 + pages) % pages);
    setTimeout(() => setPaused(false), 2000);
  };

  const currentTestimonials = testimonials.slice(
    currentIndex * 2,
    currentIndex * 2 + 2
  );

  return (
    <section id="success-stories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-primary mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real transformations from learners across India
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative" ref={hoverRef}>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {currentTestimonials.map((t) => (
              <Card key={t.id} className="program-card">
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-secondary mb-6" />

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-accent fill-current"
                      />
                    ))}
                  </div>

                  {/* Before/After */}
                  <div className="space-y-4 mb-6">
                    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                      <p className="text-sm font-medium text-red-800 mb-1">
                        Before:
                      </p>
                      <p className="text-red-700 text-sm">{t.before}</p>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                      <p className="text-sm font-medium text-green-800 mb-1">
                        After:
                      </p>
                      <p className="text-green-700 text-sm">{t.after}</p>
                    </div>
                  </div>

                  {/* Person */}
                  <div className="border-t pt-6 flex items-center gap-4">
                    {/* Avatar with fallback */}
                    {t.photo ? (
                      <img
                        src={t.photo}
                        alt={`${t.name} photo`}
                        className="h-14 w-14 rounded-full object-cover ring-2 ring-secondary/20 hover:ring-secondary transition-shadow"
                        loading="lazy"
                      />
                    ) : (
                      <div className="h-14 w-14 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-semibold ring-2 ring-secondary/20">
                        {initials(t.name)}
                      </div>
                    )}

                    <div>
                      <h4 className="font-poppins font-semibold text-lg text-primary">
                        {t.name}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {t.role} • {t.city}
                      </p>
                      <p className="text-secondary text-sm font-medium mt-1">
                        Program: {t.program}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex space-x-2">
              {Array.from({ length: pages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? "bg-secondary" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonials page ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6 text-lg">
            Ready to write your own success story?
          </p>
          <Button asChild size="lg" className="btn-hero">
            <a href="/book-demo">Start Your Journey Today</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
