import AppLayout from "@/components/layout/AppLayout";
import MatchCard from "@/components/matches/MatchCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useData } from "@/context/DataContext";
import { Card, CardContent } from "@/components/ui/card";
import FixturesView from "@/components/schedule/FixturesView";

// Extracted matches from user provided images
const upcomingMatches = [
  // Pool A Matches
  { id: 1, pool: "A", team1: "TNPESU Chennai", team2: "Hindustan University", date: "Jan 10, 2026", venue: "Ground A" },
  { id: 2, pool: "A", team1: "Manipal University", team2: "KL Deemed Guntur", date: "Jan 10, 2026", venue: "Ground B" },
  { id: 3, pool: "A", team1: "Kuvempu University", team2: "Acharya Nagarjuna Guntur", date: "Jan 10, 2026", venue: "Ground C" },
  { id: 4, pool: "B", team1: "Rajiv Gandhi Nuzvid", team2: "SDM Dharwad", date: "Jan 10, 2026", venue: "Ground D" },
  { id: 5, pool: "B", team1: "Mother Therasa University", team2: "Thiruvallur University", date: "Jan 11, 2026", venue: "Ground A" },
  { id: 6, pool: "B", team1: "Tamilnadu Ambedkar Law", team2: "Saveetha University", date: "Jan 11, 2026", venue: "Ground B" },
  { id: 7, pool: "C", team1: "Madurai Kamaraj", team2: "Karnataka State Akkamahadevi Women", date: "Jan 11, 2026", venue: "Ground C" },
  { id: 8, pool: "C", team1: "Kannur University", team2: "Jeppiar University", date: "Jan 11, 2026", venue: "Ground D" },
  { id: 9, pool: "C", team1: "Mangalore University", team2: "Pondicherry University", date: "Jan 12, 2026", venue: "Ground A" },
  { id: 10, pool: "D", team1: "University of Kerala", team2: "VTU Belagavi", date: "Jan 12, 2026", venue: "Ground B" },
  { id: 11, pool: "D", team1: "Bharathiar University", team2: "Krishna University", date: "Jan 12, 2026", venue: "Ground C" },

  // Round 2 / Seeding Matches
  { id: 12, pool: "A", team1: "Bangalore City University", team2: "JNTU Kakinada", date: "Jan 13, 2026", venue: "Ground D" },
  { id: 13, pool: "A", team1: "Dr. Ambedkar Srikakulam", team2: "Winner Match 1", date: "Jan 13, 2026", venue: "Ground A" },
  { id: 14, pool: "A", team1: "Winner Match 3", team2: "Sri Venkateshwara Tirupathi", date: "Jan 13, 2026", venue: "Ground B" },
  { id: 15, pool: "A", team1: "Rajiv Gandhi Bangalore", team2: "SRM IST Kattankulathur", date: "Jan 13, 2026", venue: "Ground C" },
  { id: 16, pool: "B", team1: "MGR University Chennai", team2: "KLE Tech Hubbali", date: "Jan 14, 2026", venue: "Ground D" },
  { id: 17, pool: "B", team1: "Winner Match 4", team2: "Winner Match 5", date: "Jan 14, 2026", venue: "Ground A" },
  { id: 18, pool: "B", team1: "Winner Match 6", team2: "Avinashilingam University", date: "Jan 14, 2026", venue: "Ground B" },
  { id: 19, pool: "B", team1: "IIPE Vizagapattinam", team2: "Anna University", date: "Jan 14, 2026", venue: "Ground C" },
  { id: 20, pool: "C", team1: "University of Calicut", team2: "Kakatiya Warangal", date: "Jan 15, 2026", venue: "Ground D" },
  { id: 21, pool: "C", team1: "Annamalai University", team2: "Winner Match 7", date: "Jan 15, 2026", venue: "Ground A" },
  { id: 22, pool: "C", team1: "Winner Match 8", team2: "Winner Match 9", date: "Jan 15, 2026", venue: "Ground B" },
  { id: 23, pool: "C", team1: "Osmania University", team2: "Krishnadevaraya University Ananthapur", date: "Jan 15, 2026", venue: "Ground C" },
  { id: 24, pool: "D", team1: "Palamuru University", team2: "MG University Kottayam", date: "Jan 16, 2026", venue: "Ground D" },
  { id: 25, pool: "D", team1: "PES University", team2: "Winner Match 10", date: "Jan 16, 2026", venue: "Ground A" },
  { id: 26, pool: "D", team1: "Winner Match 11", team2: "Alagappa University", date: "Jan 16, 2026", venue: "Ground B" },
  { id: 27, pool: "D", team1: "Adikavi Nannaya University", team2: "Andhra University", date: "Jan 16, 2026", venue: "Ground C" },

  // Round 3 / Pre-Quarters
  { id: 28, pool: "A", team1: "Winner Match 12", team2: "Winner Match 13", date: "Jan 17, 2026", venue: "Ground D" },
  { id: 29, pool: "A", team1: "Winner Match 2", team2: "Winner Match 14", date: "Jan 17, 2026", venue: "Ground A" },
  { id: 30, pool: "B", team1: "Winner Match 16", team2: "Winner Match 17", date: "Jan 17, 2026", venue: "Ground B" },
  { id: 31, pool: "B", team1: "Winner Match 18", team2: "Winner Match 19", date: "Jan 17, 2026", venue: "Ground C" },
  { id: 32, pool: "C", team1: "Winner Match 20", team2: "Winner Match 21", date: "Jan 18, 2026", venue: "Ground D" },
  { id: 33, pool: "C", team1: "Winner Match 22", team2: "Osmania University", date: "Jan 18, 2026", venue: "Ground A" },
  { id: 34, pool: "D", team1: "Winner Match 24", team2: "Winner Match 25", date: "Jan 18, 2026", venue: "Ground B" },
  { id: 35, pool: "D", team1: "Winner Match 26", team2: "Winner Match 27", date: "Jan 18, 2026", venue: "Ground C" },

  // Quarters / Pool Semis
  { id: 36, pool: "A", team1: "Winner Match 29", team2: "Winner Match 15", date: "Jan 19, 2026", venue: "Ground D" },
  { id: 37, pool: "B", team1: "Winner Match 30", team2: "Winner Match 31", date: "Jan 19, 2026", venue: "Ground A" },
  { id: 38, pool: "C", team1: "Winner Match 32", team2: "Winner Match 33", date: "Jan 19, 2026", venue: "Ground B" },
  { id: 39, pool: "D", team1: "Winner Match 34", team2: "Winner Match 35", date: "Jan 19, 2026", venue: "Ground C" },

  // Pool Finals
  { id: 40, pool: "A", team1: "Winner Match 28", team2: "Winner Match 36", date: "Jan 20, 2026", venue: "Ground Main" },
  { id: 41, pool: "B", team1: "Winner Match 37", team2: "University of Mysore", date: "Jan 20, 2026", venue: "Ground Main" },
  { id: 42, pool: "C", team1: "Winner Match 38", team2: "Winner Match 23", date: "Jan 21, 2026", venue: "Ground Main" },
  { id: 43, pool: "D", team1: "Winner Match 39", team2: "University of Madras", date: "Jan 21, 2026", venue: "Ground Main" },

  // Semi Finals & Final
  { id: 44, pool: "SF1", team1: "Winner Pool A", team2: "Winner Pool B", date: "Jan 22, 2026", venue: "Ground Main" },
  { id: 45, pool: "SF2", team1: "Winner Pool C", team2: "Winner Pool D", date: "Jan 22, 2026", venue: "Ground Main" },
  { id: 46, pool: "FINAL", team1: "Winner SF1", team2: "Winner SF2", date: "Jan 23, 2026", venue: "Ground Main" },
  { id: 47, pool: "3rd Place", team1: "Loser SF1", team2: "Loser SF2", date: "Jan 23, 2026", venue: "Ground Main" },
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
            <TabsTrigger value="results" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2.5 rounded-lg font-semibold transition-all">Results</TabsTrigger>
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

          <TabsContent value="results" className="space-y-3">
            {completedMatches.length > 0 ? (
              completedMatches.map((match) => {
                const team1 = getTeam(match.teamA);
                const team2 = getTeam(match.teamB);
                const displayMatch = {
                  ...match,
                  team1: team1?.name || "Unknown Team",
                  team2: team2?.name || "Unknown Team",
                };
                return <MatchCard key={match.id} match={displayMatch} />;
              })
            ) : (
              <p className="text-center text-muted-foreground py-8">No matches have been completed yet.</p>
            )}
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
