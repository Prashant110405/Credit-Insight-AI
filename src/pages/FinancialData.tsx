import { DashboardLayout } from "@/components/DashboardLayout";
import { motion } from "framer-motion";

const financialData = [
  { year: "FY24", revenue: "₹245 Cr", pat: "₹18.2 Cr", debtEquity: "1.42", currentRatio: "1.28", dscr: "1.35" },
  { year: "FY23", revenue: "₹210 Cr", pat: "₹15.1 Cr", debtEquity: "1.38", currentRatio: "1.31", dscr: "1.41" },
  { year: "FY22", revenue: "₹180 Cr", pat: "₹12.8 Cr", debtEquity: "1.55", currentRatio: "1.18", dscr: "1.22" },
  { year: "FY21", revenue: "₹130 Cr", pat: "₹8.4 Cr", debtEquity: "1.72", currentRatio: "1.05", dscr: "1.08" },
];

export default function FinancialData() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-xl font-bold text-foreground">Financial Data</h1>
          <p className="text-sm text-muted-foreground font-body mt-1">
            Cross-referenced financial metrics from GST, ITR, and bank statements
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="glow-card overflow-hidden"
        >
          <table className="data-table">
            <thead>
              <tr>
                <th>Year</th>
                <th>Revenue</th>
                <th>PAT</th>
                <th>Debt/Equity</th>
                <th>Current Ratio</th>
                <th>DSCR</th>
              </tr>
            </thead>
            <tbody>
              {financialData.map((row, i) => (
                <tr key={i}>
                  <td className="text-primary font-medium">{row.year}</td>
                  <td>{row.revenue}</td>
                  <td>{row.pat}</td>
                  <td>{row.debtEquity}</td>
                  <td>{row.currentRatio}</td>
                  <td>{row.dscr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
