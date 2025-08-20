import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { MetricsGrid } from "@/components/dashboard/MetricsGrid";
import { PriorityBreakdown } from "@/components/dashboard/PriorityBreakdown";
import { AlertsPanel } from "@/components/dashboard/AlertsPanel";
import { EmailClassificationTable } from "@/components/dashboard/EmailClassificationTable";

const Index = () => {
  return (
    <div className="min-h-screen gradient-subtle">
      <DashboardHeader />
      
      <main className="container mx-auto px-6 py-6 space-y-6">
        {/* Key Metrics */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-foreground">
            Performance Overview
          </h2>
          <MetricsGrid />
        </section>

        {/* Priority Analysis & Alerts */}
        <div className="grid gap-6 lg:grid-cols-2">
          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">
              Priority Analysis
            </h2>
            <PriorityBreakdown />
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">
              System Alerts
            </h2>
            <AlertsPanel />
          </section>
        </div>

        {/* Email Classification */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-foreground">
            Recent Email Activity
          </h2>
          <EmailClassificationTable />
        </section>
      </main>
    </div>
  );
};

export default Index;
