import AppLayout from "@/components/layout/AppLayout";
import HeroBanner from "@/components/home/HeroBanner";
import AboutSection from "@/components/home/AboutSection";
import CountdownTimer from "@/components/home/CountdownTimer";
import QuickActions from "@/components/home/QuickActions";
import AnnouncementCard from "@/components/home/AnnouncementCard";

const Index = () => {
  return (
    <AppLayout>
      <HeroBanner />
      <AboutSection />
      <CountdownTimer />
      <QuickActions />
      <AnnouncementCard />
    </AppLayout>
  );
};

export default Index;
