import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sprout, Eye, EyeOff, Satellite, Wind, Droplets, ArrowRight, ShieldCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Sincronizando...", description: "Acesso via Satélite autorizado." });
    setTimeout(() => navigate("/dashboard"), 1000);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center font-sans relative overflow-hidden bg-[#010a08]">
      
      {/* BACKGROUND DINÂMICO - Simula o campo ao amanhecer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-[#010a08] to-emerald-900 opacity-80" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000')] bg-cover bg-center mix-blend-overlay opacity-40" />
        
        {/* Luzes de satélite passando */}
        <motion.div 
          animate={{ x: ['-100%', '200%'], y: ['-100%', '200%'] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute w-[500px] h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent rotate-45"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] grid lg:grid-cols-12 gap-8 p-6">
        
        {/* WIDGETS DE STATUS (HUD) - Só aparecem no Desktop */}
        <div className="hidden lg:flex lg:col-span-7 flex-col justify-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-2"
          >
            <div className="flex items-center gap-3 text-emerald-400 mb-4">
              <div className="h-[2px] w-12 bg-emerald-500" />
              <span className="text-xs font-bold uppercase tracking-[0.4em]">Intelligence Division</span>
            </div>
            <h1 className="text-7xl font-black text-white leading-none tracking-tighter">
              PRECISÃO <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">NO CAMPO.</span>
            </h1>
          </motion.div>

          {/* Cards de Sensores Fictícios */}
          <div className="grid grid-cols-3 gap-4 max-w-lg">
            {[
              { icon: <Wind className="w-4 h-4" />, label: "Vento", val: "12km/h", color: "border-emerald-500/30" },
              { icon: <Droplets className="w-4 h-4" />, label: "Umidade", val: "68%", color: "border-emerald-500/30" },
              { icon: <Satellite className="w-4 h-4" />, label: "Signal", val: "Strong", color: "border-emerald-500/30" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className={`p-4 rounded-2xl border ${stat.color} bg-black/20 backdrop-blur-md`}
              >
                <div className="text-emerald-500 mb-2">{stat.icon}</div>
                <div className="text-[10px] uppercase text-emerald-200/50 font-bold">{stat.label}</div>
                <div className="text-white font-mono text-lg">{stat.val}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* LOGIN FORM - O "Glass Card" */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="lg:col-span-5"
        >
          <div className="bg-[#051510]/80 backdrop-blur-2xl p-8 md:p-12 rounded-[48px] border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.4)] relative">
            
            {/* Detalhe de Design: Glow no topo */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

            <div className="flex justify-between items-start mb-12">
              <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                <Sprout className="text-emerald-950 w-7 h-7" />
              </div>
              <div className="text-right">
                <div className="text-[10px] text-emerald-500 font-black uppercase tracking-widest">Portal Oficial</div>
                <div className="text-white/40 text-[10px] font-mono leading-tight">AUTH_v.8.1</div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-3">
                <Label className="text-emerald-100/60 text-[10px] uppercase tracking-[0.2em] ml-1 font-bold">Identificação Biométrica/Email</Label>
                <Input 
                  type="email" 
                  placeholder="operador@agro.com" 
                  className="h-14 bg-white/5 border-white/10 focus:border-emerald-500 focus:ring-emerald-500/20 text-white rounded-2xl px-6 transition-all"
                />
              </div>

              <div className="space-y-3">
                <Label className="text-emerald-100/60 text-[10px] uppercase tracking-[0.2em] ml-1 font-bold">Chave Criptográfica</Label>
                <div className="relative">
                  <Input 
                    type={showPass ? "text" : "password"} 
                    placeholder="••••••••" 
                    className="h-14 bg-white/5 border-white/10 focus:border-emerald-500 focus:ring-emerald-500/20 text-white rounded-2xl px-6 pr-14 transition-all"
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-white/20 hover:text-emerald-500"
                  >
                    {showPass ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <Button 
                className="w-full h-16 bg-gradient-to-br from-emerald-400 to-emerald-700 hover:from-emerald-300 hover:to-emerald-600 text-emerald-950 font-black text-sm uppercase tracking-widest rounded-2xl shadow-[0_20px_40px_-12px_rgba(16,185,129,0.4)] transition-all active:scale-[0.98] flex items-center justify-center gap-3"
              >
                Iniciar Sincronização
                <ArrowRight className="w-5 h-5" />
              </Button>
            </form>

            <div className="mt-12 pt-8 border-t border-white/5 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-[10px] text-white/40 font-bold uppercase tracking-widest">
                <ShieldCheck className="w-3 h-3 text-emerald-500" /> Criptografia Nível Militar Ativa
              </div>
              <p className="text-center text-xs text-white/30 font-medium">
                Não possui conta? <Link to="/register" className="text-emerald-400 hover:underline">Solicitar credenciais à gerência</Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* FOOTER DECORATIVO */}
      <div className="absolute bottom-6 left-10 hidden lg:block">
        <div className="flex items-center gap-6 opacity-20 transition-opacity hover:opacity-100">
          <div className="h-12 w-[1px] bg-white" />
          <div className="text-[10px] text-white font-mono">
            SYSTEM STATUS: <span className="text-emerald-500">OPTIMAL</span> <br />
            LAST SYNC: 26-FEB-2026
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;