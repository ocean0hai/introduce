// vite.config.ts
import { defineConfig } from "file:///D:/Program_code/react/write_code/programs-test/introduce/node_modules/.pnpm/registry.npmmirror.com+vite@4.3.7/node_modules/vite/dist/node/index.js";
import react from "file:///D:/Program_code/react/write_code/programs-test/introduce/node_modules/.pnpm/registry.npmmirror.com+@vitejs+plugin-react@4.0.0_vite@4.3.7/node_modules/@vitejs/plugin-react/dist/index.mjs";
import tailwindcss from "file:///D:/Program_code/react/write_code/programs-test/introduce/node_modules/.pnpm/registry.npmmirror.com+tailwindcss@3.3.2/node_modules/tailwindcss/lib/index.js";
import autoprefixer from "file:///D:/Program_code/react/write_code/programs-test/introduce/node_modules/.pnpm/registry.npmmirror.com+autoprefixer@10.4.14_postcss@8.4.23/node_modules/autoprefixer/lib/autoprefixer.js";
import path from "path";
var vite_config_default = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve("./src")
    }
  },
  css: {
    postcss: {
      plugins: [autoprefixer, tailwindcss]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQcm9ncmFtX2NvZGVcXFxccmVhY3RcXFxcd3JpdGVfY29kZVxcXFxwcm9ncmFtcy10ZXN0XFxcXGludHJvZHVjZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcUHJvZ3JhbV9jb2RlXFxcXHJlYWN0XFxcXHdyaXRlX2NvZGVcXFxccHJvZ3JhbXMtdGVzdFxcXFxpbnRyb2R1Y2VcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1Byb2dyYW1fY29kZS9yZWFjdC93cml0ZV9jb2RlL3Byb2dyYW1zLXRlc3QvaW50cm9kdWNlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbmltcG9ydCB0YWlsd2luZGNzcyBmcm9tICd0YWlsd2luZGNzcydcbmltcG9ydCBhdXRvcHJlZml4ZXIgZnJvbSAnYXV0b3ByZWZpeGVyJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gIHJlc29sdmU6e1xuICAgIGFsaWFzOntcbiAgICAgIFwiQFwiOnBhdGgucmVzb2x2ZShcIi4vc3JjXCIpXG4gICAgfVxuICB9LFxuICBjc3M6IHtcblx0XHRwb3N0Y3NzOiB7XG5cdFx0XHRwbHVnaW5zOiBbYXV0b3ByZWZpeGVyLCB0YWlsd2luZGNzc11cblx0XHR9XG5cdH0sXG5cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXNXLFNBQVMsb0JBQW9CO0FBQ25ZLE9BQU8sV0FBVztBQUNsQixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLGtCQUFrQjtBQUN6QixPQUFPLFVBQVU7QUFFakIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLFNBQVE7QUFBQSxJQUNOLE9BQU07QUFBQSxNQUNKLEtBQUksS0FBSyxRQUFRLE9BQU87QUFBQSxJQUMxQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNMLFNBQVM7QUFBQSxNQUNSLFNBQVMsQ0FBQyxjQUFjLFdBQVc7QUFBQSxJQUNwQztBQUFBLEVBQ0Q7QUFFRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
