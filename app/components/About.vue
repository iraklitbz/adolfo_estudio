<template>
  <section class="py-20 px-6 bg-white">
    <div class="max-w-xl mx-auto md:text-center">
      <h2 v-reveal class="reveal reveal-up text-xl md:text-2xl font-bold leading-tight mb-6">
        Una buena imagen no solo hace que una marca se vea mejor.
      </h2>
      <div class="space-y-4 text-sm md:text-base text-gray-600">
        <p v-reveal class="reveal reveal-up reveal-delay-1">
          Transmite confianza, profesionalidad y valor.
        </p>
        <p v-reveal class="reveal reveal-up reveal-delay-1">
          Influye en cómo te perciben, en cómo conectas y en las oportunidades que se abren para tu negocio.
        </p>
        <p v-reveal class="reveal reveal-up reveal-delay-2">
          En un mundo como el nuestro, la imagen cuenta más que nunca.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { vReveal } = useReveal()
</script>
