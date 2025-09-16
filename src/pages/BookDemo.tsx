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
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { Calendar, Clock, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  whatsapp: z.string().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit WhatsApp number"),
  email: z.string().email("Please enter a valid email address"),
  city: z.string().min(2, "Please enter your city"),
  currentLevel: z.string().min(1, "Please select your current level"),
  goal: z.string().optional(),
  preferredTime: z.string().min(1, "Please select your preferred time"),
  programInterest: z.string().min(1, "Please select a program"),
  consent: z.boolean().refine(val => val === true, "Please agree to our terms"),
});

type FormData = z.infer<typeof formSchema>;

const BookDemo = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

    // Preselect program from ?program=
  const programFromQuery = new URLSearchParams(window.location.search).get("program") ?? "";
   const urlParams = new URLSearchParams(window.location.search);
   const referringPage = urlParams.get("ref") ?? "home";  

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      whatsapp: "",
      email: "",
      city: "",
      currentLevel: "",
      goal: "",
      preferredTime: "",
      programInterest: programFromQuery,
      consent: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Extract UTM parameters from URL
      const urlParams = new URLSearchParams(window.location.search);
      const utmSource = urlParams.get('utm_source');
      const utmMedium = urlParams.get('utm_medium');
      const utmCampaign = urlParams.get('utm_campaign');

      // Save to Supabase
      const { error } = await supabase.from('demo_bookings').insert({
        name: data.name,
        whatsapp: data.whatsapp,
        email: data.email,
        city: data.city,
        current_level: data.currentLevel,
        goal: data.goal,
        preferred_time: data.preferredTime,
        program_interest: data.programInterest,
        consent: data.consent,
        utm_source: utmSource,
        utm_medium: utmMedium,
        utm_campaign: utmCampaign,
        referring_page: referringPage,
      });

      if (error) {
        throw error;
      }
      
      setIsSubmitted(true);
      toast({
        title: "Demo Booked Successfully!",
        description: "We'll contact you within 24 hours to schedule your demo.",
      });
    } catch (error) {
      console.error('Error saving demo booking:', error);
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
                  Demo Booked Successfully!
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Thank you for your interest in Edushetra. Our team will contact you within 24 hours to schedule your free demo session.
                </p>
                <div className="bg-blue-50 rounded-lg p-6 mb-8">
                  <h3 className="font-semibold text-primary mb-3">What happens next?</h3>
                  <ul className="text-left space-y-2 text-muted-foreground">
                    <li>• Our counselor will call you to understand your goals</li>
                    <li>• We'll match you with the perfect trainer</li>
                    <li>• Schedule a convenient time for your demo</li>
                    <li>• Experience our teaching methodology firsthand</li>
                  </ul>
                </div>
                <div className="flex gap-4 justify-center">
                  <Button asChild variant="outline">
                    <a href="/">Back to Home</a>
                  </Button>
                  <Button asChild className="btn-hero">
                    <a href="/level-test">Take Level Test</a>
                  </Button>
                </div>
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-poppins font-bold text-4xl lg:text-5xl text-primary mb-6">
              Book Your Free Demo
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience our teaching methodology and get matched with the perfect trainer for your goals
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="program-card">
                <CardHeader>
                  <CardTitle className="font-poppins text-2xl text-primary">
                    Tell us about yourself
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your full name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="whatsapp"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>WhatsApp Number *</FormLabel>
                              <FormControl>
                                <Input placeholder="9876543210" {...field} />
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
                              <FormLabel>Email Address *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="your@email.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="city"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>City *</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your city" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="currentLevel"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Current English Level *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select your level" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="beginner">Beginner</SelectItem>
                                  <SelectItem value="intermediate">Intermediate</SelectItem>
                                  <SelectItem value="advanced">Advanced</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="programInterest"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Program Interest *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a program" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="1-on-1">1:1 Classes</SelectItem>
                                  <SelectItem value="small-group">Small Group Classes</SelectItem>
                                  <SelectItem value="big-group">Big Group Classes</SelectItem>
                                  <SelectItem value="leadership">Leadership Training</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="preferredTime"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Preferred Time *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select preferred time" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="morning">Morning (8 AM - 12 PM)</SelectItem>
                                <SelectItem value="afternoon">Afternoon (12 PM - 6 PM)</SelectItem>
                                <SelectItem value="evening">Evening (6 PM - 11 PM)</SelectItem>
                                <SelectItem value="flexible">Flexible</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="goal"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Learning Goal *</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us what you want to achieve (e.g., improve interview skills, speak confidently at work, overcome stage fear...)"
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
                        name="consent"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="text-sm">
                                I agree to receive communications from Edushetra and consent to my data being processed for demo scheduling.
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />

                      <Button type="submit" className="w-full btn-hero" disabled={form.formState.isSubmitting}>
                        {form.formState.isSubmitting ? "Booking Demo..." : "Book My Free Demo"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="program-card">
                <CardContent className="p-6">
                  <h3 className="font-poppins font-semibold text-lg text-primary mb-4">
                    What to Expect
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Calendar className="w-5 h-5 text-secondary mt-0.5" />
                      <div>
                        <p className="font-medium text-primary">45-minute demo session</p>
                        <p className="text-sm text-muted-foreground">Experience our teaching methodology</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-secondary mt-0.5" />
                      <div>
                        <p className="font-medium text-primary">Flexible scheduling</p>
                        <p className="text-sm text-muted-foreground">Choose a time that works for you</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5" />
                      <div>
                        <p className="font-medium text-primary">Personalized assessment</p>
                        <p className="text-sm text-muted-foreground">Get matched with the right trainer</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="program-card bg-gradient-to-br from-blue-50 to-blue-100">
                <CardContent className="p-6 text-center">
                  <h3 className="font-poppins font-semibold text-lg text-primary mb-2">
                    Need Help?
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Have questions? Our counselors are here to help.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <a href="tel:+919876543210">Call +91-9876543210</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default BookDemo;