import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Clock, Users, Calendar, IndianRupee, Star } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";

type Plan = {
  id: "big-group" | "small-group" | "1-on-1" | "leadership";
  title: string;
  subtitle: string;
  price: string;   // "₹1,000" or "Contact"
  period: string;  // "per month" or "for pricing"
  originalPrice?: string | null;
  duration: string;
  frequency: string;
  sessionLength: string;
  groupSize: string;
  timings: string;
  flexibility: string;
  features: string[];
  bestFor: string;
  popular?: boolean;
  color: string;
};

const pricingPlans: Plan[] = [
  {
    id: "big-group",
    title: "Big Group Classes",
    subtitle: "Great for beginners",
    price: "Contact",
    period: "for pricing",
    originalPrice: null,
    duration: "10 weeks",
    frequency: "Alternate days",
    sessionLength: "75 min",
    groupSize: "15-20 learners",
    timings: "Fixed batches",
    flexibility: "Cannot change timings",
    features: [
      "Weekly themed workshops",
      "Fluency drills & pronunciation",
      "Group storytelling sessions",
      "Live Q&A with trainers",
      "Community challenges",
      "Certificate of completion",
    ],
    bestFor: "First-time learners, budget-conscious, confidence building",
    popular: false,
    color: "bg-orange-50 border-orange-200",
  },
  {
    id: "small-group",
    title: "Small Group Classes",
    subtitle: "Most popular choice",
    price: "₹1,000",
    period: "per month",
    originalPrice: "₹3,000 (3 months upfront)",
    duration: "3 months",
    frequency: "Alternate days",
    sessionLength: "60 min",
    groupSize: "3-7 learners",
    timings: "9 AM - 10 PM",
    flexibility: "Fixed slot (cannot change later)",
    features: [
      "Peer learning environment",
      "Group discussions & debates",
      "Mock interview circles",
      "Impromptu speaking practice",
      "Presentation labs",
      "Monthly progress reviews",
      "Certificate of completion",
    ],
    bestFor: "Students, homemakers, early-career professionals",
    popular: true,
    color: "bg-blue-50 border-blue-200",
  },
  {
    id: "1-on-1",
    title: "1:1 Classes",
    subtitle: "Maximum flexibility",
    price: "₹2,500",
    period: "per month",
    originalPrice: "₹7,000 (3 months upfront)",
    duration: "3 months",
    frequency: "Alternate days",
    sessionLength: "45 min",
    groupSize: "Personal coach",
    timings: "8 AM - 11 PM",
    flexibility: "Change timings anytime",
    features: [
      "Personalized curriculum",
      "Speech therapy drills",
      "Custom vocabulary building",
      "Interview preparation",
      "Presentation coaching",
      "Accent & pronunciation training",
      "Business communication",
      "Flexible scheduling",
      "Monthly evaluation calls",
      "Certificate of completion",
    ],
    bestFor: "Busy professionals, interview prep, stage fear, accent training",
    popular: false,
    color: "bg-green-50 border-green-200",
  },
  {
    id: "leadership",
    title: "Leadership Training",
    subtitle: "For executives & managers",
    price: "Contact",
    period: "for pricing",
    originalPrice: null,
    duration: "Custom",
    frequency: "Flexible",
    sessionLength: "60-90 min",
    groupSize: "Cohort (6-10) or 1:1",
    timings: "Flexible",
    flexibility: "Fully customizable",
    features: [
      "Executive presence training",
      "Strategic messaging",
      "Persuasive storytelling",
      "Stakeholder communication",
      "Conflict management",
      "Cross-cultural communication",
      "Media speaking skills",
      "Leader roundtables",
      "Recording reviews",
      "Personalized feedback reports",
    ],
    bestFor: "CXOs, team leads, managers, public speakers",
    popular: false,
    color: "bg-purple-50 border-purple-200",
  },
];

const addOns = [
  "Monthly extension after base duration",
  "Leadership talks library access",
  "Monthly contests (win up to ₹10,000)",
  "Personal brand building guidance",
  "Social media content coaching",
];

const isContact = (p: Plan) => p.price === "Contact";
const isDemo = (p: Plan) => p.id === "1-on-1" || p.id === "small-group";

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-poppins font-bold text-4xl lg:text-5xl text-primary mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect program for your schedule, goals, and budget. No hidden fees, no surprises.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 mb-16">
            {pricingPlans.map((plan) => {
              const contact = isContact(plan);
              const demo = isDemo(plan);
              const primaryHref = demo
                ? `/book-demo?program=${encodeURIComponent(plan.id)}`
                : `/enquire?program=${encodeURIComponent(plan.id)}`;

              return (
                <Card
                  key={plan.id}
                  className={`program-card relative ${plan.popular ? "ring-2 ring-secondary" : ""} ${plan.color} flex flex-col`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  )}

                  <CardHeader className="pb-4">
                    <CardTitle className="font-poppins text-2xl text-primary">{plan.title}</CardTitle>
                    <p className="text-muted-foreground text-sm">{plan.subtitle}</p>

                    {/* Price Block: responsive (inline on small, stacked on md+) */}
                    <div className="mt-3">
                      {/* Inline (mobile) */}
                      <div className="md:hidden flex items-center gap-2">
                        {contact ? (
                          <>
                            <span className="text-2xl font-bold text-secondary">Contact</span>
                            <span className="text-sm text-muted-foreground">· {plan.period}</span>
                          </>
                        ) : (
                          <>
                            <IndianRupee className="w-5 h-5 text-secondary" />
                            <span className="text-2xl font-bold text-secondary">
                              {plan.price.replace("₹", "")}
                            </span>
                            <span className="text-sm text-muted-foreground">· {plan.period}</span>
                          </>
                        )}
                      </div>

                      {/* Stacked (md and up) */}
                      <div className="hidden md:flex items-start gap-2">
                        {contact ? (
                          <div className="leading-tight">
                            <div className="text-3xl font-bold text-secondary">Contact</div>
                            <div className="text-sm text-muted-foreground">{plan.period}</div>
                          </div>
                        ) : (
                          <>
                            <IndianRupee className="w-5 h-5 mt-1 text-secondary" />
                            <div className="leading-tight">
                              <div className="text-3xl font-bold text-secondary">
                                {plan.price.replace("₹", "")}
                              </div>
                              <div className="text-sm text-muted-foreground">{plan.period}</div>
                            </div>
                          </>
                        )}
                      </div>

                      {plan.originalPrice && (
                        <p className="text-sm text-muted-foreground mt-1">
                          Save with upfront: {plan.originalPrice}
                        </p>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6 flex-1 flex flex-col">
                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <Calendar className="w-4 h-4 mr-2 text-secondary" />
                        <span>
                          {plan.duration} • {plan.frequency}
                        </span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="w-4 h-4 mr-2 text-secondary" />
                        <span>{plan.sessionLength} sessions</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="w-4 h-4 mr-2 text-secondary" />
                        <span>{plan.groupSize}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">Timings:</span> {plan.timings}
                      </div>
                      <div
                        className={`text-xs p-2 rounded-lg ${
                          plan.flexibility.toLowerCase().includes("anytime")
                            ? "bg-green-100 text-green-800"
                            : plan.flexibility.toLowerCase().includes("cannot")
                            ? "bg-red-100 text-red-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {plan.flexibility}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary mb-3">What's included:</h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start text-sm">
                            <Check className="w-3 h-3 mr-2 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white/80 rounded-lg p-3">
                      <h4 className="font-semibold text-primary text-sm mb-1">Best for:</h4>
                      <p className="text-muted-foreground text-xs">{plan.bestFor}</p>
                    </div>

                    {/* Fixed bottom CTA */}
                    <div className="mt-auto">
                      <Button asChild className="w-full btn-hero">
                        <a href={primaryHref}>{demo ? "Book Free Demo" : "Enquire Now"}</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Add-ons — emphasized & responsive */}
          <div className="mb-12">
            <Card className="program-card max-w-5xl mx-auto bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200">
              <CardHeader className="text-center">
                <CardTitle className="font-poppins text-2xl lg:text-3xl text-primary">
                  Available Add-ons
                </CardTitle>
                <p className="text-muted-foreground">
                  Enhance your learning experience with these additional features
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {addOns.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-emerald-200 bg-white/90 px-4 py-3 shadow-sm"
                    >
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100">
                        <Check className="h-4 w-4 text-emerald-700" />
                      </span>
                      <span className="text-sm font-medium text-emerald-900">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <h3 className="font-poppins font-semibold text-2xl text-primary mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Book a free demo or send an enquiry—our counselors will guide you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-hero">
                <a href="/book-demo">Book Free Demo</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/enquire">Enquire Now</a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Pricing;
