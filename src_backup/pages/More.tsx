import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { RULES } from "@/data/mockData";
import { FileText, MessageSquare, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { PageTransition } from "@/components/PageTransition";

export default function More() {
    return (
        <PageTransition className="space-y-6">
            <SEO title="More Info" description="Rules, guidelines, and feedback." />
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">More Info</h2>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                        <FileText className="h-5 w-5 text-primary" />
                        Rules & Guidelines
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc space-y-2 pl-4 text-sm text-muted-foreground">
                        {RULES.map((rule: string, idx: number) => (
                            <li key={idx}>{rule}</li>
                        ))}
                    </ul>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                        <MessageSquare className="h-5 w-5 text-primary" />
                        Feedback & Support
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                        Have any suggestions or facing issues? Let us know!
                    </p>
                    <Button className="w-full" variant="outline">
                        Submit Feedback
                    </Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                        <Info className="h-5 w-5 text-primary" />
                        About App
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                    <p>
                        <strong>South Zone Women's Cricket Tournament App</strong>
                    </p>
                    <p>Version 1.0.0</p>
                    <p>Developed by KSRCT Tech Team</p>

                    <div className="mt-4 border-t pt-4">
                        <Button variant="ghost" className="h-auto w-full p-0 text-xs text-muted-foreground hover:text-primary" asChild>
                            <Link to="/admin/login">Admin Login</Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </PageTransition>
    );
}
