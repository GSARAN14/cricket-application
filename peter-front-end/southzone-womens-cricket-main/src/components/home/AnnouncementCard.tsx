import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface Announcement {
  id: string;
  title: string;
  message: string;
  type: "info" | "urgent" | "update";
  time: string;
}

const announcements: Announcement[] = [
  {
    id: "1",
    title: "Opening Ceremony",
    message: "Opening ceremony will begin at 9:00 AM sharp. All teams must report by 8:30 AM in the main stadium ground.",
    type: "urgent",
    time: "2 hours ago",
  },
  {
    id: "2",
    title: "Practice Schedule Updated",
    message: "Practice nets available from 6:00 AM to 8:00 AM and 4:00 PM to 6:00 PM.",
    type: "update",
    time: "5 hours ago",
  },
  {
    id: "3",
    title: "Registration Reminder",
    message: "Team managers please complete registration at the help desk.",
    type: "info",
    time: "1 day ago",
  },
];

const typeStyles = {
  urgent: "bg-red-100 text-red-700 border-red-200",
  update: "bg-amber-100 text-amber-700 border-amber-200",
  info: "bg-blue-100 text-blue-700 border-blue-200",
};

const AnnouncementCard = () => {
  return (
    <div className="px-6 pb-24">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold font-serif text-foreground">Latest Updates</h2>
        <div className="p-2 bg-primary/5 rounded-full">
          <Bell className="h-5 w-5 text-primary" />
        </div>
      </div>
      <div className="space-y-4">
        {announcements.map((announcement, index) => (
          <motion.div
            key={announcement.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card p-5 transition-all group border-border/60">
              <div className="flex items-start justify-between mb-3">
                <Badge variant="outline" className={`${typeStyles[announcement.type]} border shadow-none font-semibold px-2.5 py-0.5`}>
                  {announcement.type.charAt(0).toUpperCase() + announcement.type.slice(1)}
                </Badge>
                <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground bg-muted py-1 px-2 rounded-md">
                  <Clock className="h-3 w-3" />
                  {announcement.time}
                </div>
              </div>
              <h3 className="font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">{announcement.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{announcement.message}</p>
              
              <div className="mt-4 flex justify-end">
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-secondary group-hover:translate-x-1 transition-all" />
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementCard;
