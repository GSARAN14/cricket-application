import AppLayout from "@/components/layout/AppLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MessageSquare, Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Feedback = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    team: "",
    rating: "",
    feedback: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Thank you!",
      description: "Your feedback has been submitted successfully.",
    });
  };

  if (submitted) {
    return (
      <AppLayout>
        <div className="p-4 flex flex-col items-center justify-center min-h-[60vh]">
          <div className="glass-card p-8 rounded-2xl text-center max-w-sm mx-auto">
            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2 font-serif">Thank You!</h2>
            <p className="text-muted-foreground mb-6">
              Your feedback has been submitted successfully.
            </p>
            <Button onClick={() => setSubmitted(false)} className="bg-secondary text-white hover:bg-secondary/90 w-full">
              Submit Another Response
            </Button>
          </div>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="p-4 space-y-4">
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <MessageSquare className="h-6 w-6 text-primary" />
          Feedback & Support
        </h1>

        <Card className="glass-card p-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground font-semibold">Your Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="team" className="text-foreground font-semibold">Team / University</Label>
              <Input
                id="team"
                placeholder="Enter your team name"
                value={formData.team}
                onChange={(e) => setFormData({ ...formData, team: e.target.value })}
                className="bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-foreground font-semibold">How would you rate your experience?</Label>
              <RadioGroup
                value={formData.rating}
                onValueChange={(value) => setFormData({ ...formData, rating: value })}
                className="flex gap-4 pt-1"
              >
                {["Excellent", "Good", "Average", "Poor"].map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.toLowerCase()} id={option.toLowerCase()} className="text-secondary border-secondary/50" />
                    <Label htmlFor={option.toLowerCase()} className="font-normal cursor-pointer text-muted-foreground hover:text-foreground transition-colors">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="feedback" className="text-foreground font-semibold">Your Feedback / Suggestions</Label>
              <Textarea
                id="feedback"
                placeholder="Share your feedback, suggestions, or report any issues..."
                rows={5}
                value={formData.feedback}
                onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                required
                className="bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 resize-none"
              />
            </div>

            <Button type="submit" className="w-full bg-secondary text-white hover:bg-secondary/90 shadow-lg shadow-secondary/20">
              <Send className="h-4 w-4 mr-2" />
              Submit Feedback
            </Button>
          </form>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Feedback;
