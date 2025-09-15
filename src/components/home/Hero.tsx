import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Users, MapPin, Shield } from "lucide-react";

const VIDEO_URL = import.meta.env.VITE_HERO_VIDEO_URL as string | undefined;
const POSTER_URL = import.meta.env.VITE_HERO_POSTER_URL as string | undefined;

const VIDEO_URL_MOBILE = import.meta.env.VITE_HERO_VIDEO_MOBILE_URL as string | undefined;
const POSTER_URL_MOBILE = import.meta.env.VITE_HERO_POSTER_MOBILE_URL as string | undefined;

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = true;
    // @ts-expect-error playsInline is valid in browsers
    v.playsInline = true;

    const tryPlay = () => v.play().catch(() => {});

    if (v.readyState >= 2) {
      tryPlay();
    } else {
      v.addEventListener("canplay", tryPlay, { once: true });
      v.addEventListener("loadeddata", tryPlay, { once: true });
    }

    const kick = () => tryPlay();
    window.addEventListener("pointerdown", kick, { once: true });
    window.addEventListener("keydown", kick, { once: true });

    const onVis = () => {
      if (document.visibilityState === "visible") tryPlay();
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("pointerdown", kick);
      window.removeEventListener("keydown", kick);
      v.removeEventListener("canplay", tryPlay);
      v.removeEventListener("loadeddata", tryPlay);
    };
  }, []);

  return (
    <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden">
      {/* Background Video (desktop + mobile sources) */}
      {(VIDEO_URL || VIDEO_URL_MOBILE) && (
        <video
          ref={videoRef}
          className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover"
          muted
          playsInline
          loop
          autoPlay
          preload="auto"
          aria-hidden="true"
          crossOrigin="anonymous"
        >
          {/* Mobile portrait video (≤640px) */}
          {VIDEO_URL_MOBILE && (
            <source
              src={VIDEO_URL_MOBILE}
              media="(max-width: 640px)"
              type="video/mp4"
            />
          )}

          {/* Desktop/landscape video */}
          {VIDEO_URL && <source src={VIDEO_URL} type="video/mp4" />}

          {/* Fallback image */}
          <img
            src={window.innerWidth <= 640 ? POSTER_URL_MOBILE : POSTER_URL}
            alt="Edushetra Hero Background"
            className="w-full h-full object-cover"
          />
        </video>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/65 via-primary/55 to-secondary/55" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-accent/30 rounded-full blur-lg animate-pulse delay-500"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Headline */}
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

          {/* CTA Button (only one, centered) */}
          <div className="flex justify-center mb-12">
            <Button asChild size="lg" className="btn-hero text-xl px-10 py-5">
              <Link to="/book-demo">Book a Demo</Link>
            </Button>
          </div>

          {/* Who We Help */}
          <div className="mt-16">
            <p className="text-white/70 text-sm uppercase tracking-wider mb-6 font-medium">WHO WE HELP</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Kids",
                "College Students",
                "Homemakers",
                "IT Professionals",
                "Job Seekers",
                "Team Leads",
                "CXOs",
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
