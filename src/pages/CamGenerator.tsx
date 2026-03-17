import { DashboardLayout } from "@/components/DashboardLayout";
import { motion } from "framer-motion";
import { FileText, Download, CheckCircle, Clock } from "lucide-react";

const camSections = [
  { section: "Executive Summary", status: "complete" },
  { section: "Character Assessment", status: "complete" },
  { section: "Capacity Analysis", status: "complete" },
  { section: "Capital Structure", status: "complete" },
  { section: "Collateral Evaluation", status: "in-progress" },
  { section: "Conditions & Covenants", status: "pending" },
  { section: "Risk Assessment & Mitigants", status: "pending" },
  { section: "Final Recommendation", status: "pending" },
];

export default function CamGenerator() {
  const completed = camSections.filter((s) => s.status === "complete").length;

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-xl font-bold text-foreground">CAM Generator</h1>
          <p className="text-sm text-muted-foreground font-body mt-1">
            Generate a comprehensive Credit Appraisal Memo covering the Five Cs of Credit
          </p>
        </div>

        {/* Generation Status */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="glow-card p-5 mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="font-mono text-sm text-foreground font-medium">CAM Progress</p>
              <p className="text-xs text-muted-foreground font-body mt-1">
                {completed}/{camSections.length} sections completed
              </p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-md font-mono text-sm text-primary hover:bg-primary/20 transition-colors">
              <Download size={14} /> Export PDF
            </button>
          </div>
          <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(completed / camSections.length) * 100}%` }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </div>
        </motion.div>

        {/* Sections */}
        <div className="space-y-2">
          {camSections.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="glow-card p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <FileText size={14} className="text-primary" />
                <span className="font-mono text-sm text-foreground">{item.section}</span>
              </div>
              {item.status === "complete" ? (
                <span className="flex items-center gap-1 text-signal-green text-xs font-mono">
                  <CheckCircle size={12} /> Complete
                </span>
              ) : item.status === "in-progress" ? (
                <span className="flex items-center gap-1 text-signal-yellow text-xs font-mono">
                  <Clock size={12} /> In Progress
                </span>
              ) : (
                <span className="flex items-center gap-1 text-muted-foreground text-xs font-mono">
                  <Clock size={12} /> Pending
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Generate Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6"
        >
          <button className="w-full py-3 bg-primary text-primary-foreground font-mono text-sm font-semibold rounded-md hover:opacity-90 transition-opacity animate-pulse-glow">
            Generate Complete CAM
          </button>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
