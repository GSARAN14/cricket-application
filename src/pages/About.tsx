import Header from "@/components/layout/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Trophy, 
  Calendar, 
  MapPin, 
  Users, 
  Target,
  Building,
  GraduationCap,
  ArrowRight
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background">
      <Header />
      <main className="pt-24 pb-20 px-4 md:px-8 max-w-4xl mx-auto space-y-6">
        
        <div className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-bold text-primary font-serif mb-3">About the Tournament</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">Discover the prestige, passion, and purpose behind the South Zone Inter-University Women's Cricket Tournament 2026.</p>
        </div>

        <Card className="p-6 bg-gradient-to-br from-primary to-blue-700 text-primary-foreground shadow-xl shadow-primary/20 border-none rounded-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="bg-white/10 p-4 rounded-full backdrop-blur-sm">
                <Trophy className="h-12 w-12 text-yellow-300" />
            </div>
            <div>
              <h2 className="font-bold text-2xl md:text-3xl font-serif mb-2">South Zone Women's Cricket</h2>
              <p className="text-blue-100 text-lg">Anna University Inter-University Championship 2026</p>
            </div>
          </div>
          {/* Decorative Background Circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4"></div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-card/40 backdrop-blur-md border border-white/10 p-6 shadow-lg hover:bg-card/60 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-100/10 text-blue-400">
                  <Building className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-1">Organizing Institution</h3>
                  <p className="text-muted-foreground">K.S. Rangasamy College of Technology</p>
                  <p className="text-sm text-muted-foreground/80">Tiruchengode, Tamil Nadu</p>
                </div>
              </div>
            </Card>

            <Card className="bg-card/40 backdrop-blur-md border border-white/10 p-6 shadow-lg hover:bg-card/60 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-100/10 text-blue-400">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-1">Affiliated To</h3>
                  <p className="text-muted-foreground">Anna University, Chennai</p>
                  <p className="text-sm text-muted-foreground/80">established 1978</p>
                </div>
              </div>
            </Card>

            <Card className="bg-card/40 backdrop-blur-md border border-white/10 p-6 shadow-lg hover:bg-card/60 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-100/10 text-blue-400">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-1">Tournament Dates</h3>
                  <p className="text-muted-foreground font-medium text-primary">Jan 26 - Feb 02, 2026</p>
                  <p className="text-sm text-muted-foreground/80">8 Days of Action</p>
                </div>
              </div>
            </Card>

            <Card className="bg-card/40 backdrop-blur-md border border-white/10 p-6 shadow-lg hover:bg-card/60 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-100/10 text-blue-400">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-1">Venue</h3>
                  <p className="text-muted-foreground">KSRCT Cricket Ground</p>
                  <p className="text-sm text-muted-foreground/80">World-class facilities</p>
                </div>
              </div>
            </Card>
        </div>

        <Card className="glass-card p-6 md:p-8 border-l-4 border-l-secondary">
          <div className="flex items-center gap-3 mb-4">
            <Target className="h-6 w-6 text-secondary" />
            <h3 className="font-bold text-xl text-foreground font-serif">Tournament Objective</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed text-lg">
            To promote women's cricket among university students, provide a competitive platform 
            for talented players, foster sportsmanship, and encourage physical fitness through 
            inter-university sports participation.
          </p>
        </Card>

        {/* Call to Action for Committee */}
        <Card className="bg-primary/5 border border-primary/20 p-6 md:p-8 rounded-2xl text-center space-y-4">
            <Users className="h-10 w-10 text-primary mx-auto mb-2" />
            <h3 className="text-2xl font-serif font-bold text-foreground">Meet the Leadership</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
                Get to know the distinguished Patrons, Chairmen, and Committee Members organizing this grand event.
            </p>
            <Link to="/committee">
                <Button className="mt-2 group">
                    View Organizing Committee <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
            </Link>
        </Card>

      </main>
    </div>
  );
};

export default About;
