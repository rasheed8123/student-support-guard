import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Clock, XCircle, CheckCircle, X } from "lucide-react";

interface Alert {
  id: string;
  type: "critical" | "warning" | "info";
  title: string;
  description: string;
  timestamp: string;
  count?: number;
}

export function AlertsPanel() {
  const alerts: Alert[] = [
    {
      id: "1",
      type: "critical",
      title: "High Priority Queries Overdue",
      description: "5 high priority queries unresponded for >4 hours",
      timestamp: "2 mins ago",
      count: 5
    },
    {
      id: "2", 
      type: "critical",
      title: "Refund Requests Overdue",
      description: "3 refund queries unresponded for >48 hours",
      timestamp: "15 mins ago",
      count: 3
    },
    {
      id: "3",
      type: "warning",
      title: "Incorrect Information Sent",
      description: "2 responses with incorrect fee amounts detected",
      timestamp: "1 hour ago",
      count: 2
    },
    {
      id: "4",
      type: "warning", 
      title: "Low Tone Scores",
      description: "5 responses below professional tone threshold",
      timestamp: "2 hours ago",
      count: 5
    }
  ];

  const getAlertIcon = (type: Alert["type"]) => {
    switch (type) {
      case "critical":
        return <XCircle className="w-4 h-4 text-critical" />;
      case "warning":
        return <AlertTriangle className="w-4 h-4 text-warning" />;
      case "info":
        return <CheckCircle className="w-4 h-4 text-success" />;
    }
  };

  const getAlertVariant = (type: Alert["type"]) => {
    switch (type) {
      case "critical":
        return "destructive";
      case "warning":
        return "secondary";
      case "info":
        return "default";
    }
  };

  return (
    <Card className="transition-smooth hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-semibold">Critical Alerts</CardTitle>
            <p className="text-sm text-muted-foreground">Real-time quality and SLA monitoring</p>
          </div>
          <Badge variant="destructive" className="animate-pulse-glow">
            {alerts.filter(a => a.type === "critical").length} Critical
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {alerts.map((alert) => (
          <div 
            key={alert.id} 
            className="flex items-start space-x-3 p-3 rounded-lg border bg-card hover:bg-muted/50 transition-smooth"
          >
            <div className="flex-shrink-0 mt-0.5">
              {getAlertIcon(alert.type)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-sm font-medium text-foreground truncate">
                  {alert.title}
                </h4>
                <div className="flex items-center space-x-2">
                  {alert.count && (
                    <Badge variant={getAlertVariant(alert.type)} className="text-xs">
                      {alert.count}
                    </Badge>
                  )}
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                    <X className="w-3 h-3" />
                  </Button>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mb-2">
                {alert.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  <Clock className="w-3 h-3 inline mr-1" />
                  {alert.timestamp}
                </span>
                <Button variant="outline" size="sm" className="h-6 text-xs">
                  View Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}