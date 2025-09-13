import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { 
  Building2, 
  Users, 
  TrendingUp, 
  Target, 
  CheckCircle, 
  Award,
  Globe,
  MessageSquare,
  Presentation,
  Handshake
} from "lucide-react";

const formSchema = z.object({
  companyName: z.string().min(2, "Company name is required"),
  contactName: z.string().min(2, "Contact name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  teamSize: z.string().min(1, "Please select team size"),
  objectives: z.string().min(10, "Please describe your objectives"),
  timeline: z.string().min(1, "Please select timeline"),
  budget: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const modules = [
  {
    icon: Presentation,
    title: "Executive Presence",
    description: "Build commanding leadership presence and confident communication style"
  },
  {
    icon: MessageSquare,
    title: "Strategic Messaging",
    description: "Craft and deliver compelling messages that drive business outcomes"
  },
  {
    icon: Users,
    title: "Team Communication",
    description: "Enhance collaboration and alignment across teams and departments"
  },
  {
    icon: Globe,
    title: "Cross-Cultural Communication",
    description: "Navigate global business conversations with cultural sensitivity"
  },
  {
    icon: Handshake,
    title: "Client Communication",
    description: "Master stakeholder management and client relationship building"
  },
  {
    icon: Target,
    title: "Persuasive Storytelling",
    description: "Use narrative techniques to influence and inspire action"
  }
];

const outcomes = [
  "Increased team productivity and collaboration",
  "Enhanced client satisfaction and retention",
  "Improved cross-functional communication",
  "Stronger leadership pipeline development",
  "Better employee engagement scores",
  "More effective presentation delivery"
];

const ForCorporates = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      teamSize: "",
      objectives: "",
      timeline: "",
      budget: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      console.log("Corporate inquiry data:", data);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      toast({
        title: "Inquiry Submitted Successfully!",
        description: "Our corporate training team will contact you within 24 hours.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-20 pb-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="program-card text-center">
              <CardContent className="p-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                <h1 className="font-poppins font-bold text-3xl text-primary mb-4">
                  Thank You for Your Interest!
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Our corporate training team will reach out within 24 hours to discuss your requirements and create a customized program proposal.
                </p>
                <Button asChild className="btn-hero">
                  <a href="/">Back to Home</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 pb-16">
        {/* Hero Section */}
        <section className="py-16 section-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-poppins font-bold text-4xl lg:text-5xl text-primary mb-6">
              Corporate Communication Training
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Transform your team's communication skills with customized programs designed for businesses across India
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <Building2 className="w-5 h-5 text-secondary" />
                <span className="font-medium">Fortune 500 Clients</span>
              </div>
              <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <Users className="w-5 h-5 text-secondary" />
                <span className="font-medium">5000+ Professionals Trained</span>
              </div>
              <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <Award className="w-5 h-5 text-secondary" />
                <span className="font-medium">95% Satisfaction Rate</span>
              </div>
            </div>
          </div>
        </section>

        {/* Training Modules */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-poppins font-bold text-4xl text-primary mb-6">
                Training Modules
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive programs tailored to your organization's specific needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {modules.map((module, index) => {
                const IconComponent = module.icon;
                return (
                  <Card key={index} className="program-card">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-secondary" />
                      </div>
                      <h3 className="font-poppins font-semibold text-xl text-primary mb-3">
                        {module.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {module.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-20 section-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-poppins font-bold text-4xl text-primary mb-6">
                  Measurable Business Impact
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Our corporate programs deliver quantifiable improvements in team performance and business outcomes.
                </p>
                <div className="space-y-4">
                  {outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-muted-foreground">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-elegant">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-secondary mb-2">25%</div>
                    <p className="text-muted-foreground text-sm">Increase in presentation confidence</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary mb-2">40%</div>
                    <p className="text-muted-foreground text-sm">Improvement in client satisfaction</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary mb-2">30%</div>
                    <p className="text-muted-foreground text-sm">Better team collaboration</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary mb-2">50%</div>
                    <p className="text-muted-foreground text-sm">Faster decision making</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-poppins font-bold text-4xl text-primary mb-6">
                Get a Custom Training Proposal
              </h2>
              <p className="text-xl text-muted-foreground">
                Tell us about your team's needs and we'll create a tailored program just for you
              </p>
            </div>

            <Card className="program-card">
              <CardContent className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="companyName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Your company name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="contactName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Contact Person *</FormLabel>
                            <FormControl>
                              <Input placeholder="Your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Business Email *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="your@company.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number *</FormLabel>
                            <FormControl>
                              <Input placeholder="+91-9876543210" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="teamSize"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Team Size *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select team size" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="5-15">5-15 people</SelectItem>
                                <SelectItem value="16-50">16-50 people</SelectItem>
                                <SelectItem value="51-100">51-100 people</SelectItem>
                                <SelectItem value="100+">100+ people</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="timeline"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Timeline *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select timeline" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="immediate">Immediate (1-2 weeks)</SelectItem>
                                <SelectItem value="1-month">Within 1 month</SelectItem>
                                <SelectItem value="3-months">Within 3 months</SelectItem>
                                <SelectItem value="planning">Just planning</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="objectives"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Training Objectives *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Describe your team's communication challenges and what you hope to achieve..."
                              className="min-h-[100px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Budget Range (Optional)</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select budget range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="under-1l">Under ₹1 Lakh</SelectItem>
                              <SelectItem value="1-3l">₹1-3 Lakhs</SelectItem>
                              <SelectItem value="3-5l">₹3-5 Lakhs</SelectItem>
                              <SelectItem value="5l+">₹5+ Lakhs</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full btn-hero" size="lg" disabled={form.formState.isSubmitting}>
                      {form.formState.isSubmitting ? "Submitting..." : "Get Custom Proposal"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default ForCorporates;