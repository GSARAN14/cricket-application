import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { Card, CardContent } from "@/components/ui/Card";
import { MATCHES, POINTS_TABLE, TEAMS, type Team } from "@/data/mockData";
import { MapPin, Calendar as CalendarIcon } from "lucide-react";
import { SEO } from "@/components/SEO";
import { PageTransition } from "@/components/PageTransition";

export default function Matches() {
    const getTeam = (id: string) => TEAMS.find((t) => t.id === id);

    const upcomingMatches = MATCHES.filter((m) => m.status === 'upcoming');
    const completedMatches = MATCHES.filter((m) => m.status === 'completed' || m.status === 'live');

    return (
        <PageTransition className="space-y-6">
            <SEO title="Matches" description="Match schedule, results, and points table." />
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Matches</h2>
            </div>

            <Tabs defaultValue="schedule" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="schedule">Schedule</TabsTrigger>
                    <TabsTrigger value="results">Results</TabsTrigger>
                    <TabsTrigger value="points">Points</TabsTrigger>
                </TabsList>

                <TabsContent value="schedule" className="space-y-4">
                    {upcomingMatches.length > 0 ? (
                        upcomingMatches.map((match) => {
                            const teamA = getTeam(match.teamA);
                            const teamB = getTeam(match.teamB);
                            return (
                                <MatchCard key={match.id} match={match} teamA={teamA} teamB={teamB} />
                            );
                        })
                    ) : (
                        <p className="py-8 text-center text-muted-foreground">No upcoming matches.</p>
                    )}
                </TabsContent>

                <TabsContent value="results" className="space-y-4">
                    {completedMatches.length > 0 ? (
                        completedMatches.map((match) => {
                            const teamA = getTeam(match.teamA);
                            const teamB = getTeam(match.teamB);
                            return (
                                <MatchCard key={match.id} match={match} teamA={teamA} teamB={teamB} />
                            );
                        })
                    ) : (
                        <p className="py-8 text-center text-muted-foreground">No matches completed yet.</p>
                    )}
                </TabsContent>

                <TabsContent value="points">
                    <Card>
                        <CardContent className="p-0">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead className="bg-muted text-xs uppercase text-muted-foreground">
                                        <tr>
                                            <th className="px-4 py-3 text-left">Team</th>
                                            <th className="px-2 py-3 text-center">P</th>
                                            <th className="px-2 py-3 text-center">W</th>
                                            <th className="px-2 py-3 text-center">L</th>
                                            <th className="px-2 py-3 text-center">Pts</th>
                                            <th className="px-2 py-3 text-center">NRR</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y">
                                        {POINTS_TABLE.map((entry) => {
                                            const team = getTeam(entry.teamId);
                                            return (
                                                <tr key={entry.teamId} className="bg-card">
                                                    <td className="flex items-center gap-2 px-4 py-3 font-medium">
                                                        <span className="text-base">{team?.logo}</span>
                                                        <span>{team?.shortName}</span>
                                                    </td>
                                                    <td className="px-2 py-3 text-center">{entry.played}</td>
                                                    <td className="px-2 py-3 text-center">{entry.won}</td>
                                                    <td className="px-2 py-3 text-center">{entry.lost}</td>
                                                    <td className="px-2 py-3 text-center font-bold">{entry.points}</td>
                                                    <td className="px-2 py-3 text-center text-xs text-muted-foreground">{entry.nrr.toFixed(3)}</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </PageTransition>
    );
}

function MatchCard({ match, teamA, teamB }: { match: any; teamA?: Team; teamB?: Team }) {
    return (
        <Card className="overflow-hidden border-l-4 border-l-primary">
            <CardContent className="p-4">
                <div className="mb-4 flex items-center justify-between text-xs text-muted-foreground">
                    <span className="font-medium text-primary">Match {match.matchNumber}</span>
                    <div className="flex items-center gap-1">
                        <CalendarIcon className="h-3 w-3" />
                        <span>{match.date}</span>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex flex-col items-center gap-1">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-2xl">
                            {teamA?.logo}
                        </div>
                        <span className="text-xs font-bold">{teamA?.shortName}</span>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                        <span className="text-xs font-medium text-muted-foreground">VS</span>
                        <div className="rounded-full bg-secondary/20 px-3 py-1 text-xs font-bold text-secondary-foreground">
                            {match.time}
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-2xl">
                            {teamB?.logo}
                        </div>
                        <span className="text-xs font-bold">{teamB?.shortName}</span>
                    </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span>{match.venue}</span>
                </div>
            </CardContent>
        </Card>
    );
}
