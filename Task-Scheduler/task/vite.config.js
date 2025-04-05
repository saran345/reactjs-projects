export default {
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        404: './404.html' // Optional for SPA fallback
      }
    }
  }
}