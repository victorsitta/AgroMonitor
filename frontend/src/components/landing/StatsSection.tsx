import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: 2847, label: "Sensores Ativos", suffix: "+" },
  { value: 520, label: "Fazendas Conectadas", suffix: "+" },
  { value: 1200000, label: "Toneladas Monitoradas", suffix: "", format: true },
  { value: 99.7, label: "Uptime", suffix: "%", decimal: true },
];

const AnimatedCounter = ({ target, suffix, format, decimal }: { target: number; suffix: string; format?: boolean; decimal?: boolean }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 2000;
        const startTime = Date.now();
        const tick = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(eased * target);
          if (progress < 1) requestAnimationFrame(tick);
        };
        tick();
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  const display = decimal ? count.toFixed(1) : format ? Math.floor(count).toLocaleString("pt-BR") : Math.floor(count).toLocaleString("pt-BR");

  return <div ref={ref} className="text-4xl md:text-5xl font-bold font-display text-gradient-agro">{display}{suffix}</div>;
};

const StatsSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="text-center">
            <AnimatedCounter target={s.value} suffix={s.suffix} format={s.format} decimal={s.decimal} />
            <p className="text-muted-foreground mt-2 font-medium">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
