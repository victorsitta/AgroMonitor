import { motion } from "framer-motion";
import { Thermometer, Droplets, BarChart3, Bell } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  { icon: Thermometer, title: "Temperatura", desc: "Monitore temperatura em cada nível dos silos com precisão de ±0.1°C.", color: "text-destructive" },
  { icon: Droplets, title: "Umidade", desc: "Controle de umidade relativa para evitar proliferação de fungos.", color: "text-blue-500" },
  { icon: BarChart3, title: "Qualidade do Grão", desc: "Índice de qualidade calculado em tempo real com base em múltiplos sensores.", color: "text-primary" },
  { icon: Bell, title: "Alertas Inteligentes", desc: "Notificações instantâneas quando parâmetros saem das faixas ideais.", color: "text-agro-gold" },
];

const FeaturesSection = () => (
  <section id="features" className="py-24">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Funcionalidades</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Tudo que você precisa para proteger sua produção.</p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
            <Card className="glass-card hover-lift h-full cursor-pointer group">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${f.color}`}>
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-display mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
