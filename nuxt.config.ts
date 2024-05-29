// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiUrl: "",
    },
  },
  devtools: { enabled: false },
  css: ["~/assets/styles.scss"],
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxtjs/google-fonts"],
  googleFonts: {
    display: "swap",
    families: {
      Montserrat: [400, 500, 700],
      Inter: [700],
    },
  },
  pinia: {
    storesDirs: ["./stores/**"],
  },
});
