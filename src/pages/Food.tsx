import AppLayout from "@/components/layout/AppLayout";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Utensils, Clock, MapPin, Phone, Leaf, AlertCircle, Navigation } from "lucide-react";

const mealTimings = [
  { meal: "Breakfast", time: "7:00 AM - 9:00 AM", venue: "Hostel Dining Hall" },
  { meal: "Lunch", time: "12:30 PM - 2:00 PM", venue: "Ground Canteen" },
  { meal: "Evening Snacks", time: "4:30 PM - 5:30 PM", venue: "Pavilion Area" },
  { meal: "Dinner", time: "7:00 PM - 9:00 PM", venue: "Hostel Dining Hall" },
];

const nearbyRestaurants = [
  {
    id: "1",
    name: "K2K Restaurant",
    type: "Multi",
    cuisine: "SH-79, Tiruchengode",
    distance: "37m from KSRCT",
    mapLink: "https://maps.app.goo.gl/J3rTDdqtY3y6QUwC8",
  },
  {
    id: "2",
    name: "Kongu Restaurant",
    type: "Veg",
    cuisine: "Campus Area",
    distance: "42m away",
    mapLink: "https://maps.app.goo.gl/5vyYR6YPCvatgiLB9",
  },
  {
    id: "3",
    name: "Day 2 Day",
    type: "Veg",
    cuisine: "Near Venue",
    distance: "Nearby",
    mapLink: "https://maps.app.goo.gl/K3wd9iHTG3W1BWj89",
  },
];

const Food = () => {
  return (
    <AppLayout>
      <div className="p-4 space-y-4">
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <Utensils className="h-6 w-6 text-secondary" />
          Food & Dining
        </h1>

        <Tabs defaultValue="official" className="w-full">
          <TabsList className="w-full grid grid-cols-2 mb-6 h-auto p-1 bg-secondary/5 border border-border/40 backdrop-blur-sm rounded-xl">
            <TabsTrigger value="official" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2.5 rounded-lg font-semibold transition-all">Official Meals</TabsTrigger>
            <TabsTrigger value="nearby" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2.5 rounded-lg font-semibold transition-all">Nearby Places</TabsTrigger>
          </TabsList>

          <TabsContent value="official" className="space-y-3">
            <Card className="p-4 bg-orange-500/10 border-orange-500/20 backdrop-blur-sm">
              <h3 className="font-bold text-orange-700 mb-2 flex items-center gap-2">
                <AlertCircle className="h-4 w-4" /> Important Information
              </h3>
              <ul className="text-sm text-foreground/80 space-y-2 list-disc pl-4">
                <li>Meals must be pre-booked at least 6 hours in advance.</li>
                <li>Food tokens are issued 6 hours prior to the scheduled time.</li>
                <li>The cost of each food item is displayed.</li>
                <li>Food charges are applied according to the listed cost.</li>
              </ul>
            </Card>

            {mealTimings.map((meal) => (
              <Card key={meal.meal} className="glass-card p-4 hover:border-primary/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-foreground font-serif">{meal.meal}</h3>
                </div>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{meal.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{meal.venue}</span>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="nearby" className="space-y-3">
            {nearbyRestaurants.map((restaurant) => (
              <Card key={restaurant.id} className="glass-card p-4 hover:border-secondary/40 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-foreground font-serif">{restaurant.name}</h3>
                    <p className="text-sm text-muted-foreground">{restaurant.cuisine}</p>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full border font-medium flex items-center gap-1 ${restaurant.type === "Veg"
                    ? "bg-green-500/10 text-green-700 border-green-500/20"
                    : "bg-red-500/10 text-red-700 border-red-500/20"
                    }`}>
                    <Leaf className="h-3 w-3" />
                    {restaurant.type}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm mt-3">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-secondary" />
                    <span>{restaurant.distance}</span>
                  </div>
                  <a
                    href={(restaurant as any).mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors font-medium bg-primary/5 px-3 py-1.5 rounded-md"
                  >
                    <Navigation className="h-4 w-4" />
                    <span>Open Map</span>
                  </a>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default Food;
