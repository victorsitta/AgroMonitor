import { motion } from "framer-motion";
import { Thermometer, Droplets, BarChart3, Bell, LucideIcon, Sprout, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string; // Tailwind text color class
  bgIcon: string; // Tailwind bg color class with opacity
}

const features: Feature[] = [
  { 
    icon: Thermometer, 
    title: "Climatização", 
    desc: "Monitoramento térmico multicamada para evitar o aquecimento da massa de grãos.", 
    color: "text-orange-500",
    bgIcon: "bg-orange-950/20"
  },
  { 
    icon: Droplets, 
    title: "Hidrometria", 
    desc: "Precisão absoluta no controle da umidade para preservar o peso e a qualidade.", 
    color: "text-cyan-500",
    bgIcon: "bg-cyan-950/20"
  },
  { 
    icon: BarChart3, 
    title: "Rendimento", 
    desc: "Análise preditiva de safra baseada nos históricos de armazenamento.", 
    color: "text-emerald-500",
    bgIcon: "bg-emerald-950/20"
  },
  { 
    icon: Bell, 
    title: "Vigilância 24h", 
    desc: "IA que prevê riscos e notifica você instantaneamente no campo.", 
    color: "text-amber-400",
    bgIcon: "bg-amber-950/20"
  },
];

const FeaturesSection = () => (
  // FUNDO PRETO PREMIUM (DEEP BLACK) para destacar o brilho
  <section id="features" className="relative py-32 bg-[#020617] overflow-hidden text-[#E2E8F0]">
    
    {/* TEXTURA TECH DISCRETA NO FUNDO */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-dot-grid.png')]" />

    {/* BRILHOS AMBIENTAIS (GLOWS) FOCADOS */}
    <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-emerald-950/50 blur-[150px] rounded-full pointer-events-none z-1" />
    <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-cyan-950/40 blur-[150px] rounded-full pointer-events-none z-1" />

    <div className="container mx-auto px-4 relative z-10">
      
      {/* TÍTULO MODERNO E LIMPO */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        className="text-center mb-20 max-w-3xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-bold tracking-[0.2em] text-emerald-400 bg-emerald-950/50 rounded-md uppercase border border-emerald-800/30 backdrop-blur-sm shadow-xl shadow-emerald-950/10">
          <Sprout className="w-4 h-4" /> Inteligência de Campo
        </div>
        <h2 className="text-5xl md:text-7xl font-extrabold text-[#F8FAFC] mb-8 tracking-tighter leading-[0.9]">
          Sua colheita sob <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">controle total</span>
        </h2>
        <p className="text-[#94A3B8] max-w-2xl mx-auto text-lg leading-relaxed font-semibold">
          Robustez digital para quem conhece a terra. Proteja seu legado com precisão e tecnologia integrada.
        </p>
      </motion.div>

      {/* GRID DE FEATURES COM DESIGN PREMIUM "DARK NEUMORPHISM" */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -8 }}
            className="group"
          >
            {/* CARD ESCURO COM BORDA DE VIDRO E EFEITO DE HOVER DINÂMICO */}
            <Card className="h-full border-slate-800 bg-[#0F172A]/70 backdrop-blur-xl transition-all duration-500 rounded-3xl overflow-hidden hover:border-slate-700/60 hover:shadow-[0_40px_100px_rgba(16,185,129,0.1)] shadow-inner group-hover:bg-[#1E293B]/70">
              
              <CardContent className="p-10 relative z-10 text-left flex flex-col items-start h-full">
                
                {/* ÍCONE ESTILIZADO EM CONTRATE */}
                <div className={`w-14 h-14 rounded-2xl ${f.bgIcon} flex items-center justify-center mb-10 transition-all duration-500 border border-slate-800/50 group-hover:scale-110 group-hover:border-${f.color.split('-')[1]}-800 shadow-xl`}>
                  <f.icon className={`w-7 h-7 ${f.color} transition-colors duration-500 group-hover:text-${f.color.split('-')[1]}-300`} />
                </div>

                <h3 className="text-2xl font-black text-[#F8FAFC] mb-5 tracking-tight group-hover:text-emerald-300 transition-colors duration-500">
                  {f.title}
                </h3>
                
                <p className="text-[#94A3B8] text-sm leading-relaxed mb-10 font-medium group-hover:text-[#F1F5F9] transition-colors flex-grow">
                  {f.desc}
                </p>

                {/* LINK DECORATIVO "TECH" COM ANIMAÇÃO DE SETA */}
                <div className="mt-auto flex items-center text-xs font-black uppercase tracking-widest text-emerald-400 group-hover:text-cyan-400 transition-colors cursor-pointer">
                  Explorar sistema
                  <ArrowRight className="ml-2 w-4 h-4 translate-x-0 group-hover:translate-x-2 transition-transform duration-300" />
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