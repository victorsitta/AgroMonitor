import { Card, CardContent } from "@/components/ui/card";
import { Settings } from "lucide-react";

const SettingsPage = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-bold font-display">Configurações</h1>
      <p className="text-muted-foreground text-sm">Gerencie suas preferências</p>
    </div>
    <Card className="glass-card">
      <CardContent className="p-12 text-center">
        <Settings className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-bold font-display mb-2">Em breve</h3>
        <p className="text-sm text-muted-foreground">As configurações serão disponibilizadas em uma próxima atualização.</p>
      </CardContent>
    </Card>
  </div>
);

export default SettingsPage;
