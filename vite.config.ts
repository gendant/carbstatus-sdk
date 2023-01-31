import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
// import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({emitCss: false})],
  
  build:{
    // cssCodeSplit: false,
    lib:{
      formats: ["iife"],
      entry: "./src/main.prod.ts",
      name: "cs"
    },
    rollupOptions:{
      output:{
        entryFileNames: "dist.js"
      }
    },
    
    
    
  }
})
