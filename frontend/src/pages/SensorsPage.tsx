import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { sensors } from "@/data/mockData";
import { Search, Cpu, Battery, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

const SensorsPage = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<string>("all");

  const filtered = sensors.filter((s) => {
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) || s.location.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "all" || s.status === filter;
    return matchSearch && matchFilter;
  });

  const statusConfig = {
    active: { label: "Ativo", class: "bg-primary/10 text-primary border-primary/20" },
    alert: { label: "Alerta", class: "bg-agro-gold/10 text-agro-gold border-agro-gold/20" },
    inactive: { label: "Inativo", class: "bg-muted text-muted-foreground border-muted" },
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold font-display">Sensores</h1>
        <p className="text-muted-foreground text-sm">Gerencie todos os sensores da sua operação</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Buscar sensor..." className="pl-9" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div className="flex gap-2">
          {[{ key: "all", label: "Todos" }, { key: "active", label: "Ativos" }, { key: "alert", label: "Alerta" }, { key: "inactive", label: "Inativos" }].map((f) => (
            <button key={f.key} onClick={() => setFilter(f.key)}
              className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${filter === f.key ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((sensor, i) => (
          <motion.div key={sensor.id} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
            <Card className="glass-card hover-lift cursor-pointer">
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                      <Cpu className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">{sensor.name}</p>
                      <p className="text-[10px] font-mono text-muted-foreground">{sensor.id}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${statusConfig[sensor.status].class}`}>
                    {statusConfig[sensor.status].label}
                  </span>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3" /> {sensor.location}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" /> {sensor.lastUpdate}
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <Battery className="w-3 h-3" />
                    <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                      <div className={`h-full rounded-full ${sensor.battery > 50 ? "bg-primary" : sensor.battery > 20 ? "bg-agro-gold" : "bg-destructive"}`} style={{ width: `${sensor.battery}%` }} />
                    </div>
                    <span className="text-muted-foreground">{sensor.battery}%</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-border">
                  <p className="text-xs text-muted-foreground">Última leitura</p>
                  <p className="text-lg font-bold font-display">{sensor.lastReading}{sensor.unit}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SensorsPage;
