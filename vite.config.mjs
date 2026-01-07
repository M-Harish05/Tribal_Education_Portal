import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tagger from "@dhiwise/component-tagger";

// https://vitejs.dev/config/
export default defineConfig({
  // This changes the out put dir from dist to build
  // comment this out if that isn't relevant for your project
  build: {
    outDir: "dist",
    chunkSizeWarningLimit: 2000,
    // Ensure proper asset handling for deployment
    assetsDir: "assets",
    sourcemap: true,
    // Optimize for production
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          voice: ['src/utils/voiceUtils.js']
        }
      }
    }
  },
  plugins: [tsconfigPaths(), react(), tagger()],
  server: {
    port: "4028",
    host: "0.0.0.0",
    strictPort: true,
    allowedHosts: ['.amazonaws.com', '.builtwithrocket.new', '.netlify.app', '.vercel.app'],
    // Enable HTTPS for local development to test voice features
    https: false, // Set to true if you have SSL certificates
    headers: {
      // Security headers for voice features - ALLOW microphone access
      'Permissions-Policy': 'microphone=(self), camera=()'
    }
  },
  // Define environment variables for voice features
  define: {
    __VOICE_ENABLED__: JSON.stringify(true),
    __SECURE_CONTEXT_REQUIRED__: JSON.stringify(true)
  }
});

