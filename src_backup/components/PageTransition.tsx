import { motion, type HTMLMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

interface PageTransitionProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
}

const pageVariants = {
    initial: { opacity: 0, y: 10 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -10 }
};

const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.4
} as const;

export function PageTransition({ children, className, ...props }: PageTransitionProps) {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}
