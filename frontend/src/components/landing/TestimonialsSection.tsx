import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote, MapPin, BadgeCheck } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  { id: 1, name: "Carlos Silva", role: "Proprietário", location: "Fazenda São João - MT", text: "Com o AgroMonitor, reduzimos as perdas de grãos em 40%. O sistema de alertas nos salvou de uma perda de 200 toneladas de soja.", rating: 5 },
  { id: 2, name: "Ana Rodrigues", role: "Diretora Técnica", location: "Cooperativa Sul - PR", text: "A plataforma é intuitiva e os dados em tempo real nos dão confiança total na qualidade dos nossos grãos armazenados.", rating: 5 },
  { id: 3, name: "Roberto Mendes", role: "Engenheiro Agrônomo", location: "Agro Mendes - GO", text: "Investimento que se paga no primeiro mês. A economia com perdas de grãos é impressionante. Recomendo fortemente.", rating: 5 },
];

const AgroTestimonials: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);

  const slideVariants: Variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 100 : -100, filter: "blur(8px)" }),
    center: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: "circOut" } },
    exit: (d: number) => ({ opacity: 0, x: d < 0 ? 100 : -100, filter: "blur(8px)", transition: { duration: 0.3 } }),
  };

  const paginate = (d: number) => {
    setDirection(d);
    setCurrent((prev) => (prev + d + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-28 bg-[#0B120E] text-[#ECF3F0] relative overflow-hidden font-sans">
      {/* Background: Textura Topográfica Sutil */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-emerald-900/20 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          
          {/* Lado Esquerdo: Título e Identidade */}
          <div className="w-full lg:w-1/3 text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6"
            >
              <BadgeCheck size={14} />
              <span>Resultados de Campo</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.1] mb-6 tracking-tight">
              A confiança de quem <br />
              <span className="text-[#D4AF37]">alimenta o mundo.</span>
            </h2>
            
            <p className="text-emerald-100/60 text-lg mb-10 leading-relaxed">
              Veja como a tecnologia de monitoramento está transformando a rentabilidade de grandes produtores brasileiros.
            </p>

            <div className="flex gap-4">
              <button onClick={() => paginate(-1)} className="p-4 rounded-full border border-white/10 hover:bg-white/5 transition-all text-white active:scale-90">
                <ChevronLeft size={28} />
              </button>
              <button onClick={() => paginate(1)} className="p-4 rounded-full bg-emerald-600 hover:bg-emerald-500 transition-all text-white shadow-lg shadow-emerald-900/40 active:scale-90">
                <ChevronRight size={28} />
              </button>
            </div>
          </div>

          {/* Lado Direito: O Card Depoimento */}
          <div className="w-full lg:w-2/3 relative min-h-[480px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                <div className="h-full bg-[#141C18] border-l-4 border-emerald-500 rounded-r-3xl p-8 md:p-14 shadow-2xl relative">
                  <Quote className="absolute top-8 right-10 w-20 h-20 text-white/[0.03] pointer-events-none" />
                  
                  <div className="flex gap-1 mb-8">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>

                  <blockquote className="text-2xl md:text-3xl font-medium leading-snug mb-12 text-white">
                    "{testimonials[current].text}"
                  </blockquote>

                  {/* CAIXA DO USUÁRIO - ESTILO CRÉDITO RURAL / PROFISSIONAL */}
                  <div className="bg-[#1B2520] border border-white/5 rounded-2xl p-6 flex flex-wrap items-center justify-between gap-6 shadow-inner">
                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center shadow-lg border border-white/10">
                        <span className="text-2xl font-black text-white">{testimonials[current].name.charAt(0)}</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white leading-tight">{testimonials[current].name}</h4>
                        <p className="text-emerald-500 font-semibold text-sm uppercase tracking-wide">{testimonials[current].role}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 px-4 py-2 bg-black/20 rounded-lg">
                      <MapPin size={16} className="text-emerald-500" />
                      <span className="text-xs font-mono text-emerald-100/70 uppercase tracking-tighter">
                        {testimonials[current].location}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AgroTestimonials;