import AppLayout from "@/components/layout/AppLayout";
import MatchCard from "@/components/matches/MatchCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useData } from "@/context/DataContext";
import { Card, CardContent } from "@/components/ui/card";

const Schedule = () => {
  const { matches, teams, pointsTable } = useData();

  const getTeam = (id: string) => teams.find((t) => t.id === id);

  // Filter matches
  const upcomingMatches = matches.filter(m => m.status === 'upcoming');
  const completedMatches = matches.filter(m => m.status === 'completed' || m.status === 'live');

  return (
    <AppLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold text-foreground mb-4">Match Schedule</h1>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="w-full grid grid-cols-3 mb-6 h-auto p-1 bg-secondary/5 border border-border/40 backdrop-blur-sm rounded-xl">
            <TabsTrigger value="upcoming" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2.5 rounded-lg font-semibold transition-all">Upcoming</TabsTrigger>
            <TabsTrigger value="results" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2.5 rounded-lg font-semibold transition-all">Results</TabsTrigger>
            <TabsTrigger value="points" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2.5 rounded-lg font-semibold transition-all">Points Table</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-3">
            {upcomingMatches.length > 0 ? (
              upcomingMatches.map((match) => {
                // MatchCard expects specific props, let's adapt or pass what we have
                // The existing MatchCard might expect 'team1'/'team2' strings, but we have IDs.
                const team1 = getTeam(match.teamA);
                const team2 = getTeam(match.teamB);

                // Construct a compatible object if needed, or update MatchCard.
                // Assuming MatchCard takes a 'match' object that has team names directly?
                // Let's look at MatchCard.tsx content first.
                // WAIT: I haven't seen MatchCard content yet in this turn. I requested it.
                // For now I will optimistically check MatchCard.tsx content in next step and THEN write this file.
                // Actually, I can construct the prop on the fly.
                const displayMatch = {
                  ...match,
                  team1: team1?.name || "Unknown Team",
                  team2: team2?.name || "Unknown Team",
                  team1Score: match.scores?.teamA,
                  team2Score: match.scores?.teamB,
                  winner: match.result,
                  // status match
                };
                return <MatchCard key={match.id} match={displayMatch} />;
              })
            ) : (
              <p className="text-center text-muted-foreground py-8">No upcoming matches scheduled.</p>
            )}
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
              <p className="text-center text-muted-foreground py-8">No matches completed yet.</p>
            )}
          </TabsContent>

          <TabsContent value="points">
            <Card className="glass-card">
              <CardContent className="p-0 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50 text-xs uppercase text-muted-foreground">
                    <tr>
                      <th className="px-4 py-3 text-left">Team</th>
                      <th className="px-2 py-3 text-center">P</th>
                      <th className="px-2 py-3 text-center">W</th>
                      <th className="px-2 py-3 text-center">L</th>
                      <th className="px-2 py-3 text-center">Pts</th>
                      <th className="px-2 py-3 text-center">NRR</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/50">
                    {pointsTable.map((entry) => {
                      const team = getTeam(entry.teamId);
                      return (
                        <tr key={entry.teamId} className="hover:bg-muted/30 transition-colors">
                          <td className="flex items-center gap-3 px-4 py-3 font-medium">
                            <span className="text-lg">{team?.logo}</span>
                            <span>{team?.shortName}</span>
                          </td>
                          <td className="px-2 py-3 text-center">{entry.played}</td>
                          <td className="px-2 py-3 text-center">{entry.won}</td>
                          <td className="px-2 py-3 text-center">{entry.lost}</td>
                          <td className="px-2 py-3 text-center font-bold text-primary">{entry.points}</td>
                          <td className="px-2 py-3 text-center text-xs text-muted-foreground">{entry.nrr.toFixed(3)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default Schedule;
