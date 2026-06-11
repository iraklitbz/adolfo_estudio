// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      title: 'Estudio 50 — Fotografía profesional para empresas y marcas',
      meta: [
        { name: 'description', content: 'Fotografía natural para empresas y profesionales. Retratos, imagen de marca y eventos corporativos que transmiten confianza y profesionalidad.' },
        { name: 'author', content: 'Estudio 50' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Estudio 50 — Fotografía profesional para empresas y marcas' },
        { property: 'og:description', content: 'Fotografía natural para empresas y profesionales. Retratos, imagen de marca y eventos corporativos.' },
        { property: 'og:image', content: 'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781005696/75526aab-f792-4cff-8583-a437809f78c6_imhjgz.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Estudio 50 — Fotografía profesional para empresas y marcas' },
        { name: 'twitter:description', content: 'Fotografía natural para empresas y profesionales. Retratos, imagen de marca y eventos corporativos.' },
        { name: 'twitter:image', content: 'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781005696/75526aab-f792-4cff-8583-a437809f78c6_imhjgz.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'canonical', href: 'https://estudio50.com' },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'Estudio 50',
            description: 'Fotografía profesional para empresas y marcas. Retratos, imagen de marca y eventos corporativos.',
            url: 'https://estudio50.com',
            image: 'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781005696/75526aab-f792-4cff-8583-a437809f78c6_imhjgz.png',
            priceRange: '€€',
            serviceType: ['Retrato profesional', 'Imagen de marca', 'Eventos corporativos'],
          }),
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
    },
  },
  modules: ['nuxt-svgo', '@nuxtjs/sitemap'],
  site: {
    url: 'https://estudio50.com',
  },
  runtimeConfig: {
    cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
    cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
    cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET,
  },
  svgo: {
    global: false,
    defaultImport: 'component',
  },
})
