<template>
  <section class="relative h-screen flex items-center px-8 md:px-16">
    <img
      src="https://res.cloudinary.com/dnrtb2xev/image/upload/v1781005696/75526aab-f792-4cff-8583-a437809f78c6_imhjgz.png"
      alt="Hero"
      class="absolute inset-0 w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-black/40" />
    <div class="relative z-10 max-w-6xl mx-auto w-full">
      <h1
        class="text-white text-3xl md:text-4xl lg:text-5xl font-light italic leading-tight max-w-2xl reveal reveal-up"
        :class="{ 'is-visible': loaded }"
      >
        Fotografía natural para empresas y profesionales que quieren transmitir lo que realmente son.
      </h1>
      <p
        class="text-white/80 text-lg mt-6 max-w-xl reveal reveal-up reveal-delay-1"
        :class="{ 'is-visible': loaded }"
      >
        Retratos, imagen de marca y eventos corporativos para construir confianza desde la primera impresión.
      </p>
      <a
        href="#"
        class="inline-block mt-8 border border-white text-white text-xs uppercase tracking-widest px-6 py-3 hover:bg-white hover:text-black transition reveal reveal-up reveal-delay-3"
        :class="{ 'is-visible': loaded }"
      >
        Ver proyectos
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
const loaded = ref(false)
onMounted(() => {
  setTimeout(() => { loaded.value = true }, 100)
})
</script>
