import AppLayout from "@/components/layout/AppLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, AlertTriangle, Navigation, Image } from "lucide-react";
import { useData } from "@/context/DataContext";

const Venue = () => {
  const { venues } = useData();

  // If no venues in data, show fallback or nothing?
  // We should probably loop through venues.
  // But the design was a single page details. 
  // Let's start by showing all venues from data.

  return (
    <AppLayout>
      <div className="p-4 space-y-8">
        <h1 className="text-2xl font-bold text-foreground">Venue Details</h1>

        {venues.length === 0 ? (
          <p className="text-center text-muted-foreground">No venue information available.</p>
        ) : (
          venues.map(venue => (
            <div key={venue.id} className="space-y-4">
              <Card className="glass-card overflow-hidden">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="p-4 relative">
                  <div className="absolute top-0 right-0 -mt-6 mr-4 bg-primary text-primary-foreground p-3 rounded-xl shadow-lg">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h2 className="text-lg font-bold text-foreground mb-2 font-serif">
                    {venue.name}
                  </h2>
                  <div className="flex items-start gap-2 text-sm text-muted-foreground mb-4">
                    <span>
                      {venue.address}
                    </span>
                  </div>
                  <Button className="w-full bg-secondary text-white hover:bg-secondary/90 shadow-lg shadow-secondary/20" asChild>
                    <a href={venue.mapLink} target="_blank" rel="noopener noreferrer">
                      <Navigation className="h-4 w-4 mr-2" />
                      Open in Google Maps
                    </a>
                  </Button>
                </div>
              </Card>

              {/* We can show facilities/rules if they exist in data.
                        Our restored mockData has 'facilities' and 'rules' arrays.
                     */}

              {venue.facilities && venue.facilities.length > 0 && (
                <Card className="glass-card p-5">
                  <h3 className="font-bold text-foreground mb-4 flex items-center gap-2 font-serif">
                    <Image className="h-5 w-5 text-secondary" />
                    Facilities
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {venue.facilities.map((facility: string) => (
                      <div
                        key={facility}
                        className="bg-background/40 border border-border/50 rounded-xl p-3 text-center text-sm font-semibold text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all cursor-default"
                      >
                        {facility}
                      </div>
                    ))}
                  </div>
                </Card>
              )}

              {venue.rules && venue.rules.length > 0 && (
                <Card className="glass-card p-5">
                  <h3 className="font-bold text-foreground mb-4 flex items-center gap-2 font-serif">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                    Ground Rules
                  </h3>
                  <ul className="space-y-3">
                    {venue.rules.map((rule: string, index: number) => (
                      <li key={index} className="flex items-start gap-3 text-sm group">
                        <span className="h-6 w-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          {index + 1}
                        </span>
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors pt-0.5">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )}
            </div>
          ))
        )}
      </div>
    </AppLayout>
  );
};

export default Venue;
