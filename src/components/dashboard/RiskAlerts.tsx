import { motion } from "framer-motion";
import { AlertTriangle, Scale, TrendingDown } from "lucide-react";

const alerts = [
  {
    title: "Sector Slowdown Detected",
    description: "Steel sector facing 12% demand contraction per ICRA report",
    severity: "high" as const,
    icon: TrendingDown,
  },
  {
    title: "Promoter Litigation",
    description: "2 active cases found on e-Courts portal against promoter",
    severity: "high" as const,
    icon: Scale,
  },
  {
    title: "Revenue Mismatch",
    description: "GSTR-3B vs bank credit mismatch of 8.2% in Q3 FY24",
    severity: "medium" as const,
    icon: AlertTriangle,
  },
];

const severityConfig = {
  high: { tag: "risk-tag-high", label: "High Risk" },
  medium: { tag: "risk-tag-medium", label: "Medium Risk" },
  low: { tag: "risk-tag-low", label: "Low Risk" },
};

export function RiskAlerts() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
      className="glow-card p-5"
    >
      <h3 className="font-mono text-sm font-semibold text-foreground mb-4">Risk Alerts</h3>

      <div className="space-y-3">
        {alerts.map((alert, i) => {
          const config = severityConfig[alert.severity];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="p-3 rounded-md bg-secondary/50 border border-border hover:border-primary/20 transition-colors"
            >
              <div className="flex items-start justify-between gap-2 mb-1">
                <div className="flex items-center gap-2">
                  <alert.icon size={14} className="text-muted-foreground" />
                  <span className="font-mono text-xs font-medium text-foreground">{alert.title}</span>
                </div>
                <span className={config.tag}>{config.label}</span>
              </div>
              <p className="text-xs text-muted-foreground font-body pl-6">{alert.description}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
