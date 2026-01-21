import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Sun, Sunset, AlertCircle, CalendarRange } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock Data Configuration
const DATES = ["27 Jan", "28 Jan", "29 Jan", "30 Jan", "31 Jan", "1 Feb"];
const SESSIONS = [
    { id: "morning", label: "Morning", time: "7:30 AM", icon: Sun },
    { id: "afternoon", label: "Afternoon", time: "12:30 PM", icon: Sunset },
];

const MatchTimeView = () => {
    const [selectedDate, setSelectedDate] = useState(DATES[0]);
    const [selectedSession, setSelectedSession] = useState("morning");

    // Generate mock matches for demonstration based on the selected date/session
    // In a real app, this would filter from the actual full match list
    const getMatchesForSession = (date: string, session: string) => {
        // This logic mimics distributing the 47 matches across days and sessions
        // Just for UI visualization compliance
        const baseId = DATES.indexOf(date) * 8 + (session === "morning" ? 1 : 5);
        const count = 4; // 4 matches per session approx
        return Array.from({ length: count }).map((_, i) => ({
            id: baseId + i,
            ground: ["KSR G1", "SPB G2", "Bharath G3", "Sri Shanmuga G4"][i % 4],
            status: "Scheduled"
        }));
    };

    const matches = getMatchesForSession(selectedDate, selectedSession);

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Header Section */}
            <Card className="overflow-hidden border-none shadow-lg bg-gradient-to-br from-primary/90 to-primary text-primary-foreground">
                <CardContent className="p-5 space-y-4">
                    <div>
                        <h2 className="text-xl font-bold leading-tight">South Zone Inter-University Cricket – Women (2025–26)</h2>
                        <div className="flex items-center gap-2 mt-2 text-primary-foreground/90 text-sm font-medium">
                            <CalendarRange className="h-4 w-4" />
                            <span>27 Jan – 1 Feb 2026</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 bg-black/10 p-3 rounded-lg backdrop-blur-sm">
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-1.5 text-xs font-medium opacity-80">
                                <Sun className="h-3.5 w-3.5" /> Morning
                            </div>
                            <span className="text-lg font-bold">7:30 AM</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-1.5 text-xs font-medium opacity-80">
                                <Sunset className="h-3.5 w-3.5" /> Afternoon
                            </div>
                            <span className="text-lg font-bold">12:30 PM</span>
                        </div>
                    </div>

                    {selectedDate === "27 Jan" && (
                        <div className="flex items-start gap-2 text-xs italic bg-yellow-400/20 p-2 rounded border border-yellow-400/30 text-yellow-100">
                            <AlertCircle className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" />
                            <span>27 Jan match time deferred due to inauguration</span>
                        </div>
                    )}
                </CardContent>
            </Card>

            {/* Date Selector */}
            <div className="space-y-2">
                <h3 className="px-1 text-sm font-medium text-muted-foreground">Select Date</h3>
                <ScrollArea className="w-full whitespace-nowrap rounded-xl border border-border/50 bg-secondary/5 p-1">
                    <div className="flex w-max space-x-2 p-1">
                        {DATES.map((date) => (
                            <button
                                key={date}
                                onClick={() => setSelectedDate(date)}
                                className={cn(
                                    "flex-shrink-0 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200",
                                    selectedDate === date
                                        ? "bg-primary text-primary-foreground shadow-md scale-105"
                                        : "bg-background hover:bg-secondary/20 text-muted-foreground hover:text-foreground border border-transparent hover:border-border/50"
                                )}
                            >
                                {date}
                            </button>
                        ))}
                    </div>
                    <ScrollBar orientation="horizontal" className="invisible" />
                </ScrollArea>
            </div>

            {/* Session Tabs */}
            <div className="grid grid-cols-2 gap-3 p-1 bg-secondary/10 rounded-xl">
                {SESSIONS.map((session) => (
                    <button
                        key={session.id}
                        onClick={() => setSelectedSession(session.id)}
                        className={cn(
                            "flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-all duration-300",
                            selectedSession === session.id
                                ? "bg-white dark:bg-zinc-800 text-primary shadow-sm ring-1 ring-border/50"
                                : "text-muted-foreground hover:bg-white/50 dark:hover:bg-zinc-800/50"
                        )}
                    >
                        <session.icon className={cn("h-4 w-4", selectedSession === session.id ? "text-primary" : "text-muted-foreground")} />
                        {session.label}
                    </button>
                ))}
            </div>

            {/* Match Schedule Display */}
            <div className="space-y-4">
                <h3 className="px-1 text-sm font-medium text-muted-foreground flex justify-between items-center">
                    <span>Scheduled Matches</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">{matches.length} Matches</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {matches.map((match) => (
                        <div
                            key={match.id}
                            className="flex items-center justify-between p-4 rounded-xl bg-card border border-border/50 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 group"
                        >
                            <div className="flex flex-col gap-1">
                                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                                    Match #{match.id}
                                </span>
                                <span className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                                    {match.ground}
                                </span>
                            </div>

                            <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                                <span className="font-bold text-sm">VS</span>
                            </div>
                        </div>
                    ))}
                </div>

                {matches.length === 0 && (
                    <div className="text-center py-10 text-muted-foreground">
                        <p>No matches scheduled for this session.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MatchTimeView;
