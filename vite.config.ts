import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      "@":path.resolve("./src")
    }
  },
  css: {
		postcss: {
			plugins: [autoprefixer, tailwindcss]
		}
	},
  server: {
		port: 8000,
		// origin: 'http://127.0.0.1:3000',
		proxy: {
			'/api': {
				// target: 'http://101.35.251.18:3000/api',
				target: 'http://localhost:3000/api',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	}
})
