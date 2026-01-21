import AppLayout from "@/components/layout/AppLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bus, Phone, Clock, MapPin, AlertTriangle } from "lucide-react";

const officialTransport = [
  {
    id: "1",
    route: "Hostel → Ground",
    timing: "8:00 AM, 1:30 PM",
    vehicle: "TN 33 AB 1234",
    driver: "Mr. Kumar",
    driverPhone: "+91 98765 55555",
  },
  {
    id: "2",
    route: "Railway Station → Campus",
    timing: "On Request",
    vehicle: "TN 33 AB 5678",
    driver: "Mr. Rajan",
    driverPhone: "+91 98765 66666",
  },
  {
    id: "3",
    route: "Bus Stand → Campus",
    timing: "On Request",
    vehicle: "TN 33 AB 9012",
    driver: "Mr. Selvam",
    driverPhone: "+91 98765 77777",
  },
];

const Transport = () => {
  return (
    <AppLayout>
      <div className="p-4 space-y-4">
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <Bus className="h-6 w-6 text-primary" />
          Transport & Travel
        </h1>

        <Card className="p-4 bg-destructive/10 border-destructive/20 backdrop-blur-sm">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-foreground">Emergency Transport</p>
              <p className="text-sm text-muted-foreground mb-2">
                For urgent transport requirements, contact:
              </p>
              <Button 
                variant="destructive" 
                size="sm"
                className="shadow-md"
                asChild
              >
                <a href="tel:+919876588888">
                  <Phone className="h-4 w-4 mr-2" />
                  Transport Coordinator
                </a>
              </Button>
            </div>
          </div>
        </Card>

        <h2 className="text-lg font-bold text-foreground mt-2 font-serif">Official Transport</h2>

        <div className="space-y-3">
          {officialTransport.map((transport) => (
            <Card key={transport.id} className="glass-card p-4 hover:border-primary/40 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bus className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{transport.route}</h3>
                  <p className="text-xs text-muted-foreground font-mono">{transport.vehicle}</p>
                </div>
              </div>

              <div className="space-y-2 mb-4 bg-background/40 p-3 rounded-lg">
                <div className="flex items-center gap-2 text-sm text-foreground/80">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Timings: <span className="font-semibold">{transport.timing}</span></span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/80">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Driver: <span className="font-semibold">{transport.driver}</span></span>
                </div>
              </div>

              <Button variant="outline" className="w-full hover:bg-primary/5 hover:text-primary hover:border-primary/30 transition-colors" asChild>
                <a href={`tel:${transport.driverPhone}`}>
                  <Phone className="h-4 w-4 mr-2" />
                  Call Driver
                </a>
              </Button>
            </Card>
          ))}
        </div>

        <h2 className="text-lg font-bold text-foreground mt-6 font-serif">How to Reach</h2>
        
        <Card className="glass-card p-5">
          <div className="space-y-5">
            <div className="border-b border-border/40 pb-3 last:border-0 last:pb-0">
              <h4 className="font-bold text-foreground mb-1 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-secondary"></div>By Train</h4>
              <p className="text-sm text-muted-foreground pl-4">
                Nearest station: Tiruchengode (8 km). Pickup available on request.
              </p>
            </div>
            <div className="border-b border-border/40 pb-3 last:border-0 last:pb-0">
              <h4 className="font-bold text-foreground mb-1 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary"></div>By Bus</h4>
              <p className="text-sm text-muted-foreground pl-4">
                KSRTC buses available from major cities. Drop at Tiruchengode Bus Stand.
              </p>
            </div>
            <div className="border-b border-border/40 pb-3 last:border-0 last:pb-0">
              <h4 className="font-bold text-foreground mb-1 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-secondary"></div>By Air</h4>
              <p className="text-sm text-muted-foreground pl-4">
                Nearest airport: Coimbatore (90 km). Salem Airport (55 km).
              </p>
            </div>
          </div>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Transport;
