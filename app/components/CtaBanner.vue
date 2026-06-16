<template>
  <section class="bg-neutral-900 text-white">
    <!-- Mobile: texto sobre imagen -->
    <div class="md:hidden relative min-h-[70vh] flex items-center overflow-hidden">
      <img
        src="https://res.cloudinary.com/dnrtb2xev/image/upload/v1781162166/undecima_vp8gbr.png"
        alt="Estudio"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/50" />
      <div v-reveal class="reveal reveal-up relative z-10 px-6 py-16 max-w-xl">
        <h2 class="text-3xl font-light mb-4">Hablemos de<br>tu proyecto</h2>
        <p class="text-sm text-gray-300 mb-8 w-1/2">
          Cuéntame qué necesitas y te ayudaré a encontrar la mejor forma de comunicarlo.
        </p>
        <a href="mailto:info@estudio50.com" class="inline-block border border-white text-xs uppercase tracking-widest px-6 py-3 hover:bg-white hover:text-black transition">
          Contactar
        </a>
      </div>
    </div>
    <!-- Desktop: layout dos columnas -->
    <div class="hidden md:grid md:grid-cols-2 items-center max-w-6xl mx-auto">
      <div v-reveal class="reveal reveal-left">
        <img
          src="https://res.cloudinary.com/dnrtb2xev/image/upload/v1781162166/undecima_vp8gbr.png"
          alt="Fotógrafo"
          class="w-full object-cover aspect-video object-center"
        />
      </div>
      <div v-reveal class="reveal reveal-right p-8 md:p-16">
        <h2 class="text-2xl font-light italic mb-4">Hablemos de tu proyecto</h2>
        <p class="text-sm text-gray-300 mb-6">
          Cuéntame qué necesitas y te ayudaré a encontrar la mejor forma de comunicarlo.
        </p>
        <a href="mailto:info@estudio50.com" class="inline-block border border-white text-xs uppercase tracking-widest px-5 py-2.5 hover:bg-white hover:text-black transition">
          Contactar
        </a>
        <a href="https://wa.me/34658595141" target="_blank" class="inline-block border border-white text-xs uppercase tracking-widest px-5 py-2.5 hover:bg-white hover:text-black transition ml-3">
          +34 658 5951 41
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { vReveal } = useReveal()
</script>
