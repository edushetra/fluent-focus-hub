import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Clock, Users, Calendar, IndianRupee, Star } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";

const pricingPlans = [
  {
    title: "Big Group Classes",
    subtitle: "Great for beginners",
    price: "₹899",
    period: "One-time",
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
      "Certificate of completion"
    ],
    bestFor: "First-time learners, budget-conscious, confidence building",
    popular: false,
    color: "bg-orange-50 border-orange-200"
  },
  {
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
      "Certificate of completion"
    ],
    bestFor: "Students, homemakers, early-career professionals",
    popular: true,
    color: "bg-blue-50 border-blue-200"
  },
  {
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
      "Certificate of completion"
    ],
    bestFor: "Busy professionals, interview prep, stage fear, accent training",
    popular: false,
    color: "bg-green-50 border-green-200"
  },
  {
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
      "Personalized feedback reports"
    ],
    bestFor: "CXOs, team leads, managers, public speakers",
    popular: false,
    color: "bg-purple-50 border-purple-200"
  }
];

const addOns = [
  "Monthly extension after base duration",
  "Leadership talks library access",
  "Monthly contests (win up to ₹10,000)",
  "Personal brand building guidance",
  "Social media content coaching"
];

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
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`program-card relative ${plan.popular ? 'ring-2 ring-secondary' : ''} ${plan.color}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="pb-4">
                  <CardTitle className="font-poppins text-2xl text-primary">
                    {plan.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">{plan.subtitle}</p>
                  
                  {/* Pricing */}
                  <div className="space-y-2">
                    <div className="flex items-baseline">
                      {plan.price !== "Contact" && <IndianRupee className="w-5 h-5 text-secondary" />}
                      <span className="text-3xl font-bold text-secondary">{plan.price}</span>
                      <span className="text-muted-foreground ml-2">{plan.period}</span>
                    </div>
                    {plan.originalPrice && (
                      <p className="text-sm text-muted-foreground">
                        Save with upfront: {plan.originalPrice}
                      </p>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Program Details */}
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <Calendar className="w-4 h-4 mr-2 text-secondary" />
                      <span>{plan.duration} • {plan.frequency}</span>
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
                    <div className={`text-xs p-2 rounded-lg ${
                      plan.flexibility.includes("anytime") 
                        ? "bg-green-100 text-green-800" 
                        : plan.flexibility.includes("cannot")
                        ? "bg-red-100 text-red-800"
                        : "bg-blue-100 text-blue-800"
                    }`}>
                      {plan.flexibility}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-primary mb-3">What's included:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <Check className="w-3 h-3 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Best For */}
                  <div className="bg-white/80 rounded-lg p-3">
                    <h4 className="font-semibold text-primary text-sm mb-1">Best for:</h4>
                    <p className="text-muted-foreground text-xs">{plan.bestFor}</p>
                  </div>

                  {/* CTA Button */}
                  {plan.price === "Contact" ? (
                    <Button asChild className="w-full btn-hero">
                      <a href="mailto:leadership@edushetra.com">Contact Us</a>
                    </Button>
                  ) : (
                    <div className="space-y-2">
                      <Button asChild className="w-full btn-hero">
                        <a href="/book-demo">Book Free Demo</a>
                      </Button>
                      <Button asChild variant="outline" className="w-full text-xs">
                        <a href="#payment">Pay & Enroll</a>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Add-ons Section */}
          <div className="text-center mb-12">
            <Card className="program-card max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="font-poppins text-2xl text-primary">
                  Available Add-ons
                </CardTitle>
                <p className="text-muted-foreground">
                  Enhance your learning experience with these additional features
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {addOns.map((addon, index) => (
                    <div key={index} className="flex items-center space-x-3 text-left">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-muted-foreground">{addon}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Money Back Guarantee */}
          <div className="text-center mb-12">
            <Card className="program-card bg-green-50 border-green-200 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-poppins font-semibold text-xl text-primary mb-2">
                  Money-Back Trial Guarantee*
                </h3>
                <p className="text-muted-foreground">
                  Not satisfied after your first session? Get a full refund, no questions asked.
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  *Terms and conditions apply. Valid for first session only.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl text-primary mb-8">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="program-card text-left">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-primary mb-2">Can I switch programs?</h4>
                  <p className="text-muted-foreground text-sm">
                    Yes, you can upgrade or switch programs anytime. We'll adjust the pricing accordingly.
                  </p>
                </CardContent>
              </Card>
              <Card className="program-card text-left">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-primary mb-2">What if I miss a session?</h4>
                  <p className="text-muted-foreground text-sm">
                    For 1:1 classes, you can reschedule. For group classes, we provide session recordings.
                  </p>
                </CardContent>
              </Card>
              <Card className="program-card text-left">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-primary mb-2">Is there a family discount?</h4>
                  <p className="text-muted-foreground text-sm">
                    Yes! We offer 15% discount when 2+ family members enroll together.
                  </p>
                </CardContent>
              </Card>
              <Card className="program-card text-left">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-primary mb-2">Do you provide certificates?</h4>
                  <p className="text-muted-foreground text-sm">
                    Yes, all programs include a certificate of completion upon finishing the course.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <h3 className="font-poppins font-semibold text-2xl text-primary mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Book a free demo or speak with our counselors to find the perfect program for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-hero">
                <a href="/book-demo">Book Free Demo</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:+919876543210">Call +91-9876543210</a>
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