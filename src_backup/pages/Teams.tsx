import { Card, CardContent } from "@/components/ui/Card";
import { TEAMS } from "@/data/mockData";
import { Users } from "lucide-react";
import { SEO } from "@/components/SEO";
import { PageTransition } from "@/components/PageTransition";

export default function Teams() {
    return (
        <PageTransition className="space-y-6">
            <SEO title="Teams" description="Participating universities and teams." />
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Participating Teams</h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
                {TEAMS.map((team) => (
                    <Card key={team.id} className="overflow-hidden transition-all hover:shadow-md">
                        <CardContent className="flex items-center gap-4 p-4">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted text-3xl">
                                {team.logo}
                            </div>
                            <div>
                                <h3 className="font-semibold">{team.name}</h3>
                                <p className="text-sm text-muted-foreground">{team.shortName}</p>
                                <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                                    <Users className="h-3 w-3" />
                                    <span>15 Players</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </PageTransition>
    );
}
