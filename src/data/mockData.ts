export interface Sensor {
  id: string;
  name: string;
  type: "temperature" | "humidity" | "quality";
  location: string;
  silo: string;
  status: "active" | "inactive" | "alert";
  battery: number;
  lastReading: number;
  lastUpdate: string;
  unit: string;
}

export interface GrainData {
  id: string;
  name: string;
  icon: string;
  temperature: number;
  humidity: number;
  quality: number;
  status: "optimal" | "warning" | "critical";
  sensors: number;
  silos: number;
  totalTons: number;
}

export interface Alert {
  id: string;
  title: string;
  description: string;
  severity: "critical" | "warning" | "info";
  sensor: string;
  silo: string;
  grain: string;
  timestamp: string;
  read: boolean;
}

export interface SiloData {
  id: string;
  name: string;
  grain: string;
  capacity: number;
  filled: number;
  temperature: number;
  humidity: number;
  status: "optimal" | "warning" | "critical";
}

export const sensors: Sensor[] = [
  { id: "S001", name: "Sensor Temp A1", type: "temperature", location: "Silo A - Nível 1", silo: "Silo A", status: "active", battery: 92, lastReading: 24.5, lastUpdate: "2026-02-26 14:30", unit: "°C" },
  { id: "S002", name: "Sensor Umid A1", type: "humidity", location: "Silo A - Nível 1", silo: "Silo A", status: "active", battery: 87, lastReading: 12.3, lastUpdate: "2026-02-26 14:30", unit: "%" },
  { id: "S003", name: "Sensor Temp A2", type: "temperature", location: "Silo A - Nível 2", silo: "Silo A", status: "active", battery: 78, lastReading: 25.1, lastUpdate: "2026-02-26 14:28", unit: "°C" },
  { id: "S004", name: "Sensor Umid A2", type: "humidity", location: "Silo A - Nível 2", silo: "Silo A", status: "alert", battery: 45, lastReading: 15.8, lastUpdate: "2026-02-26 14:25", unit: "%" },
  { id: "S005", name: "Sensor Temp B1", type: "temperature", location: "Silo B - Nível 1", silo: "Silo B", status: "active", battery: 95, lastReading: 22.8, lastUpdate: "2026-02-26 14:30", unit: "°C" },
  { id: "S006", name: "Sensor Umid B1", type: "humidity", location: "Silo B - Nível 1", silo: "Silo B", status: "active", battery: 91, lastReading: 11.5, lastUpdate: "2026-02-26 14:30", unit: "%" },
  { id: "S007", name: "Sensor Temp C1", type: "temperature", location: "Silo C - Nível 1", silo: "Silo C", status: "active", battery: 83, lastReading: 26.3, lastUpdate: "2026-02-26 14:29", unit: "°C" },
  { id: "S008", name: "Sensor Umid C1", type: "humidity", location: "Silo C - Nível 1", silo: "Silo C", status: "inactive", battery: 12, lastReading: 0, lastUpdate: "2026-02-25 10:00", unit: "%" },
  { id: "S009", name: "Sensor Qual A1", type: "quality", location: "Silo A - Base", silo: "Silo A", status: "active", battery: 88, lastReading: 94, lastUpdate: "2026-02-26 14:30", unit: "%" },
  { id: "S010", name: "Sensor Temp D1", type: "temperature", location: "Silo D - Nível 1", silo: "Silo D", status: "alert", battery: 67, lastReading: 32.1, lastUpdate: "2026-02-26 14:30", unit: "°C" },
  { id: "S011", name: "Sensor Umid D1", type: "humidity", location: "Silo D - Nível 1", silo: "Silo D", status: "active", battery: 74, lastReading: 18.2, lastUpdate: "2026-02-26 14:28", unit: "%" },
  { id: "S012", name: "Sensor Qual B1", type: "quality", location: "Silo B - Base", silo: "Silo B", status: "active", battery: 96, lastReading: 97, lastUpdate: "2026-02-26 14:30", unit: "%" },
];

export const grains: GrainData[] = [
  { id: "feijao", name: "Feijão", icon: "🫘", temperature: 24.5, humidity: 12.3, quality: 94, status: "optimal", sensors: 4, silos: 2, totalTons: 450 },
  { id: "trigo", name: "Trigo", icon: "🌾", temperature: 22.8, humidity: 11.5, quality: 97, status: "optimal", sensors: 3, silos: 1, totalTons: 820 },
  { id: "milho", name: "Milho", icon: "🌽", temperature: 26.3, humidity: 13.1, quality: 91, status: "warning", sensors: 4, silos: 2, totalTons: 1200 },
  { id: "soja", name: "Soja", icon: "🫛", temperature: 23.1, humidity: 11.8, quality: 96, status: "optimal", sensors: 3, silos: 2, totalTons: 980 },
  { id: "arroz", name: "Arroz", icon: "🍚", temperature: 25.0, humidity: 12.0, quality: 93, status: "optimal", sensors: 2, silos: 1, totalTons: 340 },
  { id: "cafe", name: "Café", icon: "☕", temperature: 32.1, humidity: 18.2, quality: 85, status: "critical", sensors: 3, silos: 1, totalTons: 180 },
];

export const alerts: Alert[] = [
  { id: "A001", title: "Temperatura Elevada", description: "Temperatura do Silo D ultrapassou 30°C. Risco de deterioração do grão.", severity: "critical", sensor: "S010", silo: "Silo D", grain: "Café", timestamp: "2026-02-26 14:30", read: false },
  { id: "A002", title: "Umidade Alta", description: "Umidade no Silo A Nível 2 acima do limite recomendado (15%).", severity: "warning", sensor: "S004", silo: "Silo A", grain: "Feijão", timestamp: "2026-02-26 14:25", read: false },
  { id: "A003", title: "Bateria Baixa", description: "Sensor Umid C1 com bateria abaixo de 15%. Substituição necessária.", severity: "warning", sensor: "S008", silo: "Silo C", grain: "Milho", timestamp: "2026-02-26 12:00", read: true },
  { id: "A004", title: "Sensor Offline", description: "Sensor Umid C1 não reporta dados há mais de 24 horas.", severity: "critical", sensor: "S008", silo: "Silo C", grain: "Milho", timestamp: "2026-02-25 10:00", read: true },
  { id: "A005", title: "Qualidade em Declínio", description: "Índice de qualidade do café caiu para 85%. Verificar ventilação.", severity: "warning", sensor: "S009", silo: "Silo D", grain: "Café", timestamp: "2026-02-26 13:00", read: false },
  { id: "A006", title: "Manutenção Preventiva", description: "Sensores do Silo B completaram 90 dias. Calibração recomendada.", severity: "info", sensor: "S005", silo: "Silo B", grain: "Trigo", timestamp: "2026-02-26 08:00", read: true },
  { id: "A007", title: "Novo Lote Registrado", description: "Novo lote de soja registrado no Silo E com 200 toneladas.", severity: "info", sensor: "-", silo: "Silo E", grain: "Soja", timestamp: "2026-02-26 07:30", read: true },
];

export const silos: SiloData[] = [
  { id: "silo-a", name: "Silo A", grain: "Feijão", capacity: 500, filled: 450, temperature: 24.5, humidity: 12.3, status: "optimal" },
  { id: "silo-b", name: "Silo B", grain: "Trigo", capacity: 1000, filled: 820, temperature: 22.8, humidity: 11.5, status: "optimal" },
  { id: "silo-c", name: "Silo C", grain: "Milho", capacity: 800, filled: 600, temperature: 26.3, humidity: 13.1, status: "warning" },
  { id: "silo-d", name: "Silo D", grain: "Café", capacity: 300, filled: 180, temperature: 32.1, humidity: 18.2, status: "critical" },
  { id: "silo-e", name: "Silo E", grain: "Soja", capacity: 1200, filled: 980, temperature: 23.1, humidity: 11.8, status: "optimal" },
  { id: "silo-f", name: "Silo F", grain: "Arroz", capacity: 400, filled: 340, temperature: 25.0, humidity: 12.0, status: "optimal" },
];

export const temperatureHistory = [
  { time: "00:00", feijao: 23.2, trigo: 21.5, milho: 24.8, soja: 22.0, arroz: 23.5, cafe: 28.3 },
  { time: "02:00", feijao: 22.8, trigo: 21.2, milho: 24.5, soja: 21.8, arroz: 23.2, cafe: 27.9 },
  { time: "04:00", feijao: 22.5, trigo: 20.9, milho: 24.1, soja: 21.5, arroz: 22.8, cafe: 27.5 },
  { time: "06:00", feijao: 22.8, trigo: 21.0, milho: 24.3, soja: 21.7, arroz: 23.0, cafe: 28.0 },
  { time: "08:00", feijao: 23.5, trigo: 21.8, milho: 25.0, soja: 22.3, arroz: 23.8, cafe: 29.2 },
  { time: "10:00", feijao: 24.0, trigo: 22.3, milho: 25.8, soja: 22.8, arroz: 24.5, cafe: 30.5 },
  { time: "12:00", feijao: 24.5, trigo: 22.8, milho: 26.3, soja: 23.1, arroz: 25.0, cafe: 31.8 },
  { time: "14:00", feijao: 24.5, trigo: 22.8, milho: 26.3, soja: 23.1, arroz: 25.0, cafe: 32.1 },
];

export const humidityHistory = [
  { time: "00:00", feijao: 12.0, trigo: 11.2, milho: 12.8, soja: 11.5, arroz: 11.8, cafe: 16.5 },
  { time: "02:00", feijao: 12.1, trigo: 11.3, milho: 12.9, soja: 11.6, arroz: 11.9, cafe: 16.8 },
  { time: "04:00", feijao: 12.2, trigo: 11.4, milho: 13.0, soja: 11.7, arroz: 12.0, cafe: 17.0 },
  { time: "06:00", feijao: 12.1, trigo: 11.3, milho: 12.9, soja: 11.6, arroz: 11.9, cafe: 17.2 },
  { time: "08:00", feijao: 12.0, trigo: 11.2, milho: 12.8, soja: 11.5, arroz: 11.8, cafe: 17.5 },
  { time: "10:00", feijao: 12.2, trigo: 11.4, milho: 13.0, soja: 11.7, arroz: 12.0, cafe: 17.8 },
  { time: "12:00", feijao: 12.3, trigo: 11.5, milho: 13.1, soja: 11.8, arroz: 12.0, cafe: 18.0 },
  { time: "14:00", feijao: 12.3, trigo: 11.5, milho: 13.1, soja: 11.8, arroz: 12.0, cafe: 18.2 },
];
