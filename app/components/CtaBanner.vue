<template>
  <section class="bg-neutral-900 text-white">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 items-center">
      <div v-reveal class="reveal reveal-left p-8">
        <img
          src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=600&q=80"
          alt="Fotógrafo"
          class="w-full h-72 object-cover"
        />
      </div>
      <div v-reveal class="reveal reveal-right p-8 md:p-16">
        <h2 class="text-2xl md:text-3xl font-light italic mb-4">¿Hablamos sobre tu próximo proyecto?</h2>
        <p class="text-sm text-gray-300 mb-8">
          Cuéntame qué necesitas y te ayudaré a encontrar la mejor forma de mostrarlo.
        </p>
        <a href="#" class="inline-block border border-white text-xs uppercase tracking-widest px-6 py-3 hover:bg-white hover:text-black transition">
          Contactar
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { vReveal } = useReveal()
</script>
