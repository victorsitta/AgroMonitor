import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { grains, sensors, temperatureHistory, humidityHistory } from "@/data/mockData";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const statusLabel = { optimal: "Ótimo", warning: "Atenção", critical: "Crítico" };
const statusColor = { optimal: "bg-primary text-primary-foreground", warning: "bg-agro-gold text-primary-foreground", critical: "bg-destructive text-destructive-foreground" };

const GrainsPage = () => {
  const [activeGrain, setActiveGrain] = useState(grains[0].id);
  const grain = grains.find((g) => g.id === activeGrain)!;
  const grainKey = grain.id as keyof (typeof temperatureHistory)[0];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold font-display">Monitoramento de Grãos</h1>
        <p className="text-muted-foreground text-sm">Dados detalhados por tipo de grão</p>
      </div>

      <Tabs value={activeGrain} onValueChange={setActiveGrain}>
        <TabsList className="flex-wrap h-auto gap-1">
          {grains.map((g) => (
            <TabsTrigger key={g.id} value={g.id} className="gap-1">
              <span>{g.icon}</span> {g.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {grains.map((g) => (
          <TabsContent key={g.id} value={g.id}>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              {/* Summary */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { label: "Temperatura", value: `${g.temperature}°C` },
                  { label: "Umidade", value: `${g.humidity}%` },
                  { label: "Qualidade", value: `${g.quality}%` },
                  { label: "Total", value: `${g.totalTons} ton` },
                  { label: "Status", value: statusLabel[g.status], badge: true },
                ].map((item, i) => (
                  <Card key={i} className="glass-card">
                    <CardContent className="p-4 text-center">
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      {item.badge ? (
                        <span className={`inline-block mt-1 px-3 py-0.5 rounded-full text-xs font-bold ${statusColor[g.status]}`}>{item.value}</span>
                      ) : (
                        <p className="text-lg font-bold font-display">{item.value}</p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Charts */}
              <div className="grid lg:grid-cols-2 gap-6">
                <Card className="glass-card">
                  <CardHeader className="pb-2"><CardTitle className="text-sm font-display">Temperatura ao longo do dia</CardTitle></CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={220}>
                      <LineChart data={temperatureHistory}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis dataKey="time" tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" />
                        <YAxis tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" />
                        <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }} />
                        <Line type="monotone" dataKey={grainKey} stroke="hsl(var(--primary))" strokeWidth={2} dot={false} />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardHeader className="pb-2"><CardTitle className="text-sm font-display">Umidade ao longo do dia</CardTitle></CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={220}>
                      <LineChart data={humidityHistory}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis dataKey="time" tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" />
                        <YAxis tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" />
                        <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }} />
                        <Line type="monotone" dataKey={grainKey} stroke="hsl(200, 70%, 50%)" strokeWidth={2} dot={false} />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              {/* Sensors Table */}
              <Card className="glass-card">
                <CardHeader className="pb-2"><CardTitle className="text-sm font-display">Sensores Associados</CardTitle></CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Nome</TableHead>
                        <TableHead>Localização</TableHead>
                        <TableHead>Leitura</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sensors.slice(0, 5).map((s) => (
                        <TableRow key={s.id}>
                          <TableCell className="font-mono text-xs">{s.id}</TableCell>
                          <TableCell className="text-sm">{s.name}</TableCell>
                          <TableCell className="text-sm text-muted-foreground">{s.location}</TableCell>
                          <TableCell className="font-bold">{s.lastReading}{s.unit}</TableCell>
                          <TableCell>
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${s.status === "active" ? "bg-primary/10 text-primary" : s.status === "alert" ? "bg-agro-gold/10 text-agro-gold" : "bg-muted text-muted-foreground"}`}>
                              {s.status === "active" ? "Ativo" : s.status === "alert" ? "Alerta" : "Inativo"}
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default GrainsPage;
