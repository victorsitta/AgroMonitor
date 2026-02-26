import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { alerts } from "@/data/mockData";
import { AlertTriangle, Info, AlertCircle, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";

const severityConfig = {
  critical: { icon: AlertCircle, label: "Crítico", class: "border-l-destructive bg-destructive/5", badge: "bg-destructive/10 text-destructive" },
  warning: { icon: AlertTriangle, label: "Aviso", class: "border-l-agro-gold bg-agro-gold/5", badge: "bg-agro-gold/10 text-agro-gold" },
  info: { icon: Info, label: "Info", class: "border-l-primary bg-primary/5", badge: "bg-primary/10 text-primary" },
};

const AlertsPage = () => {
  const [filter, setFilter] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = alerts.filter((a) => {
    const matchFilter = filter === "all" || a.severity === filter;
    const matchSearch = a.title.toLowerCase().includes(search.toLowerCase()) || a.description.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold font-display">Alertas</h1>
        <p className="text-muted-foreground text-sm">Central de notificações e alertas do sistema</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Buscar alerta..." className="pl-9" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div className="flex gap-2">
          {[{ key: "all", label: "Todos" }, { key: "critical", label: "Críticos" }, { key: "warning", label: "Avisos" }, { key: "info", label: "Info" }].map((f) => (
            <button key={f.key} onClick={() => setFilter(f.key)}
              className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${filter === f.key ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <AnimatePresence>
          {filtered.map((alert, i) => {
            const config = severityConfig[alert.severity];
            const Icon = config.icon;
            const isExpanded = expanded === alert.id;

            return (
              <motion.div key={alert.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ delay: i * 0.05 }}>
                <Card className={`glass-card border-l-4 cursor-pointer hover-lift ${config.class}`} onClick={() => setExpanded(isExpanded ? null : alert.id)}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${alert.severity === "critical" ? "text-destructive" : alert.severity === "warning" ? "text-agro-gold" : "text-primary"}`} />
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <h3 className="font-bold text-sm">{alert.title}</h3>
                          <div className="flex items-center gap-2">
                            {!alert.read && <span className="w-2 h-2 rounded-full bg-primary animate-pulse-green" />}
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${config.badge}`}>{config.label}</span>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{alert.description}</p>
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                              <div className="mt-3 pt-3 border-t border-border grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                                <div><span className="text-muted-foreground">Sensor:</span> <span className="font-medium">{alert.sensor}</span></div>
                                <div><span className="text-muted-foreground">Silo:</span> <span className="font-medium">{alert.silo}</span></div>
                                <div><span className="text-muted-foreground">Grão:</span> <span className="font-medium">{alert.grain}</span></div>
                                <div><span className="text-muted-foreground">Data:</span> <span className="font-medium">{alert.timestamp}</span></div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AlertsPage;
