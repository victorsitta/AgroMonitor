import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sprout, Eye, EyeOff, ArrowRight, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { toast } = useToast();
  const { signInUser } = useAuth();

  const update = (key: string, value: string) => setForm(f => ({ ...f, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const { error } = await signInUser(form.email, form.password);

    if (error) {
      toast({ title: "Erro no login", description: error, variant: "destructive" });
      setIsLoading(false);
      return;
    }

    toast({ title: "Sucesso", description: "Login realizado com sucesso!" });
    navigate("/dashboard");
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#010a08]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-[#051510]/80 backdrop-blur-xl p-10 rounded-3xl border border-white/10"
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
            <Sprout className="text-emerald-950" />
          </div>
          <h1 className="text-white text-xl font-bold">Login</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label className="text-white/70 text-xs">Email</Label>
            <Input
              type="email"
              placeholder="email@agro.com"
              value={form.email}
              onChange={e => update("email", e.target.value)}
              className="bg-white/5 border-white/10 text-white"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-white/70 text-xs">Senha</Label>
            <div className="relative">
              <Input
                type={showPass ? "text" : "password"}
                placeholder="********"
                value={form.password}
                onChange={e => update("password", e.target.value)}
                className="bg-white/5 border-white/10 text-white"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30"
              >
                {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold flex items-center justify-center gap-2"
          >
            {isLoading ? <Loader2 className="animate-spin" /> : <>Entrar <ArrowRight size={18} /></>}
          </Button>

          <p className="text-center text-sm text-white/40">
            Não possui conta?{" "}
            <Link to="/register" className="text-emerald-400">Criar Conta</Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
