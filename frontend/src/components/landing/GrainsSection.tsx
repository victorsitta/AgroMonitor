import { motion } from "framer-motion";

const grainsList = [
  { icon: "🫘", name: "Feijão" },
  { icon: "🌾", name: "Trigo" },
  { icon: "🌽", name: "Milho" },
  { icon: "🫛", name: "Soja" },
  { icon: "🍚", name: "Arroz" },
  { icon: "☕", name: "Café" },
];

const GrainsSection = () => (
  <section id="graos" className="py-24 bg-muted/30">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Grãos Monitorados</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Suportamos os principais grãos do agronegócio brasileiro.</p>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {grainsList.map((g, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group">
            <span className="text-5xl mb-3 group-hover:scale-125 transition-transform">{g.icon}</span>
            <span className="font-display font-bold text-sm">{g.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GrainsSection;
