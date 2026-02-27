import React from "react";
import { motion } from "framer-motion";
import { Wifi, Monitor, Brain, LucideIcon, ArrowRight, MousePointer2 } from "lucide-react";

interface Step {
  icon: LucideIcon;
  title: string;
  desc: string;
  details: string;
}

const steps: Step[] = [
  { 
    icon: Wifi, 
    title: "Conecte Sensores", 
    desc: "Dispositivos inteligentes que se instalam em minutos e conectam sua fazenda.",
    details: "Tecnologia Plug & Play com bateria de longa duração (até 5 anos) e longo alcance para áreas rurais remotas."
  },
  { 
    icon: Monitor, 
    title: "Monitore Online", 
    desc: "Acompanhe temperatura, umidade e CO2 em tempo real de qualquer lugar.",
    details: "Painel de controle intuitivo acessível via web ou app, com gráficos históricos e exportação de dados para auditoria."
  },
  { 
    icon: Brain, 
    title: "Inteligência Ativa", 
    desc: "Algoritmos que previnem perdas e otimizam a qualidade do seu estoque.",
    details: "Nossa IA aprende com o microclima da sua região para enviar alertas preditivos antes mesmo do problema ocorrer."
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="relative py-32 bg-slate-50 overflow-hidden">
      {/* Background Decorativo */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-emerald-700 bg-emerald-100 rounded-full uppercase">
            Fluxo de Trabalho
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
            Tecnologia que <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 font-black">
              trabalha por você
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Passe o mouse sobre os cards para entender os detalhes de cada etapa da nossa solução.
          </p>
        </motion.div>

        {/* Grid de Cards com fundo diferenciado */}
        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="group h-[500px] [perspective:1500px]">
              <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* LADO FRENTE - Com fundo Slate-100 para destacar do BG da section */}
                <div className="absolute inset-0 [backface-visibility:hidden]">
                  <div className="h-full w-full bg-slate-100 border border-slate-200 p-12 rounded-[50px] shadow-lg flex flex-col justify-between group-hover:bg-white transition-colors duration-500">
                    <div>
                      <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl shadow-lg shadow-emerald-200 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                        <step.icon className="w-10 h-10 text-white" />
                      </div>
                      
                      <h3 className="text-3xl font-black text-slate-900 mb-6 leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 text-xl leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 text-emerald-600 font-bold">
                      <MousePointer2 className="w-5 h-5 animate-bounce" />
                      <span>Veja os detalhes</span>
                    </div>

                    <span className="absolute bottom-10 right-10 text-9xl font-black text-slate-200/60 select-none -z-10">
                      {i + 1}
                    </span>
                  </div>
                </div>

                {/* LADO VERSO */}
                <div className="absolute inset-0 h-full w-full rounded-[50px] bg-slate-900 p-12 text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex flex-col h-full justify-center">
                    <div className="w-16 h-1 w-16 bg-emerald-500 mb-8 rounded-full" />
                    <h4 className="text-2xl font-bold mb-6 text-emerald-400">Por dentro da tecnologia</h4>
                    <p className="text-slate-300 text-xl leading-relaxed mb-10">
                      {step.details}
                    </p>
                    <div className="flex items-center gap-2 text-emerald-500 font-bold uppercase tracking-widest text-sm">
                      <ArrowRight className="w-5 h-5" />
                      <span>Saber mais</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rodapé Dinâmico com Botão Refinado */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-24 p-10 rounded-[40px] bg-slate-900 text-white flex flex-col lg:flex-row items-center justify-between gap-10 border border-white/5"
        >
          <div className="max-w-xl text-center lg:text-left">
            <h3 className="text-3xl font-bold mb-2">Pronto para digitalizar?</h3>
            <p className="text-slate-400 text-lg">
              Reduza perdas em até 30% com nossa monitoria inteligente. Agende uma demonstração gratuita com nossos especialistas.
            </p>
          </div>
          {/* Botão mais fino e elegante */}
          <button className="whitespace-nowrap px-12 py-6 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-black rounded-[20px] transition-all hover:scale-105 active:scale-95 text-xl shadow-2xl shadow-emerald-500/20">
            Falar com Especialista
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;