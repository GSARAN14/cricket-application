
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import { Building2, ExternalLink } from "lucide-react";

const KSRCT = () => {
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
            <span>K.S.R. Educational Institutions</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            K.S.Rangasamy College of Technology
          </h1>

          <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg group">
            <a 
              href="https://ksrct.ac.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full h-full relative"
            >
             <img 
               src="/ksrct_campus_new.jpg" 
               alt="KSRCT Campus" 
               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
               onError={(e) => {
                 (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1972&auto=format&fit=crop";
               }}
             />
             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                <ExternalLink className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-all transform scale-50 group-hover:scale-100 drop-shadow-lg" />
             </div>
            </a>
          </div>
          
          <div className="text-left space-y-6 text-muted-foreground leading-relaxed text-justify">
            <p>
              K.S. Rangasamy College of Technology (KSRCT), established in 1994 and conferred Autonomous status in 2007, is recognized as a premier institution in Tamil Nadu. A commitment to delivering high-quality technical education and fostering innovation-driven learning is maintained by the institution. 13 UG, 10 PG, and 20 Ph.D. programmes are offered, and prestigious accreditations, including NAAC A++ (score 3.56) and NBA Tier-I for all eligible UG programmes and the MBA programme, are held.
            </p>

            <p>
              Recognition under UGC 2(f) & 12(B) has been granted to KSRCT, and it is featured in national rankings, including the NIRF Engineering Rank Band 201–300 (2024), Innovation Rank Band 51–100 (2023), and QS I-Gauge Diamond Category. ₹8.48 crore has been received under the National Technical Textiles Mission (NTTM), and a strong research culture has been built, with ₹45+ crore in sponsored projects from DST, DBT, DAE, CSIR, DRDO, ISRO, and other national funding agencies.
            </p>

            <p>
              Recognized as a DSIR–SIRO research institute, 20 Anna University–approved research centres and a TNSCST IPR Cell are encompassed, and DBT-STAR and DST-FIST (twice) support has been secured. A vibrant innovation and startup ecosystem is powered by the AICTE IDEA Lab, MSME Business Incubator, and Atal Community Innovation Centre. The highest star rating and Mentor Institution status have been earned by the Institutions Innovation Council (IIC), further strengthening the campus innovation culture.
            </p>
            
            <p>
              With a strong focus on societal impact, technology development, entrepreneurship, and alignment with the United Nations Sustainable Development Goals (SDGs), competent, innovative, and socially responsible engineers continue to be shaped by KSRCT.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default KSRCT;
