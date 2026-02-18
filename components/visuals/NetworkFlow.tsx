'use client';

import { Cpu, Globe, Shield } from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

export const NetworkFlow = () => {
    const nodesCount = 8;
    const radius = 160;

    return (
        <div className="relative w-full h-full min-h-[400px] flex items-center justify-center overflow-hidden py-6">
            {/* Background Glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-red/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="relative w-full max-w-[340px] mx-auto aspect-square scale-90 md:scale-100">
                {/* Visual Simulation Area */}
                <div className="absolute inset-0">
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                    {/* Radial Lines */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        {[...Array(nodesCount)].map((_, i) => (
                            <div 
                                key={i} 
                                className="absolute w-[320px] h-px bg-gradient-to-r from-transparent via-red/10 to-transparent"
                                style={{ transform: `rotate(${i * (360 / nodesCount)}deg)` }}
                            ></div>
                        ))}
                    </div>

                    {/* Data Packets */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        {[...Array(nodesCount)].map((_, i) => {
                            const angle = (i * (360 / nodesCount)) * (Math.PI / 180);
                            return (
                                <motion.div
                                    key={`packet-${i}`}
                                    className="absolute w-1.5 h-1.5 bg-red rounded-full blur-[1px] shadow-[0_0_8px_#e8192c]"
                                    initial={{ x: 0, y: 0, opacity: 1 }}
                                    animate={{ 
                                        x: Math.cos(angle) * radius,
                                        y: Math.sin(angle) * radius,
                                        opacity: [1, 1, 0]
                                    }}
                                    transition={{
                                        duration: 2 + Math.random(),
                                        repeat: Infinity,
                                        ease: "easeIn",
                                        delay: Math.random() * 2
                                    }}
                                />
                            );
                        })}
                    </div>

                    {/* Stationary Edge Nodes */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        {[...Array(nodesCount)].map((_, i) => {
                            const angle = (i * (360 / nodesCount)) * (Math.PI / 180);
                            return (
                                <motion.div 
                                    key={`node-${i}`}
                                    className="absolute w-10 h-10 bg-black-mid border border-white/10 rounded-xl flex items-center justify-center backdrop-blur-md z-30"
                                    style={{
                                        left: `calc(50% + ${Math.cos(angle) * radius}px - 20px)`,
                                        top: `calc(50% + ${Math.sin(angle) * radius}px - 20px)`
                                    }}
                                    animate={{
                                        y: [0, -5, 0],
                                        rotate: [0, 2, 0]
                                    }}
                                    transition={{
                                        duration: 3 + Math.random() * 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    {i % 2 === 0 ? <Shield className="w-4 h-4 text-red" /> : <Cpu className="w-4 h-4 text-red/40" />}
                                </motion.div>
                            )
                        })}
                    </div>
                    
                    {/* Center Core */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
                        <div className="relative group">
                            <motion.div 
                                className="absolute inset-0 bg-red rounded-3xl blur-[30px] opacity-20"
                                animate={{ opacity: [0.1, 0.3, 0.1] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                            <div className="w-20 h-20 bg-gradient-to-br from-black-mid to-black rounded-3xl flex items-center justify-center relative border border-white/10 shadow-2xl overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-red/20 to-transparent opacity-30" />
                                <Globe className="w-9 h-9 text-red animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NetworkFlow;
