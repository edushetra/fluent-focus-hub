import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { CheckCircle } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  whatsapp: z.string().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit WhatsApp number"),
  email: z.string().email("Please enter a valid email address"),
  city: z.string().min(2, "Please enter your city"),
  yearsExperience: z.string().min(1, "Please select your experience"),
  primaryExpertise: z.array(z.string()).min(1, "Select at least one expertise area"),
  teachingModes: z.array(z.string()).min(1, "Select at least one mode"),
  languages: z.array(z.string()).min(1, "Select at least one language"),
  availability: z.string().min(1, "Please choose your availability"),
  preferredSlots: z.string().min(1, "Please select preferred time slot"),
  hourlyRate: z.string().optional(), // keep as string; convert server-side if needed
  linkedinUrl: z.string().url("Enter a valid URL").optional().or(z.literal("")),
  resumeUrl: z.string().url("Enter a valid URL (Google Drive / Dropbox)").optional().or(z.literal("")),
  about: z.string().min(10, "Tell us a bit more about your teaching approach"),
  hasLaptop: z.boolean().default(false),
  consent: z.boolean().refine((v) => v === true, "Please agree to our terms"),
});

type FormData = z.infer<typeof formSchema>;

const TutorApplication = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const urlParams = new URLSearchParams(window.location.search);
  const referringPage = urlParams.get("ref") ?? "tutor-apply";

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      whatsapp: "",
      email: "",
      city: "",
      yearsExperience: "",
      primaryExpertise: [],
      teachingModes: [],
      languages: [],
      availability: "",
      preferredSlots: "",
      hourlyRate: "",
      linkedinUrl: "",
      resumeUrl: "",
      about: "",
      hasLaptop: false,
      consent: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const utmSource = urlParams.get("utm_source");
      const utmMedium = urlParams.get("utm_medium");
      const utmCampaign = urlParams.get("utm_campaign");

      const { error } = await supabase.from("tutor_applications").insert({
        name: data.name,
        whatsapp: data.whatsapp,
        email: data.email,
        city: data.city,
        years_experience: data.yearsExperience,
        primary_expertise: data.primaryExpertise, // text[]
        teaching_modes: data.teachingModes,       // text[]
        languages: data.languages,                // text[]
        availability: data.availability,
        preferred_slots: data.preferredSlots,
        hourly_rate: data.hourlyRate || null,
        linkedin_url: data.linkedinUrl || null,
        resume_url: data.resumeUrl || null,
        about: data.about,
        has_laptop: data.hasLaptop,
        consent: data.consent,
        utm_source: utmSource,
        utm_medium: utmMedium,
        utm_campaign: utmCampaign,
        referring_page: referringPage,
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: "Application Submitted!",
        description: "Thank you for applying. Our team will review your profile and get back to you.",
      });
    } catch (err) {
      console.error("Error saving tutor application:", err);
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
                  Application Submitted!
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Thanks for your interest in teaching with EduShetra. We’ll review your application and reach out if there’s a fit.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button asChild variant="outline">
                    <a href="/">Back to Home</a>
                  </Button>
                  <Button asChild className="btn-hero">
                    <a href="/careers">View Careers</a>
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-poppins font-bold text-4xl lg:text-5xl text-primary mb-6">
              Become a Tutor at EduShetra
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join India’s largest network of communication trainers. Share your expertise and help learners speak with confidence.
            </p>
          </div>

          <Card className="program-card">
            <CardHeader>
              <CardTitle className="font-poppins text-2xl text-primary">
                Tutor Application Form
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {/* Basic info */}
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

                  {/* Experience & availability */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="yearsExperience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Years of Teaching Experience *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select experience" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="0-1">0–1 years</SelectItem>
                              <SelectItem value="1-3">1–3 years</SelectItem>
                              <SelectItem value="3-5">3–5 years</SelectItem>
                              <SelectItem value="5-10">5–10 years</SelectItem>
                              <SelectItem value="10+">10+ years</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="availability"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Availability *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Choose availability" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="weekdays">Weekdays</SelectItem>
                              <SelectItem value="weekends">Weekends</SelectItem>
                              <SelectItem value="both">Both</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="preferredSlots"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Time Slot *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select preferred time" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="morning">Morning (6 AM – 12 PM)</SelectItem>
                              <SelectItem value="afternoon">Afternoon (12 PM – 6 PM)</SelectItem>
                              <SelectItem value="evening">Evening (6 PM – 11 PM)</SelectItem>
                              <SelectItem value="flexible">Flexible</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="hourlyRate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Expected Hourly Rate (₹/hr, optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., 600" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Expertise / modes / languages */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <FormField
                      control={form.control}
                      name="primaryExpertise"
                      render={() => (
                        <FormItem>
                          <FormLabel>Primary Expertise *</FormLabel>
                          <div className="grid grid-cols-1 gap-3">
                            {[
                              "Spoken English",
                              "Business Communication",
                              "Interview Preparation",
                              "Public Speaking",
                              "Leadership Communication",
                              "Accent & Pronunciation",
                            ].map((label) => (
                              <div key={label} className="flex items-center space-x-2">
                                <Checkbox
                                  checked={form.getValues("primaryExpertise").includes(label)}
                                  onCheckedChange={(checked) => {
                                    const current = form.getValues("primaryExpertise");
                                    form.setValue(
                                      "primaryExpertise",
                                      checked ? [...current, label] : current.filter((l) => l !== label),
                                      { shouldValidate: true }
                                    );
                                  }}
                                />
                                <span className="text-sm">{label}</span>
                              </div>
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="teachingModes"
                      render={() => (
                        <FormItem>
                          <FormLabel>Teaching Modes *</FormLabel>
                          <div className="grid grid-cols-1 gap-3">
                            {["1:1", "Small Group", "Big Group", "Corporate Training"].map((label) => (
                              <div key={label} className="flex items-center space-x-2">
                                <Checkbox
                                  checked={form.getValues("teachingModes").includes(label)}
                                  onCheckedChange={(checked) => {
                                    const current = form.getValues("teachingModes");
                                    form.setValue(
                                      "teachingModes",
                                      checked ? [...current, label] : current.filter((l) => l !== label),
                                      { shouldValidate: true }
                                    );
                                  }}
                                />
                                <span className="text-sm">{label}</span>
                              </div>
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="languages"
                      render={() => (
                        <FormItem>
                          <FormLabel>Languages You Can Teach In *</FormLabel>
                          <div className="grid grid-cols-1 gap-3">
                            {["English", "Hindi", "Tamil", "Telugu", "Kannada", "Bengali"].map((label) => (
                              <div key={label} className="flex items-center space-x-2">
                                <Checkbox
                                  checked={form.getValues("languages").includes(label)}
                                  onCheckedChange={(checked) => {
                                    const current = form.getValues("languages");
                                    form.setValue(
                                      "languages",
                                      checked ? [...current, label] : current.filter((l) => l !== label),
                                      { shouldValidate: true }
                                    );
                                  }}
                                />
                                <span className="text-sm">{label}</span>
                              </div>
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Links + about */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="linkedinUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>LinkedIn URL (optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="https://linkedin.com/in/your-handle" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="resumeUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Resume / Portfolio URL (optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="https://drive.google.com/..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="about"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>About Your Teaching Approach *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Briefly describe your teaching style, methods, and any notable results with learners."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="hasLaptop"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm">I have a laptop and stable internet</FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="consent"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm">
                              I agree to be contacted by EduShetra regarding my application.
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button type="submit" className="w-full btn-hero" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default TutorApplication;
