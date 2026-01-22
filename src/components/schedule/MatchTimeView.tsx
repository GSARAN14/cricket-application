import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Sun, Sunset, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import MatchScheduleTable from "@/components/schedule/MatchScheduleTable";

// Fallback data in case localStorage is empty (same as Schedule.tsx)
const FALLBACK_MATCHES = [
    { id: 1, date: "27 Jan 2026", session: "Morning", venue: "KSR G1", team1: "TNPESU CHENNAI", team2: "HINDUSTAN UNIVERSITY" },
    { id: 2, date: "27 Jan 2026", session: "Morning", venue: "SPB G2", team1: "MANIPAL UNIVERSITY", team2: "KL DEEMED GUNTUR" },
    { id: 3, date: "27 Jan 2026", session: "Morning", venue: "BHARATH G3", team1: "KUVEMBU UNIVERSITY", team2: "ACHARYA NAGARJUNA GUNTUR" },
    { id: 4, date: "27 Jan 2026", session: "Morning", venue: "SANMUGA G4", team1: "RAJIV GANDHI NUZVID", team2: "SDM DHARWAD" },
    { id: 5, date: "27 Jan 2026", session: "Morning", venue: "SENGUNTHAR G5", team1: "MOTHER THERASA UNIVERSITY", team2: "THIRUVALLUR UNIVERSITY" },
    { id: 6, date: "27 Jan 2026", session: "Morning", venue: "MAHENDRA G6", team1: "TAMIL NADU AMBEDKAR LAW", team2: "SAVEETHA UNIVERSITY" },
    { id: 7, date: "27 Jan 2026", session: "Morning", venue: "NANDHA G7", team1: "MADURAI KAMARAJ", team2: "KARNATAKA STATE AKKAMAHADEVI" },
    { id: 8, date: "27 Jan 2026", session: "Morning", venue: "KONGU G8", team1: "KANNUR UNIVERSITY", team2: "JEPPIAR UNIVERSITY" },
    { id: 9, date: "27 Jan 2026", session: "Afternoon", venue: "SPB G2", team1: "MANGALORE UNIVERSITY", team2: "PONDICHERRY UNIVERSITY" },
    { id: 10, date: "27 Jan 2026", session: "Afternoon", venue: "BHARATH G3", team1: "UNIVERSITY OF KERALA", team2: "VTU BELAGAVI" },
    { id: 11, date: "27 Jan 2026", session: "Afternoon", venue: "SANMUGA G4", team1: "BHARATHIAR UNIVERSITY", team2: "KRISHNA UNIVERSITY" },
    { id: 12, date: "27 Jan 2026", session: "Afternoon", venue: "SENGUNTHAR G5", team1: "JNTU KAKINADA", team2: "DR. AMBEDKAR SRIKAKULAM" },
    { id: 13, date: "28 Jan 2026", session: "Morning", venue: "SPB G2", team1: "Winner of Match 1", team2: "Winner of Match 2" },
    { id: 14, date: "27 Jan 2026", session: "Afternoon", venue: "MAHENDRA G6", team1: "Winner of Match 3", team2: "SRI VENKATESHWARA TIRUPATHI" },
    { id: 15, date: "27 Jan 2026", session: "Afternoon", venue: "NANDHA G7", team1: "RAJIV GANDHI BANGALORE", team2: "SRM IST KATTANKULATHUR" },
    { id: 16, date: "27 Jan 2026", session: "Afternoon", venue: "KONGU G8", team1: "MGR UNIVERSITY CHENNAI", team2: "KLE TECH HUBBALI" },
    { id: 17, date: "28 Jan 2026", session: "Morning", venue: "BHARATH G3", team1: "Winner of Match 4", team2: "Winner of Match 5" },
    { id: 18, date: "28 Jan 2026", session: "Morning", venue: "SANMUGA G4", team1: "Winner of Match 6", team2: "AVINASHILINGAM UNIVERSITY" },
    { id: 19, date: "27 Jan 2026", session: "Afternoon", venue: "KSR G1", team1: "IIPE VIZAGAPATTINAM", team2: "ANNA UNIVERSITY" },
    { id: 20, date: "28 Jan 2026", session: "Morning", venue: "NANDHA G7", team1: "KAKTIYA WARANGAL", team2: "ANNAMALAI UNIVERSITY" },
    { id: 21, date: "28 Jan 2026", session: "Morning", venue: "KONGU G8", team1: "Winner of Match 7", team2: "Winner of Match 8" },
    { id: 22, date: "28 Jan 2026", session: "Morning", venue: "MAHENDRA G6", team1: "Winner of Match 9", team2: "OSMANIA UNIVERSITY" },
    { id: 23, date: "28 Jan 2026", session: "Morning", venue: "SENGUNTHAR G5", team1: "KRISHNADEVARAYA ANANTHAPUR", team2: "BHARATHITHASAN UNIVERSITY" },
    { id: 24, date: "28 Jan 2026", session: "Morning", venue: "KSR G1", team1: "PALAMURU UNIVERSITY", team2: "MG UNIVERSITY KOTTAYAM" },
    { id: 25, date: "28 Jan 2026", session: "Afternoon", venue: "NANDHA G7", team1: "PES UNIVERSITY", team2: "Winner of Match 10" },
    { id: 26, date: "28 Jan 2026", session: "Afternoon", venue: "SANMUGA G4", team1: "Winner of Match 11", team2: "ALAGAPPA UNIVERSITY" },
    { id: 27, date: "28 Jan 2026", session: "Afternoon", venue: "MAHENDRA G6", team1: "ADIKAVI NANNAYA UNIVERSITY", team2: "ANDHRA UNIVERSITY" },
    { id: 28, date: "28 Jan 2026", session: "Afternoon", venue: "SPB G2", team1: "Winner of Match 12", team2: "Winner of Match 13" },
    { id: 29, date: "28 Jan 2026", session: "Afternoon", venue: "SENGUNTHAR G5", team1: "Winner of Match 14", team2: "Winner of Match 15" },
    { id: 30, date: "28 Jan 2026", session: "Afternoon", venue: "BHARATH G3", team1: "Winner of Match 16", team2: "Winner of Match 17" },
    { id: 31, date: "28 Jan 2026", session: "Afternoon", venue: "KSR G1", team1: "Winner of Match 18", team2: "Winner of Match 19" },
    { id: 32, date: "28 Jan 2026", session: "Afternoon", venue: "KONGU G8", team1: "Winner of Match 20", team2: "Winner of Match 21" },
    { id: 33, date: "29 Jan 2026", session: "Morning", venue: "SPB G2", team1: "Winner of Match 22", team2: "Winner of Match 23" },
    { id: 34, date: "29 Jan 2026", session: "Morning", venue: "NANDHA G7", team1: "Winner of Match 24", team2: "Winner of Match 25" },
    { id: 35, date: "29 Jan 2026", session: "Morning", venue: "KONGU G8", team1: "Winner of Match 26", team2: "Winner of Match 27" },
    { id: 36, date: "29 Jan 2026", session: "Morning", venue: "KSR G1", team1: "Winner of Match 28", team2: "Winner of Match 29" },
    { id: 37, date: "29 Jan 2026", session: "Afternoon", venue: "KSR G1", team1: "Winner of Match 30", team2: "Winner of Match 31" },
    { id: 38, date: "29 Jan 2026", session: "Afternoon", venue: "SPB G2", team1: "Winner of Match 32", team2: "Winner of Match 33" },
    { id: 39, date: "29 Jan 2026", session: "Afternoon", venue: "NANDHA G7", team1: "Winner of Match 34", team2: "Winner of Match 35" },
    { id: 40, date: "30 Jan 2026", session: "Morning", venue: "SPB G2", team1: "BANGALORE CITY UNIVERSITY", team2: "Winner of Match 36" },
    { id: 41, date: "30 Jan 2026", session: "Morning", venue: "KSR G1", team1: "Winner of Match 37", team2: "UNIVERSITY OF MYSORE" },
    { id: 42, date: "30 Jan 2026", session: "Morning", venue: "BHARATH G3", team1: "UNIVERSITY OF CALICUT", team2: "Winner of Match 38" },
    { id: 43, date: "30 Jan 2026", session: "Morning", venue: "SANMUGA G4", team1: "Winner of Match 39", team2: "UNIVERSITY OF MADRAS" },
    { id: "44 (SF 1)", date: "31 Jan 2026", session: "Morning", venue: "KSR G1", team1: "Winner of Pool A", team2: "Winner of Pool B" },
    { id: "45 (SF 2)", date: "31 Jan 2026", session: "Morning", venue: "SPB G2", team1: "Winner of Pool C", team2: "Winner of Pool D" },
    { id: "46 (FINAL)", date: "01 Feb 2026", session: "Morning", venue: "KSR G1", team1: "Winner of SF 1", team2: "Winner of SF 2" },
    { id: 47, date: "01 Feb 2026", session: "Morning", venue: "SPB G2", team1: "Loser of SF 1", team2: "Loser of SF 2 (3rd Place)" },
];

const SESSIONS = [
    { id: "Morning", label: "Morning", time: "7:30 AM", icon: Sun },
    { id: "Afternoon", label: "Afternoon", time: "12:30 PM", icon: Sunset },
];

const MatchTimeView = () => {
    // Load matches from localStorage or fallback
    const [allMatches, setAllMatches] = useState<any[]>(() => {
        const saved = localStorage.getItem('schedule_matches_v2');
        return saved ? JSON.parse(saved) : FALLBACK_MATCHES;
    });

    // Derive dates from matches
    const dates = Array.from(new Set(allMatches.map(m => m.date)));

    // State
    const [selectedDate, setSelectedDate] = useState(dates[0] || "27 Jan 2026");
    const [selectedSession, setSelectedSession] = useState("Morning");

    // Filter matches
    const matches = allMatches.filter(m => m.date === selectedDate && m.session === selectedSession);

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Header Section */}
            {/* Match Schedule Matrix */}
            <MatchScheduleTable />

            {/* Date Selector */}
            <div className="space-y-2">
                <h3 className="px-1 text-sm font-medium text-muted-foreground">Select Date</h3>
                <ScrollArea className="w-full whitespace-nowrap rounded-xl border border-border/50 bg-secondary/5 p-1">
                    <div className="flex w-max space-x-2 p-1">
                        {dates.map((date) => (
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {matches.map((match) => (
                        <div
                            key={match.id}
                            className="flex items-center justify-between p-4 rounded-xl bg-card border border-border/50 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 group"
                        >
                            <div className="flex flex-col gap-1 w-full">
                                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex justify-between">
                                    <span>Match #{match.id}</span>
                                    <span className="text-primary/70 font-semibold bg-primary/5 px-2 py-0.5 rounded">{match.venue}</span>
                                </span>
                                <span className="font-bold text-foreground text-sm sm:text-base group-hover:text-primary transition-colors mt-2">
                                    {match.team1} <span className="text-muted-foreground/50 font-normal mx-1">vs</span> {match.team2}
                                </span>
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
