"use client";

import { useEffect, useState } from "react";

export function GradientMesh() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient mesh */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 40%, rgba(99, 102, 241, 0.4) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 20%, rgba(139, 92, 246, 0.35) 0%, transparent 50%),
            radial-gradient(ellipse 50% 50% at 50% 80%, rgba(168, 85, 247, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse 70% 60% at 90% 70%, rgba(34, 211, 238, 0.25) 0%, transparent 50%),
            radial-gradient(ellipse 60% 50% at 10% 90%, rgba(99, 102, 241, 0.3) 0%, transparent 50%)
          `,
          animation: 'mesh-animation 20s ease-in-out infinite'
        }}
      />
      
      {/* Additional glow orbs */}
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.5) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'float-orb 15s ease-in-out infinite'
        }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'float-orb 18s ease-in-out infinite reverse'
        }}
      />
      
      <style jsx>{`
        @keyframes mesh-animation {
          0%, 100% {
            background-position: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
            transform: scale(1);
          }
          33% {
            background-position: 10% 20%, -5% 10%, 15% -10%, -10% 15%, 5% -5%;
            transform: scale(1.05);
          }
          66% {
            background-position: -5% -10%, 10% -5%, -10% 15%, 15% -10%, -5% 10%;
            transform: scale(1.02);
          }
        }
        @keyframes float-orb {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.95);
          }
        }
      `}</style>
    </div>
  );
}
