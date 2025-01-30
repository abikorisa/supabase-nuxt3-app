import path from "path";
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_KEY: process.env.SUPABASE_KEY,
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/tailwindcss', { exposeConfig: true, viewer: true }]
  ],
  plugins: [
    '~/plugins/supabase.ts'
  ],
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./"),
      },
    },
  },
  compatibilityDate: "2025-01-30",
})