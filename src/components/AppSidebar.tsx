import { useLocation, Link } from "react-router-dom";
import {
  LayoutDashboard,
  Upload,
  FileSearch,
  BarChart3,
  Shield,
  MessageSquareText,
  Target,
  FileText,
  Building2,
  IndianRupee,
} from "lucide-react";

const navItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Data Upload", url: "/data-upload", icon: Upload },
  { title: "Document Analyzer", url: "/document-analyzer", icon: FileSearch },
  { title: "Financial Data", url: "/financial-data", icon: BarChart3 },
  { title: "Risk Intelligence", url: "/risk-intelligence", icon: Shield },
  { title: "Primary Insights", url: "/primary-insights", icon: MessageSquareText },
  { title: "Credit Scoring", url: "/credit-scoring", icon: Target },
  { title: "CAM Generator", url: "/cam-generator", icon: FileText },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 h-screen w-60 bg-sidebar border-r border-sidebar-border flex flex-col z-50 lg:w-60 md:w-16 transition-all duration-300">
      {/* Logo */}
      <div className="p-4 border-b border-sidebar-border">
        <h1 className="font-mono text-lg font-bold text-foreground lg:block md:hidden">
          <span className="text-primary">Credit</span>Insight AI
        </h1>
        <h1 className="font-mono text-lg font-bold text-primary hidden md:block lg:hidden">
          CI
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.url;
          return (
            <Link
              key={item.url}
              to={item.url}
              className={`flex items-center gap-3 px-4 py-2.5 mx-2 rounded-md text-sm transition-all duration-200 group ${
                isActive
                  ? "nav-active text-primary font-medium"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-foreground"
              }`}
            >
              <item.icon
                size={18}
                className={isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary transition-colors"}
              />
              <span className="lg:inline md:hidden">{item.title}</span>
            </Link>
          );
        })}
      </nav>

      {/* Active Case */}
      <div className="p-4 border-t border-sidebar-border lg:block md:hidden">
        <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider mb-2">Active Case</p>
        <div className="flex items-center gap-2 mb-1">
          <Building2 size={14} className="text-primary" />
          <span className="text-sm text-foreground font-mono truncate">Bharat Steel Ind.</span>
        </div>
        <div className="flex items-center gap-2">
          <IndianRupee size={14} className="text-muted-foreground" />
          <span className="text-xs text-muted-foreground font-mono">₹50 Cr Application</span>
        </div>
      </div>
    </aside>
  );
}
