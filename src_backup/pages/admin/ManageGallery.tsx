import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useData } from "@/context/DataContext";
import { ArrowLeft, Plus, Trash2 } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export default function ManageGallery() {
    const { galleryImages, setGalleryImages } = useData();
    const navigate = useNavigate();
    const [isAdding, setIsAdding] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        src: '',
        caption: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newImage = {
            id: `g${Date.now()}`,
            src: formData.src,
            caption: formData.caption
        };
        setGalleryImages([...galleryImages, newImage]);
        setIsAdding(false);
        setFormData({ src: '', caption: '' });
    };

    const handleDelete = (id: string) => {
        if (confirm('Are you sure?')) {
            setGalleryImages(galleryImages.filter(img => img.id !== id));
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" onClick={() => navigate('/admin/dashboard')}>
                    <ArrowLeft className="h-5 w-5" />
                </Button>
                <h2 className="text-2xl font-bold">Manage Gallery</h2>
            </div>

            {!isAdding ? (
                <div className="space-y-4">
                    <Button onClick={() => setIsAdding(true)} className="w-full gap-2">
                        <Plus className="h-4 w-4" /> Add New Photo
                    </Button>

                    <div className="grid grid-cols-2 gap-4">
                        {galleryImages.map((img) => (
                            <Card key={img.id} className="overflow-hidden">
                                <div className="aspect-square relative group">
                                    <img
                                        src={img.src}
                                        alt={img.caption}
                                        className="absolute inset-0 h-full w-full object-cover"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                                        <Button variant="destructive" size="icon" onClick={() => handleDelete(img.id)}>
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2 text-center text-xs text-white">
                                        {img.caption}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            ) : (
                <Card>
                    <CardHeader>
                        <CardTitle>Add Photo</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Image URL</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full rounded-md border p-2"
                                    value={formData.src}
                                    onChange={e => setFormData({ ...formData, src: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Caption</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full rounded-md border p-2"
                                    value={formData.caption}
                                    onChange={e => setFormData({ ...formData, caption: e.target.value })}
                                />
                            </div>

                            <div className="flex gap-2 pt-4">
                                <Button type="button" variant="outline" className="flex-1" onClick={() => setIsAdding(false)}>
                                    Cancel
                                </Button>
                                <Button type="submit" className="flex-1">
                                    Save Photo
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
