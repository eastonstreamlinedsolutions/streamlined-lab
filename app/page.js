"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Shield, Globe, Search, ArrowRight, MousePointer2 } from 'lucide-react';

export default function SalesEngine() {
  const [stats, setStats] = useState({ speed: false, seo: false, brand: false });
  const [isLocked, setIsLocked] = useState(false);

  const toggleStat = (key) => setStats(prev => ({ ...prev, [key]: !prev[key] }));
  const allOptimized = stats.speed && stats.seo && stats.brand;

  return (
    <div className={`min-h-screen transition-all duration-700 font-sans ${allOptimized ? 'bg-black text-white' : 'bg-zinc-100 text-zinc-800'}`}>
      
      {/* SALES HEADER */}
      <nav className="p-6 border-b border-zinc-300 flex justify-between items-center max-w-7xl mx-auto w-full">
        <h1 className="font-black italic tracking-tighter text-xl text-streamlined">STREAMLINED_LAB // SALES_TOOL</h1>
        <div className="flex gap-4">
          <div className={`h-3 w-3 rounded-full animate-pulse ${allOptimized ? 'bg-green-500 shadow-[0_0_10px_green]' : 'bg-red-500'}`} />
          <span className="text-[10px] uppercase font-bold tracking-widest">{allOptimized ? 'Ready to Close' : 'Site Audit Required'}</span>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6 md:p-12 grid lg:grid-cols-12 gap-12">
        
        {/* LEFT: THE INTERACTIVE CONSOLE (The Sales Pitch) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-6 rounded-3xl shadow-xl border border-zinc-200 text-zinc-900">
            <h2 className="text-sm font-black uppercase mb-4 opacity-50 italic">Optimization Console</h2>
            <div className="space-y-3">
              <ConsoleButton 
                active={stats.speed} 
                onClick={() => toggleStat('speed')} 
                icon={<Zap size={18}/>} 
                label="Kill Load Times" 
                desc="Compress assets & enable CDN"
              />
              <ConsoleButton 
                active={stats.seo} 
                onClick={() => toggleStat('seo')} 
                icon={<Search size={18}/>} 
                label="Inject Technical SEO" 
                desc="Apply JSON-LD Schema & Meta"
              />
              <ConsoleButton 
                active={stats.brand} 
                onClick={() => toggleStat('brand')} 
                icon={<Shield size={18}/>} 
                label="Apply Pro Branding" 
                desc="Nationwide Authority Theme"
              />
            </div>

            {allOptimized && (
              <motion.button 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="w-full mt-6 bg-[#16c800] text-black font-black py-4 rounded-2xl flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(22,200,0,0.3)]"
              >
                GENERATE PROPOSAL <ArrowRight size={18}/>
              </motion.button>
            )}
          </div>

          <div className={`p-6 rounded-3xl border-2 transition-all ${allOptimized ? 'bg-zinc-900 border-[#16c800]' : 'bg-zinc-200 border-dashed border-zinc-400 opacity-50'}`}>
            <p className="text-[10px] font-bold uppercase mb-2">Internal Metrics</p>
            <div className="grid grid-cols-2 gap-4">
              <Metric label="Page Score" value={allOptimized ? "100" : "32"} color={allOptimized ? "text-green-400" : "text-red-500"} />
              <Metric label="Bounce Rate" value={allOptimized ? "12%" : "74%"} color={allOptimized ? "text-green-400" : "text-red-500"} />
            </div>
          </div>
        </div>

        {/* RIGHT: THE VISUAL SITE PREVIEW */}
        <div className="lg:col-span-8">
          <div className={`relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl transition-all duration-1000 ${stats.brand ? 'bg-zinc-900 ring-4 ring-[#16c800]/20' : 'bg-white ring-1 ring-zinc-300'}`}>
            
            {/* IF NOT OPTIMIZED: UGLY SITE */}
            <AnimatePresence mode="wait">
              {!stats.brand ? (
                <motion.div key="bad" exit={{ opacity: 0 }} className="p-12 text-zinc-400 space-y-6">
                  <div className="h-8 w-48 bg-zinc-200 rounded animate-pulse" />
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-32 bg-zinc-100 rounded" />
                    <div className="h-32 bg-zinc-100 rounded" />
                    <div className="h-32 bg-zinc-100 rounded" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-zinc-200 rounded" />
                    <div className="h-4 w-2/3 bg-zinc-200 rounded" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-white/40 backdrop-blur-[2px]">
                    <p className="font-mono text-zinc-900 font-bold flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg">
                      <MousePointer2 size={16}/> UNOPTIMIZED_STATE
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div key="good" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-12 text-white">
                  <div className="flex justify-between items-start mb-12">
                    <h3 className="text-4xl font-black italic tracking-tighter uppercase leading-none">Streamlined<br/><span className="text-[#16c800]">Solutions.</span></h3>
                    <div className="bg-[#16c800] text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">Verified Nationwide Authority</div>
                  </div>
                  <div className="grid grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <p className="text-[#16c800] text-xs font-bold uppercase tracking-[0.3em]">Scalable Infrastructure</p>
                      <h4 className="text-5xl font-black leading-[0.9]">BUILDING DIGITAL<br/>DOMINANCE.</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">Systematic audits and high-conversion design tailored for SMBs ready to scale across the US.</p>
                    </div>
                    {stats.seo && (
                      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-zinc-800 p-6 rounded-2xl border border-zinc-700 font-mono text-xs">
                        <p className="text-[#16c800] mb-2">// INJECTING_SCHEMA</p>
                        <p className="opacity-50 tracking-tighter">{"@type": "ConsultingService",}</p>
                        <p className="opacity-50 tracking-tighter">{"areaServed": "USA",}</p>
                        <p className="opacity-50 tracking-tighter">{"status": "Rank_Optimized"}</p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* SPEED OVERLAY */}
            <AnimatePresence>
              {stats.speed && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute bottom-6 right-6 flex items-center gap-2 bg-black/80 text-[#16c800] px-4 py-2 rounded-full border border-[#16c800]/50 backdrop-blur-md">
                  <Zap size={14} className="fill-current"/> <span className="text-xs font-black italic">0.4s PAGE LOAD SPEED</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
}

function ConsoleButton({ active, onClick, icon, label, desc }) {
  return (
    <button onClick={onClick} className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all border-2 ${active ? 'bg-[#16c800]/10 border-[#16c800] text-black font-bold' : 'bg-white border-zinc-200 text-zinc-500 hover:border-zinc-300'}`}>
      <div className={`p-3 rounded-xl ${active ? 'bg-[#16c800] text-black shadow-[0_0_15px_#16c800]' : 'bg-zinc-100 text-zinc-400'}`}>
        {icon}
      </div>
      <div className="text-left">
        <p className="text-xs font-black uppercase tracking-tight leading-none mb-1">{label}</p>
        <p className="text-[10px] opacity-60 leading-none">{desc}</p>
      </div>
    </button>
  );
}

function Metric({ label, value, color }) {
  return (
    <div>
      <p className="text-[10px] opacity-40 uppercase font-black">{label}</p>
      <p className={`text-2xl font-black ${color}`}>{value}</p>
    </div>
  );
}
