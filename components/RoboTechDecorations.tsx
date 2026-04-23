"use client";

import { motion } from "framer-motion";

export const TechGrid = ({ className = "" }: { className?: string }) => (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
                backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }}
        />
    </div>
);

export const FloatingCircuit = ({ className = "", size = 100, delay = 0 }: { className?: string; size?: number; delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.05, 1],
        }}
        transition={{
            duration: 8,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut"
        }}
        className={`absolute pointer-events-none ${className}`}
        style={{ width: size, height: size }}
    >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="10" cy="10" r="3" fill="currentColor" />
            <path d="M10 10V40H40" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
            <circle cx="40" cy="40" r="3" fill="currentColor" />
            <path d="M40 40H70V70" stroke="currentColor" strokeWidth="2" />
            <circle cx="70" cy="70" r="5" stroke="currentColor" strokeWidth="2" />
        </svg>
    </motion.div>
);

export const GlowOrb = ({ className = "", color = "bg-blue-500", size = "w-64 h-64" }: { className?: string; color?: string; size?: string }) => (
    <div className={`absolute rounded-full blur-[100px] opacity-20 pointer-events-none ${color} ${size} ${className}`} />
);

export const TechBadge = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-[10px] font-bold tracking-widest uppercase mb-6 backdrop-blur-md ${className}`}>
        <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        {children}
    </div>
);
