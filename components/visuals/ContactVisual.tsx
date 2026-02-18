'use client';

import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";

export const ContactVisual = () => {
    return (
        <div className="relative w-full h-full min-h-[400px] flex items-center justify-center overflow-hidden py-6">
            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-red/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="relative w-full max-w-[340px] mx-auto aspect-square scale-90 md:scale-100">
                {/* Signal Pulses */}
                <div className="absolute inset-0 flex items-center justify-center">
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full border border-red/20"
                            initial={{ width: 0, height: 0, opacity: 0.5 }}
                            animate={{ 
                                width: 400, 
                                height: 400, 
                                opacity: 0 
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                delay: i * 1.3,
                                ease: "easeOut"
                            }}
                        />
                    ))}
                </div>

                {/* Floating Communication Nodes */}
                <div className="absolute inset-0 flex items-center justify-center">
                    {[
                        { icon: Mail, x: -80, y: -80, delay: 0 },
                        { icon: Phone, x: 100, y: -40, delay: 0.5 },
                        { icon: Send, x: 20, y: 110, delay: 1 }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-12 h-12 bg-black-mid border border-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md shadow-2xl"
                            style={{ 
                                left: `calc(50% + ${item.x}px - 24px)`,
                                top: `calc(50% + ${item.y}px - 24px)`
                            }}
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                delay: item.delay,
                                ease: "easeInOut"
                            }}
                        >
                            <item.icon className="w-5 h-5 text-red/60" />
                            
                            {/* Connection string back to center */}
                            <svg className="absolute inset-0 w-40 h-40 pointer-events-none overflow-visible" style={{ left: 24, top: 24 }}>
                                <motion.line
                                    x1="0" y1="0"
                                    x2={-item.x} y2={-item.y}
                                    stroke="rgba(232, 25, 44, 0.1)"
                                    strokeWidth="1"
                                    strokeDasharray="4 4"
                                />
                            </svg>
                        </motion.div>
                    ))}

                    {/* Central Response Core */}
                    <div className="relative group">
                        <motion.div 
                            className="absolute inset-0 bg-red rounded-3xl blur-[20px] opacity-10"
                            animate={{ opacity: [0.1, 0.2, 0.1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />
                        <div className="w-20 h-20 bg-gradient-to-br from-black-mid to-black rounded-3xl flex items-center justify-center relative border border-white/5 shadow-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-red/10 to-transparent opacity-30" />
                            <div className="flex flex-col items-center">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse mb-2 shadow-[0_0_8px_#22c55e]" />
                                <span className="font-mono text-[8px] text-red font-bold tracking-[0.2em] uppercase">Ready</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactVisual;
