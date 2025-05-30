import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
        },
    },
    base: process.env.NODE_ENV === "production" ? "/hexschool-personal-website/" : undefined,
});
