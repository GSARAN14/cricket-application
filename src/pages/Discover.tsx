import AppLayout from "@/components/layout/AppLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Navigation } from "lucide-react";

// Places data array
const places = [
    {
        id: 1,
        name: "Arulmigu Thiru Ardhanareeswarar Temple",
        location: "9VFX+36 Tiruchengode, Tamil Nadu",
        image: "/ardhanareeswarar_temple.png",
        timings: "Morning: 6:00 AM – 2:00 PM\nEvening: 3:00 PM – 7:00 PM",
        description: "Famous hilltop temple dedicated to Lord Shiva in his Ardhanareeswarar form. Known for unique architecture and spiritual significance.",
        mapLink: "https://www.google.com/maps/search/?api=1&query=9VFX%2B36+Tiruchengode%2C+Tamil+Nadu"
    },
    {
        id: 2,
        name: "Kodiveri Dam & Waterfalls",
        location: "F7FW+6HC Oddarpalayam, Tamil Nadu",
        image: "/kodiveri_dam.png",
        timings: "Daily: 8:00 AM – 6:00 PM",
        description: "Beautiful dam and waterfalls surrounded by lush greenery. A popular picnic spot with scenic views and flowing water.",
        mapLink: "https://www.google.com/maps/search/?api=1&query=F7FW%2B6HC+Oddarpalayam%2C+Tamil+Nadu"
    },
];

const Discover = () => {
    return (
        <AppLayout>
            <div className="p-4 space-y-4">
                <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-6 w-6 text-primary" />
                    <h1 className="text-2xl font-bold text-foreground">Discover</h1>
                </div>

                <p className="text-muted-foreground text-sm mb-4">
                    Explore local attractions and places of interest during your visit
                </p>

                {/* Places List */}
                <div className="space-y-4">
                    {places.map((place) => (
                        <Card key={place.id} className="glass-card overflow-hidden">
                            {/* Place Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={place.image}
                                    alt={place.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                    <h2 className="text-lg font-bold text-white font-serif">
                                        {place.name}
                                    </h2>
                                </div>
                            </div>

                            {/* Place Details */}
                            <div className="p-4 space-y-3">
                                {/* Location */}
                                <div className="flex items-start gap-3">
                                    <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                    <div className="flex-1">
                                        <p className="text-sm text-muted-foreground">
                                            {place.location}
                                        </p>
                                    </div>
                                </div>

                                {/* Timing */}
                                <div className="flex items-start gap-3">
                                    <Clock className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                    <div className="flex-1">
                                        <p className="text-sm text-muted-foreground whitespace-pre-line">
                                            {place.timings}
                                        </p>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-sm text-muted-foreground">
                                    {place.description}
                                </p>

                                {/* Directions Button */}
                                <Button
                                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                                    asChild
                                >
                                    <a
                                        href={place.mapLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Navigation className="h-4 w-4 mr-2" />
                                        Get Directions
                                    </a>
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Info Note */}
                <Card className="glass-card p-4 bg-blue-500/5 border-blue-500/20">
                    <p className="text-sm text-muted-foreground text-center">
                        More places coming soon! Stay tuned for exciting local attractions.
                    </p>
                </Card>
            </div>
        </AppLayout>
    );
};

export default Discover;
