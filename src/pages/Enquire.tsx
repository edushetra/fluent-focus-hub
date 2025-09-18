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
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  whatsapp: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit WhatsApp number"),
  email: z.string().email("Enter a valid email"),
  programInterest: z.enum(["1-on-1", "small-group", "big-group", "leadership"], { required_error: "Select a program" }),
  message: z.string().optional(),
  consent: z.boolean().refine((v) => v, "Please agree to our terms"),
});
type FormData = z.infer<typeof schema>;

const Enquire = () => {
  const { toast } = useToast();
  const [done, setDone] = useState(false);

  // read program from URL, if any
  const urlParams = new URLSearchParams(window.location.search);
  const programQuery = (urlParams.get("program") as FormData["programInterest"]) ?? undefined;

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      whatsapp: "",
      email: "",
      programInterest: programQuery,
      message: "",
      consent: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      const utm = new URLSearchParams(window.location.search);
      const { error } = await supabase.from("enquiries").insert({
        name: data.name,
        whatsapp: data.whatsapp,
        email: data.email,
        program_interest: data.programInterest,
        message: data.message,
        consent: data.consent,
        utm_source: utm.get("utm_source"),
        utm_medium: utm.get("utm_medium"),
        utm_campaign: utm.get("utm_campaign"),
      });
      if (error) throw error;

      setDone(true);
      toast({ title: "Enquiry sent!", description: "We’ll get back to you within 24 hours." });
    } catch (e) {
      console.error(e);
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
    }
  };

  if (done) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-20 pb-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="program-card text-center">
              <CardContent className="p-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                <h1 className="font-poppins font-bold text-3xl text-primary mb-4">Thanks for your enquiry!</h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Our team will review your request and contact you shortly with details.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button asChild variant="outline"><a href="/">Back to Home</a></Button>
                  <Button asChild className="btn-hero"><a href="/book-demo">Or Book a Free Demo</a></Button>
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-poppins font-bold text-4xl lg:text-5xl text-primary mb-6">Enquire Now</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tell us about your requirement and we’ll share pricing & the best next steps.
            </p>
          </div>

          <Card className="program-card">
            <CardHeader>
              <CardTitle className="font-poppins text-2xl text-primary">Your details</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl><Input placeholder="Enter your full name" {...field} /></FormControl>
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
                          <FormControl><Input placeholder="9876543210" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl><Input type="email" placeholder="you@email.com" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="programInterest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Program *</FormLabel>
                        <FormControl>
                          <select
                            className="w-full border rounded-md h-10 px-3 bg-white"
                            value={field.value ?? ""}
                            onChange={(e) => field.onChange(e.target.value as FormData["programInterest"])}
                          >
                            <option value="" disabled>Select a program</option>
                            <option value="1-on-1">1:1 Classes</option>
                            <option value="small-group">Small Group Classes</option>
                            <option value="big-group">Big Group Classes</option>
                            <option value="leadership">Leadership Training</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your requirement </FormLabel>
                        <FormControl>
                          <Textarea
                            className="min-h-[100px]"
                            placeholder="Share team size / preferred schedule / goals or any question"
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
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm">
                            I agree to receive communications from Edushetra and consent to my data being processed.
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full btn-hero" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? "Submitting..." : "Submit Enquiry"}
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

export default Enquire;
