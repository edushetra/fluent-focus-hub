import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Users, MapPin, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-accent/30 rounded-full blur-lg animate-pulse delay-500"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Headline */}
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 leading-tight">
            Speak Confident English
            <span className="block text-accent">in 12 Weeks</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Live 1:1 & small-group classes with practical activities — debates, presentations, interviews, and more.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="trust-badge">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-secondary" />
                <span>1000+ learners</span>
              </div>
            </div>
            <div className="trust-badge">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-secondary" />
                <span>400+ trainers</span>
              </div>
            </div>
            <div className="trust-badge">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-secondary" />
                <span>Pan-India</span>
              </div>
            </div>
            <div className="trust-badge">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-secondary" />
                <span>Money-back trial*</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="btn-hero text-lg px-8 py-4">
              <Link to="/book-demo">Book a Demo</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="btn-outline-hero text-lg px-8 py-4">
              <Link to="/level-test">Take Free Level Test</Link>
            </Button>
          </div>

          {/* Who We Help */}
          <div className="mt-16">
            <p className="text-white/70 text-sm uppercase tracking-wider mb-6 font-medium">WHO WE HELP</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Kids', 'College Students', 'Homemakers', 'IT Professionals', 
                'Job Seekers', 'Team Leads', 'CXOs'
              ].map((segment) => (
                <span 
                  key={segment} 
                  className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-colors duration-300"
                >
                  {segment}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;