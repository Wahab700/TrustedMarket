'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';

export default function ServiceVisual() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Generate random static particles and connections for the "Neural" look
  const nodes = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 2,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));
  }, []);

  // Simple logic to connect nearby nodes
  const connections = useMemo(() => {
    const result = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 25) {
          result.push({ i, j });
        }
      }
    }
    return result;
  }, [nodes]);

  if (!isMounted) return null;

  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-red/5 via-transparent to-red/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-red/10 blur-[120px] rounded-full pointer-events-none" />

      <svg className="w-full h-full max-w-[500px] max-h-[500px] relative z-10" viewBox="0 0 100 100">
        {/* Connections */}
        {connections.map((conn, idx) => (
          <motion.line
            key={`line-${idx}`}
            x1={nodes[conn.i].x}
            y1={nodes[conn.i].y}
            x2={nodes[conn.j].x}
            y2={nodes[conn.j].y}
            stroke="currentColor"
            className="text-red/20"
            strokeWidth="0.15"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: idx * 0.1 }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((node) => (
          <g key={`node-${node.id}`}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.size / 2}
              fill="currentColor"
              className="text-red"
              initial={{ scale: 0 }}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.6, 1, 0.6] 
              }}
              transition={{
                duration: node.duration,
                repeat: Infinity,
                delay: node.delay,
              }}
            />
            {/* Pulsing Outer Ring */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.size}
              fill="transparent"
              stroke="currentColor"
              className="text-red/30"
              strokeWidth="0.1"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
              transition={{
                duration: node.duration * 1.5,
                repeat: Infinity,
                delay: node.delay,
              }}
            />
          </g>
        ))}

        {/* Floating Data Bits */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.rect
            key={`bit-${i}`}
            width="0.8"
            height="0.8"
            fill="currentColor"
            className="text-white/20"
            animate={{
              x: [Math.random() * 100, Math.random() * 100],
              y: [Math.random() * 100, Math.random() * 100],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
            }}
          />
        ))}
      </svg>

      {/* Decorative Border Corners */}
      <div className="absolute top-10 left-10 w-8 h-8 border-t border-l border-red/30" />
      <div className="absolute bottom-10 right-10 w-8 h-8 border-b border-r border-red/30" />
    </div>
  );
}
