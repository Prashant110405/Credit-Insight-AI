import { DashboardLayout } from "@/components/DashboardLayout";
import { motion } from "framer-motion";
import { MessageSquareText, Plus } from "lucide-react";
import { useState } from "react";

const existingNotes = [
  {
    date: "2024-02-15",
    officer: "Rajesh Kumar",
    type: "Site Visit",
    note: "Factory found operating at 40% capacity. Management cited seasonal demand patterns, but neighboring units appeared to be running at higher utilization.",
    impact: "negative",
  },
  {
    date: "2024-02-10",
    officer: "Priya Sharma",
    type: "Management Interview",
    note: "Promoter demonstrated strong domain knowledge. Expansion plans backed by confirmed order book of ₹80 Cr for FY25. However, key person risk is high — no succession plan in place.",
    impact: "mixed",
  },
  {
    date: "2024-01-28",
    officer: "Amit Patel",
    type: "Market Check",
    note: "Suppliers confirmed regular payments. Two major customers verified ongoing business relationship and expressed satisfaction with product quality.",
    impact: "positive",
  },
];

export default function PrimaryInsights() {
  const [newNote, setNewNote] = useState("");

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-xl font-bold text-foreground">Primary Insights</h1>
          <p className="text-sm text-muted-foreground font-body mt-1">
            Qualitative observations from site visits, management interviews, and due diligence
          </p>
        </div>

        {/* Add Note */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="glow-card p-5 mb-6"
        >
          <h3 className="font-mono text-sm font-semibold text-foreground mb-3">Add Observation</h3>
          <textarea
            className="w-full bg-secondary/50 border border-border rounded-md p-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 resize-none"
            rows={3}
            placeholder="Enter qualitative observation (e.g., 'Factory operating at 40% capacity')..."
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
          />
          <button className="mt-3 flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-md font-mono text-sm text-primary hover:bg-primary/20 transition-colors">
            <Plus size={14} /> Add to Risk Assessment
          </button>
        </motion.div>

        {/* Existing Notes */}
        <div className="space-y-4">
          {existingNotes.map((note, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="glow-card p-5"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <MessageSquareText size={14} className="text-primary" />
                  <span className="font-mono text-xs font-medium text-foreground">{note.type}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className={
                    note.impact === "positive" ? "risk-tag-low" :
                    note.impact === "negative" ? "risk-tag-high" : "risk-tag-medium"
                  }>
                    {note.impact === "positive" ? "Positive" : note.impact === "negative" ? "Negative" : "Mixed"}
                  </span>
                  <span className="text-xs text-muted-foreground font-mono">{note.date}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground font-body">{note.note}</p>
              <p className="text-xs text-muted-foreground font-mono mt-2">— {note.officer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
