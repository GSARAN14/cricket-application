import AppLayout from "@/components/layout/AppLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, Clock } from "lucide-react";

const notifications = [
  {
    id: "1",
    title: "Opening Ceremony Tomorrow",
    message: "Opening ceremony will begin at 9:00 AM sharp at the Main Ground. All teams must report by 8:30 AM.",
    type: "urgent",
    time: "2 hours ago",
    read: false,
  },
  {
    id: "2",
    title: "Practice Schedule Updated",
    message: "Practice nets are now available from 6:00 AM to 8:00 AM and 4:00 PM to 6:00 PM daily.",
    type: "update",
    time: "5 hours ago",
    read: false,
  },
  {
    id: "3",
    title: "Registration Reminder",
    message: "Team managers are requested to complete registration formalities at the help desk by today.",
    type: "info",
    time: "1 day ago",
    read: true,
  },
  {
    id: "4",
    title: "Match 1 Schedule Confirmed",
    message: "Madras University vs Bharathiar University - Feb 15, 9:30 AM at Main Ground.",
    type: "info",
    time: "1 day ago",
    read: true,
  },
  {
    id: "5",
    title: "Welcome to KSRCT",
    message: "K.S. Rangasamy College of Technology welcomes all participants to the South Zone Women's Cricket Tournament 2026.",
    type: "info",
    time: "2 days ago",
    read: true,
  },
];

const typeStyles = {
  urgent: "bg-destructive text-destructive-foreground",
  update: "bg-secondary text-secondary-foreground",
  info: "bg-muted text-foreground",
};

const Notifications = () => {
  return (
    <AppLayout>
      <div className="p-4 space-y-4">
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <Bell className="h-6 w-6 text-primary" />
          Notifications
        </h1>

        <div className="space-y-3">
          {notifications.map((notification) => (
            <Card 
              key={notification.id} 
              className={`p-4 ${!notification.read ? 'border-l-4 border-l-primary' : ''}`}
            >
              <div className="flex items-start justify-between mb-2">
                <Badge className={typeStyles[notification.type as keyof typeof typeStyles]}>
                  {notification.type.charAt(0).toUpperCase() + notification.type.slice(1)}
                </Badge>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {notification.time}
                </div>
              </div>
              <h3 className="font-semibold text-foreground mb-1">{notification.title}</h3>
              <p className="text-sm text-muted-foreground">{notification.message}</p>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default Notifications;
