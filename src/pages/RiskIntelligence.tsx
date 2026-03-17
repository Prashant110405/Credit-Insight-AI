import { DashboardLayout } from "@/components/DashboardLayout";
import { motion } from "framer-motion";
import { Globe, Scale, TrendingDown, AlertTriangle } from "lucide-react";

const findings = [
  {
    icon: TrendingDown,
    title: "Steel Sector Demand Contraction",
    source: "ICRA Sector Report, Feb 2024",
    severity: "high" as const,
    detail: "Domestic steel demand projected to contract 12% in FY25 due to reduced infrastructure spending and global oversupply.",
  },
  {
    icon: Scale,
    title: "Promoter Litigation — NCLT Case",
    source: "e-Courts Portal",
    severity: "high" as const,
    detail: "Active NCLT case (CP/45/2023) filed by minority shareholder alleging oppression and mismanagement.",
  },
  {
    icon: Globe,
    title: "New RBI Guidelines on Large Exposures",
    source: "RBI Circular, Jan 2024",
    severity: "medium" as const,
    detail: "Revised large exposure framework may impact consortium lending arrangements for the borrower.",
  },
  {
    icon: AlertTriangle,
    title: "Related Party Transaction Flag",
    source: "MCA Filing Analysis",
    severity: "medium" as const,
    detail: "Significant increase in related party transactions (₹12 Cr) in FY24 compared to ₹3 Cr in FY23.",
  },
];

export default function RiskIntelligence() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-xl font-bold text-foreground">Risk Intelligence</h1>
          <p className="text-sm text-muted-foreground font-body mt-1">
            AI-curated secondary research from web, regulatory, and legal sources
          </p>
        </div>

        <div className="space-y-4">
          {findings.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glow-card p-5"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <item.icon size={16} className="text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-sm font-medium text-foreground">{item.title}</span>
                    <span className={item.severity === "high" ? "risk-tag-high" : "risk-tag-medium"}>
                      {item.severity === "high" ? "High Risk" : "Medium Risk"}
                    </span>
                  </div>
                  <p className="text-xs text-primary font-mono mb-2">{item.source}</p>
                  <p className="text-sm text-muted-foreground font-body">{item.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
