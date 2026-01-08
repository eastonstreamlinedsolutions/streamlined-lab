"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Shield, Globe, AlertTriangle, CheckCircle, Gauge } from 'lucide-react';

export default function StreamlinedTransformer() {
  const [isOptimized, setIsOptimized] = useState(false);
  const [loadingScore, setLoadingScore] = useState(24);

  // Animate the score when toggled
  useEffect(() => {
    setLoadingScore(isOptimized ? 100 : 24);
  }, [isOptimized]);

  return (
    <div className={`min-h-screen transition-all duration-1000 font-sans ${isOptimized ? 'bg-black text-white' : 'bg-zinc-200 text-zinc-900'}`}>
      
      {/* GLOWING BACKGROUND EFFECT */}
      {isOptimized && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[#16c800] opacity-10 blur-[120px]" />
        </div>
      )}

      <main className="max-w-6xl mx-auto p-6 md:p-20 relative z-10">
        
        {/* TOP STATUS BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <motion.div layout>
            <h1 className={`text-3xl font-black italic tracking-tighter transition-colors ${isOptimized ? 'text-[#16c800]' : 'text-red-600'}`}>
              STREAMLINED_LAB // {isOptimized ? 'PRO' : 'LEGACY'}
            </h1>
            <p className="opacity-50 text-xs font-mono">ENCRYPTED DATA FEED V.026</p>
          </motion.div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-[0.2em] opacity-50">Core Performance</p>
              <motion.span className={`text-4xl font-black ${isOptimized ? 'text-[#16c800]' : 'text-red-500'}`}>
                {loadingScore}%
              </motion.span>
            </div>
            <button 
              onClick={() => setIsOptimized(!isOptimized)}
              className={`relative h-16 w-16 rounded-full flex items-center justify-center transition-all duration-500 active:scale-90 ${isOptimized ? 'bg-[#16c800] shadow-[0_0_40px_#16c800]' : 'bg-red-600 shadow-xl'}`}
            >
              <Zap className={isOptimized ? 'text-black fill-current' : 'text-white'} />
            </button>
          </div>
        </div>

        {/* MAIN TRANSFORMATION GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* LEFT: THE CODE ENGINE */}
          <div className={`p-8 rounded-3xl border-2 transition-all duration-700 ${isOptimized ? 'border-[#16c800]/30 bg-zinc-900/50' : 'border-zinc-400 bg-white shadow-2xl'}`}>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
              <Shield size={14} /> Backend Infrastructure
            </h3>
            
            <div className="font-mono text-sm space-y-4 overflow-hidden h-64">
              <AnimatePresence mode="wait">
                {isOptimized ? (
                  <motion.div key="pro" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-[#16c800]/80">
                    <p>{`{`}</p>
                    <p className="pl-4">{`"@context": "https://schema.org",`}</p>
                    <p className="pl-4 text-white font-bold">{`"@type": "ConsultingService",`}</p>
                    <p className="pl-4">{`"areaServed": "United States",`}</p>
                    <p className="pl-4">{`"serviceType": "Operations Audit",`}</p>
                    <p className="pl-4 text-white">{`"optimizationLevel": 1.0`}</p>
                    <p>{`}`}</p>
                  </motion.div>
                ) : (
                  <motion.div key="bad" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400/60 blur-[0.5px]">
                    <p>{`<title>New Page 1</title>`}</p>
                    <p>{`<meta name="keywords" content="stuff, things">`}</p>
                    <p className="bg-red-500/10 line-through italic">ERROR: Schema Missing</p>
                    <p className="animate-pulse">Loading scripts (4.2s)...</p>
                    <p>{`<div>Random Text Here</div>`}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT: THE VISUAL IMPACT */}
          <div className="flex flex-col gap-8">
            <motion.div 
              layout
              className={`flex-1 p-8 rounded-3xl transition-all duration-1000 ${isOptimized ? 'bg-[#16c800] text-black scale-105' : 'bg-zinc-300 text-zinc-500'}`}
            >
              <div className="flex justify-between items-start mb-10">
                <Globe className={isOptimized ? 'animate-spin-slow' : ''} />
                <div className="text-right">
                  <p className="text-[10px] uppercase font-bold tracking-tighter">Market Reach</p>
                  <p className="text-2xl font-black">{isOptimized ? 'NATIONWIDE' : 'LOCAL ONLY'}</p>
                </div>
              </div>
              
              <h2 className={`text-4xl font-black mb-4 tracking-tighter ${isOptimized ? 'italic uppercase' : ''}`}>
                {isOptimized ? 'Total Market Dominance' : 'Generic Business Site'}
              </h2>
              <p className="text-sm leading-relaxed max-w-[80%]">
                {isOptimized 
                  ? "We've injected custom Schema, optimized every asset for 0.4s load times, and synchronized your digital footprint across the US."
                  : "Slow load times and missing technical tags are preventing your business from being found by your ideal clients."}
              </p>
            </motion.div>

            {/* PERFORMANCE BAR */}
            <div className={`p-6 rounded-2xl border flex items-center justify-between ${isOptimized ? 'border-[#16c800] bg-[#16c800]/10' : 'border-zinc-400'}`}>
              <div className="flex items-center gap-3">
                <Gauge size={20} className={isOptimized ? 'text-[#16c800]' : 'text-red-500'} />
                <span className="text-xs font-bold uppercase tracking-widest">Load Speed</span>
              </div>
              <motion.span layout className={`font-mono font-bold ${isOptimized ? 'text-[#16c800]' : 'text-red-500'}`}>
                {isOptimized ? '0.4s' : '4.8s'}
              </motion.span>
            </div>
          </div>
        </div>

      </main>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}
