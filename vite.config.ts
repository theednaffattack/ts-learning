import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { reactRouterPlugin } from "vite-plugin-next-react-router";

export default defineConfig({
  plugins: [
    react(),
    reactRouterPlugin({
      async: true,
      pageDir: "src/pages",
      extensions: ["js", "jsx", "ts", "tsx"],
      output: "./src/routes.tsx",
    }),
  ],
});
