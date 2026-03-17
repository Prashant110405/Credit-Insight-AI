import { DashboardLayout } from "@/components/DashboardLayout";
import { motion } from "framer-motion";
import { Upload, FileText, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

const uploadedFiles = [
  { name: "Annual_Report_FY24.pdf", size: "12.4 MB", status: "processed" },
  { name: "GST_Returns_FY24.xlsx", size: "2.1 MB", status: "processed" },
  { name: "Bank_Statement_SBI.pdf", size: "8.7 MB", status: "processed" },
  { name: "ITR_FY2324.pdf", size: "1.8 MB", status: "processing" },
  { name: "Board_Minutes_Q4.pdf", size: "3.2 MB", status: "processing" },
];

export default function DataUpload() {
  const [dragActive, setDragActive] = useState(false);

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-xl font-bold text-foreground">Data Upload</h1>
          <p className="text-sm text-muted-foreground font-body mt-1">
            Upload structured and unstructured documents for analysis
          </p>
        </div>

        {/* Upload Zone */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className={`glow-card p-10 mb-6 border-2 border-dashed text-center cursor-pointer transition-colors ${
            dragActive ? "border-primary bg-primary/5" : "border-border"
          }`}
          onDragEnter={() => setDragActive(true)}
          onDragLeave={() => setDragActive(false)}
          onDrop={() => setDragActive(false)}
        >
          <Upload size={40} className="mx-auto text-primary mb-4" />
          <p className="font-mono text-sm text-foreground mb-1">Drop files here or click to upload</p>
          <p className="text-xs text-muted-foreground font-body">
            Supports PDF, XLSX, CSV, DOC — Max 50 MB per file
          </p>
        </motion.div>

        {/* File List */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glow-card overflow-hidden"
        >
          <table className="data-table">
            <thead>
              <tr>
                <th>File Name</th>
                <th>Size</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {uploadedFiles.map((file, i) => (
                <tr key={i}>
                  <td className="flex items-center gap-2">
                    <FileText size={14} className="text-primary" />
                    {file.name}
                  </td>
                  <td className="text-muted-foreground">{file.size}</td>
                  <td>
                    {file.status === "processed" ? (
                      <span className="flex items-center gap-1 text-signal-green">
                        <CheckCircle size={12} /> Processed
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-signal-yellow">
                        <AlertCircle size={12} /> Processing
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
