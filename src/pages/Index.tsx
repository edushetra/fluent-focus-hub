import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Programs from "@/components/home/Programs";
import Outcomes from "@/components/home/Outcomes";
import Testimonials from "@/components/home/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Programs />
        <Outcomes />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
