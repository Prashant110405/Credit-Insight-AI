import { motion } from "framer-motion";
import { FileText, Loader2, Clock } from "lucide-react";

const documents = [
  { name: "Annual Report FY24", status: "processed" as const },
  { name: "GST Returns Q1-Q4", status: "processed" as const },
  { name: "Bank Statements", status: "processed" as const },
  { name: "ITR Filing FY23-24", status: "processing" as const },
  { name: "Board Minutes", status: "processing" as const },
  { name: "Sanction Letters", status: "pending" as const },
  { name: "CIBIL Report", status: "pending" as const },
  { name: "Site Visit Report", status: "pending" as const },
  { name: "Rating Agency Report", status: "pending" as const },
  { name: "MCA Filings", status: "pending" as const },
];

const statusConfig: Record<string, { icon: typeof FileText; color: string; label: string; animate?: boolean }> = {
  processed: { icon: FileText, color: "text-signal-green", label: "Processed" },
  processing: { icon: Loader2, color: "text-signal-yellow", label: "In Progress", animate: true },
  pending: { icon: Clock, color: "text-muted-foreground", label: "Pending" },
};

export function DocumentStatus() {
  const processed = documents.filter((d) => d.status === "processed").length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.35 }}
      className="glow-card p-5"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-mono text-sm font-semibold text-foreground">Document Status</h3>
        <span className="font-mono text-xs text-muted-foreground">
          {processed}/{documents.length}
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1.5 bg-secondary rounded-full mb-4 overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${(processed / documents.length) * 100}%` }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>

      <div className="space-y-2 max-h-48 overflow-y-auto">
        {documents.map((doc, i) => {
          const config = statusConfig[doc.status];
          const Icon = config.icon;
          return (
            <div key={i} className="flex items-center justify-between py-1.5">
              <span className="text-xs text-muted-foreground font-body truncate mr-2">{doc.name}</span>
              <div className="flex items-center gap-1.5 shrink-0">
                <Icon size={12} className={`${config.color} ${config.animate ? "animate-spin" : ""}`} />
                <span className={`text-xs font-mono ${config.color}`}>{config.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
