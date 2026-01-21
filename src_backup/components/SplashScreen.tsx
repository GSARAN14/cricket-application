import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function SplashScreen({ onFinish }: { onFinish: () => void }) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onFinish, 500); // Wait for exit animation
        }, 2000); // Show for 2 seconds

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
            initial={{ opacity: 1 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="flex flex-col items-center gap-4"
            >
                <div className="flex h-32 w-32 items-center justify-center rounded-full bg-primary/10 text-6xl shadow-2xl ring-4 ring-primary/20 backdrop-blur-sm">
                    🏏
                </div>
                <motion.h1
                    className="text-2xl font-bold tracking-widest text-primary"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    KSRCT CRICKET
                </motion.h1>
            </motion.div>
        </motion.div>
    );
}
