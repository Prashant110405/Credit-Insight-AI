import { motion } from "framer-motion";

export function CreditRiskScore() {
  const score = 72;
  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (score / 100) * circumference;

  const getColor = (s: number) => {
    if (s >= 75) return "hsl(var(--signal-green))";
    if (s >= 50) return "hsl(var(--signal-yellow))";
    return "hsl(var(--signal-red))";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="glow-card p-5"
    >
      <h3 className="font-mono text-sm font-semibold text-foreground mb-4">Credit Risk Score</h3>

      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="54" fill="none" stroke="hsl(220, 30%, 20%)" strokeWidth="8" />
            <motion.circle
              cx="60" cy="60" r="54" fill="none"
              stroke={getColor(score)}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: offset }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
              style={{ filter: `drop-shadow(0 0 8px ${getColor(score)})` }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-mono text-3xl font-bold text-foreground">{score}</span>
            <span className="font-mono text-xs text-muted-foreground">/100</span>
          </div>
        </div>

        <div className="mt-4 text-center space-y-2">
          <p className="font-mono text-sm">
            Credit Grade: <span className="text-signal-yellow font-bold">BBB</span>
          </p>
          <p className="font-mono text-xs text-muted-foreground">Moderate Risk</p>
        </div>

        <button className="mt-4 w-full py-2.5 bg-primary/10 border border-primary/30 rounded-md font-mono text-sm text-primary hover:bg-primary/20 transition-colors">
          Recommended: ₹25 Cr
        </button>
      </div>
    </motion.div>
  );
}
