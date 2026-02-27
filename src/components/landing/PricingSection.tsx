import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Crown, Sprout, Building2, Zap, ArrowRight, ShieldCheck } from "lucide-react";

interface Plan {
  name: string;
  price: string;
  period: string;
  desc: string;
  features: string[];
  popular: boolean;
  icon: React.ReactNode;
}

// URLs de imagens de avatar de exemplo para simular produtores reais
const producerAvatars = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/85.jpg",
  "https://randomuser.me/api/portraits/women/65.jpg"
];

const plans: Plan[] = [
  { 
    name: "Starter", 
    price: "R$ 297", 
    period: "/mês", 
    desc: "Essencial para pequenos silos", 
    features: ["Até 10 sensores", "1 silo monitorado", "Alertas por email", "Relatórios semanais", "Suporte técnico"], 
    popular: false,
    icon: <Sprout className="w-6 h-6 text-[#2D5A43]" />
  },
  { 
    name: "Profissional", 
    price: "R$ 697", 
    period: "/mês", 
    desc: "O padrão para fazendas médias", 
    features: ["Até 50 sensores", "10 silos monitorados", "Alertas SMS + email", "Dashboard em tempo real", "Suporte prioritário 12h", "Relatórios diários PDF"], 
    popular: true,
    // Ícone corrigido para uma Coroa, conforme o seu print
    icon: <Crown className="w-6 h-6 text-[#B5892F]" />
  },
  { 
    name: "Enterprise", 
    price: "Consulte", 
    period: "", 
    desc: "Grandes grupos e cooperativas", 
    features: ["Sensores ilimitados", "Silos ilimitados", "API de integração", "Dashboard customizado", "Gerente de conta dedicado", "Suporte 24/7 Premium"], 
    popular: false,
    icon: <Building2 className="w-6 h-6 text-[#2D5A43]" />
  },
];

const PricingSection: React.FC = () => (
  <section id="planos" className="py-32 bg-[#E9EFEC] relative overflow-hidden">
    {/* Grafismos de Fundo */}
    <div className="absolute inset-0 opacity-40 pointer-events-none">
      <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,1000 C300,800 400,900 700,700 C1000,500 1000,0 1000,0 L0,0 Z" fill="#DDE7E2" />
      </svg>
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="flex flex-col items-center text-center mb-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2D5A43]/10 text-[#2D5A43] text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-[#2D5A43]/20"
        >
          <ShieldCheck size={14} />
          Investimento Seguro
        </motion.div>
        
        <h2 className="text-4xl md:text-6xl font-black text-[#1A3326] tracking-tight mb-6">
          Maximize sua <span className="text-[#B5892F]">Rentabilidade</span>
        </h2>
        <p className="text-[#4A6357] max-w-2xl text-lg font-medium leading-relaxed">
          Planos flexíveis desenhados para a realidade do campo brasileiro, 
          do plantio ao armazenamento.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: i * 0.1 }}
          >
            <Card className={`group relative h-full border-none shadow-[0_20px_40px_-15px_rgba(26,51,38,0.1)] rounded-[2.5rem] transition-all duration-500 hover:shadow-[0_30px_60px_-10px_rgba(26,51,38,0.15)] overflow-hidden ${
              plan.popular ? "bg-[#2D5A43] text-white md:-translate-y-4" : "bg-white"
            }`}>
              
              {plan.popular && (
                <div className="absolute top-0 right-0 p-6">
                  <Zap className="text-[#B5892F] fill-[#B5892F] w-5 h-5" />
                </div>
              )}

              <CardHeader className="p-10 pb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300 ${
                  plan.popular ? "bg-white/10" : "bg-[#E9EFEC]"
                }`}>
                  {plan.icon}
                </div>
                <CardTitle className={`text-2xl font-bold tracking-tight ${plan.popular ? "text-white" : "text-[#1A3326]"}`}>
                  {plan.name}
                </CardTitle>
                <p className={`text-sm mt-2 ${plan.popular ? "text-emerald-100/60" : "text-slate-500"}`}>
                  {plan.desc}
                </p>
                
                <div className="pt-10 flex flex-col">
                  <span className={`text-5xl font-black tracking-tighter ${plan.popular ? "text-white" : "text-[#1A3326]"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-xs font-bold uppercase tracking-widest mt-2 ${plan.popular ? "text-[#B5892F]" : "text-[#2D5A43]"}`}>
                    {plan.period || "Acesso Vitalício"}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="p-10 pt-0 flex flex-col h-full">
                <div className={`h-[1px] w-full mb-8 ${plan.popular ? "bg-white/10" : "bg-[#E9EFEC]"}`} />
                
                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm font-medium">
                      <Check className={`w-5 h-5 flex-shrink-0 ${plan.popular ? "text-[#B5892F]" : "text-[#2D5A43]"}`} />
                      <span className={plan.popular ? "text-emerald-50" : "text-slate-600"}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  asChild 
                  className={`w-full h-14 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all shadow-lg ${
                    plan.popular 
                    ? "bg-[#B5892F] hover:bg-[#967126] text-white shadow-[#B5892F]/20" 
                    : "bg-[#1A3326] hover:bg-[#2D5A43] text-white shadow-[#1A3326]/20"
                  }`}
                >
                  <Link to="/register" className="flex items-center justify-center gap-2">
                    Selecionar Plano
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* SEÇÃO DE PROVA SOCIAL COM AVATARES REAIS */}
      <div className="mt-20 flex flex-col items-center">
        <div className="flex -space-x-3 mb-4">
          {producerAvatars.map((url, i) => (
            <div key={i} className="w-10 h-10 rounded-full border-2 border-[#E9EFEC] overflow-hidden shadow-inner">
              <img 
                src={url} 
                alt={`Produtor verificado ${i + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="w-10 h-10 rounded-full border-2 border-[#E9EFEC] bg-[#B5892F] flex items-center justify-center text-white text-[10px] font-bold shadow-md">
            +500
          </div>
        </div>
        <p className="text-[#4A6357] text-sm font-bold">
          Junte-se a mais de 500 fazendas que já otimizaram sua colheita.
        </p>
      </div>
    </div>
  </section>
);

export default PricingSection;