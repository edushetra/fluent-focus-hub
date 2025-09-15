import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

const LOGO = "/images/OnlyLogo.png"; // served from public/images

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <img
                src={LOGO}
                alt="Edushetra Logo"
                className="h-10 w-auto object-contain"
              />
              <span className="font-poppins font-bold text-xl">EduShetra</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              India's largest network of communication trainers helping you
              speak fluent English and overcome the fear of public speaking.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-6">
              Quick Links
            </h3>
            <div className="space-y-3">
              <Link
                to="/courses"
                className="block text-white/80 hover:text-white transition-colors"
              >
                Courses
              </Link>
              <Link
                to="/pricing"
                className="block text-white/80 hover:text-white transition-colors"
              >
                Pricing
              </Link>
              <Link
                to="/level-test"
                className="block text-white/80 hover:text-white transition-colors"
              >
                Level Test
              </Link>
              <Link
                to="/success-stories"
                className="block text-white/80 hover:text-white transition-colors"
              >
                Success Stories
              </Link>
              <Link
                to="/trainers"
                className="block text-white/80 hover:text-white transition-colors"
              >
                Our Trainers
              </Link>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-6">Programs</h3>
            <div className="space-y-3">
              <Link
                to="/courses/spoken-english"
                className="block text-white/80 hover:text-white transition-colors"
              >
                Spoken English
              </Link>
              <Link
                to="/courses/business-communication"
                className="block text-white/80 hover:text-white transition-colors"
              >
                Business Communication
              </Link>
              <Link
                to="/courses/interview-prep"
                className="block text-white/80 hover:text-white transition-colors"
              >
                Interview Preparation
              </Link>
              <Link
                to="/courses/public-speaking"
                className="block text-white/80 hover:text-white transition-colors"
              >
                Public Speaking
              </Link>
              <Link
                to="/courses/leadership"
                className="block text-white/80 hover:text-white transition-colors"
              >
                Leadership Training
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-6">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-white/80">+91-9445102902</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span className="text-white/80">info@edushetra.com</span>
              </div>
              <div className="mt-6">
                <Link
                  to="/referral"
                  className="inline-block bg-accent text-primary px-4 py-2 rounded-lg font-medium hover:bg-accent/90 transition-colors"
                >
                  Become a Referrer
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap gap-6 text-sm text-white/60">
              <Link
                to="/terms"
                className="hover:text-white transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/refund-policy"
                className="hover:text-white transition-colors"
              >
                Refund Policy
              </Link>
              <Link
                to="/teach"
                className="hover:text-white transition-colors"
              >
                Careers
              </Link>
            </div>
            <p className="text-white/60 text-sm">
              © 2025 EduShetra. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
