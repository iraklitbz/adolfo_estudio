<template>
  <section class="py-20 px-6 md:px-16 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <!-- Mobile -->
      <div class="md:hidden">
        <span class="text-xs uppercase tracking-widest text-gray-500">Experiencia y forma de trabajar</span>
        <h2 v-reveal class="reveal reveal-up text-xl font-bold leading-tight mt-2 mb-10">
          Mucho más que hacer fotografías.
        </h2>
      </div>

      <!-- Desktop -->
      <div class="hidden md:block text-center mb-12">
        <span class="text-xs uppercase tracking-widest text-gray-500">Experiencia y forma de trabajar</span>
        <h2 v-reveal class="reveal reveal-up text-2xl md:text-3xl font-light italic mt-2 mb-4">
          Mucho más que hacer fotografías.
        </h2>
        <div class="w-8 h-[2px] bg-black mx-auto" />
      </div>

      <div class="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-16 md:gap-y-8">
        <div v-for="(item, i) in points" :key="item.title" v-reveal class="reveal reveal-up" :class="`reveal-delay-${i + 1}`">
          <h3 class="font-bold text-sm mb-1">{{ item.title }}</h3>
          <p class="text-xs text-gray-600 leading-relaxed">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { vReveal } = useReveal()

const points = [
  {
    title: 'Dirección visual cuidada',
    text: 'Cada sesión está pensada para mantener una estética natural, coherente y alineada con la identidad de cada proyecto.',
  },
  {
    title: 'Edición natural y profesional',
    text: 'Trabajo cada imagen cuidando la luz, el color y los detalles para conseguir un resultado limpio, elegante y atemporal.',
  },
  {
    title: 'Entrega clara y organizada',
    text: 'Cada proyecto se entrega de forma cuidada, optimizada y dentro de los plazos acordados.',
  },
  {
    title: 'Experiencia cercana y profesional',
    text: 'Busco que cada sesión sea cómoda, fluida y natural, incluso para personas que no están acostumbradas a estar frente a cámara.',
  },
  {
    title: 'Dirección y asesoramiento',
    text: 'No se trata solo de hacer fotografías. También ayudo a orientar la imagen, el estilo y la dirección visual para que el resultado transmita de forma coherente, profesional y auténtica.',
  },
]
</script>
