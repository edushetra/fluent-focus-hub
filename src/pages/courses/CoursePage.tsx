import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star, Users, BookOpen, MessageSquare, Presentation } from "lucide-react";
import { Link } from "react-router-dom";

/** Keep in sync with Programs.tsx programId union */
type ProgramId = "1-on-1" | "small-group" | "big-group" | "leadership";

type CourseConfig = {
  /** Page basics */
  slug: string;                 // e.g., "spoken-english"
  title: string;                // H1
  subtitle: string;             // short one-liner under H1
  seo: {
    title: string;              // <title>
    description: string;        // meta description + og:description
    image?: string;             // absolute/relative og image (optional)
  };

  /** Map this course to a program to preselect on Book Demo */
  mappedProgram: ProgramId;     // e.g., "small-group"

  /** Sections */
  whoFor: string[];             // bullets (chips)
  outcomes: string[];           // green tick list
  modules: { icon: "talk" | "group" | "present" | "email" | "interview" | "story"; title: string; desc: string }[];
};

const IconSwitch = ({ name }: { name: CourseConfig["modules"][number]["icon"] }) => {
  if (name === "group") return <Users className="w-6 h-6 text-secondary" />;
  if (name === "present") return <Presentation className="w-6 h-6 text-secondary" />;
  if (name === "email") return <BookOpen className="w-6 h-6 text-secondary" />;
  if (name === "interview") return <MessageSquare className="w-6 h-6 text-secondary" />;
  if (name === "story") return <Star className="w-6 h-6 text-secondary" />;
  return <MessageSquare className="w-6 h-6 text-secondary" />; // "talk"
};

export default function CoursePage(cfg: CourseConfig) {
  // Minimal SEO without extra deps
  useEffect(() => {
    document.title = cfg.seo.title;
    const ensure = (name: string, attr: "name" | "property" = "name") => {
      let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      return el;
    };
    ensure("description").setAttribute("content", cfg.seo.description);
    ensure("og:title", "property").setAttribute("content", cfg.seo.title);
    ensure("og:description", "property").setAttribute("content", cfg.seo.description);
    if (cfg.seo.image) ensure("og:image", "property").setAttribute("content", cfg.seo.image);
    ensure("og:type", "property").setAttribute("content", "website");
    ensure("twitter:card", "name").setAttribute("content", "summary_large_image");
    ensure("twitter:title", "name").setAttribute("content", cfg.seo.title);
    ensure("twitter:description", "name").setAttribute("content", cfg.seo.description);
    if (cfg.seo.image) ensure("twitter:image", "name").setAttribute("content", cfg.seo.image);
  }, [cfg]);

  // Build Book Demo link with preselected program + ref param
  const demoHref = `/book-demo?program=${encodeURIComponent(cfg.mappedProgram)}&ref=${encodeURIComponent(cfg.slug)}`;

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 section-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-poppins font-bold text-4xl lg:text-5xl text-primary mb-4">
              {cfg.title}
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              {cfg.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              {cfg.whoFor.map((t) => (
                <span key={t} className="bg-white rounded-full px-4 py-2 shadow-sm text-sm font-medium">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <Button asChild size="lg" className="btn-hero">
                <Link to={demoHref}>Book a Free Demo</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-primary">Outcomes You’ll Achieve</h2>
              <p className="text-muted-foreground mt-2">Measurable skills you can use immediately</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cfg.outcomes.map((o) => (
                <Card key={o} className="program-card">
                  <CardContent className="p-6 flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{o}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Modules */}
        <section className="py-16 section-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-primary">What You’ll Learn</h2>
              <p className="text-muted-foreground mt-2">Activity-driven modules with practice and feedback</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cfg.modules.map((m, i) => (
                <Card key={`${m.title}-${i}`} className="program-card">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                      <IconSwitch name={m.icon} />
                    </div>
                    <h3 className="font-poppins font-semibold text-xl text-primary mb-2">{m.title}</h3>
                    <p className="text-muted-foreground">{m.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="btn-hero">
                <Link to={demoHref}>Book a Free Demo</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
