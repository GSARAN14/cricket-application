import AppLayout from "@/components/layout/AppLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, MapPin, Clock, Wifi, Coffee, Phone, Navigation } from "lucide-react";

const accommodations = [
  {
    id: "1",
    name: "KSRCT Girls Hostel",
    type: "Primary Accommodation",
    address: "K.S. Rangasamy College of Technology Campus, Tiruchengode",
    distance: "500m from ground",
    checkIn: "2:00 PM",
    checkOut: "11:00 AM",
    facilities: ["Wi-Fi", "Hot Water", "Dining Hall", "24/7 Security", "Laundry"],
    contact: "+91 98765 43210",
  },
  {
    id: "2",
    name: "KSR Guest House",
    type: "VIP Accommodation",
    address: "Near Main Gate, KSRCT Campus, Tiruchengode",
    distance: "700m from ground",
    checkIn: "12:00 PM",
    checkOut: "12:00 PM",
    facilities: ["AC Rooms", "Wi-Fi", "Room Service", "Parking"],
    contact: "+91 98765 43211",
  },
];

const Accommodation = () => {
  return (
    <AppLayout>
      <div className="p-4 space-y-4">
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <Building className="h-6 w-6 text-primary" />
          Accommodation
        </h1>

        <div className="space-y-4">
          {accommodations.map((acc) => (
            <Card key={acc.id} className="glass-card p-5 group border-border/60 hover:shadow-lg hover:shadow-primary/5 transition-all">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-bold text-lg text-foreground font-serif group-hover:text-primary transition-colors">{acc.name}</h3>
                  <span className="text-xs bg-secondary/10 text-secondary border border-secondary/20 px-2 py-0.5 rounded-full font-medium mt-1 inline-block">
                    {acc.type}
                  </span>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                  <span>{acc.address}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Navigation className="h-4 w-4 text-primary" />
                  <span>{acc.distance}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Check-in: {acc.checkIn} | Check-out: {acc.checkOut}</span>
                </div>
              </div>

              <div className="mb-5">
                <p className="text-sm font-semibold text-foreground mb-2">Facilities</p>
                <div className="flex flex-wrap gap-2">
                  {acc.facilities.map((facility) => (
                    <span 
                      key={facility}
                      className="text-xs bg-background/50 border border-border/50 text-foreground px-2 py-1 rounded-md"
                    >
                      {facility}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" className="flex-1 hover:bg-primary/5 hover:text-primary hover:border-primary/30 transition-colors" asChild>
                  <a href={`tel:${acc.contact}`}>
                    <Phone className="h-4 w-4 mr-2" />
                    Call
                  </a>
                </Button>
                <Button className="flex-1 bg-secondary text-white hover:bg-secondary/90 shadow-lg shadow-secondary/20">
                  <Navigation className="h-4 w-4 mr-2" />
                  Directions
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default Accommodation;
