import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PoolTeamList = ({ poolName, teams, startIndex }: { poolName: string, teams: string[], startIndex: number }) => {
    return (
        <Card className="glass-card border-border/50 shadow-sm">
            <CardHeader className="pb-3 border-b border-border/50 bg-primary/5">
                <div className="flex justify-between items-center">
                    <CardTitle className="text-xl font-bold text-primary">POOL - {poolName}</CardTitle>
                    <Badge variant="outline" className="bg-background/50">
                        {teams.length} Teams
                    </Badge>
                </div>
            </CardHeader>
            <CardContent className="pt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {teams.map((team, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-card/60 border border-border/50 hover:bg-primary/5 transition-colors">
                            <span className="flex items-center justify-center min-w-[1.5rem] h-6 rounded-full bg-secondary/10 text-secondary font-bold text-xs font-mono px-1">
                                {startIndex + index}
                            </span>
                            <span className="font-medium text-sm text-foreground/90">
                                {team}
                            </span>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

const FixturesView = () => {
    // POOL A
    const poolATeams = [
        "Bangalore City University", "JNTU Kakinada", "Dr. Ambedkar Srikakulam",
        "TNPESU Chennai", "Hindustan University", "Manipal University", "KL Deemed Guntur",
        "Kuvempu University", "Acharya Nagarjuna Guntur", "Sri Venkateshwara Tirupathi",
        "Rajiv Gandhi Bangalore", "SRM IST Kattankulathur"
    ];

    // POOL B
    const poolBTeams = [
        "MGR University Chennai", "KLE Tech Hubbali", "Rajiv Gandhi Nuzvid", "SDM Dharwad",
        "Mother Therasa University", "Thiruvallur University", "Tamilnadu Ambedkar Law",
        "Saveetha University", "Avinashilingam University", "IIPE Vizagapattinam",
        "Anna University", "University of Mysore"
    ];

    // POOL C
    const poolCTeams = [
        "University of Calicut", "Kakatiya Warangal", "Annamalai University",
        "Madurai Kamaraj", "Karnataka State Akkamahadevi Women",
        "Kannur University", "Jeppiar University", "Mangalore University",
        "Pondicherry University", "Osmania University",
        "Krishnadevaraya University Ananthapur", "Bharathithasan University"
    ];

    // POOL D
    const poolDTeams = [
        "Palamuru University", "MG University Kottayam", "PES University",
        "University of Kerala", "VTU Belagavi", "Bharathiar University",
        "Krishna University", "Alagappa University", "Adikavi Nannaya University",
        "Andhra University", "University of Madras"
    ];

    return (
        <div className="space-y-6 animate-in fade-in duration-500 pb-20">
            <PoolTeamList poolName="A" teams={poolATeams} startIndex={1} />
            <PoolTeamList poolName="B" teams={poolBTeams} startIndex={13} />
            <PoolTeamList poolName="C" teams={poolCTeams} startIndex={25} />
            <PoolTeamList poolName="D" teams={poolDTeams} startIndex={37} />
        </div>
    );
};

export default FixturesView;
