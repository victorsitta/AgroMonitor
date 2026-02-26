import { motion } from "framer-motion";
import { Wifi, Monitor, Brain } from "lucide-react";

const steps = [
  { icon: Wifi, title: "Conecte Sensores", desc: "Instale sensores IoT nos seus silos e armazéns em minutos." },
  { icon: Monitor, title: "Monitore em Tempo Real", desc: "Acompanhe temperatura, umidade e qualidade 24/7." },
  { icon: Brain, title: "Tome Decisões", desc: "Receba alertas e relatórios para decisões baseadas em dados." },
];

const HowItWorks = () => (
  <section id="como-funciona" className="py-24 bg-muted/30">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Como Funciona</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Em apenas 3 passos, comece a monitorar seus grãos com precisão.</p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {steps.map((step, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="text-center group">
            <div className="relative mx-auto w-20 h-20 rounded-2xl gradient-agro flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <step.icon className="w-10 h-10 text-primary-foreground" />
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center text-sm font-bold text-primary">{i + 1}</div>
            </div>
            <h3 className="text-xl font-bold font-display mb-2">{step.title}</h3>
            <p className="text-muted-foreground text-sm">{step.desc}</p>
            {i < 2 && <div className="hidden md:block mt-6 text-primary text-2xl">→</div>}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
