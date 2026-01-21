import { Bell, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const menuItems = [
  { label: "About Tournament", path: "/about" },
  { label: "Match Schedule", path: "/schedule" },
  { label: "Results & Points", path: "/results" },
  { label: "Venue & Ground", path: "/venue" },
  { label: "Teams", path: "/teams" },
  { label: "Accommodation", path: "/accommodation" },
  { label: "Food & Dining", path: "/food" },
  { label: "Transport", path: "/transport" },
  { label: "Contacts", path: "/contacts" },
  { label: "Emergency", path: "/emergency" },
  { label: "Rules & Guidelines", path: "/rules" },
  { label: "Gallery", path: "/gallery" },
  { label: "Feedback", path: "/feedback" },
];

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="sticky top-0 z-40 glass w-full"
    >
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="hover:bg-primary/10 text-primary">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 bg-background/95 backdrop-blur-xl p-0 border-r border-border/50">
            <div className="bg-secondary p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Menu className="w-32 h-32 text-white" />
              </div>
              <h2 className="text-xl font-bold text-white font-serif relative z-10">
                South Zone <br /> Women's Cricket
              </h2>
              <p className="text-sm text-white/80 mt-1 relative z-10">KSRCT 2026</p>
            </div>
            <nav className="p-4 overflow-y-auto max-h-[calc(100vh-140px)]">
              {menuItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block py-3 px-4 text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 font-medium"
                >
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.label}
                  </motion.div>
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <Link to="/" className="text-center group">
          <h1 className="text-lg font-bold font-serif text-primary tracking-tight">
            South Zone Cricket
            <span className="block text-[10px] font-sans font-normal text-muted-foreground uppercase tracking-widest group-hover:text-accent transition-colors">
              Women's Tournament 2026
            </span>
          </h1>
        </Link>

        <Link to="/notifications">
          <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10 relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-2 right-2 h-2 w-2 bg-accent rounded-full animate-pulse shadow-[0_0_8px_hsl(var(--accent))]" />
          </Button>
        </Link>
      </div>
    </motion.header>
  );
};

export default Header;
