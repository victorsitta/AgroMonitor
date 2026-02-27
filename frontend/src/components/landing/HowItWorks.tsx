import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Wifi, Monitor, Brain, LucideIcon, ArrowRight } from "lucide-react";

interface Step {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
}

const steps: Step[] = [
  { 
    icon: Wifi, 
    title: "Conecte Sensores", 
    desc: "Dispositivos inteligentes que se instalam em minutos e conectam sua fazenda.",
    color: "emerald"
  },
  { 
    icon: Monitor, 
    title: "Monitore Online", 
    desc: "Acompanhe temperatura, umidade e CO2 em tempo real de qualquer lugar.",
    color: "blue"
  },
  { 
    icon: Brain, 
    title: "Inteligência Ativa", 
    desc: "Algoritmos que previnem perdas e otimizam a qualidade do seu estoque.",
    color: "teal"
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="relative py-32 bg-slate-50 overflow-hidden">
      {/* 1. Fundo Dinâmico com Gradientes Suaves */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header com Animação de Entrada */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-emerald-700 bg-emerald-100 rounded-full uppercase">
            Passo a Passo
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Como funciona a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
              experiência inteligente
            </span>
          </h2>
        </motion.div>

        {/* 2. Grid de Cards Interativos */}
        <div className="grid md:grid-cols-3 gap-10 relative">
          
          {/* Linha Decorativa Conectora (Fica colorida no scroll/hover) */}
          <div className="hidden lg:block absolute top-[45%] left-0 w-full h-[2px] bg-slate-200 -z-10">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-emerald-400 to-blue-400"
            />
          </div>

          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -15 }} // Flutuação no hover
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="relative"
            >
              {/* Card com efeito Glassmorphism Branco */}
              <div className="group h-full bg-white/70 backdrop-blur-md border border-white p-10 rounded-[40px] shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500">
                
                {/* Ícone com Animação de Rotação Suave */}
                <motion.div 
                  whileHover={{ rotate: 15 }}
                  className="w-20 h-20 bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-lg flex items-center justify-center mb-8 group-hover:bg-emerald-600 transition-colors duration-500"
                >
                  <step.icon className="w-10 h-10 text-emerald-600 group-hover:text-white transition-colors duration-500" />
                </motion.div>

                {/* Número do Passo com Preenchimento Dinâmico */}
                <span className="absolute top-8 right-10 text-7xl font-black text-slate-100 group-hover:text-emerald-50 transition-colors duration-500 -z-10">
                  {i + 1}
                </span>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {step.desc}
                </p>

                {/* Botão de Micro-Interação */}
                <div className="flex items-center text-emerald-600 font-bold text-sm cursor-pointer overflow-hidden group/btn">
                  <span className="mr-2 transform translate-x-0 group-hover/btn:translate-x-1 transition-transform">
                    Saiba mais
                  </span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-all" />
                </div>
              </div>

              {/* Elemento de Conexão Mobile */}
              {i < 2 && (
                <div className="flex md:hidden justify-center my-4">
                  <div className="w-1 h-12 bg-gradient-to-b from-emerald-400 to-transparent rounded-full" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* 3. Rodapé da Seção Interativo */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-8 rounded-[32px] bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center animate-bounce">
              <Wifi className="w-6 h-6 text-slate-900" />
            </div>
            <p className="font-medium text-lg">Pronto para digitalizar sua operação?</p>
          </div>
          <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold rounded-2xl transition-all hover:scale-105 active:scale-95">
            Agendar uma consultoria
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;