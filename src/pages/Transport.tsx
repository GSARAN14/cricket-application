import AppLayout from "@/components/layout/AppLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bus, MapPin, Info, Phone } from "lucide-react";

const transportArrangements = [
  {
    title: "From Erode",
    description: "Necessary transportation arrangements are made from Erode Railway Station and Erode Bus Stand on a payable basis, as per requirement.",
    icon: <Bus className="h-5 w-5 text-primary" />,
  },
  {
    title: "From Salem (Optional)",
    description: "If required, optional transportation arrangements may also be organized from Salem Railway Station and Salem Bus Stand on a payable basis, subject to availability.",
    icon: <Bus className="h-5 w-5 text-primary" />,
  },
  {
    title: "On-Campus Movements",
    description: "For all on-campus movements, transportation to and from the campus venues is facilitated by the college, ensuring smooth and timely access.",
    icon: <MapPin className="h-5 w-5 text-primary" />,
  }
];

const instructions = [
  "All participants are requested to follow the scheduled pick-up and drop timings as communicated in advance.",
  "Passengers are advised to be present at the designated pick-up points on time to ensure smooth coordination.",
  "Transportation arrangements are subject to availability and prior intimation.",
  "Any changes in travel plans should be informed to the transportation coordinators well in advance.",
  "Luggage handling is the responsibility of the individual participants."
];

const coordinators = [
  { name: "Mr. M.R. Sibi", phone: "9994920190" },
  { name: "Mr. K. Mohan", phone: "6383054401" }
];

const Transport = () => {
  return (
    <AppLayout>
      <div className="p-4 space-y-6">
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <Bus className="h-6 w-6 text-primary" />
          Transport & Travel
        </h1>

        <div className="space-y-4">
          <h2 className="text-lg font-bold text-foreground font-serif">Transportation Arrangements</h2>
          <div className="grid gap-4 md:grid-cols-1">
            {transportArrangements.map((item, index) => (
              <Card key={index} className="glass-card p-4 hover:border-primary/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-bold text-foreground font-serif flex items-center gap-2">
            <Info className="h-5 w-5 text-primary" />
            Instructions
          </h2>
          <Card className="glass-card p-5">
            <ul className="space-y-3">
              {instructions.map((instruction, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-foreground/90">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="leading-relaxed">{instruction}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-bold text-foreground font-serif flex items-center gap-2">
            <Phone className="h-5 w-5 text-primary" />
            Transport In-charges
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {coordinators.map((coordinator, index) => (
              <Card key={index} className="glass-card p-4 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-foreground text-lg">{coordinator.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">Transport Coordinator</p>
                </div>
                <Button variant="outline" className="w-full group hover:border-primary/50" asChild>
                  <a href={`tel:+91${coordinator.phone}`}>
                    <Phone className="h-4 w-4 mr-2 group-hover:text-primary transition-colors" />
                    {coordinator.phone}
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Transport;
