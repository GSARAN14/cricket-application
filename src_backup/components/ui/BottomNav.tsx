import { Home, Calendar, Users, MapPin, Menu } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';

export function BottomNav() {
    const navItems = [
        { icon: Home, label: 'Home', path: '/' },
        { icon: Calendar, label: 'Matches', path: '/matches' },
        { icon: Users, label: 'Teams', path: '/teams' },
        { icon: MapPin, label: 'Venues', path: '/venues' },
        { icon: Menu, label: 'More', path: '/more' },
    ];

    return (
        <nav className="fixed bottom-4 left-4 right-4 z-50 rounded-2xl border border-white/20 bg-white/80 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-black/60 md:hidden">
            <div className="flex h-16 items-center justify-around px-2">
                {navItems.map(({ icon: Icon, label, path }) => (
                    <NavLink
                        key={path}
                        to={path}
                        className={({ isActive }) =>
                            cn(
                                "relative flex flex-col items-center justify-center space-y-1 rounded-xl px-3 py-1.5 text-xs font-medium transition-all duration-300",
                                isActive
                                    ? "text-primary scale-110"
                                    : "text-muted-foreground hover:text-primary hover:scale-105"
                            )
                        }
                    >
                        {({ isActive }) => (
                            <>
                                <div className={cn(
                                    "absolute -top-1 h-1 w-8 rounded-full bg-primary transition-all duration-300",
                                    isActive ? "opacity-100" : "opacity-0"
                                )} />
                                <Icon className={cn("h-5 w-5", isActive && "fill-current")} />
                                <span className={cn("text-[10px] font-bold", isActive ? "opacity-100" : "opacity-70")}>{label}</span>
                            </>
                        )}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
}
