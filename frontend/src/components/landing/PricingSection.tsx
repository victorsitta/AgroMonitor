import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  { name: "Starter", price: "R$ 297", period: "/mês", desc: "Para pequenos produtores", features: ["Até 10 sensores", "1 silo monitorado", "Alertas por email", "Relatórios semanais", "Suporte por email"], popular: false },
  { name: "Profissional", price: "R$ 697", period: "/mês", desc: "Para fazendas de médio porte", features: ["Até 50 sensores", "10 silos monitorados", "Alertas SMS + email", "Relatórios diários", "Dashboard avançado", "Suporte prioritário", "API de integração"], popular: true },
  { name: "Enterprise", price: "Sob consulta", period: "", desc: "Para grandes operações", features: ["Sensores ilimitados", "Silos ilimitados", "Alertas personalizados", "Relatórios em tempo real", "Dashboard customizado", "Suporte 24/7", "API + Webhooks", "Gerente dedicado"], popular: false },
];

const PricingSection = () => (
  <section id="planos" className="py-24">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Planos & Preços</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Escolha o plano ideal para o tamanho da sua operação.</p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
            <Card className={`relative h-full hover-lift ${plan.popular ? "border-primary shadow-lg shadow-primary/10 scale-105" : ""}`}>
              {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-agro text-xs font-bold text-primary-foreground">Mais Popular</div>}
              <CardHeader className="text-center pb-2">
                <CardTitle className="font-display text-xl">{plan.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{plan.desc}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold font-display">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button asChild className={`w-full ${plan.popular ? "gradient-agro border-0" : ""}`} variant={plan.popular ? "default" : "outline"}>
                  <Link to="/register">Começar</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
