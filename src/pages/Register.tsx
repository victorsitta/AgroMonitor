import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sprout, Eye, EyeOff, ArrowRight, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { supabase } from "@/utils/supabase";

export type User = {
  email?: string;
  pass?: string;
}


const Register = () => {

  const [user, setUser] = useState<User>();
  const [users, setUsers] = useState<User[]>([]);

  const [showPass, setShowPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { toast } = useToast();

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    console.log('handleRegister')
    
    if (user?.email && user?.pass) {
      setIsLoading(true);
      setUsers([...users, user]);

      const { data, error } = await supabase.auth.signUp({
        email: user.email,
        password: user.pass
      })

      if (error){
        alert("Deu ruim!")
        setIsLoading(false);
      } 
      else {
        toast({
          title: "Conta criada!",
          description: "Verifique seu email para confirmar."
        });
        navigate("/login");
      }

    } else {
      toast({
        title: "Erro",
        description: "As senhas não coincidem"
      });
    }
  }

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

        <form onSubmit={handleRegister} className="space-y-6">

          {/* EMAIL */}
          <div className="space-y-2">
            <Label className="text-white/70 text-xs">Email</Label>
            <Input
              type="email"
              placeholder="email@agro.com"
              onChange={(e) => setUser(
                {
                  ...user, email: e.target.value
                }
              )}
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
                onChange={(e) => setUser(
                      {
                        ...user, pass: e.target.value
                      }
                    )}
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