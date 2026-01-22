import { useState, useEffect } from "react";
import AppLayout from "@/components/layout/AppLayout";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, Trophy, Users, FileText, Shirt, BadgeIndianRupee, Gavel, Hammer, Home, MessageSquare, Edit2, Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const INITIAL_RULES = [
  {
    id: "governing",
    icon: Gavel,
    title: "1. Governing Rules",
    items: [
      "The tournament is conducted strictly in accordance with the rules of the Association of Indian Universities (AIU).",
      "Decisions taken by the AIU, match officials, and the Jury Committee are considered final and binding. No appeals are entertained beyond these decisions.",
    ],
  },
  {
    id: "eligibility",
    icon: FileText,
    title: "2. Eligibility & Documents (Mandatory)",
    items: [
      "Five copies of the Eligibility Proforma are required to be submitted by each team.",
      "Attested copies of the following documents are required to be carried by each player:",
      "University ID card",
      "+2 / HSC / PUC mark sheet",
      "Diploma / Degree provisional certificate",
      "Current semester mark sheet",
      "Aadhaar card",
      "Bonafide certificate",
      "DigiLocker ID",
      "Failure to produce any one of the above documents may result in the disqualification of the player.",
    ],
  },
  {
    id: "reporting",
    icon: Users,
    title: "3. Reporting & Discipline",
    items: [
      "Teams are required to report on time.",
      "Late reporting may lead to the team being scratched from the tournament.",
      "Teams are required to report at least 45 minutes prior to the scheduled match time.",
    ],
  },
  {
    id: "dress",
    icon: Shirt,
    title: "4. Dress Code",
    items: [
      "The AIU-prescribed uniform is required to be worn by all players.",
      "White clothing and white shoes are mandatory.",
      "No relaxation or exception is permitted with respect to the dress code.",
    ],
  },
  {
    id: "fees",
    icon: BadgeIndianRupee,
    title: "5. Fees & Payments",
    items: [
      "An officiating fee of ₹2,500 per match per team is required to be paid.",
      "Ball charges of ₹1,000 per match are applicable.",
      "Only balls issued by the organizers are permitted for match play.",
      "Proof of payment of the AIU Annual Subscription and Registration Fee is required to be submitted.",
      "Participation is not permitted if the required fees are not paid.",
    ],
  },
  {
    id: "match",
    icon: Trophy,
    title: "6. Match Rules",
    items: [
      "Matches are conducted using matting wickets only.",
      "The overs format is as follows:",
      "Up to Quarter Finals: 20 overs",
      "Quarter Finals: 30 overs",
      "Semi-finals and Final: 50 overs",
      "The number of overs may be reduced due to rain or other conditions at the discretion of the match officials.",
    ],
  },
  {
    id: "protests",
    icon: Hammer,
    title: "7. Protests",
    items: [
      "Only technical protests are permitted.",
      "Protests are required to be submitted within 30 minutes after the completion of the match.",
      "A protest fee of ₹2,000 is required, which is refundable only if the protest is upheld.",
    ],
  },
  {
    id: "accommodation",
    icon: Home,
    title: "8. Accommodation & Conduct",
    items: [
      "Accommodation is provided only for the match period, from one day prior to the match until 24 hours after completion.",
      "Any damage caused is recovered from the ₹5,000 caution deposit.",
      "Teams are required to bring their own locks and keys.",
      "Travel outside the venue is to be managed by the respective teams.",
    ],
  },
  {
    id: "organizer",
    icon: MessageSquare,
    title: "9. Organizer Authority",
    items: [
      "Fixtures may be altered, preponed, or postponed by the Organizing Secretary if required.",
      "Decisions taken by the Organizing Committee are considered final in all matters.",
    ],
  },
];

const Rules = () => {
  const [rules, setRules] = useState<any[]>(() => {
    const saved = localStorage.getItem('rules_data');
    return saved ? JSON.parse(saved) : INITIAL_RULES;
  });

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState<string>("");

  const isAdmin = localStorage.getItem("isAdmin") === "true";

  useEffect(() => {
    localStorage.setItem('rules_data', JSON.stringify(rules));
  }, [rules]);

  // Map icon names back to components for persistence (simplified for now, just strictly using INITIAL icons)
  // In a real app we'd need a safer way to persist icon references or just persist content.
  // For this demo, we will merge the persisted text with the initial structure's icons.
  const displayRules = rules.map((r, index) => ({
    ...r,
    icon: INITIAL_RULES[index]?.icon || BookOpen // Fallback icon
  }));

  const handleStartEdit = (section: any) => {
    setEditingId(section.id);
    setEditContent(section.items.join('\n'));
  };

  const handleSaveEdit = () => {
    const updatedRules = rules.map(r => {
      if (r.id === editingId) {
        return {
          ...r,
          items: editContent.split('\n').filter(line => line.trim() !== "")
        };
      }
      return r;
    });
    setRules(updatedRules);
    setEditingId(null);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
  };

  return (
    <AppLayout>
      <div className="p-4 space-y-4 pb-20">
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-primary" />
          Rules & Guidelines
        </h1>

        <Card className="p-5 bg-primary/10 border-primary/20 backdrop-blur-sm border-l-4 border-l-primary shadow-sm">
          <p className="text-sm text-foreground font-medium leading-relaxed">
            All participants are expected to read and follow these guidelines.
            Violation of rules may result in penalties or disqualification.
          </p>
        </Card>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {displayRules.map((section) => (
            <AccordionItem
              key={section.id}
              value={section.id}
              className="glass-card border border-border/50 rounded-xl overflow-hidden shadow-sm"
            >
              <div className="flex items-center justify-between pr-4 hover:bg-primary/5 transition-colors">
                <AccordionTrigger className="px-5 py-4 hover:no-underline flex-1">
                  <div className="flex items-center gap-3 text-left">
                    <div className="p-2 bg-secondary/10 rounded-lg">
                      <section.icon className="h-5 w-5 text-secondary" />
                    </div>
                    <span className="font-bold text-foreground text-base tracking-tight">{section.title}</span>
                  </div>
                </AccordionTrigger>

                {isAdmin && editingId !== section.id && (
                  <Button size="icon" variant="ghost" className="h-8 w-8 hover:bg-secondary/20" onClick={(e) => { e.stopPropagation(); handleStartEdit(section); }}>
                    <Edit2 className="h-4 w-4 text-primary" />
                  </Button>
                )}
              </div>

              <AccordionContent className="px-5 pb-5">
                {editingId === section.id ? (
                  <div className="space-y-3 pt-2">
                    <Textarea
                      value={editContent}
                      onChange={(e) => setEditContent(e.target.value)}
                      className="min-h-[150px]"
                    />
                    <div className="flex justify-end gap-2">
                      <Button size="sm" variant="outline" onClick={handleCancelEdit}><X className="h-4 w-4 mr-1" /> Cancel</Button>
                      <Button size="sm" onClick={handleSaveEdit}><Save className="h-4 w-4 mr-1" /> Save</Button>
                    </div>
                  </div>
                ) : (
                  <ul className="space-y-3 pt-2">
                    {section.items.map((item: string, index: number) => (
                      <li key={index} className="flex items-start gap-3 text-sm">
                        <span className="h-5 w-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </AppLayout>
  );
};

export default Rules;
