import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import DataUpload from "./pages/DataUpload.tsx";
import DocumentAnalyzer from "./pages/DocumentAnalyzer.tsx";
import FinancialData from "./pages/FinancialData.tsx";
import RiskIntelligence from "./pages/RiskIntelligence.tsx";
import PrimaryInsights from "./pages/PrimaryInsights.tsx";
import CreditScoring from "./pages/CreditScoring.tsx";
import CamGenerator from "./pages/CamGenerator.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/data-upload" element={<DataUpload />} />
          <Route path="/document-analyzer" element={<DocumentAnalyzer />} />
          <Route path="/financial-data" element={<FinancialData />} />
          <Route path="/risk-intelligence" element={<RiskIntelligence />} />
          <Route path="/primary-insights" element={<PrimaryInsights />} />
          <Route path="/credit-scoring" element={<CreditScoring />} />
          <Route path="/cam-generator" element={<CamGenerator />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
