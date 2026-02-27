import { motion } from "framer-motion";
import { Sprout, Wheat, Coffee, Bean, Droplets, Leaf } from "lucide-react";

const grainsList = [
  { icon: <Bean />, name: "Feijão", color: "text-amber-700" },
  { icon: <Wheat />, name: "Trigo", color: "text-yellow-600" },
  { icon: <Leaf />, name: "Milho", color: "text-yellow-500" },
  { icon: <Sprout />, name: "Soja", color: "text-emerald-600" },
  { icon: <Droplets />, name: "Arroz", color: "text-blue-400" },
  { icon: <Coffee />, name: "Café", color: "text-stone-700" },
];

const GrainsSection = () => (
  <section id="graos" className="py-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:to-black">
    <div className="container mx-auto px-4">
      
      {/* Header Refinado */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        className="text-center mb-20"
      >
        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase text-primary bg-primary/10 rounded-full">
          Market Intelligence
        </span>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-6">
          Grãos <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-400">Monitorados</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Tecnologia de ponta aplicada ao monitoramento das principais commodities do agronegócio brasileiro.
        </p>
      </motion.div>

      {/* Grid de Cards Estilizados */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {grainsList.map((g, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className="group relative"
          >
            {/* Efeito de Glow de Fundo no Hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
            
            <div className="relative flex flex-col items-center p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm group-hover:shadow-xl group-hover:border-emerald-500/30 transition-all duration-300 overflow-hidden">
              
              {/* Ícone com Círculo Decorativo */}
              <div className={`relative z-10 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 ${g.color} group-hover:scale-110 transition-transform duration-500`}>
                {/* Clone do ícone para efeito de brilho */}
                <div className="absolute inset-0 blur-lg opacity-0 group-hover:opacity-40 transition-opacity">
                   {g.icon}
                </div>
                <div className="relative w-10 h-10 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
                  {g.icon}
                </div>
              </div>

              <span className="mt-6 font-bold text-slate-700 dark:text-slate-200 tracking-tight">
                {g.name}
              </span>
              
              {/* Detalhe Minimalista no Rodapé do Card */}
              <div className="mt-4 h-1 w-0 group-hover:w-8 bg-emerald-500 rounded-full transition-all duration-300" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GrainsSection;