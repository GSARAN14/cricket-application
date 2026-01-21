import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Calendar, MapPin, PhoneCall, Bed, Utensils, Siren } from "lucide-react";
import { Countdown } from "@/components/Countdown";
import { SEO } from "@/components/SEO";
import { PageTransition } from "@/components/PageTransition";

export default function Home() {
    // Set target date to 2 days from now for demo
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2);

    return (
        <PageTransition className="space-y-8 pb-20">
            <SEO title="Home" />
            {/* Hero Banner */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-primary to-blue-800 p-8 text-white shadow-xl ring-1 ring-white/20">
                <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-4xl shadow-inner backdrop-blur-sm">
                        🏏
                    </div>
                    <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">South Zone Women's</h1>
                    <p className="mt-1 text-lg font-medium text-blue-100">Cricket Tournament 2026</p>

                    <div className="mt-8 w-full max-w-sm rounded-xl bg-white/10 p-4 backdrop-blur-md">
                        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-200">Tournament Starts In</p>
                        <Countdown targetDate={targetDate.toISOString()} />
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-blue-400/30 blur-3xl" />
                <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-indigo-500/30 blur-3xl" />
            </div>

            {/* Quick Actions */}
            <div>
                <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-foreground/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    Quick Access
                </h3>
                <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
                    <QuickAction href="/matches" icon={Calendar} label="Schedule" color="text-blue-600" bg="bg-blue-50 dark:bg-blue-900/20" />
                    <QuickAction href="/venues" icon={MapPin} label="Grounds" color="text-emerald-600" bg="bg-emerald-50 dark:bg-emerald-900/20" />
                    <QuickAction href="/accommodation" icon={Bed} label="Stay" color="text-violet-600" bg="bg-violet-50 dark:bg-violet-900/20" />
                    <QuickAction href="/food" icon={Utensils} label="Food" color="text-orange-600" bg="bg-orange-50 dark:bg-orange-900/20" />
                    <QuickAction href="/contacts" icon={PhoneCall} label="Contacts" color="text-cyan-600" bg="bg-cyan-50 dark:bg-cyan-900/20" />
                    <QuickAction href="/emergency" icon={Siren} label="Emergency" color="text-red-600" bg="bg-red-50 dark:bg-red-900/20" />
                </div>
            </div>

            {/* Latest Updates */}
            <section>
                <div className="mb-4 flex items-center justify-between">
                    <h3 className="flex items-center gap-2 text-lg font-bold text-foreground/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-secondary"></span>
                        Announcements
                    </h3>
                    <Button variant="ghost" size="sm" className="h-auto px-2 text-xs font-medium text-primary hover:bg-primary/10">View All</Button>
                </div>
                <div className="space-y-4">
                    <Card className="border-l-4 border-l-secondary shadow-md transition-all hover:shadow-lg">
                        <CardContent className="p-5">
                            <div className="mb-2 flex items-center justify-between">
                                <span className="rounded-full bg-secondary/10 px-2.5 py-0.5 text-[10px] font-bold text-secondary-foreground">IMPORTANT</span>
                                <span className="text-xs font-medium text-muted-foreground">2h ago</span>
                            </div>
                            <h4 className="text-base font-bold text-foreground">Captain's Meeting</h4>
                            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                                Mandatory meeting for all captains at Main Auditorium, 5:00 PM today. Please bring team sheets.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="shadow-md transition-all hover:shadow-lg">
                        <CardContent className="p-5">
                            <div className="mb-2 flex items-center justify-between">
                                <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-[10px] font-bold text-blue-800 dark:bg-blue-900/40 dark:text-blue-200">UPDATE</span>
                                <span className="text-xs font-medium text-muted-foreground">5h ago</span>
                            </div>
                            <h4 className="text-base font-bold text-foreground">Fixture Change</h4>
                            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                                Match #3 (Anna Univ vs KSRCT) rescheduled to 10:00 AM tomorrow due to ground maintenance.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </PageTransition>
    );
}

function QuickAction({ href, icon: Icon, label, color, bg }: { href: string, icon: any, label: string, color: string, bg: string }) {
    return (
        <Button variant="ghost" className={`h-auto flex-col gap-3 rounded-xl border border-transparent py-4 shadow-sm transition-all hover:scale-105 hover:shadow-md ${bg}`} asChild>
            <a href={href}>
                <div className={`rounded-full bg-white p-2.5 shadow-sm ${color} dark:bg-black/20`}>
                    <Icon className="h-6 w-6" />
                </div>
                <span className="text-xs font-semibold text-foreground/80">{label}</span>
            </a>
        </Button>
    );
}
