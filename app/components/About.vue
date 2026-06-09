<template>
  <section class="py-24 px-8 md:px-16">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div v-reveal class="reveal reveal-left">
        <h2 class="text-3xl md:text-4xl font-bold leading-tight mb-8">
          Una buena imagen no solo hace que una marca se vea mejor.
        </h2>
        <div class="w-8 h-[2px] bg-black mb-8" />
        <p class="text-gray-600 mb-4">La percepción lo cambia todo.</p>
        <p class="text-gray-600 mb-4">
          Las imágenes que usas comunican tu nivel de profesionalidad, generan confianza y te diferencian de tu competencia.
        </p>
        <p class="text-gray-600">
          Una imagen cuidada no es un gasto, es una inversión en cómo te ven y en cómo te eligen.
        </p>
      </div>
      <div v-reveal class="reveal reveal-right">
        <img
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
          alt="Fotógrafo trabajando"
          class="w-full h-[500px] object-cover"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { vReveal } = useReveal()
</script>
