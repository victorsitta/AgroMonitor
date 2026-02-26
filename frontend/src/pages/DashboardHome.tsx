import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { sensors, alerts, silos, temperatureHistory, humidityHistory } from "@/data/mockData";
import { Thermometer, Droplets, Cpu, Bell, AlertTriangle } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { motion } from "framer-motion";

const statusColor = { optimal: "bg-primary", warning: "bg-agro-gold", critical: "bg-destructive" };

const DashboardHome = () => {
  const activeSensors = sensors.filter((s) => s.status === "active").length;
  const activeAlerts = alerts.filter((a) => !a.read).length;
  const avgTemp = +(sensors.filter((s) => s.type === "temperature" && s.status !== "inactive").reduce((a, s) => a + s.lastReading, 0) / sensors.filter((s) => s.type === "temperature" && s.status !== "inactive").length).toFixed(1);
  const avgHum = +(sensors.filter((s) => s.type === "humidity" && s.status !== "inactive").reduce((a, s) => a + s.lastReading, 0) / sensors.filter((s) => s.type === "humidity" && s.status !== "inactive").length).toFixed(1);

  const summaryCards = [
    { title: "Sensores Ativos", value: `${activeSensors}/${sensors.length}`, icon: Cpu, color: "text-primary" },
    { title: "Alertas Ativos", value: activeAlerts, icon: Bell, color: "text-destructive" },
    { title: "Temperatura Média", value: `${avgTemp}°C`, icon: Thermometer, color: "text-agro-gold" },
    { title: "Umidade Média", value: `${avgHum}%`, icon: Droplets, color: "text-blue-500" },
  ];

  const recentAlerts = alerts.slice(0, 4);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold font-display">Dashboard</h1>
        <p className="text-muted-foreground text-sm">Visão geral do monitoramento</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {summaryCards.map((c, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            <Card className="glass-card hover-lift">
              <CardContent className="p-4 flex items-center gap-4">
                <div className={`w-10 h-10 rounded-lg bg-muted flex items-center justify-center ${c.color}`}>
                  <c.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{c.title}</p>
                  <p className="text-xl font-bold font-display">{c.value}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="glass-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-display flex items-center gap-2"><Thermometer className="w-4 h-4 text-agro-gold" />Temperatura (°C)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={temperatureHistory}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="time" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
                <YAxis tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }} />
                <Legend />
                <Line type="monotone" dataKey="feijao" name="Feijão" stroke="hsl(142, 60%, 45%)" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="milho" name="Milho" stroke="hsl(38, 92%, 50%)" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="cafe" name="Café" stroke="hsl(0, 72%, 51%)" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-display flex items-center gap-2"><Droplets className="w-4 h-4 text-blue-500" />Umidade (%)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={humidityHistory}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="time" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
                <YAxis tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }} />
                <Legend />
                <Line type="monotone" dataKey="feijao" name="Feijão" stroke="hsl(142, 60%, 45%)" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="milho" name="Milho" stroke="hsl(38, 92%, 50%)" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="cafe" name="Café" stroke="hsl(0, 72%, 51%)" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Silos Grid + Recent Alerts */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="glass-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-display">Status dos Silos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {silos.map((silo) => (
                <div key={silo.id} className="p-3 rounded-xl border border-border hover:border-primary/50 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold font-display">{silo.name}</span>
                    <span className={`w-2.5 h-2.5 rounded-full ${statusColor[silo.status]} ${silo.status === "critical" ? "animate-pulse-green" : ""}`} />
                  </div>
                  <p className="text-[10px] text-muted-foreground">{silo.grain}</p>
                  <div className="mt-2 h-1.5 rounded-full bg-muted overflow-hidden">
                    <div className={`h-full rounded-full ${statusColor[silo.status]}`} style={{ width: `${(silo.filled / silo.capacity) * 100}%` }} />
                  </div>
                  <div className="flex justify-between mt-1 text-[10px] text-muted-foreground">
                    <span>{silo.temperature}°C</span>
                    <span>{silo.humidity}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-display flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-agro-gold" />Alertas Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentAlerts.map((a) => (
                <div key={a.id} className={`p-3 rounded-lg border transition-colors hover:bg-muted/50 ${!a.read ? "border-l-4" : ""} ${a.severity === "critical" ? "border-l-destructive" : a.severity === "warning" ? "border-l-agro-gold" : "border-l-primary"}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{a.title}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${a.severity === "critical" ? "bg-destructive/10 text-destructive" : a.severity === "warning" ? "bg-agro-gold/10 text-agro-gold" : "bg-primary/10 text-primary"}`}>{a.severity}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{a.description}</p>
                  <p className="text-[10px] text-muted-foreground mt-1">{a.timestamp}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardHome;
