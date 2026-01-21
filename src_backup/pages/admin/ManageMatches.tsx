import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useData } from "@/context/DataContext";
import { ArrowLeft, Plus, Trash2 } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export default function ManageMatches() {
    const { matches, teams, addMatch, deleteMatch } = useData();
    const navigate = useNavigate();
    const [isAdding, setIsAdding] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        teamA: '',
        teamB: '',
        date: '',
        time: '',
        venue: '',
        matchNumber: 0
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newMatch = {
            id: `m${Date.now()}`,
            matchNumber: Number(formData.matchNumber),
            date: formData.date,
            time: formData.time,
            teamA: formData.teamA,
            teamB: formData.teamB,
            venue: formData.venue,
            status: 'upcoming' as const
        };
        addMatch(newMatch);
        setIsAdding(false);
        setFormData({ teamA: '', teamB: '', date: '', time: '', venue: '', matchNumber: 0 });
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" onClick={() => navigate('/admin/dashboard')}>
                    <ArrowLeft className="h-5 w-5" />
                </Button>
                <h2 className="text-2xl font-bold">Manage Matches</h2>
            </div>

            {!isAdding ? (
                <div className="space-y-4">
                    <Button onClick={() => setIsAdding(true)} className="w-full gap-2">
                        <Plus className="h-4 w-4" /> Add New Match
                    </Button>

                    <div className="grid gap-4">
                        {matches.map((match) => (
                            <Card key={match.id}>
                                <CardContent className="flex items-center justify-between p-4">
                                    <div>
                                        <p className="font-semibold">Match {match.matchNumber}</p>
                                        <p className="text-sm text-muted-foreground">
                                            {teams.find(t => t.id === match.teamA)?.shortName} vs {teams.find(t => t.id === match.teamB)?.shortName}
                                        </p>
                                        <p className="text-xs text-muted-foreground">{match.date} • {match.venue}</p>
                                    </div>
                                    <Button variant="destructive" size="icon" onClick={() => deleteMatch(match.id)}>
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            ) : (
                <Card>
                    <CardHeader>
                        <CardTitle>Add Match</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Match No</label>
                                    <input
                                        type="number"
                                        required
                                        className="w-full rounded-md border p-2"
                                        value={formData.matchNumber}
                                        onChange={e => setFormData({ ...formData, matchNumber: Number(e.target.value) })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Date</label>
                                    <input
                                        type="date"
                                        required
                                        className="w-full rounded-md border p-2"
                                        value={formData.date}
                                        onChange={e => setFormData({ ...formData, date: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Team A</label>
                                    <select
                                        required
                                        className="w-full rounded-md border p-2"
                                        value={formData.teamA}
                                        onChange={e => setFormData({ ...formData, teamA: e.target.value })}
                                    >
                                        <option value="">Select Team</option>
                                        {teams.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Team B</label>
                                    <select
                                        required
                                        className="w-full rounded-md border p-2"
                                        value={formData.teamB}
                                        onChange={e => setFormData({ ...formData, teamB: e.target.value })}
                                    >
                                        <option value="">Select Team</option>
                                        {teams.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Venue</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full rounded-md border p-2"
                                    value={formData.venue}
                                    onChange={e => setFormData({ ...formData, venue: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Time</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. 09:00 AM"
                                    className="w-full rounded-md border p-2"
                                    value={formData.time}
                                    onChange={e => setFormData({ ...formData, time: e.target.value })}
                                />
                            </div>

                            <div className="flex gap-2 pt-4">
                                <Button type="button" variant="outline" className="flex-1" onClick={() => setIsAdding(false)}>
                                    Cancel
                                </Button>
                                <Button type="submit" className="flex-1">
                                    Save Match
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
