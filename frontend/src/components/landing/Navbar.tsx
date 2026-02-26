import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Features", href: "#features" },
    { label: "Grãos", href: "#graos" },
    { label: "Planos", href: "#planos" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg gradient-agro flex items-center justify-center">
            <Leaf className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold font-display text-foreground">AgroMonitor</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">{l.label}</a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" asChild><Link to="/login">Entrar</Link></Button>
          <Button asChild className="gradient-agro border-0"><Link to="/register">Comece Agora</Link></Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border p-4 space-y-3 animate-fade-in">
          {links.map(l => (
            <a key={l.href} href={l.href} className="block text-sm font-medium text-muted-foreground hover:text-primary py-2" onClick={() => setMobileOpen(false)}>{l.label}</a>
          ))}
          <div className="flex gap-3 pt-2">
            <Button variant="ghost" asChild className="flex-1"><Link to="/login">Entrar</Link></Button>
            <Button asChild className="flex-1 gradient-agro border-0"><Link to="/register">Comece Agora</Link></Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
