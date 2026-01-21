import heroBanner from "@/assets/hero-banner.jpg";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const HeroBanner = () => {
  return (
    <div className="relative h-[65vh] min-h-[500px] w-full overflow-hidden">
      {/* Background Image with Parallax-like scale effect on load */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img 
          src={heroBanner} 
          alt="South Zone Women's Cricket Tournament" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-black/30" />
        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
      </motion.div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 pb-12 max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          <Badge variant="secondary" className="bg-accent text-accent-foreground px-3 py-1 text-sm font-semibold uppercase tracking-wider backdrop-blur-md border animate-pulse">
            Live Tournament
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white font-serif leading-tight drop-shadow-lg text-balance">
            South Zone <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
              Women's Cricket
            </span>
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <div className="flex items-center gap-2 text-white/90 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              <CalendarDays className="w-5 h-5 text-accent" />
              <span className="font-medium">Feb 15-22, 2026</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              <MapPin className="w-5 h-5 text-accent" />
              <span className="font-medium">KSRCT, Tiruchengode</span>
            </div>
          </div>

          <div className="pt-4 flex gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 shadow-[0_0_20px_hsl(var(--primary)/0.5)]">
              View Schedule
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 backdrop-blur-sm">
              Watch Live
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroBanner;
