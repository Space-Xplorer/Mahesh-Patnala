/* © 2025 Maheshwar Patnala */
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [react(),
    visualizer({ open: true }),
  ],
  base: "https://github.com/Space-Xplorer/Mahesh-Patnala",
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
