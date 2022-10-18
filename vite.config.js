import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  //Folder where it will create the build
  build: { outDir: 'docs' },

  //We check if we are in production
  //the base is the name of the repository
  //if not root
  //Ternary operator
  //condition ? 'repository-name' : '/'

  base: process.env.NODE_ENV === 'development' ?'/': '/final-project-ironHack/'
})
