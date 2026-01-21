import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { ACCOMMODATION, FOOD_SPOTS, TRANSPORT } from "@/data/mockData";
import { Bed, Bus, Phone, MapPin, Star } from "lucide-react";
import { SEO } from "@/components/SEO";
import { PageTransition } from "@/components/PageTransition";

export default function Logistics() {
    return (
        <PageTransition className="space-y-6">
            <SEO title="Logistics" description="Accommodation, food, and transport details." />
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Logistics</h2>
            </div>

            <Tabs defaultValue="accommodation" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="accommodation">Stay</TabsTrigger>
                    <TabsTrigger value="food">Food</TabsTrigger>
                    <TabsTrigger value="transport">Travel</TabsTrigger>
                </TabsList>

                <TabsContent value="accommodation" className="space-y-4">
                    {ACCOMMODATION.map((place) => (
                        <Card key={place.id}>
                            <CardHeader className="pb-2">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <CardTitle className="text-lg">{place.name}</CardTitle>
                                        <span className="text-xs text-muted-foreground">{place.type}</span>
                                    </div>
                                    <Bed className="h-5 w-5 text-primary" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <MapPin className="h-4 w-4" />
                                        <span>{place.address}</span>
                                    </div>
                                    <p className="text-xs font-medium text-secondary-foreground">{place.distance}</p>

                                    <div className="mt-2 flex flex-wrap gap-1">
                                        {place.facilities.map((f, i) => (
                                            <span key={i} className="rounded bg-muted px-2 py-0.5 text-[10px]">{f}</span>
                                        ))}
                                    </div>

                                    <div className="mt-3 rounded-md bg-primary/5 p-3">
                                        <p className="text-xs font-semibold">Contact:</p>
                                        <div className="flex items-center gap-2 text-primary">
                                            <Phone className="h-3 w-3" />
                                            <a href={`tel:${place.contact.split(': ')[1]}`} className="hover:underline">
                                                {place.contact}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </TabsContent>

                <TabsContent value="food" className="space-y-4">
                    {FOOD_SPOTS.map((spot) => (
                        <Card key={spot.id}>
                            <CardContent className="flex items-center justify-between p-4">
                                <div>
                                    <h3 className="font-semibold">{spot.name}</h3>
                                    <p className="text-sm text-muted-foreground">{spot.cuisine}</p>
                                    <p className="text-xs text-muted-foreground mt-1">{spot.distance}</p>
                                </div>
                                <div className="flex flex-col items-end gap-1">
                                    <div className="flex items-center gap-1 rounded bg-yellow-100 px-2 py-1 text-xs font-bold text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">
                                        <Star className="h-3 w-3 fill-current" />
                                        {spot.rating}
                                    </div>
                                    <span className="text-[10px] uppercase text-muted-foreground">{spot.type}</span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </TabsContent>

                <TabsContent value="transport" className="space-y-4">
                    {TRANSPORT.map((item) => (
                        <Card key={item.id}>
                            <CardHeader className="pb-2">
                                <div className="flex items-center gap-2">
                                    <Bus className="h-5 w-5 text-primary" />
                                    <CardTitle className="text-base">{item.route}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div>
                                        <p className="text-xs text-muted-foreground">Mode</p>
                                        <p className="font-medium">{item.mode}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">Timings</p>
                                        <div className="flex flex-wrap gap-2 mt-1">
                                            {item.timings.map((time, i) => (
                                                <span key={i} className="rounded border px-2 py-1 text-xs font-medium">
                                                    {time}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-primary">
                                        <Phone className="h-4 w-4" />
                                        <span>{item.contact}</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </TabsContent>
            </Tabs>
        </PageTransition>
    );
}
