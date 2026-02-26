import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Leaf, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", farm: "", password: "", confirmPassword: "" });
  const [showPass, setShowPass] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();
  const { toast } = useToast();

  const update = (key: string, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => { const n = { ...e }; delete n[key]; return n; });
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Nome obrigatório";
    if (!form.email) e.email = "Email obrigatório";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Email inválido";
    if (!form.phone) e.phone = "Telefone obrigatório";
    if (!form.farm.trim()) e.farm = "Nome da fazenda obrigatório";
    if (!form.password) e.password = "Senha obrigatória";
    else if (form.password.length < 6) e.password = "Mínimo 6 caracteres";
    if (form.password !== form.confirmPassword) e.confirmPassword = "Senhas não coincidem";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    toast({ title: "Conta criada!", description: "Redirecionando para o dashboard..." });
    setTimeout(() => navigate("/dashboard"), 1000);
  };

  const Field = ({ label, id, type = "text", placeholder, value, onChange }: any) => (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} placeholder={placeholder} value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)} className={errors[id] ? "border-destructive" : ""} />
      {errors[id] && <p className="text-xs text-destructive">{errors[id]}</p>}
    </div>
  );

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 gradient-agro relative items-center justify-center p-12">
        <div className="absolute inset-0 bg-agro-dark/20" />
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="relative z-10 text-center text-primary-foreground">
          <div className="text-8xl mb-6">🌱</div>
          <h2 className="text-4xl font-bold font-display mb-4">Junte-se a nós</h2>
          <p className="text-lg opacity-80 max-w-md">Mais de 520 fazendas já confiam no AgroMonitor para proteger sua produção.</p>
        </motion.div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md space-y-6">
          <div className="text-center">
            <Link to="/" className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg gradient-agro flex items-center justify-center"><Leaf className="w-6 h-6 text-primary-foreground" /></div>
              <span className="text-xl font-bold font-display">AgroMonitor</span>
            </Link>
            <h1 className="text-3xl font-bold font-display">Criar conta</h1>
            <p className="text-muted-foreground mt-2">Preencha seus dados para começar</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Field label="Nome completo" id="name" placeholder="João da Silva" value={form.name} onChange={(v: string) => update("name", v)} />
            <Field label="Email" id="email" type="email" placeholder="seu@email.com" value={form.email} onChange={(v: string) => update("email", v)} />
            <Field label="Telefone" id="phone" placeholder="(11) 99999-8888" value={form.phone} onChange={(v: string) => update("phone", v)} />
            <Field label="Nome da Fazenda" id="farm" placeholder="Fazenda São João" value={form.farm} onChange={(v: string) => update("farm", v)} />
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <div className="relative">
                <Input id="password" type={showPass ? "text" : "password"} placeholder="••••••••" value={form.password} onChange={(e) => update("password", e.target.value)} className={errors.password ? "border-destructive" : ""} />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.password && <p className="text-xs text-destructive">{errors.password}</p>}
            </div>
            <Field label="Confirmar senha" id="confirmPassword" type="password" placeholder="••••••••" value={form.confirmPassword} onChange={(v: string) => update("confirmPassword", v)} />
            <Button type="submit" className="w-full gradient-agro border-0 py-6 text-lg">Criar Conta</Button>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            Já tem uma conta?{" "}
            <Link to="/login" className="text-primary font-medium hover:underline">Faça login</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
