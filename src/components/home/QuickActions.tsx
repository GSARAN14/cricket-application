import { Link } from "react-router-dom";
import {
  Calendar,
  MapPin,
  Building,
  Utensils,
  Bus,
  Phone,
  AlertTriangle,
  Trophy,
  Star // Fallback icon
} from "lucide-react";
import { motion } from "framer-motion";
import { useData } from "@/context/DataContext";

// Icon mapping
const IconMap: { [key: string]: any } = {
  Calendar, MapPin, Building, Utensils, Bus, Phone, AlertTriangle, Trophy
};

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
  const { quickLinks } = useData();

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
        {quickLinks.map((action) => {
          const IconComponent = IconMap[action.iconName] || Star;
          return (
            <motion.div key={action.id} variants={item}>
              <Link
                to={action.path}
                className="flex flex-col items-center gap-3 group"
              >
                <div className={`${action.color} p-4 rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-300 ring-2 ring-transparent group-hover:ring-primary/10`}>
                  <IconComponent className="h-6 w-6" strokeWidth={2.5} />
                </div>
                <span className="text-[11px] text-muted-foreground font-semibold uppercase tracking-tight text-center group-hover:text-primary transition-colors">
                  {action.label}
                </span>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default QuickActions;
