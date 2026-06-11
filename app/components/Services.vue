<template>
  <section class="py-20 px-6 md:px-16 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <!-- Desktop: título centrado -->
      <div v-reveal class="reveal reveal-up text-center mb-12 hidden md:block">
        <h2 class="text-2xl md:text-3xl font-light italic mb-4">
          Soluciones visuales para marcas que quieren destacar.
        </h2>
        <div class="w-8 h-[2px] bg-black mx-auto" />
      </div>

      <!-- Mobile: título izquierda -->
      <div class="md:hidden mb-10">
        <span class="text-xs uppercase tracking-widest text-gray-500">Servicios</span>
        <h2 v-reveal class="reveal reveal-up text-xl font-bold leading-tight mt-2">
          Imágenes que representan tu empresa, tu equipo y tu valor.
        </h2>
      </div>

      <!-- Desktop: grid 3 columnas -->
      <div class="hidden md:grid md:grid-cols-3 gap-8">
        <div
          v-for="(service, i) in services"
          :key="service.title"
          v-reveal
          class="reveal reveal-up flex flex-col"
          :class="`reveal-delay-${i + 1}`"
        >
          <img :src="service.image" :alt="service.title" class="w-full h-56 object-cover mb-5" />
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xl">{{ service.icon }}</span>
            <h3 class="font-semibold text-sm">{{ service.title }}</h3>
          </div>
          <p class="text-xs text-gray-600 mb-4 flex-1">{{ service.description }}</p>
        </div>
      </div>

      <!-- Mobile: vertical con fecha -->
      <div class="md:hidden space-y-10">
        <div
          v-for="(service, i) in services"
          :key="service.title + '-mobile'"
          v-reveal
          class="reveal reveal-up cursor-pointer"
          :class="`reveal-delay-${i + 1}`"
        >
          <img :src="service.image" :alt="service.title" class="w-full h-64 object-cover" />
          <div class="mt-4">
            <h3 class="text-xs uppercase font-bold tracking-wide">{{ service.title }}</h3>
            <p class="text-xs text-gray-500 mt-1">{{ service.description }}</p>
            <span class="inline-block mt-2 text-xs uppercase tracking-widest font-bold">2024 →</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { vReveal } = useReveal()

const services = [
  {
    icon: '👤',
    title: 'Retrato profesional',
    image: 'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781162165/segunda_sj1qp5.jpg',
    description: 'Retratos naturales y profesionales para transmitir cercanía, confianza y una imagen alineada con el valor de tu trabajo.',
  },
  {
    icon: '📷',
    title: 'Imagen de marca',
    image: 'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781162166/tercera_d5ktkn.jpg',
    description: 'Fotografías creadas para comunicar de forma más auténtica, profesional y diferenciada.',
  },
  {
    icon: '🎤',
    title: 'Eventos corporativos',
    image: 'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781162165/cuarta_mbsatl.jpg',
    description: 'Cobertura visual de eventos pensada para mostrar las personas, el ambiente y la esencia detrás de cada proyecto.',
  },
]
</script>
