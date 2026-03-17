import { DashboardLayout } from "@/components/DashboardLayout";
import { motion } from "framer-motion";
import { FileSearch, FileText, CheckCircle } from "lucide-react";

const analysisResults = [
  { doc: "Annual Report FY24", entities: 142, risks: 3, commitments: 8, confidence: "94%" },
  { doc: "GST Returns Q1-Q4", entities: 56, risks: 1, commitments: 0, confidence: "98%" },
  { doc: "Bank Statements SBI", entities: 234, risks: 2, commitments: 5, confidence: "91%" },
];

export default function DocumentAnalyzer() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-xl font-bold text-foreground">Document Analyzer</h1>
          <p className="text-sm text-muted-foreground font-body mt-1">
            AI-powered extraction of financial commitments, risks, and key entities
          </p>
        </div>

        <div className="grid gap-4">
          {analysisResults.map((result, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glow-card p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <FileText size={16} className="text-primary" />
                  <span className="font-mono text-sm font-medium text-foreground">{result.doc}</span>
                </div>
                <span className="flex items-center gap-1 text-signal-green text-xs font-mono">
                  <CheckCircle size={12} /> Analyzed
                </span>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[
                  { label: "Entities Extracted", value: result.entities },
                  { label: "Risks Identified", value: result.risks },
                  { label: "Commitments", value: result.commitments },
                  { label: "Confidence", value: result.confidence },
                ].map((item, j) => (
                  <div key={j} className="text-center">
                    <p className="font-mono text-lg font-bold text-foreground">{item.value}</p>
                    <p className="text-xs text-muted-foreground font-body">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
