import AppLayout from "@/components/layout/AppLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, AlertTriangle, Navigation, Image } from "lucide-react";
import stadiumImg from "@/assets/stadium.jpg";

const groundRules = [
  "Report 30 minutes before match time",
  "Use designated warm-up areas only",
  "Follow equipment guidelines strictly",
  "Restricted zones marked with barriers",
  "No spectators in playing area",
  "Follow umpire instructions at all times",
];

const Venue = () => {
  return (
    <AppLayout>
      <div className="p-4 space-y-4">
        <h1 className="text-2xl font-bold text-foreground">Venue Details</h1>
        
        <Card className="glass-card overflow-hidden">
          <img 
            src={stadiumImg} 
            alt="KSRCT Cricket Ground" 
            className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-700"
          />
          <div className="p-4 relative">
             <div className="absolute top-0 right-0 -mt-6 mr-4 bg-primary text-primary-foreground p-3 rounded-xl shadow-lg">
                <MapPin className="h-6 w-6" />
             </div>
            <h2 className="text-lg font-bold text-foreground mb-2 font-serif">
              KSRCT Cricket Ground
            </h2>
            <div className="flex items-start gap-2 text-sm text-muted-foreground mb-4">
              <span>
                K.S. Rangasamy College of Technology, Tiruchengode, 
                Namakkal District, Tamil Nadu - 637215
              </span>
            </div>
            <Button className="w-full bg-secondary text-white hover:bg-secondary/90 shadow-lg shadow-secondary/20">
              <Navigation className="h-4 w-4 mr-2" />
              Open in Google Maps
            </Button>
          </div>
        </Card>

        <Card className="glass-card p-5">
          <h3 className="font-bold text-foreground mb-4 flex items-center gap-2 font-serif">
            <Clock className="h-5 w-5 text-primary" />
            Ground Timings
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center p-2 rounded-lg bg-background/40">
              <span className="text-muted-foreground font-medium">Morning Session</span>
              <span className="font-bold text-secondary">6:00 AM - 12:00 PM</span>
            </div>
            <div className="flex justify-between items-center p-2 rounded-lg bg-background/40">
              <span className="text-muted-foreground font-medium">Afternoon Session</span>
              <span className="font-bold text-secondary">2:00 PM - 6:00 PM</span>
            </div>
            <div className="flex justify-between items-center p-2 rounded-lg bg-background/40">
              <span className="text-muted-foreground font-medium">Practice Nets</span>
              <span className="font-bold text-secondary">6:00 AM - 8:00 AM</span>
            </div>
          </div>
        </Card>

        <Card className="glass-card p-5">
          <h3 className="font-bold text-foreground mb-4 flex items-center gap-2 font-serif">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            Ground Rules
          </h3>
          <ul className="space-y-3">
            {groundRules.map((rule, index) => (
              <li key={index} className="flex items-start gap-3 text-sm group">
                <span className="h-6 w-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {index + 1}
                </span>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors pt-0.5">{rule}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="glass-card p-5">
          <h3 className="font-bold text-foreground mb-4 flex items-center gap-2 font-serif">
            <Image className="h-5 w-5 text-secondary" />
            Facilities
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {["Main Ground", "Practice Nets", "Dressing Rooms", "Pavilion", "Scoreboard", "Canteen"].map((facility) => (
              <div 
                key={facility}
                className="bg-background/40 border border-border/50 rounded-xl p-3 text-center text-sm font-semibold text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all cursor-default"
              >
                {facility}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Venue;
