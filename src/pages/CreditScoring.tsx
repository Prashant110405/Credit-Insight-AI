import { DashboardLayout } from "@/components/DashboardLayout";
import { motion } from "framer-motion";

const scoringFactors = [
  { factor: "Financial Health", weight: "25%", score: 78, detail: "Strong revenue growth, moderate leverage" },
  { factor: "Repayment Capacity (DSCR)", weight: "20%", score: 68, detail: "DSCR at 1.35x — above minimum but below comfort" },
  { factor: "Promoter Track Record", weight: "15%", score: 55, detail: "Active litigation reduces confidence" },
  { factor: "Industry Risk", weight: "15%", score: 45, detail: "Steel sector facing headwinds per ICRA" },
  { factor: "Collateral Coverage", weight: "10%", score: 82, detail: "Plant & machinery valued at ₹65 Cr" },
  { factor: "Primary Due Diligence", weight: "10%", score: 60, detail: "Low capacity utilization flagged" },
  { factor: "Regulatory Compliance", weight: "5%", score: 90, detail: "GST and MCA filings up to date" },
];

export default function CreditScoring() {
  const weightedScore = 72;

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-xl font-bold text-foreground">Credit Scoring</h1>
          <p className="text-sm text-muted-foreground font-body mt-1">
            Transparent, explainable scoring model based on the Five Cs of Credit
          </p>
        </div>

        {/* Overall Score */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="glow-card p-5 mb-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-sm text-muted-foreground">Weighted Credit Score</p>
              <p className="font-mono text-4xl font-bold text-foreground glow-text mt-1">{weightedScore}<span className="text-lg text-muted-foreground">/100</span></p>
            </div>
            <div className="text-right">
              <p className="font-mono text-sm text-signal-yellow font-bold">Grade: BBB</p>
              <p className="font-mono text-xs text-muted-foreground mt-1">Moderate Risk</p>
              <p className="font-mono text-sm text-primary mt-2">Recommended: ₹25 Cr @ 12.5% p.a.</p>
            </div>
          </div>
        </motion.div>

        {/* Scoring Breakdown */}
        <div className="space-y-3">
          {scoringFactors.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="glow-card p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-medium text-foreground">{item.factor}</span>
                  <span className="font-mono text-xs text-muted-foreground">({item.weight})</span>
                </div>
                <span className={`font-mono text-sm font-bold ${
                  item.score >= 75 ? "text-signal-green" :
                  item.score >= 50 ? "text-signal-yellow" : "text-signal-red"
                }`}>
                  {item.score}/100
                </span>
              </div>
              <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden mb-2">
                <motion.div
                  className={`h-full rounded-full ${
                    item.score >= 75 ? "bg-signal-green" :
                    item.score >= 50 ? "bg-signal-yellow" : "bg-signal-red"
                  }`}
                  initial={{ width: 0 }}
                  animate={{ width: `${item.score}%` }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.05 }}
                />
              </div>
              <p className="text-xs text-muted-foreground font-body">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
