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
import WhatsAppFloat from "@/components/layout/WhatsAppFloat"; // ⬅️ add this

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/book-demo" element={<BookDemo />} />
          <Route path="/level-test" element={<LevelTest />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/for-corporates" element={<ForCorporates />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Mount once for ALL pages */}
        <WhatsAppFloat />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
