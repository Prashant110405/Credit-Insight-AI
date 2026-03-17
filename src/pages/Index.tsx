import { DashboardLayout } from "@/components/DashboardLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { CreditRiskScore } from "@/components/dashboard/CreditRiskScore";
import { RiskAlerts } from "@/components/dashboard/RiskAlerts";
import { DocumentStatus } from "@/components/dashboard/DocumentStatus";
import { IndianRupee, TrendingUp, Shield, FileText } from "lucide-react";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="p-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-xl font-bold text-foreground">Credit Appraisal Dashboard</h1>
          <p className="text-sm text-muted-foreground font-body mt-1">
            Bharat Steel Industries Pvt. Ltd. — Working Capital / Capacity Expansion
          </p>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <MetricCard icon={IndianRupee} label="Requested Amount" value="₹50 Cr" subtitle="Term Loan + Working Capital" delay={0} />
          <MetricCard icon={TrendingUp} label="Annual Turnover" value="₹245 Cr" subtitle="FY24 (↑16.7% YoY)" delay={0.05} />
          <MetricCard icon={Shield} label="Risk Score" value="72/100" subtitle="Moderate Risk — BBB" delay={0.1} />
          <MetricCard icon={FileText} label="Documents" value="5/10" subtitle="3 Processed, 2 In Progress" delay={0.15} />
        </div>

        {/* Main Content: Chart + Right Panels */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          {/* Center Column */}
          <div className="xl:col-span-2 space-y-4">
            <RevenueChart />
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <CreditRiskScore />
            <DocumentStatus />
            <RiskAlerts />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
