import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, BarChart3, Shield, ArrowUpRight, LucideIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Feature {
  icon: LucideIcon;
  label: string;
}

const HeroSection: React.FC = () => {
  const features: Feature[] = [
    { icon: BarChart3, label: "Dados em Tempo Real" },
    { icon: Shield, label: "Proteção de Safra" },
    { icon: Wifi, label: "Sensores IoT" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#05070a]">
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40 lg:opacity-50 scale-105"
        >
          <source src="/assets/video_fundo_heroSection.mp4" type="video/mp4" />
        </video>
        
        {/* Gradients de Profundidade - Criam o efeito "foco central" da imagem */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070a] via-transparent to-[#05070a]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#05070a_90%)]" />
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Status Badge - Efeito Neon Suave */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-emerald-500/5 border border-emerald-500/20 backdrop-blur-xl text-emerald-400 text-xs md:text-sm font-bold tracking-widest uppercase mb-10 shadow-[0_0_20px_rgba(16,185,129,0.1)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Monitoramento IoT Ativo
          </motion.div>

          {/* Título - Tipografia 'Display' com gradiente metálico */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.95]"
          >
            A inteligência que <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">
              protege sua safra
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-slate-300/80 text-lg md:text-2xl max-w-3xl mx-auto mb-12 font-light leading-relaxed"
          >
            Conecte seu campo ao futuro. Monitore umidade, temperatura e qualidade 
            em tempo real com a plataforma IoT mais avançada do mercado.
          </motion.p>

          {/* CTAs - Botões com Glassmorphism Elevado */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button asChild className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-10 py-8 text-xl rounded-2xl shadow-[0_10px_40px_rgba(16,185,129,0.3)] transition-all hover:scale-105 active:scale-95 border-0">
              <Link to="/register" className="flex items-center gap-2">
                Começar Agora <ArrowUpRight className="w-6 h-6" />
              </Link>
            </Button>
            
            <Button variant="outline" className="bg-white/5 border-white/10 text-white px-10 py-8 text-xl rounded-2xl backdrop-blur-md hover:bg-white/10 transition-all border shadow-2xl">
              <a href="#demo">Ver Demonstração</a>
            </Button>
          </motion.div>

          {/* Bottom Features - Cards Minimalistas */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 max-w-4xl mx-auto border-t border-white/5 pt-12"
          >
            {features.map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-4 group cursor-default">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-all duration-500">
                  <item.icon className="w-7 h-7 text-emerald-400" />
                </div>
                <span className="text-slate-400 group-hover:text-white text-sm font-semibold tracking-wide transition-colors uppercase">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Fade inferior suave para a próxima seção */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#05070a] to-transparent z-20" />
    </section>
  );
};

export default HeroSection;