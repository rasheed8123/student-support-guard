import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Clock, User, MessageSquare, ExternalLink } from "lucide-react";

interface EmailData {
  id: string;
  subject: string;
  sender: string;
  classification: "query" | "information" | "spam";
  priority: "high" | "medium" | "low";
  status: "responded" | "pending" | "overdue";
  responseTime?: string;
  timestamp: string;
  qualityScore?: number;
}

export function EmailClassificationTable() {
  const emails: EmailData[] = [
    {
      id: "1",
      subject: "Payment failed - Need urgent help",
      sender: "sarah.student@email.com",
      classification: "query",
      priority: "high", 
      status: "overdue",
      timestamp: "2 hours ago",
      qualityScore: undefined
    },
    {
      id: "2",
      subject: "Course completion certificate",
      sender: "john.doe@email.com", 
      classification: "query",
      priority: "medium",
      status: "responded",
      responseTime: "1.5h",
      timestamp: "4 hours ago",
      qualityScore: 94
    },
    {
      id: "3",
      subject: "Thank you for the great course!",
      sender: "happy.learner@email.com",
      classification: "information",
      priority: "low",
      status: "responded", 
      responseTime: "0.5h",
      timestamp: "6 hours ago",
      qualityScore: 98
    },
    {
      id: "4",
      subject: "Refund request - Urgent",
      sender: "refund.request@email.com",
      classification: "query",
      priority: "high",
      status: "pending",
      timestamp: "30 mins ago",
      qualityScore: undefined
    },
    {
      id: "5",
      subject: "Course duration clarification needed",
      sender: "confused.student@email.com",
      classification: "query", 
      priority: "medium",
      status: "pending",
      timestamp: "1 hour ago",
      qualityScore: undefined
    }
  ];

  const getClassificationBadge = (classification: EmailData["classification"]) => {
    const variants = {
      query: "default",
      information: "secondary", 
      spam: "destructive"
    } as const;
    return <Badge variant={variants[classification]}>{classification}</Badge>;
  };

  const getPriorityBadge = (priority: EmailData["priority"]) => {
    const variants = {
      high: "destructive",
      medium: "secondary",
      low: "outline"
    } as const;
    return <Badge variant={variants[priority]}>{priority}</Badge>;
  };

  const getStatusBadge = (status: EmailData["status"]) => {
    const variants = {
      responded: "default",
      pending: "secondary",
      overdue: "destructive"
    } as const;
    const labels = {
      responded: "✓ Responded",
      pending: "⏳ Pending", 
      overdue: "🔥 Overdue"
    };
    return <Badge variant={variants[status]}>{labels[status]}</Badge>;
  };

  return (
    <Card className="transition-smooth hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-semibold">Email Classification</CardTitle>
            <p className="text-sm text-muted-foreground">Recent queries with intelligent classification and priority scoring</p>
          </div>
          <Button variant="outline" size="sm">
            <ExternalLink className="w-4 h-4 mr-2" />
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Subject</TableHead>
              <TableHead>Sender</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Quality</TableHead>
              <TableHead>Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {emails.map((email) => (
              <TableRow key={email.id} className="hover:bg-muted/50 transition-smooth">
                <TableCell className="font-medium max-w-xs">
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="w-4 h-4 text-muted-foreground" />
                    <span className="truncate">{email.subject}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{email.sender}</span>
                  </div>
                </TableCell>
                <TableCell>{getClassificationBadge(email.classification)}</TableCell>
                <TableCell>{getPriorityBadge(email.priority)}</TableCell>
                <TableCell>{getStatusBadge(email.status)}</TableCell>
                <TableCell>
                  {email.qualityScore ? (
                    <Badge variant={email.qualityScore >= 95 ? "default" : email.qualityScore >= 80 ? "secondary" : "destructive"}>
                      {email.qualityScore}%
                    </Badge>
                  ) : (
                    <span className="text-muted-foreground text-sm">-</span>
                  )}
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>{email.responseTime || email.timestamp}</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}