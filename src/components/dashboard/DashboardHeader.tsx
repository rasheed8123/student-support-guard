import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, Settings, RefreshCw } from "lucide-react";

export function DashboardHeader() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b bg-card shadow-sm">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center shadow-glow">
            <span className="text-primary-foreground font-bold text-lg">SQ</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Support Quality Intelligence</h1>
            <p className="text-sm text-muted-foreground">Real-time student support analytics</p>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <Badge variant="outline" className="animate-pulse-glow">
          <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
          Live
        </Badge>
        
        <Button variant="outline" size="sm" className="transition-smooth">
          <RefreshCw className="w-4 h-4 mr-2" />
          Refresh
        </Button>

        <Button variant="outline" size="sm" className="relative">
          <Bell className="w-4 h-4" />
          <Badge className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center p-0 text-xs bg-critical">
            3
          </Badge>
        </Button>

        <Button variant="outline" size="sm">
          <Settings className="w-4 h-4" />
        </Button>
      </div>
    </header>
  );
}