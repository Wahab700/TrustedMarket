'use client';

import { motion } from "framer-motion";
import { Laptop, Layout, Maximize2 } from "lucide-react";

export const PortfolioVisual = () => {
    return (
        <div className="relative w-full h-full min-h-[400px] flex items-center justify-center overflow-hidden py-6">
            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-red/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="relative w-full max-w-[340px] mx-auto aspect-square scale-90 md:scale-100">
                {/* Showcase fragments (Representing Portfolio pieces) */}
                <div className="absolute inset-0 flex items-center justify-center">
                    {[
                        { icon: Layout, x: -70, y: -90, rotate: -12, color: "text-red" },
                        { icon: Laptop, x: 90, y: -40, rotate: 15, color: "text-red/60" },
                        { icon: Maximize2, x: -20, y: 100, rotate: -5, color: "text-red/40" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-32 h-44 bg-black-card border border-white/5 rounded-2xl flex flex-col items-center justify-center p-4 backdrop-blur-sm shadow-2xl"
                            style={{ 
                                left: `calc(50% + ${item.x}px - 64px)`,
                                top: `calc(50% + ${item.y}px - 88px)`
                            }}
                            initial={{ rotate: item.rotate }}
                            animate={{
                                y: [item.y, item.y - 12, item.y],
                                rotate: [item.rotate, item.rotate + 2, item.rotate]
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                delay: i * 0.8,
                                ease: "easeInOut"
                            }}
                        >
                            <div className="w-full h-24 bg-black-mid rounded-xl mb-4 overflow-hidden relative border border-white/5">
                                <div className="absolute inset-0 bg-gradient-to-br from-red/10 to-transparent" />
                                <item.icon className={`w-8 h-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${item.color} opacity-40`} />
                            </div>
                            <div className="w-full space-y-2">
                                <div className="w-full h-1.5 bg-white/5 rounded-full" />
                                <div className="w-2/3 h-1.5 bg-white/5 rounded-full" />
                            </div>
                        </motion.div>
                    ))}

                    {/* Central Metric Indicator */}
                    <div className="relative z-10">
                        <motion.div 
                            className="w-24 h-24 bg-black-mid border border-red/30 rounded-full flex flex-col items-center justify-center shadow-[0_0_40px_rgba(232,25,44,0.15)]"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            <span className="font-display text-2xl text-red font-bold leading-none">98%</span>
                            <span className="font-mono text-[7px] text-offwhite/40 uppercase tracking-widest mt-1">Success</span>
                        </motion.div>
                    </div>
                </div>

                {/* Floating Meta Labels */}
                <motion.div 
                    className="absolute top-0 right-0 p-2 bg-red/10 border border-red/40 rounded-lg backdrop-blur-md"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                >
                    <span className="font-mono text-[7px] text-red uppercase tracking-widest font-bold">Metrics</span>
                </motion.div>
            </div>
        </div>
    );
};

export default PortfolioVisual;
