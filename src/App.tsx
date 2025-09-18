import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import BookDemo from "./pages/BookDemo";
import LevelTest from "./pages/LevelTest";
import Pricing from "./pages/Pricing";
import ForCorporates from "./pages/ForCorporates";
import NotFound from "./pages/NotFound";
import Enquire from "./pages/Enquire";
import Terms from "@/pages/Terms";
import Privacy from "@/pages/Privacy";
import Refund from "@/pages/Refund";
import Careers from "@/pages/Careers";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";

// ⬇️ NEW: course pages
import SpokenEnglish from "@/pages/courses/SpokenEnglish";
import BusinessCommunication from "@/pages/courses/BusinessCommunication";
import InterviewPreparation from "@/pages/courses/InterviewPreparation";
import PublicSpeaking from "@/pages/courses/PublicSpeaking";
import LeadershipTraining from "@/pages/courses/LeadershipTraining";
import TutorApplication from "@/pages/TutorApplication";

// ⬇️ NEW: scroll-to-top utility
import ScrollToTop from "@/components/routing/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* ensures page scroll resets on every navigation */}
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Index />} />

          {/* Core flows */}
          <Route path="/book-demo" element={<BookDemo />} />
          <Route path="/level-test" element={<LevelTest />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/for-corporates" element={<ForCorporates />} />
          <Route path="/enquire" element={<Enquire />} />

          {/* Policies & misc */}
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/careers" element={<Careers />} />

          {/* ⬇️ NEW: 5 course pages */}
          <Route path="/courses/spoken-english" element={<SpokenEnglish />} />
          <Route path="/courses/business-communication" element={<BusinessCommunication />} />
          <Route path="/courses/interview-preparation" element={<InterviewPreparation />} />
          <Route path="/courses/public-speaking" element={<PublicSpeaking />} />
          <Route path="/courses/leadership-training" element={<LeadershipTraining />} />
          <Route path="/apply/tutor" element={<TutorApplication />} />

          {/* 404 catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Mount once for ALL pages */}
        <WhatsAppFloat />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
