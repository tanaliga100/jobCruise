import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import { defineConfig } from "vite";
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: Number(process.env.PORT),

    //     proxy: {
    //       "/api": {
    //         target: "http://localhost:5000/api",
    //         changeOrigin: true,
    //         rewrite: (path) => path.replace(/^\/api/, ""),
    //       },
    //     },
    //     proxy: {
    //       "/api": "http://localhost:5000/api/v1", // Simplified proxy setup
    //       //  "/api": process.env.API_EDNPOINT, // Simplified proxy setup
    //     },
    proxy: {
      "/api": process.env.API_ENDPOINT, // Use the environment variable directly
    },
  },

  define: {
    "process.env": {
      PORT: process.env.PORT,
      API_ENDPOINT: process.env.API_ENDPOINT,
    },
  },
});
