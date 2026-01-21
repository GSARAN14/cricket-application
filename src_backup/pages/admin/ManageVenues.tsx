import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useData } from "@/context/DataContext";
import { ArrowLeft, Plus, Trash2 } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export default function ManageVenues() {
    const { venues, setVenues } = useData();
    const navigate = useNavigate();
    const [isAdding, setIsAdding] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        image: '',
        mapLink: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newVenue = {
            id: `v${Date.now()}`,
            name: formData.name,
            address: formData.address,
            image: formData.image || 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80',
            mapLink: formData.mapLink || 'https://maps.google.com',
            facilities: [],
            rules: []
        };
        setVenues([...venues, newVenue]);
        setIsAdding(false);
        setFormData({ name: '', address: '', image: '', mapLink: '' });
    };

    const handleDelete = (id: string) => {
        if (confirm('Are you sure?')) {
            setVenues(venues.filter(v => v.id !== id));
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" onClick={() => navigate('/admin/dashboard')}>
                    <ArrowLeft className="h-5 w-5" />
                </Button>
                <h2 className="text-2xl font-bold">Manage Venues</h2>
            </div>

            {!isAdding ? (
                <div className="space-y-4">
                    <Button onClick={() => setIsAdding(true)} className="w-full gap-2">
                        <Plus className="h-4 w-4" /> Add New Venue
                    </Button>

                    <div className="grid gap-4">
                        {venues.map((venue) => (
                            <Card key={venue.id}>
                                <CardContent className="flex items-center justify-between p-4">
                                    <div>
                                        <p className="font-semibold">{venue.name}</p>
                                        <p className="text-sm text-muted-foreground">{venue.address}</p>
                                    </div>
                                    <Button variant="destructive" size="icon" onClick={() => handleDelete(venue.id)}>
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
                        <CardTitle>Add Venue</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Venue Name</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full rounded-md border p-2"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Address</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full rounded-md border p-2"
                                    value={formData.address}
                                    onChange={e => setFormData({ ...formData, address: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Image URL</label>
                                <input
                                    type="text"
                                    className="w-full rounded-md border p-2"
                                    value={formData.image}
                                    onChange={e => setFormData({ ...formData, image: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Map Link</label>
                                <input
                                    type="text"
                                    className="w-full rounded-md border p-2"
                                    value={formData.mapLink}
                                    onChange={e => setFormData({ ...formData, mapLink: e.target.value })}
                                />
                            </div>

                            <div className="flex gap-2 pt-4">
                                <Button type="button" variant="outline" className="flex-1" onClick={() => setIsAdding(false)}>
                                    Cancel
                                </Button>
                                <Button type="submit" className="flex-1">
                                    Save Venue
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
