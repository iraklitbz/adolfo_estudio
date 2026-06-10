<template>
  <section class="bg-neutral-900 text-white">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 items-center">
      <div v-reveal class="reveal reveal-left hidden md:block">
        <img
          src="https://res.cloudinary.com/demo/image/upload/v1/samples/people/jazz"
          alt="Fotógrafo"
          class="w-full h-72 md:h-80 object-cover"
        />
      </div>
      <div v-reveal class="reveal reveal-right p-8 md:p-16">
        <h2 class="text-xl md:text-2xl font-light italic mb-4">¿Hablamos sobre tu próximo proyecto?</h2>
        <p class="text-sm text-gray-300 mb-6">
          Cuéntame qué necesitas y te ayudaré a encontrar la mejor forma de mostrarlo.
        </p>
        <a href="mailto:info@estudio50.com" class="inline-block border border-white text-xs uppercase tracking-widest px-5 py-2.5 hover:bg-white hover:text-black transition">
          Contactar
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { vReveal } = useReveal()
</script>
