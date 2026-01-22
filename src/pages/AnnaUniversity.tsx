
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import { Building2, ExternalLink } from "lucide-react";

const AnnaUniversity = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-20 px-4 md:px-8 max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Building2 className="w-4 h-4" />
            <span>Progress Through Knowledge</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            ANNA UNIVERSITY, CHENNAI
          </h1>
          
          <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg group">
            <a 
              href="https://www.annauniv.edu/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full h-full relative"
            >
             <img 
               src="/anna_univ_campus_new.jpg" 
               alt="Anna University" 
               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
               onError={(e) => {
                 (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop";
               }}
             />
             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                <ExternalLink className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-all transform scale-50 group-hover:scale-100 drop-shadow-lg" />
             </div>
            </a>
          </div>

          <div className="text-left space-y-6 text-muted-foreground leading-relaxed text-justify">
            <p>
              Anna University was established on 4th September, 1978, as a unitary type of university. The university was named after the Late Dr. C.N. Annadurai, the former Chief Minister of Tamil Nadu. Higher education in Engineering, Technology, Architecture, and Applied Sciences relevant to the current and projected needs of society is offered by the university. Besides research being promoted and knowledge gained therefrom being disseminated, cooperation between the academic and industrial communities is fostered.
            </p>

            <p>
              The university is situated in the southern part of the city of Chennai, located 3 km from the nearest Railway Station (Guindy) and 10 km from Chennai Airport. The University's Main Campus is extended over 189 acres abutting the Adyar River on the north and Raj Bhavan on the south. The Madras Institute of Technology at Chrompet is constituted as the second campus of the university, which is extended over 52 acres. A third campus extending over 5 acres is located at Taramani, Chennai. A variety of buildings serving the various needs of the university community are contained within these campuses.
            </p>

            <p>
              In 2001, Anna University was converted into an affiliating type university by bringing together all the engineering colleges in the State of Tamil Nadu and was reconverted to the unitary type in 2010. In 2012, Anna University was again converted into an affiliating type of university by bringing together all the Engineering Colleges in the State of Tamil Nadu under one umbrella, ensuring that uniform quality in engineering education is maintained.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnnaUniversity;
