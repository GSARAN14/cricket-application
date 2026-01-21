import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Schedule from "./pages/Schedule";
import Venue from "./pages/Venue";
import Teams from "./pages/Teams";
import Results from "./pages/Results";
import Accommodation from "./pages/Accommodation";
import Food from "./pages/Food";
import Transport from "./pages/Transport";
import Contacts from "./pages/Contacts";
import Emergency from "./pages/Emergency";
import Rules from "./pages/Rules";
import Gallery from "./pages/Gallery";
import Feedback from "./pages/Feedback";
import Notifications from "./pages/Notifications";
import About from "./pages/About";
import More from "./pages/More";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/results" element={<Results />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/food" element={<Food />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/about" element={<About />} />
          <Route path="/more" element={<More />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
