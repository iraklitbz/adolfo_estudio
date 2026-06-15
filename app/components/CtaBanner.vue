<template>
  <section class="bg-neutral-900 text-white">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 items-center">
      <div v-reveal class="reveal reveal-left">
        <img
          src="https://res.cloudinary.com/dnrtb2xev/image/upload/v1781162166/undecima_vp8gbr.png"
          alt="Fotógrafo"
          class="w-full object-cover md:aspect-video md:h-auto md:object-center"
        />
      </div>
      <div v-reveal class="reveal reveal-right p-8 md:p-16">
        <h2 class="text-xl md:text-2xl font-light italic mb-4">Hablemos de tu proyecto</h2>
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
