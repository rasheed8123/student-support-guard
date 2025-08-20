import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface PriorityData {
  level: string;
  total: number;
  responded: number;
  pending: number;
  responseRate: number;
  variant: "critical" | "warning" | "success";
  bgColor: string;
}

export function PriorityBreakdown() {
  const priorityData: PriorityData[] = [
    {
      level: "High Priority",
      total: 23,
      responded: 12,
      pending: 11,
      responseRate: 52.2,
      variant: "critical",
      bgColor: "bg-critical/10"
    },
    {
      level: "Medium Priority", 
      total: 98,
      responded: 71,
      pending: 27,
      responseRate: 72.4,
      variant: "warning",
      bgColor: "bg-warning/10"
    },
    {
      level: "Low Priority",
      total: 68,
      responded: 62,
      pending: 6,
      responseRate: 91.2,
      variant: "success",
      bgColor: "bg-success/10"
    }
  ];

  return (
    <Card className="transition-smooth hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Priority Breakdown</CardTitle>
        <p className="text-sm text-muted-foreground">Query distribution and response rates by priority level</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {priorityData.map((priority, index) => (
          <div key={index} className={`p-4 rounded-lg ${priority.bgColor} transition-smooth`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <h3 className="font-medium text-foreground">{priority.level}</h3>
                <Badge variant="outline">{priority.total} queries</Badge>
              </div>
              <Badge variant={priority.variant === "critical" ? "destructive" : priority.variant === "warning" ? "secondary" : "default"} className="font-medium">
                {priority.responseRate}% responded
              </Badge>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium">{priority.responded}/{priority.total}</span>
              </div>
              <Progress 
                value={priority.responseRate} 
                className="h-2"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>✓ {priority.responded} responded</span>
                <span>⏳ {priority.pending} pending</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}