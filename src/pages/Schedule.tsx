import AppLayout from "@/components/layout/AppLayout";
import MatchCard from "@/components/matches/MatchCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useData } from "@/context/DataContext";
import { Card, CardContent } from "@/components/ui/card";
import FixturesView from "@/components/schedule/FixturesView";
import MatchTimeView from "@/components/schedule/MatchTimeView";

// Extracted matches from user provided images
const upcomingMatches = [
  { id: 1, team1: "TNPESU CHENNAI", team2: "HINDUSTAN UNIVERSITY", date: "Jan 10, 2026", venue: "Ground A" },
  { id: 2, team1: "MANIPAL UNIVERSITY", team2: "KL DEEMED GUNTUR", date: "Jan 10, 2026", venue: "Ground B" },
  { id: 3, team1: "KUVEMBU UNIVERSITY", team2: "ACHARYA NAGARJUNA GUNTUR", date: "Jan 10, 2026", venue: "Ground C" },
  { id: 4, team1: "RAJIV GANDHI NUZVID", team2: "SDM DHARWAD", date: "Jan 10, 2026", venue: "Ground D" },
  { id: 5, team1: "MOTHER THERASA UNIVERSITY", team2: "THIRUVALLUR UNIVERSITY", date: "Jan 11, 2026", venue: "Ground A" },
  { id: 6, team1: "TAMIL NADU AMBEDKAR LAW", team2: "SAVEETHA UNIVERSITY", date: "Jan 11, 2026", venue: "Ground B" },
  { id: 7, team1: "MADURAI KAMARAJ", team2: "KARNATAKA STATE AKKAMAHADEVI", date: "Jan 11, 2026", venue: "Ground C" },
  { id: 8, team1: "KANNUR UNIVERSITY", team2: "JEPPIAR UNIVERSITY", date: "Jan 11, 2026", venue: "Ground D" },
  { id: 9, team1: "MANGALORE UNIVERSITY", team2: "PONDICHERRY UNIVERSITY", date: "Jan 12, 2026", venue: "Ground A" },
  { id: 10, team1: "UNIVERSITY OF KERALA", team2: "VTU BELAGAVI", date: "Jan 12, 2026", venue: "Ground B" },
  { id: 11, team1: "BHARATHIAR UNIVERSITY", team2: "KRISHNA UNIVERSITY", date: "Jan 12, 2026", venue: "Ground C" },
  { id: 12, team1: "JNTU KAKINADA", team2: "DR. AMBEDKAR SRIKAKULAM", date: "Jan 13, 2026", venue: "Ground D" },
  { id: 13, team1: "Winner of Match 1", team2: "Winner of Match 2", date: "Jan 13, 2026", venue: "Ground A" },
  { id: 14, team1: "Winner of Match 3", team2: "SRI VENKATESHWARA TIRUPATHI", date: "Jan 13, 2026", venue: "Ground B" },
  { id: 15, team1: "RAJIV GANDHI BANGALORE", team2: "SRM IST KATTANKULATHUR", date: "Jan 13, 2026", venue: "Ground C" },
  { id: 16, team1: "MGR UNIVERSITY CHENNAI", team2: "KLE TECH HUBBALI", date: "Jan 14, 2026", venue: "Ground D" },
  { id: 17, team1: "Winner of Match 4", team2: "Winner of Match 5", date: "Jan 14, 2026", venue: "Ground A" },
  { id: 18, team1: "Winner of Match 6", team2: "AVINASHILINGAM UNIVERSITY", date: "Jan 14, 2026", venue: "Ground B" },
  { id: 19, team1: "IIPE VIZAGAPATTINAM", team2: "ANNA UNIVERSITY", date: "Jan 14, 2026", venue: "Ground C" },
  { id: 20, team1: "KAKTIYA WARANGAL", team2: "ANNAMALAI UNIVERSITY", date: "Jan 15, 2026", venue: "Ground D" },
  { id: 21, team1: "Winner of Match 7", team2: "Winner of Match 8", date: "Jan 15, 2026", venue: "Ground A" },
  { id: 22, team1: "Winner of Match 9", team2: "OSMANIA UNIVERSITY", date: "Jan 15, 2026", venue: "Ground B" },
  { id: 23, team1: "KRISHNADEVARAYA ANANTHAPUR", team2: "BHARATHITHASAN UNIVERSITY", date: "Jan 15, 2026", venue: "Ground C" },
  { id: 24, team1: "PALAMURU UNIVERSITY", team2: "MG UNIVERSITY KOTTAYAM", date: "Jan 16, 2026", venue: "Ground D" },
  { id: 25, team1: "PES UNIVERSITY", team2: "Winner of Match 10", date: "Jan 16, 2026", venue: "Ground A" },
  { id: 26, team1: "Winner of Match 11", team2: "ALAGAPPA UNIVERSITY", date: "Jan 16, 2026", venue: "Ground B" },
  { id: 27, team1: "ADIKAVI NANNAYA UNIVERSITY", team2: "ANDHRA UNIVERSITY", date: "Jan 16, 2026", venue: "Ground C" },
  { id: 28, team1: "Winner of Match 12", team2: "Winner of Match 13", date: "Jan 17, 2026", venue: "Ground D" },
  { id: 29, team1: "Winner of Match 14", team2: "Winner of Match 15", date: "Jan 17, 2026", venue: "Ground A" },
  { id: 30, team1: "Winner of Match 16", team2: "Winner of Match 17", date: "Jan 17, 2026", venue: "Ground B" },
  { id: 31, team1: "Winner of Match 18", team2: "Winner of Match 19", date: "Jan 17, 2026", venue: "Ground C" },
  { id: 32, team1: "Winner of Match 20", team2: "Winner of Match 21", date: "Jan 18, 2026", venue: "Ground D" },
  { id: 33, team1: "Winner of Match 22", team2: "Winner of Match 23", date: "Jan 18, 2026", venue: "Ground A" },
  { id: 34, team1: "Winner of Match 24", team2: "Winner of Match 25", date: "Jan 18, 2026", venue: "Ground B" },
  { id: 35, team1: "Winner of Match 26", team2: "Winner of Match 27", date: "Jan 18, 2026", venue: "Ground C" },
  { id: 36, team1: "Winner of Match 28", team2: "Winner of Match 29", date: "Jan 19, 2026", venue: "Ground D" },
  { id: 37, team1: "Winner of Match 30", team2: "Winner of Match 31", date: "Jan 19, 2026", venue: "Ground A" },
  { id: 38, team1: "Winner of Match 32", team2: "Winner of Match 33", date: "Jan 19, 2026", venue: "Ground B" },
  { id: 39, team1: "Winner of Match 34", team2: "Winner of Match 35", date: "Jan 19, 2026", venue: "Ground C" },
  { id: 40, team1: "BANGALORE CITY UNIVERSITY", team2: "Winner of Match 36", date: "Jan 20, 2026", venue: "Ground Main" },
  { id: 41, team1: "Winner of Match 37", team2: "UNIVERSITY OF MYSORE", date: "Jan 20, 2026", venue: "Ground Main" },
  { id: 42, team1: "UNIVERSITY OF CALICUT", team2: "Winner of Match 38", date: "Jan 21, 2026", venue: "Ground Main" },
  { id: 43, team1: "Winner of Match 39", team2: "UNIVERSITY OF MADRAS", date: "Jan 21, 2026", venue: "Ground Main" },
  { id: "44 (SF 1)", team1: "Winner of Pool A", team2: "Winner of Pool B", date: "Jan 22, 2026", venue: "Ground Main" },
  { id: "45 (SF 2)", team1: "Winner of Pool C", team2: "Winner of Pool D", date: "Jan 22, 2026", venue: "Ground Main" },
  { id: "46 (FINAL)", team1: "Winner of SF 1", team2: "Winner of SF 2", date: "Jan 23, 2026", venue: "Ground Main" },
  { id: 47, team1: "Loser of SF 1", team2: "Loser of SF 2 (3rd Place)", date: "Jan 23, 2026", venue: "Ground Main" },
];

const Schedule = () => {
  const { matches, teams, pointsTable } = useData();

  const getTeam = (id: string) => teams.find((t) => t.id === id);

  // Filter matches
  const contextUpcomingMatches = matches.filter(m => m.status === 'upcoming');
  const completedMatches = matches.filter(m => m.status === 'completed' || m.status === 'live');

  return (
    <AppLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold text-foreground mb-4">Match Schedule</h1>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="w-full grid grid-cols-3 mb-6 h-auto p-1 bg-secondary/5 border border-border/40 backdrop-blur-sm rounded-xl">
            <TabsTrigger value="upcoming" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2.5 rounded-lg font-semibold transition-all">Upcoming</TabsTrigger>
            <TabsTrigger value="match-time" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2.5 rounded-lg font-semibold transition-all">Match Time</TabsTrigger>
            <TabsTrigger value="pools" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2.5 rounded-lg font-semibold transition-all">Pools</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-4">
            {upcomingMatches.map((match) => (
              <div key={match.id} className="relative overflow-hidden rounded-xl glass-card border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                <div className="p-4 flex flex-col gap-4">
                  <div className="flex justify-between items-center text-xs text-muted-foreground">
                    <span className="font-bold text-primary">MATCH {match.id}</span>
                    <div className="flex items-center gap-2">
                      <span>{match.date}</span>
                      <span>•</span>
                      <span>{match.venue}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-lg shadow-inner">🏏</div>
                        <span className="font-bold text-foreground">{match.team1}</span>
                      </div>
                      <span className="font-mono font-bold text-muted-foreground">-</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-lg shadow-inner">🏏</div>
                        <span className="font-bold text-foreground">{match.team2}</span>
                      </div>
                      <span className="font-mono font-bold text-muted-foreground">-</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="match-time" className="space-y-3">
            <MatchTimeView />
          </TabsContent>

          <TabsContent value="pools">
            <FixturesView />
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout >
  );
};

export default Schedule;
