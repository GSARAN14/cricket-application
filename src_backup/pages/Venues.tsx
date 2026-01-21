import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { VENUES } from "@/data/mockData";
import { MapPin, Navigation, Info } from "lucide-react";
import { SEO } from "@/components/SEO";
import { PageTransition } from "@/components/PageTransition";

export default function Venues() {
    return (
        <PageTransition className="space-y-6">
            <SEO title="Venues" description="Tournament grounds and locations." />
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Grounds & Venues</h2>
            </div>

            <div className="grid gap-6">
                {VENUES.map((venue) => (
                    <Card key={venue.id} className="overflow-hidden">
                        <div className="relative h-48 w-full">
                            <img
                                src={venue.image}
                                alt={venue.name}
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                                <h3 className="text-xl font-bold">{venue.name}</h3>
                                <div className="flex items-center gap-1 text-sm opacity-90">
                                    <MapPin className="h-3 w-3" />
                                    <span>{venue.address}</span>
                                </div>
                            </div>
                        </div>
                        <CardContent className="p-4">
                            <div className="mb-4 space-y-2">
                                <h4 className="font-semibold flex items-center gap-2">
                                    <Info className="h-4 w-4 text-primary" />
                                    Facilities
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {venue.facilities.map((facility, idx) => (
                                        <span key={idx} className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary-foreground">
                                            {facility}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-4 space-y-2">
                                <h4 className="font-semibold text-sm text-muted-foreground">Ground Rules</h4>
                                <ul className="list-disc pl-4 text-sm text-muted-foreground">
                                    {venue.rules.map((rule, idx) => (
                                        <li key={idx}>{rule}</li>
                                    ))}
                                </ul>
                            </div>

                            <Button className="w-full gap-2" asChild>
                                <a href={venue.mapLink} target="_blank" rel="noopener noreferrer">
                                    <Navigation className="h-4 w-4" />
                                    Get Directions
                                </a>
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </PageTransition>
    );
}
