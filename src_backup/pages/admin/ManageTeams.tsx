import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useData } from "@/context/DataContext";
import { ArrowLeft, Plus, Trash2 } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export default function ManageTeams() {
    const { teams, setTeams } = useData();
    const navigate = useNavigate();
    const [isAdding, setIsAdding] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        shortName: '',
        logo: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newTeam = {
            id: `t${Date.now()}`,
            name: formData.name,
            shortName: formData.shortName,
            logo: formData.logo || '🏏'
        };
        setTeams([...teams, newTeam]);
        setIsAdding(false);
        setFormData({ name: '', shortName: '', logo: '' });
    };

    const handleDelete = (id: string) => {
        if (confirm('Are you sure? This might affect matches linked to this team.')) {
            setTeams(teams.filter(t => t.id !== id));
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" onClick={() => navigate('/admin/dashboard')}>
                    <ArrowLeft className="h-5 w-5" />
                </Button>
                <h2 className="text-2xl font-bold">Manage Teams</h2>
            </div>

            {!isAdding ? (
                <div className="space-y-4">
                    <Button onClick={() => setIsAdding(true)} className="w-full gap-2">
                        <Plus className="h-4 w-4" /> Add New Team
                    </Button>

                    <div className="grid gap-4">
                        {teams.map((team) => (
                            <Card key={team.id}>
                                <CardContent className="flex items-center justify-between p-4">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-xl">
                                            {team.logo}
                                        </div>
                                        <div>
                                            <p className="font-semibold">{team.name}</p>
                                            <p className="text-sm text-muted-foreground">{team.shortName}</p>
                                        </div>
                                    </div>
                                    <Button variant="destructive" size="icon" onClick={() => handleDelete(team.id)}>
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
                        <CardTitle>Add Team</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Team Name</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full rounded-md border p-2"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Short Name (Abbreviation)</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full rounded-md border p-2"
                                    value={formData.shortName}
                                    onChange={e => setFormData({ ...formData, shortName: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Logo (Emoji or URL)</label>
                                <input
                                    type="text"
                                    className="w-full rounded-md border p-2"
                                    placeholder="e.g. 🦁"
                                    value={formData.logo}
                                    onChange={e => setFormData({ ...formData, logo: e.target.value })}
                                />
                            </div>

                            <div className="flex gap-2 pt-4">
                                <Button type="button" variant="outline" className="flex-1" onClick={() => setIsAdding(false)}>
                                    Cancel
                                </Button>
                                <Button type="submit" className="flex-1">
                                    Save Team
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
