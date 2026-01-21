import Header from "@/components/layout/Header";
import MatchCard from "@/components/matches/MatchCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useData } from "@/context/DataContext";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Calendar, Trophy, ListOrdered } from "lucide-react";

const Schedule = () => {
  const { matches, teams, pointsTable } = useData();

  const getTeam = (id: string) => teams.find((t) => t.id === id);

  const upcomingMatches = matches.filter(m => m.status === 'upcoming');
  const completedMatches = matches.filter(m => m.status === 'completed' || m.status === 'live');

  return (
    <div className="min-h-screen bg-background text-foreground bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background">
      <Header />
      
      <main className="container mx-auto px-4 pt-24 pb-20 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div>
                 <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">Match Center</h1>
                 <p className="text-muted-foreground">Follow live scores, upcoming fixtures and standings.</p>
            </div>
            {/* Can add filters here later */}
        </div>
        
        <Tabs defaultValue="upcoming" className="w-full space-y-8">
          <div className="flex justify-center">
            <TabsList className="grid grid-cols-3 w-full max-w-md h-auto p-1.5 bg-card/40 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg">
                <TabsTrigger value="upcoming" className="gap-2 py-3 rounded-xl data-[state=active]:bg-primary data-[state=active]:text-white font-medium transition-all duration-300">
                    <Calendar className="w-4 h-4" />
                    <span className="hidden sm:inline">Fixtures</span>
                    <span className="sm:hidden">Matches</span>
                </TabsTrigger>
                <TabsTrigger value="results" className="gap-2 py-3 rounded-xl data-[state=active]:bg-primary data-[state=active]:text-white font-medium transition-all duration-300">
                     <Trophy className="w-4 h-4" />
                     Results
                </TabsTrigger>
                <TabsTrigger value="points" className="gap-2 py-3 rounded-xl data-[state=active]:bg-primary data-[state=active]:text-white font-medium transition-all duration-300">
                     <ListOrdered className="w-4 h-4" />
                     <span className="hidden sm:inline">Standings</span>
                     <span className="sm:hidden">Points</span>
                </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="upcoming" className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {upcomingMatches.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                 {upcomingMatches.map((match) => {
                    const team1 = getTeam(match.teamA);
                    const team2 = getTeam(match.teamB);
                    const displayMatch = {
                      ...match,
                      team1: team1?.name || "Unknown Team",
                      team2: team2?.name || "Unknown Team",
                      team1Score: match.scores?.teamA,
                      team2Score: match.scores?.teamB,
                    };
                    return <MatchCard key={match.id} match={displayMatch} />;
                  })}
              </div>
            ) : (
              <div className="text-center py-20 bg-card/30 rounded-2xl border border-white/5 mx-auto max-w-2xl backdrop-blur-sm">
                 <Calendar className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                 <h3 className="text-xl font-semibold text-foreground">No Upcoming Matches</h3>
                 <p className="text-muted-foreground mt-2">Check back later for the latest schedule.</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="results" className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
             {completedMatches.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {completedMatches.map((match) => {
                    const team1 = getTeam(match.teamA);
                    const team2 = getTeam(match.teamB);
                    const displayMatch = {
                      ...match,
                      team1: team1?.name || "Unknown Team",
                      team2: team2?.name || "Unknown Team",
                      team1Score: match.scores?.teamA,
                      team2Score: match.scores?.teamB,
                    };
                    return <MatchCard key={match.id} match={displayMatch} />;
                  })}
              </div>
            ) : (
               <div className="text-center py-20 bg-card/30 rounded-2xl border border-white/5 mx-auto max-w-2xl backdrop-blur-sm">
                 <Trophy className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                 <h3 className="text-xl font-semibold text-foreground">No Completed Matches</h3>
                 <p className="text-muted-foreground mt-2">Matches will appear here once they finish.</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="points" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card className="bg-card/40 backdrop-blur-md border-white/10 shadow-xl overflow-hidden">
              <ScrollArea className="w-full whitespace-nowrap rounded-md border">
                 <div className="w-full min-w-[600px]">
                    <table className="w-full text-sm">
                      <thead className="bg-primary/5 text-xs uppercase text-muted-foreground font-semibold tracking-wider">
                        <tr>
                          <th className="px-6 py-4 text-left">Team</th>
                          <th className="px-4 py-4 text-center">P</th>
                          <th className="px-4 py-4 text-center">W</th>
                          <th className="px-4 py-4 text-center">L</th>
                          <th className="px-4 py-4 text-center">Pts</th>
                          <th className="px-4 py-4 text-center">NRR</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/30">
                        {pointsTable.map((entry, index) => {
                          const team = getTeam(entry.teamId);
                          return (
                            <tr key={entry.teamId} className="hover:bg-primary/5 transition-colors">
                              <td className="flex items-center gap-4 px-6 py-4 font-medium">
                                <span className="text-muted-foreground text-xs font-mono w-4">{index + 1}</span>
                                <span className="text-2xl filter drop-shadow-sm">{team?.logo}</span>
                                <span className="text-foreground font-semibold">{team?.name}</span>
                              </td>
                              <td className="px-4 py-4 text-center text-muted-foreground">{entry.played}</td>
                              <td className="px-4 py-4 text-center font-medium text-green-500">{entry.won}</td>
                              <td className="px-4 py-4 text-center font-medium text-red-400">{entry.lost}</td>
                              <td className="px-4 py-4 text-center font-bold text-primary text-base">{entry.points}</td>
                              <td className="px-4 py-4 text-center text-xs font-mono text-muted-foreground">{entry.nrr.toFixed(3)}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                 </div>
              </ScrollArea>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Schedule;
