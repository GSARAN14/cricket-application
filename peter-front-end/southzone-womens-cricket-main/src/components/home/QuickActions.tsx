import { Link } from "react-router-dom";
import { 
  Calendar, 
  MapPin, 
  Building, 
  Utensils, 
  Bus, 
  Phone, 
  AlertTriangle,
  Trophy
} from "lucide-react";
import { motion } from "framer-motion";

const actions = [
  { icon: Calendar, label: "Schedule", path: "/schedule", color: "bg-blue-100 text-blue-600" },
  { icon: MapPin, label: "Venue", path: "/venue", color: "bg-emerald-100 text-emerald-600" },
  { icon: Building, label: "Stay", path: "/accommodation", color: "bg-purple-100 text-purple-600" },
  { icon: Utensils, label: "Food", path: "/food", color: "bg-orange-100 text-orange-600" },
  { icon: Bus, label: "Transport", path: "/transport", color: "bg-indigo-100 text-indigo-600" },
  { icon: Phone, label: "Contacts", path: "/contacts", color: "bg-teal-100 text-teal-600" },
  { icon: AlertTriangle, label: "Emergency", path: "/emergency", color: "bg-red-100 text-red-600" },
  { icon: Trophy, label: "Results", path: "/results", color: "bg-amber-100 text-amber-600" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

const QuickActions = () => {
  return (
    <div className="px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold font-serif text-foreground">Quick Access</h2>
      </div>
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-4 gap-4 sm:gap-6"
      >
        {actions.map((action) => (
          <motion.div key={action.path} variants={item}>
            <Link
              to={action.path}
              className="flex flex-col items-center gap-3 group"
            >
              <div className={`${action.color} p-4 rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-300 ring-2 ring-transparent group-hover:ring-primary/10`}>
                <action.icon className="h-6 w-6" strokeWidth={2.5} />
              </div>
              <span className="text-[11px] text-muted-foreground font-semibold uppercase tracking-tight text-center group-hover:text-primary transition-colors">
                {action.label}
              </span>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default QuickActions;
