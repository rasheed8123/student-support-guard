import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Clock, CheckCircle, AlertTriangle, XCircle } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  subtitle: string;
  trend: "up" | "down" | "neutral";
  trendValue: string;
  icon: React.ReactNode;
  variant: "success" | "warning" | "critical" | "primary";
}

function MetricCard({ title, value, subtitle, trend, trendValue, icon, variant }: MetricCardProps) {
  const variantClasses = {
    success: "border-success/20 bg-success-light shadow-success",
    warning: "border-warning/20 bg-warning-light shadow-warning", 
    critical: "border-critical/20 bg-critical-light shadow-critical",
    primary: "border-primary/20 bg-gradient-subtle shadow-glow"
  };

  const iconClasses = {
    success: "text-success",
    warning: "text-warning",
    critical: "text-critical", 
    primary: "text-primary"
  };

  return (
    <Card className={`transition-smooth hover:scale-105 ${variantClasses[variant]}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className={iconClasses[variant]}>
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
          <span>{subtitle}</span>
          <Badge variant={trend === "up" ? "default" : trend === "down" ? "destructive" : "secondary"} className="text-xs">
            {trend === "up" ? <TrendingUp className="w-3 h-3 mr-1" /> : 
             trend === "down" ? <TrendingDown className="w-3 h-3 mr-1" /> : null}
            {trendValue}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}

export function MetricsGrid() {
  const metrics = [
    {
      title: "Total Queries Today",
      value: "189",
      subtitle: "vs 156 yesterday",
      trend: "up" as const,
      trendValue: "+21%",
      icon: <CheckCircle className="w-4 h-4" />,
      variant: "primary" as const
    },
    {
      title: "Response Rate",
      value: "76.7%",
      subtitle: "145 of 189 queries",
      trend: "down" as const,
      trendValue: "-3.2%",
      icon: <Clock className="w-4 h-4" />,
      variant: "warning" as const
    },
    {
      title: "Avg Response Time",
      value: "4.2h",
      subtitle: "within SLA targets",
      trend: "up" as const,
      trendValue: "+12%",
      icon: <AlertTriangle className="w-4 h-4" />,
      variant: "success" as const
    },
    {
      title: "Critical Overdue",
      value: "11",
      subtitle: "High priority queries",
      trend: "up" as const,
      trendValue: "+5",
      icon: <XCircle className="w-4 h-4" />,
      variant: "critical" as const
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
}