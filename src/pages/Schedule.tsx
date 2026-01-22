import { useState, useEffect } from "react";
import AppLayout from "@/components/layout/AppLayout";
import MatchCard from "@/components/matches/MatchCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useData } from "@/context/DataContext";
import { Card, CardContent } from "@/components/ui/card";
import FixturesView from "@/components/schedule/FixturesView";
import MatchTimeView from "@/components/schedule/MatchTimeView";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Edit2, Trash2, Save, X } from "lucide-react";

// Extracted matches from user provided images
const upcomingMatches = [
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

const Schedule = () => {
  // Data State
  const [scheduleMatches, setScheduleMatches] = useState<any[]>(() => {
    const saved = localStorage.getItem('schedule_matches_v2');
    return saved ? JSON.parse(saved) : upcomingMatches;
  });

  // Edit State
  const [editingId, setEditingId] = useState<number | string | null>(null);
  const [editForm, setEditForm] = useState<any>({});

  // Check admin status
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  // Persistence
  useEffect(() => {
    localStorage.setItem('schedule_matches_v2', JSON.stringify(scheduleMatches));
  }, [scheduleMatches]);

  // CRUD Actions
  const handleAddNew = () => {
    const newId = scheduleMatches.length + 1;
    const newMatch = {
      id: newId,
      team1: "Team 1",
      team2: "Team 2",
      date: "Date",
      venue: "Venue"
    };
    setScheduleMatches([...scheduleMatches, newMatch]);
    setEditingId(newId);
    setEditForm(newMatch);
  };

  const handleDelete = (id: number | string) => {
    if (window.confirm("Are you sure you want to delete this match?")) {
      setScheduleMatches(scheduleMatches.filter((m: any) => m.id !== id));
    }
  };

  const handleStartEdit = (match: any) => {
    setEditingId(match.id);
    setEditForm(match);
  };

  const handleSaveEdit = () => {
    setScheduleMatches(scheduleMatches.map((m: any) => m.id === editingId ? editForm : m));
    setEditingId(null);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
  };

  return (
    <AppLayout>
      <div className="p-4 space-y-4 pb-20">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-foreground">Match Schedule</h1>
          {isAdmin && (
            <Button onClick={handleAddNew} className="gap-2">
              <Plus className="h-4 w-4" /> Add Match
            </Button>
          )}
        </div>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="w-full grid grid-cols-3 mb-6 h-auto p-1 bg-secondary/5 border border-border/40 backdrop-blur-sm rounded-xl">
            <TabsTrigger value="upcoming" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2.5 rounded-lg font-semibold transition-all">Upcoming</TabsTrigger>
            <TabsTrigger value="match-time" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2.5 rounded-lg font-semibold transition-all">Match Time</TabsTrigger>
            <TabsTrigger value="pools" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2.5 rounded-lg font-semibold transition-all">Pools</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-4">
            {scheduleMatches.map((match) => (
              <div key={match.id} className="relative overflow-hidden rounded-xl glass-card border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary" />

                {/* Admin Actions */}
                {isAdmin && editingId !== match.id && (
                  <div className="absolute top-2 right-2 z-10 flex gap-2">
                    <Button size="icon" variant="ghost" className="h-8 w-8 hover:bg-secondary/20" onClick={() => handleStartEdit(match)}>
                      <Edit2 className="h-4 w-4 text-primary" />
                    </Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8 hover:bg-destructive/20" onClick={() => handleDelete(match.id)}>
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                )}

                <div className="p-4 flex flex-col gap-4">
                  {editingId === match.id ? (
                    <div className="space-y-3 animate-in fade-in">
                      <div className="grid grid-cols-2 gap-2">
                        <Input
                          value={editForm.id}
                          onChange={(e) => setEditForm({ ...editForm, id: e.target.value })}
                          placeholder="Match ID"
                        />
                        <Input
                          value={editForm.date}
                          onChange={(e) => setEditForm({ ...editForm, date: e.target.value })}
                          placeholder="Date"
                        />
                      </div>
                      <Input
                        value={editForm.venue}
                        onChange={(e) => setEditForm({ ...editForm, venue: e.target.value })}
                        placeholder="Venue"
                      />
                      <div className="grid grid-cols-2 gap-2">
                        <Input
                          value={editForm.team1}
                          onChange={(e) => setEditForm({ ...editForm, team1: e.target.value })}
                          placeholder="Team 1"
                        />
                        <Input
                          value={editForm.team2}
                          onChange={(e) => setEditForm({ ...editForm, team2: e.target.value })}
                          placeholder="Team 2"
                        />
                      </div>
                      <div className="flex justify-end gap-2">
                        <Button size="sm" variant="outline" onClick={handleCancelEdit}><X className="h-4 w-4 mr-1" /> Cancel</Button>
                        <Button size="sm" onClick={handleSaveEdit}><Save className="h-4 w-4 mr-1" /> Save</Button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="flex justify-between items-center text-xs text-muted-foreground pr-16">
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
                    </>
                  )}
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
