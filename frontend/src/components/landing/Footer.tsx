import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground text-background py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg gradient-agro flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold font-display">AgroMonitor</span>
          </div>
          <p className="text-sm opacity-60">Plataforma líder em monitoramento IoT para o agronegócio brasileiro.</p>
        </div>
        <div>
          <h4 className="font-bold font-display mb-4">Produto</h4>
          <ul className="space-y-2 text-sm opacity-60">
            <li><a href="#features" className="hover:opacity-100 transition-opacity">Funcionalidades</a></li>
            <li><a href="#planos" className="hover:opacity-100 transition-opacity">Planos</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">Integrações</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold font-display mb-4">Empresa</h4>
          <ul className="space-y-2 text-sm opacity-60">
            <li><a href="#" className="hover:opacity-100 transition-opacity">Sobre</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">Blog</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">Contato</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold font-display mb-4">Contato</h4>
          <ul className="space-y-2 text-sm opacity-60">
            <li>contato@agromonitor.com.br</li>
            <li>(11) 9999-8888</li>
            <li>São Paulo, SP - Brasil</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm opacity-40">
        © 2026 AgroMonitor. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
