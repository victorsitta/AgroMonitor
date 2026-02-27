import { motion } from "framer-motion";
import { Thermometer, Droplets, BarChart3, Bell, LucideIcon, ArrowRight, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
}

const features: Feature[] = [
  { 
    icon: Thermometer, 
    title: "Climatização Inteligente", 
    desc: "Monitoramento térmico multicamada com sensores de precisão industrial para evitar o aquecimento e a deterioração da massa de grãos.", 
    color: "text-orange-400",
  },
  { 
    icon: Droplets, 
    title: "Controle de Hidrometria", 
    desc: "Precisão absoluta no controle da umidade relativa e do equilíbrio higroscópico para preservar o peso comercial e a qualidade germinativa.", 
    color: "text-cyan-400",
  },
  { 
    icon: BarChart3, 
    title: "Rendimento Preditivo", 
    desc: "Inteligência de dados para análise de quebra técnica e otimização do valor de mercado baseado em históricos de armazenamento.", 
    color: "text-emerald-400",
  },
  { 
    icon: Bell, 
    title: "Vigilância Autônoma", 
    desc: "Sistema de segurança com IA que detecta variações críticas e emite alertas prioritários instantaneamente no seu dispositivo.", 
    color: "text-amber-400",
  },
];

const FeaturesSection = () => (
  <section id="features" className="relative py-24 bg-[#0F1C15] overflow-hidden text-[#ECF3F0]">
    
    {/* Background Decorativo */}
    <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
         style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30 L30 0 M30 30 L60 30 M30 30 L30 60 M30 30 L0 30' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")` }} 
    />

    <div className="container mx-auto px-4 relative z-10">
      
      <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-emerald-400 text-xs font-black uppercase tracking-[0.3em] mb-4"
          >
            <ShieldCheck size={16} />
            Monitoramento de Alta Performance
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight">
            Tecnologia que <span className="text-[#D4AF37]">maximiza</span> <br /> 
            seu rendimento.
          </h2>
        </div>
        <p className="text-emerald-100/40 max-w-sm text-sm font-medium mb-2">
          Sistemas robustos desenhados para suportar as condições mais extremas do campo com precisão digital.
        </p>
      </div>

      {/* Grid Reorganizado: 2 Colunas para Cards Maiores */}
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
        {features.map((f, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: i * 0.1 }}
            className="group"
          >
            <Card className="h-full border-white/5 bg-white/[0.03] backdrop-blur-md transition-all duration-500 rounded-[2rem] overflow-hidden hover:bg-white/[0.06] hover:border-emerald-500/30">
              <CardContent className="p-8 md:p-12 flex flex-col md:flex-row items-start gap-8">
                
                {/* Ícone Gigante */}
                <div className={`flex-shrink-0 w-20 h-20 rounded-2xl bg-[#1A2E23] border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]`}>
                  <f.icon className={`w-10 h-10 ${f.color}`} />
                </div>

                <div className="flex flex-col h-full">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-emerald-400 transition-colors">
                    {f.title}
                  </h3>
                  
                  <p className="text-emerald-100/60 text-base md:text-lg leading-relaxed mb-8 font-medium">
                    {f.desc}
                  </p>

                  <div className="mt-auto flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#D4AF37] group-hover:translate-x-2 transition-all duration-300 cursor-pointer">
                    Ver especificações técnicas
                    <ArrowRight size={16} />
                  </div>
                </div>

              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;