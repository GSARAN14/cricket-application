import AppLayout from "@/components/layout/AppLayout";
import MatchCard from "@/components/matches/MatchCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const matches = [
  {
    id: "1",
    matchNumber: 1,
    team1: "Madras University",
    team2: "Bharathiar University",
    venue: "Main Ground",
    date: "Feb 15",
    time: "9:30 AM",
    status: "upcoming" as const,
  },
  {
    id: "2",
    matchNumber: 2,
    team1: "Madurai Kamaraj University",
    team2: "Annamalai University",
    venue: "Main Ground",
    date: "Feb 15",
    time: "2:00 PM",
    status: "upcoming" as const,
  },
  {
    id: "3",
    matchNumber: 3,
    team1: "Periyar University",
    team2: "Alagappa University",
    venue: "Main Ground",
    date: "Feb 16",
    time: "9:30 AM",
    status: "upcoming" as const,
  },
  {
    id: "4",
    matchNumber: 4,
    team1: "KSRCT (Host)",
    team2: "SRM University",
    venue: "Main Ground",
    date: "Feb 16",
    time: "2:00 PM",
    status: "upcoming" as const,
  },
];

const Schedule = () => {
  return (
    <AppLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold text-foreground mb-4">Match Schedule</h1>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full grid grid-cols-3 mb-6 h-auto p-1 bg-secondary/5 border border-border/40 backdrop-blur-sm rounded-xl">
            <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2.5 rounded-lg font-semibold transition-all">All Matches</TabsTrigger>
            <TabsTrigger value="upcoming" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2.5 rounded-lg font-semibold transition-all">Upcoming</TabsTrigger>
            <TabsTrigger value="completed" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2.5 rounded-lg font-semibold transition-all">Completed</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-3">
            {matches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </TabsContent>
          
          <TabsContent value="upcoming" className="space-y-3">
            {matches.filter(m => m.status === "upcoming").map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </TabsContent>
          
          <TabsContent value="completed" className="space-y-3">
            <p className="text-center text-muted-foreground py-8">
              No completed matches yet
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default Schedule;
