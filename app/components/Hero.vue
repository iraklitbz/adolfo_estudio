<template>
  <section class="relative h-screen flex items-end md:items-center px-6 pb-16 md:pb-0 md:px-16">
    <img
      src="https://res.cloudinary.com/dnrtb2xev/image/upload/v1781005696/75526aab-f792-4cff-8583-a437809f78c6_imhjgz.png"
      alt="Hero"
      class="absolute inset-0 w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-black/40" />
    <div class="relative z-10 w-full max-w-md md:max-w-2xl">
      <h1
        class="text-white text-2xl md:text-4xl lg:text-5xl font-light italic leading-tight reveal reveal-up"
        :class="{ 'is-visible': loaded }"
      >
        Fotografía natural para empresas y profesionales que quieren transmitir lo que realmente son.
      </h1>
      <p
        class="text-white/80 text-sm md:text-base mt-4 md:mt-6 max-w-lg reveal reveal-up reveal-delay-1"
        :class="{ 'is-visible': loaded }"
      >
        Retratos, imagen de marca y eventos corporativos para construir confianza desde la primera impresión.
      </p>
      <a
        href="#proyectos"
        class="inline-block mt-6 md:mt-8 border border-white text-white text-xs uppercase tracking-widest px-5 py-2.5 hover:bg-white hover:text-black transition reveal reveal-up reveal-delay-3"
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
