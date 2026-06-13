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
          <h3 class="font-semibold text-sm mb-1">{{ service.title }}</h3>
          <p class="text-xs text-gray-600 mb-4 flex-1">{{ service.description }}</p>
          <button
            class="self-start text-xs uppercase tracking-widest font-bold border border-black px-4 py-2 hover:bg-black hover:text-white transition"
            @click="toggle(i)"
          >
            {{ expanded[i] ? 'Cerrar' : 'Ver más →' }}
          </button>
          <div v-if="expanded[i]" class="grid grid-cols-2 gap-2 mt-4">
            <img
              v-for="(img, j) in service.gallery"
              :key="j"
              :src="img"
              :alt="`${service.title} ${j + 1}`"
              class="w-full h-32 object-cover cursor-pointer hover:opacity-80 transition"
              @click="openModal(service.gallery, j)"
            />
          </div>
        </div>
      </div>

      <!-- Mobile: vertical -->
      <div class="md:hidden space-y-12">
        <div
          v-for="(service, i) in services"
          :key="service.title + '-mobile'"
          v-reveal
          class="reveal reveal-up"
          :class="`reveal-delay-${i + 1}`"
        >
          <img :src="service.image" :alt="service.title" class="w-full h-64 object-cover" />
          <div class="mt-4">
            <h3 class="text-xs uppercase font-bold tracking-wide">{{ service.title }}</h3>
            <p class="text-xs text-gray-500 mt-1">{{ service.description }}</p>
            <button
              class="inline-block mt-3 text-xs uppercase tracking-widest font-bold border border-black px-4 py-2 hover:bg-black hover:text-white transition"
              @click="toggle(i)"
            >
              {{ expanded[i] ? 'Cerrar' : 'Ver más →' }}
            </button>
          </div>
          <div v-if="expanded[i]" class="grid grid-cols-2 gap-2 mt-4">
            <img
              v-for="(img, j) in service.gallery"
              :key="j"
              :src="img"
              :alt="`${service.title} ${j + 1}`"
              class="w-full h-40 object-cover cursor-pointer hover:opacity-80 transition"
              @click="openModal(service.gallery, j)"
            />
          </div>
        </div>
      </div>
    </div>

    <ImageModal
      v-model="modalOpen"
      :images="modalImages"
      :index="modalIndex"
      @update:index="modalIndex = $event"
    />
  </section>
</template>

<script setup lang="ts">
const { vReveal } = useReveal()

const expanded = ref<boolean[]>([false, false, false])
const modalOpen = ref(false)
const modalImages = ref<string[]>([])
const modalIndex = ref(0)

function toggle(i: number) {
  expanded.value[i] = !expanded.value[i]
}

function openModal(images: string[], index: number) {
  modalImages.value = images
  modalIndex.value = index
  modalOpen.value = true
}

const services = [
  {
    title: 'Retratos corporativos',
    image: 'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781162165/segunda_sj1qp5.jpg',
    description: 'Retratos profesionales que transmiten confianza y profesionalidad.',
    gallery: [
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781162165/segunda_sj1qp5.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781162165/quinta_enm7yu.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781162167/sexta_gxukkl.jpg',
    ],
  },
  {
    title: 'Imagen de marca y equipos',
    image: 'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781162166/tercera_d5ktkn.jpg',
    description: 'Fotografías que reflejan la esencia de tu empresa y la fuerza de tu equipo.',
    gallery: [
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781162166/tercera_d5ktkn.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781162166/septima_khzxtp.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781162165/octava_wpka70.jpg',
    ],
  },
  {
    title: 'Eventos corporativos',
    image: 'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781162165/cuarta_mbsatl.jpg',
    description: 'Cobertura profesional de eventos que comunica y deja huella.',
    gallery: [
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781162165/cuarta_mbsatl.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781162165/novena_iyw3ma.jpg',
    ],
  },
]
</script>
