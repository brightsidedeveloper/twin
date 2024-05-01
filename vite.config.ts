import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-twin', 'babel-plugin-macros', 'babel-plugin-styled-components'],
        ignore: ['\x00commonjsHelpers.js'], // Weird babel-macro bug fix
      },
    }),
  ],
})
