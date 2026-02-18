'use client';

import { motion } from "framer-motion";
import { Users, Target, Heart } from 'lucide-react';

export const AboutVisual = () => {
    return (
        <div className="relative w-full h-full min-h-[400px] flex items-center justify-center overflow-hidden py-6">
            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-red/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="relative w-full max-w-[340px] mx-auto aspect-square scale-90 md:scale-100">
                {/* Floating Core Structure */}
                <div className="absolute inset-0 flex items-center justify-center">
                    {/* Interconnecting Lines (SVG for better control) */}
                    <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 400">
                        <motion.path
                            d="M 200 100 L 100 250 L 300 250 Z"
                            fill="none"
                            stroke="#e8192c"
                            strokeWidth="1"
                            animate={{ strokeDasharray: ["0, 1000", "1000, 0"] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        />
                        <motion.circle cx="200" cy="100" r="2" fill="#e8192c" />
                        <motion.circle cx="100" cy="250" r="2" fill="#e8192c" />
                        <motion.circle cx="300" cy="250" r="2" fill="#e8192c" />
                    </svg>

                    {/* Floating Orbs / Icons representing Team/Story */}
                    {[
                        { icon: Users, delay: 0, x: 0, y: -100, label: "People" },
                        { icon: Target, delay: 1, x: -100, y: 50, label: "Results" },
                        { icon: Heart, delay: 2, x: 100, y: 50, label: "Trust" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className="absolute flex flex-col items-center gap-2"
                            initial={{ x: item.x, y: item.y }}
                            animate={{
                                y: item.y + (Math.sin(Date.now() / 1000 + item.delay) * 10),
                                x: item.x + (Math.cos(Date.now() / 1000 + item.delay) * 5)
                            }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="w-14 h-14 bg-black-mid border border-red/20 rounded-2xl flex items-center justify-center backdrop-blur-md shadow-2xl relative group">
                                <div className="absolute inset-0 bg-red/10 rounded-2xl group-hover:bg-red/20 transition-colors" />
                                <item.icon className="w-6 h-6 text-red" />
                            </div>
                            <span className="font-mono text-[9px] uppercase tracking-widest text-offwhite/40">{item.label}</span>
                        </motion.div>
                    ))}

                    {/* Central Core - The Vision */}
                    <motion.div 
                        className="w-24 h-24 bg-gradient-to-br from-black-mid to-black rounded-full flex items-center justify-center relative border border-white/10 shadow-[0_0_50px_rgba(232,25,44,0.2)]"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        <div className="absolute inset-0 bg-red/10 rounded-full animate-pulse" />
                        <span className="font-display text-xs text-red font-bold tracking-widest uppercase">Story</span>
                    </motion.div>
                </div>

                {/* Ambient Particles */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-red/40 rounded-full"
                        initial={{
                            x: Math.random() * 400 - 200,
                            y: Math.random() * 400 - 200,
                            opacity: 0
                        }}
                        animate={{
                            y: [null, Math.random() * -100],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default AboutVisual;
