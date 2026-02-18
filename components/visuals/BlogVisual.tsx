'use client';

import { motion } from "framer-motion";
import { BookOpen, Sparkles, MessageSquare } from "lucide-react";

export const BlogVisual = () => {
    return (
        <div className="relative w-full h-full min-h-[400px] flex items-center justify-center overflow-hidden py-6">
            {/* Background Gradient */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-red/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="relative w-full max-w-[340px] mx-auto aspect-square scale-90 md:scale-100">
                {/* Horizontal Floating Layers representing Knowledge */}
                <div className="absolute inset-0 flex items-center justify-center">
                    {[
                        { icon: BookOpen, y: -80, opacity: 0.2, scale: 0.8 },
                        { icon: MessageSquare, y: 0, opacity: 0.4, scale: 1 },
                        { icon: Sparkles, y: 80, opacity: 0.2, scale: 0.8 }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-64 h-24 border border-white/5 bg-black-card/40 rounded-3xl backdrop-blur-sm flex items-center justify-between px-8"
                            initial={{ y: item.y, opacity: 0, scale: item.scale }}
                            animate={{
                                y: item.y + (Math.sin(Date.now() / 2000 + i) * 15),
                                opacity: item.opacity,
                                x: Math.cos(Date.now() / 1500 + i) * 10
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <item.icon className="w-5 h-5 text-red/60" />
                            {/* Abstract Text Lines */}
                            <div className="flex-1 ml-4 space-y-2">
                                <div className="w-full h-1 bg-white/10 rounded-full" />
                                <div className="w-2/3 h-1 bg-white/10 rounded-full" />
                            </div>
                        </motion.div>
                    ))}

                    {/* Vertical Floating Particles (Insights) */}
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={`insight-${i}`}
                            className="absolute w-1.5 h-1.5 bg-red/40 rounded-full blur-[1px]"
                            initial={{
                                x: (Math.random() - 0.5) * 300,
                                y: 150,
                                opacity: 0
                            }}
                            animate={{
                                y: -150,
                                opacity: [0, 1, 1, 0],
                                scale: [0.5, 1, 1, 0.5]
                            }}
                            transition={{
                                duration: 4 + Math.random() * 4,
                                repeat: Infinity,
                                ease: "linear",
                                delay: Math.random() * 5
                            }}
                        />
                    ))}
                </div>

                {/* Floating Meta Labels */}
                <motion.div 
                    className="absolute top-10 right-10 bg-black-mid border border-red/30 px-3 py-1 rounded-full backdrop-blur-md"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                >
                    <span className="font-mono text-[8px] text-red uppercase tracking-widest">Strategy</span>
                </motion.div>
                
                <motion.div 
                    className="absolute bottom-10 left-10 bg-black-mid border border-red/30 px-3 py-1 rounded-full backdrop-blur-md"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                >
                    <span className="font-mono text-[8px] text-red uppercase tracking-widest">Data</span>
                </motion.div>
            </div>
        </div>
    );
};

export default BlogVisual;
