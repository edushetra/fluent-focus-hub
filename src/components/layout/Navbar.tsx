import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const LOGO = "/images/OnlyLogo.png"; // served from public/images

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Name */}
          <Link
            to="/"
            className="flex items-center gap-2"
            aria-label="Edushetra Home"
          >
            <img
              src={LOGO}
              alt="Edushetra Logo"
              className="h-9 w-auto md:h-10 object-contain shrink-0"
              loading="eager"
              decoding="async"
            />
            <span className="inline-block font-poppins font-bold text-lg sm:text-xl text-primary leading-none translate-y-[1px] max-w-[55vw] truncate">
              EduShetra
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors duration-200 ${
                isActive("/")
                  ? "text-secondary"
                  : "text-primary hover:text-secondary"
              }`}
            >
              Home
            </Link>

            {/* Courses Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsCoursesOpen(true)}
              onMouseLeave={() => setIsCoursesOpen(false)}
            >
              <button
                className="flex items-center space-x-1 font-medium text-primary hover:text-secondary transition-colors duration-200"
                aria-haspopup="menu"
                aria-expanded={isCoursesOpen}
              >
                <span>Courses</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isCoursesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-elegant border border-slate-100 py-4 z-50"
                  role="menu"
                >
                  <Link
                    to="/courses/spoken-english"
                    className="block px-6 py-2 text-primary hover:text-secondary hover:bg-slate-50 transition-colors"
                    role="menuitem"
                  >
                    Spoken English
                  </Link>
                  <Link
                    to="/courses/business-communication"
                    className="block px-6 py-2 text-primary hover:text-secondary hover:bg-slate-50 transition-colors"
                    role="menuitem"
                  >
                    Business Communication
                  </Link>
                  <Link
                    to="/courses/interview-preparation"
                    className="block px-6 py-2 text-primary hover:text-secondary hover:bg-slate-50 transition-colors"
                    role="menuitem"
                  >
                    Interview Preparation
                  </Link>
                  <Link
                    to="/courses/public-speaking"
                    className="block px-6 py-2 text-primary hover:text-secondary hover:bg-slate-50 transition-colors"
                    role="menuitem"
                  >
                    Public Speaking
                  </Link>
                  <Link
                    to="/courses/leadership-training"
                    className="block px-6 py-2 text-primary hover:text-secondary hover:bg-slate-50 transition-colors"
                    role="menuitem"
                  >
                    Leadership Training
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/pricing"
              className={`font-medium transition-colors duration-200 ${
                isActive("/pricing")
                  ? "text-secondary"
                  : "text-primary hover:text-secondary"
              }`}
            >
              Pricing
            </Link>

            <Link
              to="/level-test"
              className={`font-medium transition-colors duration-200 ${
                isActive("/level-test")
                  ? "text-secondary"
                  : "text-primary hover:text-secondary"
              }`}
            >
              Level Test
            </Link>

            <Link
              to="/for-corporates"
              className={`font-medium transition-colors duration-200 ${
                isActive("/for-corporates")
                  ? "text-secondary"
                  : "text-primary hover:text-secondary"
              }`}
            >
              For Corporates
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="default" className="btn-hero">
              <Link to="/book-demo">Book a Demo</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="font-medium text-primary hover:text-secondary transition-colors"
              >
                Home
              </Link>
              <Link
                to="/courses/spoken-english"
                className="font-medium text-primary hover:text-secondary transition-colors"
              >
                Spoken English
              </Link>
              <Link
                to="/courses/business-communication"
                className="font-medium text-primary hover:text-secondary transition-colors"
              >
                Business Communication
              </Link>
              <Link
                to="/courses/interview-preparation"
                className="font-medium text-primary hover:text-secondary transition-colors"
              >
                Interview Preparation
              </Link>
              <Link
                to="/courses/public-speaking"
                className="font-medium text-primary hover:text-secondary transition-colors"
              >
                Public Speaking
              </Link>
              <Link
                to="/courses/leadership-training"
                className="font-medium text-primary hover:text-secondary transition-colors"
              >
                Leadership Training
              </Link>
              <Link
                to="/pricing"
                className="font-medium text-primary hover:text-secondary transition-colors"
              >
                Pricing
              </Link>
              <Link
                to="/level-test"
                className="font-medium text-primary hover:text-secondary transition-colors"
              >
                Level Test
              </Link>
              <Link
                to="/for-corporates"
                className="font-medium text-primary hover:text-secondary transition-colors"
              >
                For Corporates
              </Link>
              <Button asChild className="btn-hero w-full">
                <Link to="/book-demo">Book a Demo</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
