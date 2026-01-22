import AppLayout from "@/components/layout/AppLayout";
import HeroBanner from "@/components/home/HeroBanner";
import AboutSection from "@/components/home/AboutSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Info } from "lucide-react";
import QuickActions from "@/components/home/QuickActions";
import AnnouncementCard from "@/components/home/AnnouncementCard";
import TournamentQuickLinks from "@/components/home/TournamentQuickLinks";

const Index = () => {
  return (
    <AppLayout>
      <HeroBanner />
      <AboutSection />
      
      <section className="px-4 pb-6 max-w-7xl mx-auto">
        <Link to="/about">
          <Button 
            variant="outline" 
            className="w-full h-auto py-8 bg-white/50 backdrop-blur-sm border-blue-100 hover:bg-blue-50/50 hover:border-blue-200 shadow-sm group transition-all"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="p-3 rounded-full bg-blue-50 text-blue-600 group-hover:scale-110 transition-transform">
                <Info className="w-6 h-6" />
              </div>
              <span className="text-lg font-serif font-semibold text-blue-900">About Tournament</span>
            </div>
          </Button>
        </Link>
      </section>

      <TournamentQuickLinks />

      <QuickActions />
      <AnnouncementCard />
    </AppLayout>
  );
};

export default Index;
