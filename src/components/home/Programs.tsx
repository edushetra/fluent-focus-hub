import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Clock, Users, Calendar as CalIcon, CheckCircle, ChevronDown } from "lucide-react";

type Program = {
  title: string;
  duration?: string;
  frequency?: string;
  sessionLength?: string;
  groupSize?: string;
  timings?: string;
  flexibility?: string;
  price: string;          // human-readable
  upfrontPrice?: string;
  bestFor: string[];
  activities: string[];
  popular?: boolean;
  href: string;           // “learn more” route if you add later
  programId: "1-on-1" | "small-group" | "big-group" | "leadership";
};

const programs: Program[] = [
  {
    title: "1:1 Classes",
    duration: "3 months",
    frequency: "Alternate days",
    sessionLength: "45 min / session",
    timings: "8 AM – 11 PM (your choice)",
    flexibility: "Reschedule-friendly",
    price: "₹2,500 / month",
    upfrontPrice: "₹7,000 (3 months)",
    bestFor: ["Busy professionals", "Interview prep", "Stage fear", "Accent therapy"],
    activities: ["Speech therapy drills", "Vocabulary sprints", "Structured thinking", "Business comms"],
    popular: false,
    href: "/courses/one-on-one",
    programId: "1-on-1",
  },
  {
    title: "Small Group Classes",
    duration: "3 months",
    frequency: "Alternate days",
    sessionLength: "60 min / session",
    groupSize: "3–7 learners",
    timings: "Fixed slots (9 AM–10 PM)",
    flexibility: "Slot fixed for the batch",
    price: "₹1,000 / month",
    upfrontPrice: "₹3,000 (3 months)",
    bestFor: ["Peer learning", "Group discussions", "Collaborative practice", "Students"],
    activities: ["Group discussions", "Debates", "Mock interviews", "Presentation labs"],
    popular: true,
    href: "/courses/small-group",
    programId: "small-group",
  },
  {
    title: "Big Group Classes",
    duration: "10 weeks",
    frequency: "Alternate days",
    sessionLength: "75 min / session",
    timings: "Fixed weekend & weekday batches",
    // per requirement: contact for price
    price: "Contact for price",
    bestFor: ["First-time learners", "Budget-seekers", "Confidence building"],
    activities: ["Weekly workshops", "Fluency drills", "Storytelling", "Group challenges"],
    popular: false,
    href: "/courses/big-group",
    programId: "big-group",
  },
  {
    title: "Leadership Training",
    groupSize: "Cohort (6–10) or 1:1",
    timings: "Flexible",
    price: "Contact for price",
    bestFor: ["CXOs", "Team leads", "Managers", "Public speakers"],
    activities: ["Leader roundtables", "Recording reviews", "Personalized feedback"],
    popular: false,
    href: "/courses/leadership",
    programId: "leadership",
  },
];

function LineItem({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-center text-sm text-muted-foreground">
      <span className="w-4 h-4 mr-2 text-secondary flex items-center justify-center">{icon}</span>
      <span>{children}</span>
    </div>
  );
}

const ctaFor = (p: Program) => {
  const isDemo = p.programId === "1-on-1" || p.programId === "small-group";
  return isDemo
    ? { label: "Book Demo", to: `/book-demo?program=${encodeURIComponent(p.programId)}` }
    : { label: "Enquire Now", to: `/enquire?program=${encodeURIComponent(p.programId)}` };
};

const Programs = () => {
  // Mobile accordion
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <section className="py-20 bg-white" id="programs" aria-labelledby="programs-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="programs-title" className="font-poppins font-bold text-4xl lg:text-5xl text-primary mb-6">
            Choose Your Learning Path
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Flexible programs designed for every schedule, goal, and budget
          </p>
        </div>

        {/* Mobile: collapsible cards */}
        <div className="space-y-4 sm:hidden">
          {programs.map((p) => {
            const key = p.title;
            const open = openKey === key;
            const cta = ctaFor(p);
            return (
              <Card key={key} className={`relative ${p.popular ? "ring-2 ring-secondary" : ""}`}>
                {p.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-1">
                    Most Popular
                  </Badge>
                )}

                <button
                  className="w-full flex items-center justify-between px-4 pt-4 pb-3 text-left"
                  onClick={() => setOpenKey(open ? null : key)}
                  aria-expanded={open}
                  aria-controls={`panel-${key}`}
                >
                  <div>
                    <CardTitle className="font-poppins text-xl text-primary">{p.title}</CardTitle>
                    <p className="text-sm text-slate-700 mt-1">{p.price}</p>
                  </div>
                  <ChevronDown className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`} />
                </button>

                <div
                  id={`panel-${key}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <CardContent className="pt-0 pb-4">
                      <div className="space-y-3">
                        {p.duration && (
                          <LineItem icon={<CalIcon className="w-4 h-4" />}>
                            {p.duration}
                            {p.frequency ? ` • ${p.frequency}` : ""}
                          </LineItem>
                        )}
                        {p.sessionLength && <LineItem icon={<Clock className="w-4 h-4" />}>{p.sessionLength}</LineItem>}
                        {p.groupSize && <LineItem icon={<Users className="w-4 h-4" />}>{p.groupSize}</LineItem>}
                        {p.timings && (
                          <div className="text-sm text-muted-foreground">
                            <span className="font-medium">Timings:</span> {p.timings}
                          </div>
                        )}
                        {p.flexibility && (
                          <div className="text-sm text-success-foreground bg-success/20 px-3 py-2 rounded-lg">
                            {p.flexibility}
                          </div>
                        )}

                        {p.upfrontPrice && <p className="text-sm text-muted-foreground">or {p.upfrontPrice} upfront</p>}

                        <div>
                          <h4 className="font-semibold text-primary mb-2">Best suited for:</h4>
                          <div className="flex flex-wrap gap-2">
                            {p.bestFor.map((item) => (
                              <Badge key={item} variant="outline" className="text-xs">
                                {item}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-primary mb-2">Key activities:</h4>
                          <ul className="space-y-1">
                            {p.activities.slice(0, 3).map((a) => (
                              <li key={a} className="flex items-start text-sm text-muted-foreground">
                                <CheckCircle className="w-3 h-3 mr-2 text-success mt-0.5 flex-shrink-0" />
                                <span>{a}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Button asChild className="w-full btn-hero mt-2">
                          <Link to={cta.to}>{cta.label}</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Desktop: fixed-bottom CTA inside equal-height cards */}
        <div className="hidden sm:grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {programs.map((p) => {
            const cta = ctaFor(p);
            return (
              <Card
                key={p.title}
                className={`program-card relative ${p.popular ? "ring-2 ring-secondary" : ""} flex flex-col`}
              >
                {p.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-1">
                    Most Popular
                  </Badge>
                )}

                <CardHeader className="pb-4">
                  <CardTitle className="font-poppins text-2xl text-primary mb-2">{p.title}</CardTitle>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-secondary">{p.price}</div>
                    {p.upfrontPrice && (
                      <p className="text-sm text-muted-foreground">or {p.upfrontPrice} upfront</p>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6 flex-1 flex flex-col">
                  <div className="space-y-3">
                    {p.duration && (
                      <LineItem icon={<CalIcon className="w-4 h-4" />}>
                        {p.duration}
                        {p.frequency ? ` • ${p.frequency}` : ""}
                      </LineItem>
                    )}
                    {p.sessionLength && <LineItem icon={<Clock className="w-4 h-4" />}>{p.sessionLength}</LineItem>}
                    {p.groupSize && <LineItem icon={<Users className="w-4 h-4" />}>{p.groupSize}</LineItem>}
                    {p.timings && (
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">Timings:</span> {p.timings}
                      </div>
                    )}
                    {p.flexibility && (
                      <div className="text-sm text-success-foreground bg-success/20 px-3 py-2 rounded-lg">
                        {p.flexibility}
                      </div>
                    )}
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">Best suited for:</h4>
                    <div className="flex flex-wrap gap-2">
                      {p.bestFor.map((item) => (
                        <Badge key={item} variant="outline" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">Key activities:</h4>
                    <ul className="space-y-1">
                      {p.activities.slice(0, 3).map((a) => (
                        <li key={a} className="flex items-start text-sm text-muted-foreground">
                          <CheckCircle className="w-3 h-3 mr-2 text-success mt-0.5 flex-shrink-0" />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* fixed to bottom via mt-auto */}
                  <div className="mt-auto">
                    <Button asChild className="w-full btn-hero">
                      <Link to={cta.to}>{cta.label}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">Not sure which program is right for you?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/level-test">Take Level Test</Link>
            </Button>
            <Button asChild size="lg" className="btn-hero">
              <Link to="/book-demo">Book Free Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
