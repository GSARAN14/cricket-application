import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ExternalLink, Info, Building2, Users } from "lucide-react";
import { motion } from "framer-motion";

const TournamentQuickLinks = () => {
  const links = [
    { label: "About Tournament", path: "/about", icon: Info },
    { label: "Anna University", path: "https://www.annauniv.edu/", icon: Building2 },
    { label: "KSRCT", path: "http://ksrct.ac.in/", icon: Building2 },
    { label: "Organizing Committee", path: "/committee", icon: Users },
  ];

  return (
    <section className="py-8 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {links.map((link, index) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {link.path.startsWith("http") ? (
                <a href={link.path} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <Button
                    variant="outline"
                    className="w-full h-full min-h-[60px] md:min-h-[80px] flex flex-col gap-2 border-primary/20 hover:border-primary/50 hover:bg-primary/5 shadow-sm transition-all group whitespace-normal"
                  >
                    <link.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-xs md:text-sm font-semibold text-foreground/80 group-hover:text-primary leading-tight text-center">
                      {link.label}
                    </span>
                    <ExternalLink className="w-3 h-3 absolute top-2 right-2 text-muted-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Button>
                </a>
              ) : (
                <Link to={link.path} className="block h-full">
                  <Button
                    variant="outline"
                    className="w-full h-full min-h-[60px] md:min-h-[80px] flex flex-col gap-2 border-primary/20 hover:border-primary/50 hover:bg-primary/5 shadow-sm transition-all group whitespace-normal"
                  >
                    <link.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-xs md:text-sm font-semibold text-foreground/80 group-hover:text-primary leading-tight text-center">
                      {link.label}
                    </span>
                  </Button>
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TournamentQuickLinks;
