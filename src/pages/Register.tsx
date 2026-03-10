import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sprout, Eye, EyeOff, ArrowRight, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import supabase from "../../utils/supabase";

const Register = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [showPass, setShowPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { toast } = useToast();

  // Função para atualizar campos do form
  const update = (key: string, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  // Função de envio do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação de senha
    if (form.password !== form.confirmPassword) {
      toast({
        title: "Erro",
        description: "As senhas não coincidem"
      });
      return;
    }

    setIsLoading(true);

    try {
      // Cadastro no Supabase
      const { data, error } = await supabase.auth.signUp({
        email: form.email,
        password: form.password
      });

      if (error) {
        toast({
          title: "Erro",
          description: error.message
        });
        return;
      }

      // Sucesso
      toast({
        title: "Conta criada!",
        description: "Cadastro realizado com sucesso. Verifique seu email para confirmar."
      });

      navigate("/login");
    } catch (err) {
      toast({
        title: "Erro",
        description: "Erro ao criar usuário."
      });
    } finally {
      setIsLoading(false);
    }
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
          <h1 className="text-white text-xl font-bold">Criar Conta</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* EMAIL */}
          <div className="space-y-2">
            <Label className="text-white/70 text-xs">Email</Label>
            <Input
              type="email"
              placeholder="email@agro.com"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className="bg-white/5 border-white/10 text-white"
            />
          </div>


          {/* PASSWORD */}
          <div className="space-y-2">
            <Label className="text-white/70 text-xs">Senha</Label>

            <div className="relative">
              <Input
                type={showPass ? "text" : "password"}
                placeholder="********"
                value={form.password}
                onChange={(e) => update("password", e.target.value)}
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


          {/* CONFIRM PASSWORD */}
          <div className="space-y-2">
            <Label className="text-white/70 text-xs">Confirmar Senha</Label>
            <Input
              type="password"
              placeholder="********"
              value={form.confirmPassword}
              onChange={(e) => update("confirmPassword", e.target.value)}
              className="bg-white/5 border-white/10 text-white"
            />
          </div>


          <Button
            disabled={isLoading}
            className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold"
          >
            {isLoading ? (
              <Loader2 className="animate-spin" />
            ) : (
              <>
                Criar Conta
                <ArrowRight className="ml-2" size={18} />
              </>
            )}
          </Button>


          <p className="text-center text-sm text-white/40">
            Já tem conta?{" "}
            <Link to="/login" className="text-emerald-400">
              Fazer login
            </Link>
          </p>

        </form>
      </motion.div>
    </div>
  );
};

export default Register;