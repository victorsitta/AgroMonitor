import { Outlet, useNavigate } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { Bell, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { alerts } from "@/data/mockData";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const unreadAlerts = alerts.filter((a) => !a.read).length;

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-14 flex items-center justify-between border-b border-border px-4 bg-card">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="text-foreground" />
              <div className="hidden sm:flex items-center gap-2">
                <div className="w-7 h-7 rounded gradient-agro flex items-center justify-center">
                  <Leaf className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-display font-bold text-sm">AgroMonitor</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative" onClick={() => navigate("/dashboard/alerts")}>
                <Bell className="w-5 h-5" />
                {unreadAlerts > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-destructive text-destructive-foreground text-[10px] flex items-center justify-center font-bold">{unreadAlerts}</span>
                )}
              </Button>
              <div className="w-8 h-8 rounded-full gradient-agro flex items-center justify-center text-primary-foreground text-xs font-bold">JS</div>
            </div>
          </header>
          <main className="flex-1 p-4 md:p-6 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
