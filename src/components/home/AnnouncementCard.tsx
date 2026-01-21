import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useAnnouncements } from "@/hooks/useAnnouncements";
import { formatDistanceToNow } from "date-fns";

const typeStyles = {
  important: "bg-red-100 text-red-700 border-red-200",
  update: "bg-blue-100 text-blue-700 border-blue-200",
  info: "bg-green-100 text-green-700 border-green-200",
};

const AnnouncementCard = () => {
  const { announcements } = useAnnouncements();

  if (announcements.length === 0) return null;

  // Show only top 3 recent
  const recentAnnouncements = announcements.slice(0, 3);

  return (
    <div className="px-6 pb-24">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold font-serif text-foreground">Latest Updates</h2>
        <Link to="/notifications">
          <div className="p-2 bg-primary/5 rounded-full">
            <Bell className="h-5 w-5 text-primary" />
          </div>
        </Link>
      </div>
      <div className="space-y-4">
        {recentAnnouncements.map((announcement, index) => (
          <motion.div
            key={announcement.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card p-5 transition-all group border-border/60">
              <div className="flex items-start justify-between mb-3">
                <Badge variant="outline" className={`${typeStyles[announcement.type] || typeStyles.info} border shadow-none font-semibold px-2.5 py-0.5`}>
                  {announcement.type.charAt(0).toUpperCase() + announcement.type.slice(1)}
                </Badge>
                <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground bg-muted py-1 px-2 rounded-md">
                  <Clock className="h-3 w-3" />
                  {formatDistanceToNow(new Date(announcement.timestamp), { addSuffix: true })}
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

import { Link } from "react-router-dom";
export default AnnouncementCard;
