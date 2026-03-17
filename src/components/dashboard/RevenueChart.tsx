import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { year: "FY19", revenue: 120, liabilities: 80 },
  { year: "FY20", revenue: 145, liabilities: 95 },
  { year: "FY21", revenue: 130, liabilities: 110 },
  { year: "FY22", revenue: 180, liabilities: 105 },
  { year: "FY23", revenue: 210, liabilities: 120 },
  { year: "FY24", revenue: 245, liabilities: 130 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
        <p className="font-mono text-xs text-muted-foreground mb-2">{label}</p>
        {payload.map((entry: any, i: number) => (
          <p key={i} className="font-mono text-sm" style={{ color: entry.color }}>
            {entry.name}: ₹{entry.value} Cr
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export function RevenueChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="glow-card p-5"
    >
      <h3 className="font-mono text-sm font-semibold text-foreground mb-4">Revenue vs Liabilities Trend</h3>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 30%, 20%)" />
            <XAxis
              dataKey="year"
              tick={{ fill: "#94a3b8", fontSize: 12, fontFamily: "IBM Plex Mono" }}
              axisLine={{ stroke: "hsl(220, 30%, 20%)" }}
            />
            <YAxis
              tick={{ fill: "#94a3b8", fontSize: 12, fontFamily: "IBM Plex Mono" }}
              axisLine={{ stroke: "hsl(220, 30%, 20%)" }}
              tickFormatter={(v) => `₹${v}`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              wrapperStyle={{ fontFamily: "IBM Plex Mono", fontSize: 12 }}
            />
            <Line
              type="monotone"
              dataKey="revenue"
              name="Revenue"
              stroke="#18c2d6"
              strokeWidth={2.5}
              dot={{ fill: "#18c2d6", r: 4 }}
              activeDot={{ r: 6, fill: "#18c2d6", stroke: "#0b1220", strokeWidth: 2 }}
            />
            <Line
              type="monotone"
              dataKey="liabilities"
              name="Liabilities"
              stroke="#D6184C"
              strokeWidth={2.5}
              dot={{ fill: "#D6184C", r: 4 }}
              activeDot={{ r: 6, fill: "#D6184C", stroke: "#0b1220", strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
