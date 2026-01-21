import { Bell } from 'lucide-react';
import { Button } from './Button';

export function Header() {
    return (
        <header className="sticky top-0 z-40 w-full border-b bg-primary text-primary-foreground shadow-sm">
            <div className="flex h-16 items-center justify-between px-4 md:px-6">
                <div className="flex items-center gap-2">
                    {/* Placeholder for Logo */}
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                        <span className="text-lg font-bold">🏏</span>
                    </div>
                    <div>
                        <h1 className="text-sm font-bold leading-none md:text-base">South Zone Cricket</h1>
                        <p className="text-[10px] text-primary-foreground/80 md:text-xs">KSRCT Tournament 2026</p>
                    </div>
                </div>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10 hover:text-primary-foreground">
                    <Bell className="h-5 w-5" />
                    <span className="sr-only">Notifications</span>
                </Button>
            </div>
        </header>
    );
}
