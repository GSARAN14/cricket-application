import { Outlet } from 'react-router-dom';
import { BottomNav } from './BottomNav';
import { Header } from './Header';

export function Layout() {
    return (
        <div className="flex min-h-screen flex-col bg-muted/30 font-sans selection:bg-primary/20">
            <Header />
            <main className="flex-1 pb-24 pt-4 md:pb-8 md:pt-8">
                <div className="container mx-auto max-w-md px-4 md:max-w-4xl">
                    <Outlet />
                </div>
            </main>
            <BottomNav />
        </div>
    );
}
