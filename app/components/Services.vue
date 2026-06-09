<template>
  <section class="py-24 px-8 md:px-16 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <div v-reveal class="reveal reveal-up text-center mb-16">
        <h2 class="text-2xl md:text-3xl font-light italic mb-4">
          Soluciones visuales para marcas que quieren destacar.
        </h2>
        <div class="w-8 h-[2px] bg-black mx-auto" />
      </div>
      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="(service, i) in services"
          :key="service.title"
          v-reveal
          class="reveal reveal-up flex flex-col"
          :class="`reveal-delay-${i + 1}`"
        >
          <img :src="service.image" :alt="service.title" class="w-full h-64 object-cover mb-6" />
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xl">{{ service.icon }}</span>
            <h3 class="font-semibold">{{ service.title }}</h3>
          </div>
          <p class="text-sm text-gray-600 mb-4 flex-1">{{ service.description }}</p>
          <a href="#" class="text-xs font-bold uppercase tracking-widest hover:opacity-70 transition">
            Saber más →
          </a>
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
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    description: 'Retratos naturales y profesionales para transmitir cercanía, confianza y una imagen alineada con el valor de tu trabajo.',
  },
  {
    icon: '📷',
    title: 'Imagen de marca',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    description: 'Fotografías creadas para comunicar de forma más auténtica, profesional y diferenciada.',
  },
  {
    icon: '🎤',
    title: 'Eventos corporativos',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
    description: 'Cobertura visual de eventos pensada para mostrar las personas, el ambiente y la esencia detrás de cada proyecto.',
  },
]
</script>
