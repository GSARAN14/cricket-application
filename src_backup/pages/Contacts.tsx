import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CONTACTS } from "@/data/mockData";
import { Phone, ShieldAlert } from "lucide-react";
import { SEO } from "@/components/SEO";
import { PageTransition } from "@/components/PageTransition";

export default function Contacts() {
    return (
        <PageTransition className="space-y-6">
            <SEO title="Contacts" description="Emergency and committee contact directory." />
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Contacts & Help</h2>
            </div>

            <div className="grid gap-6">
                {CONTACTS.map((section: any, idx: number) => (
                    <Card key={idx}>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-lg flex items-center gap-2">
                                {section.category === 'Emergency' && <ShieldAlert className="h-5 w-5 text-destructive" />}
                                {section.category}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            {section.members.map((member: any, mIdx: number) => (
                                <div key={mIdx} className="flex items-center justify-between border-b pb-2 last:border-0 last:pb-0">
                                    <div>
                                        <p className="font-medium">{member.name}</p>
                                        <p className="text-xs text-muted-foreground">{member.role}</p>
                                    </div>
                                    <Button size="sm" variant={section.category === 'Emergency' ? "destructive" : "outline"} asChild>
                                        <a href={`tel:${member.phone}`}>
                                            <Phone className="mr-2 h-3 w-3" />
                                            Call
                                        </a>
                                    </Button>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </PageTransition>
    );
}
