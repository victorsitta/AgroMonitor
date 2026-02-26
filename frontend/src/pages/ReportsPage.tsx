import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";

const ReportsPage = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-bold font-display">Relatórios</h1>
      <p className="text-muted-foreground text-sm">Gere e exporte relatórios da sua operação</p>
    </div>
    <Card className="glass-card">
      <CardContent className="p-12 text-center">
        <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-bold font-display mb-2">Em breve</h3>
        <p className="text-sm text-muted-foreground">A funcionalidade de relatórios será disponibilizada em uma próxima atualização.</p>
      </CardContent>
    </Card>
  </div>
);

export default ReportsPage;
