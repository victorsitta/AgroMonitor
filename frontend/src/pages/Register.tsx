import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sprout, Eye, EyeOff, Satellite, ArrowRight, Loader2, ShieldCheck, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", farm: "", password: "", confirmPassword: "" });
  const [showPass, setShowPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const update = (key: string, value: string) => setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulando handshake de criptografia
    await new Promise(r => setTimeout(r, 2000));
    toast({ title: "Estação Configurada!", description: "Sincronização biométrica concluída." });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center font-sans relative overflow-hidden bg-[#010a08]">
      
      {/* BACKGROUND DINÂMICO - Estética Satélite */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-[#010a08] to-emerald-900 opacity-90" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000')] bg-cover bg-center mix-blend-overlay opacity-20" />
        
        {/* Scanning Line Effect */}
        <motion.div 
          animate={{ y: ['-100%', '200%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-x-0 h-[2px] bg-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.5)] z-0"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] grid lg:grid-cols-12 gap-8 p-6">
        
        {/* LADO ESQUERDO: INFRAESTRUTURA DE DADOS */}
        <div className="hidden lg:flex lg:col-span-5 flex-col justify-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 text-emerald-400">
              <div className="h-[2px] w-12 bg-emerald-500" />
              <span className="text-xs font-bold uppercase tracking-[0.4em]">Protocolo de Registro</span>
            </div>
            <h1 className="text-6xl font-black text-white leading-tight tracking-tighter">
              EXPANDA SUA <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">OPERAÇÃO.</span>
            </h1>
            <p className="text-emerald-100/40 max-w-sm text-sm leading-relaxed font-mono">
              Inicializando interface de conexão neural para gerenciamento de safras em tempo real via rede Starlink.
            </p>
          </motion.div>

          {/* Status HUD */}
          <div className="space-y-3">
            {[
              { label: "Criptografia", val: "AES-256", icon: <ShieldCheck className="w-4 h-4"/> },
              { label: "Localização", val: "Georeferenciada", icon: <MapPin className="w-4 h-4"/> },
              { label: "Uplink", val: "Ativo", icon: <Satellite className="w-4 h-4"/> },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 bg-white/5 border border-white/5 p-3 rounded-xl w-64"
              >
                <div className="text-emerald-500">{item.icon}</div>
                <div>
                   <p className="text-[8px] uppercase text-emerald-500/50 font-bold leading-none">{item.label}</p>
                   <p className="text-white font-mono text-xs">{item.val}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FORMULÁRIO DE REGISTRO (Glass Card) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-7"
        >
          <div className="bg-[#051510]/80 backdrop-blur-2xl p-8 md:p-10 rounded-[48px] border border-white/10 shadow-2xl relative">
            
            <div className="flex justify-between items-center mb-10">
              <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                <Sprout className="text-emerald-950 w-7 h-7" />
              </div>
              <div className="text-right">
                <div className="text-[10px] text-emerald-500 font-black uppercase tracking-widest">Nova Credencial</div>
                <div className="text-white/40 text-[10px] font-mono leading-tight">GEO_NODE_INIT</div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Inputs Fields */}
                {[
                  { id: "name", label: "Operador Responsável", placeholder: "Nome Completo", type: "text" },
                  { id: "email", label: "Email de Autenticação", placeholder: "operador@agro.com", type: "email" },
                  { id: "phone", label: "Terminal Móvel", placeholder: "+55 (00) 00000-0000", type: "text" },
                  { id: "farm", label: "Identificação da Unidade", placeholder: "Nome da Fazenda", type: "text" },
                ].map((f) => (
                  <div key={f.id} className="space-y-2">
                    <Label className="text-emerald-100/60 text-[10px] uppercase tracking-[0.2em] ml-1 font-bold">
                      {f.label}
                    </Label>
                    <Input 
                      type={f.type}
                      placeholder={f.placeholder}
                      value={(form as any)[f.id]}
                      onChange={(e) => update(f.id, e.target.value)}
                      className="h-12 bg-white/5 border-white/10 focus:border-emerald-500 focus:ring-emerald-500/20 text-white rounded-xl px-5 transition-all placeholder:text-white/10"
                    />
                  </div>
                ))}

                <div className="space-y-2">
                  <Label className="text-emerald-100/60 text-[10px] uppercase tracking-[0.2em] ml-1 font-bold">Chave de Acesso</Label>
                  <div className="relative">
                    <Input 
                      type={showPass ? "text" : "password"}
                      value={form.password}
                      onChange={(e) => update("password", e.target.value)}
                      placeholder="••••••••"
                      className="h-12 bg-white/5 border-white/10 focus:border-emerald-500 text-white rounded-xl px-5"
                    />
                    <button 
                      type="button" 
                      onClick={() => setShowPass(!showPass)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-emerald-500"
                    >
                      {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-emerald-100/60 text-[10px] uppercase tracking-[0.2em] ml-1 font-bold">Confirmar Chave</Label>
                  <Input 
                    type="password"
                    value={form.confirmPassword}
                    onChange={(e) => update("confirmPassword", e.target.value)}
                    placeholder="••••••••"
                    className="h-12 bg-white/5 border-white/10 focus:border-emerald-500 text-white rounded-xl px-5"
                  />
                </div>
              </div>

              <div className="pt-4 space-y-6">
                <Button 
                  disabled={isLoading}
                  className="w-full h-16 bg-gradient-to-br from-emerald-400 to-emerald-700 hover:from-emerald-300 hover:to-emerald-600 text-emerald-950 font-black text-sm uppercase tracking-widest rounded-2xl shadow-[0_20px_40px_-12px_rgba(16,185,129,0.4)] transition-all active:scale-[0.98] flex items-center justify-center gap-3"
                >
                  {isLoading ? (
                    <Loader2 className="w-6 h-6 animate-spin" />
                  ) : (
                    <>
                      Solicitar Acesso ao Terminal
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </Button>

                <p className="text-center text-xs text-white/30 font-medium">
                  Já possui autorização? <Link to="/login" className="text-emerald-400 hover:underline">Acessar terminal existente</Link>
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>

      {/* FOOTER DECORATIVO */}
      <div className="absolute bottom-6 right-10 hidden lg:block">
        <div className="flex items-center gap-6 opacity-20 hover:opacity-100 transition-opacity duration-500">
          <div className="text-right">
            <div className="text-[10px] text-white font-mono">
              ENCRYPTION: <span className="text-emerald-500">MILITARY_GRADE</span> <br />
              NETWORK: <span className="text-emerald-500">STABLE</span>
            </div>
          </div>
          <div className="h-12 w-[1px] bg-white" />
        </div>
      </div>
    </div>
  );
};

export default Register;