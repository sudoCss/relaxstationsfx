import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ["defaults", "not IE 11", "chrome >= 40"],
    }),
  ],
  build: {
    target: "es2015",
  },
  server: {
    host: "0.0.0.0",
  },
});
