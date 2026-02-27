import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Sprout, Database, Activity, Landmark } from "lucide-react";

const stats = [
  { value: 2847, label: "Sensores Ativos", suffix: "+", icon: Activity },
  { value: 520, label: "Fazendas Conectadas", suffix: "+", icon: Sprout },
  { value: 1200000, label: "Toneladas Monitoradas", suffix: "", format: true, icon: Database },
  { value: 99.7, label: "Uptime do Sistema", suffix: "%", decimal: true, icon: Landmark },
];

const AnimatedCounter = ({ target, suffix, decimal }: { target: number; suffix: string; decimal?: boolean }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const duration = 2500;
      const frame = (now: number) => {
        if (!startTime) startTime = now;
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4); 
        setCount(eased * target);
        if (progress < 1) requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    }
  }, [isInView, target]);

  const display = decimal 
    ? count.toFixed(1).replace('.', ',') 
    : Math.floor(count).toLocaleString("pt-BR");

  return (
    <span ref={ref} className="text-4xl md:text-6xl font-black tracking-tighter text-white drop-shadow-sm">
      {display}{suffix}
    </span>
  );
};

const StatsSection = () => (
  <section className="relative py-28 overflow-hidden bg-[#051C14]">
    {/* Efeito de Luz Ambiental de Fundo */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
    
    <div className="container mx-auto px-4 relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            transition={{ delay: i * 0.1, duration: 0.6 }} 
            className="relative group p-8 rounded-[2rem] border border-white/5 bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.06] hover:border-emerald-500/30 transition-all duration-500"
          >
            {/* Ícone Flutuante */}
            <div className="mb-8 flex justify-between items-start">
              <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 shadow-lg shadow-emerald-500/10">
                <s.icon size={24} strokeWidth={2} />
              </div>
              <div className="h-px w-12 bg-emerald-500/20 mt-6 group-hover:w-16 transition-all duration-500" />
            </div>

            {/* Conteúdo */}
            <div className="flex flex-col gap-1">
              <AnimatedCounter target={s.value} suffix={s.suffix} decimal={s.decimal} />
              <p className="text-sm font-medium text-emerald-100/60 uppercase tracking-[0.2em] mt-2 group-hover:text-emerald-400 transition-colors">
                {s.label}
              </p>
            </div>

            {/* Brilho no Hover (Canto do Card) */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;