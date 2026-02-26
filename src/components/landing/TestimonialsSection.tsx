import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  { name: "Carlos Silva", role: "Fazenda São João - MT", text: "Com o AgroMonitor, reduzimos as perdas de grãos em 40%. O sistema de alertas nos salvou de uma perda de 200 toneladas de soja.", rating: 5 },
  { name: "Ana Rodrigues", role: "Cooperativa Agrícola Sul - PR", text: "A plataforma é intuitiva e os dados em tempo real nos dão confiança total na qualidade dos nossos grãos armazenados.", rating: 5 },
  { name: "Roberto Mendes", role: "Agro Mendes - GO", text: "Investimento que se paga no primeiro mês. A economia com perdas de grãos é impressionante. Recomendo fortemente.", rating: 5 },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">O que nossos clientes dizem</h2>
        </motion.div>
        <div className="max-w-2xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div key={current} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="bg-card rounded-2xl p-8 border border-border text-center">
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-agro-gold text-agro-gold" />
                ))}
              </div>
              <p className="text-lg italic text-foreground mb-6">"{testimonials[current].text}"</p>
              <p className="font-bold font-display">{testimonials[current].name}</p>
              <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-4 mt-6">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"><ChevronLeft className="w-5 h-5" /></button>
            <button onClick={next} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"><ChevronRight className="w-5 h-5" /></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
