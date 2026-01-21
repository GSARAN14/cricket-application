import AppLayout from "@/components/layout/AppLayout";
import TeamCard from "@/components/teams/TeamCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

const teams = [
  {
    id: "1",
    name: "Madras University",
    shortName: "MU",
    university: "University of Madras",
    manager: "Dr. S. Lakshmi",
    coach: "Mrs. K. Priya",
    playerCount: 15,
  },
  {
    id: "2",
    name: "Bharathiar University",
    shortName: "BU",
    university: "Bharathiar University, Coimbatore",
    manager: "Dr. R. Meenakshi",
    coach: "Mrs. P. Saranya",
    playerCount: 15,
  },
  {
    id: "3",
    name: "Madurai Kamaraj University",
    shortName: "MKU",
    university: "Madurai Kamaraj University",
    manager: "Dr. V. Selvi",
    coach: "Mrs. L. Kalpana",
    playerCount: 14,
  },
  {
    id: "4",
    name: "Annamalai University",
    shortName: "AU",
    university: "Annamalai University, Chidambaram",
    manager: "Dr. T. Revathi",
    coach: "Mrs. S. Deepa",
    playerCount: 15,
  },
  {
    id: "5",
    name: "KSRCT (Host)",
    shortName: "KSR",
    university: "K.S. Rangasamy College of Technology",
    manager: "Dr. M. Sangeetha",
    coach: "Mrs. R. Kavitha",
    playerCount: 15,
  },
  {
    id: "6",
    name: "Periyar University",
    shortName: "PU",
    university: "Periyar University, Salem",
    manager: "Dr. K. Nandhini",
    coach: "Mrs. V. Shanthi",
    playerCount: 14,
  },
];

const Teams = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredTeams = teams.filter(team =>
    team.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    team.university.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AppLayout>
      <div className="p-4 space-y-4">
        <h1 className="text-2xl font-bold text-foreground">Participating Teams</h1>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search teams..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-11 bg-background/50 backdrop-blur-sm border-border/60 focus-visible:ring-primary/50 focus-visible:border-primary transition-all"
          />
        </div>

        <div className="space-y-3">
          {filteredTeams.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default Teams;
