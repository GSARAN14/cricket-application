import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Calendar, Users, MapPin, Image, LogOut } from "lucide-react";

export default function Dashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isAdmin');
        navigate('/admin/login');
    };

    const menuItems = [
        { title: 'Manage Matches', icon: <Calendar className="h-6 w-6" />, path: '/admin/matches' },
        { title: 'Manage Teams', icon: <Users className="h-6 w-6" />, path: '/admin/teams' },
        { title: 'Manage Venues', icon: <MapPin className="h-6 w-6" />, path: '/admin/venues' },
        { title: 'Manage Gallery', icon: <Image className="h-6 w-6" />, path: '/admin/gallery' },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Admin Dashboard</h2>
                <Button variant="ghost" size="sm" onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
                {menuItems.map((item, idx) => (
                    <Card key={idx} className="cursor-pointer transition-colors hover:bg-accent/50" onClick={() => navigate(item.path)}>
                        <CardContent className="flex flex-col items-center justify-center gap-4 p-6 text-center">
                            <div className="rounded-full bg-primary/10 p-4 text-primary">
                                {item.icon}
                            </div>
                            <h3 className="font-semibold">{item.title}</h3>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
