<template>
  <section class="py-20 px-6 md:px-16 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <div class="mb-10">
        <span class="text-xs uppercase tracking-widest text-gray-500">Proyectos</span>
        <h2 v-reveal class="reveal reveal-up text-xl font-bold leading-tight mt-2 mb-10">
          Algunos trabajos recientes.
        </h2>
      </div>

      <!-- Desktop: grid 3 columnas -->
      <div class="hidden md:grid md:grid-cols-3 gap-8">
        <div
          v-for="(project, i) in projects"
          :key="i"
          v-reveal
          class="reveal reveal-up"
          :class="`reveal-delay-${i + 1}`"
        >
          <img :src="project.cover" alt="Proyecto" class="w-full h-72 object-cover mb-4" />
          <button
            class="text-xs uppercase tracking-widest font-bold border border-black px-4 py-2 hover:bg-black hover:text-white transition"
            @click="openGallery(i)"
          >
            Ver más →
          </button>
        </div>
      </div>

      <!-- Mobile: vertical -->
      <div class="md:hidden space-y-8">
        <div
          v-for="(project, i) in projects"
          :key="i + '-mobile'"
          v-reveal
          class="reveal reveal-up"
          :class="`reveal-delay-${i + 1}`"
        >
          <img :src="project.cover" alt="Proyecto" class="w-full h-64 object-cover" />
          <button
            class="mt-3 text-xs uppercase tracking-widest font-bold border border-black px-4 py-2 hover:bg-black hover:text-white transition"
            @click="openGallery(i)"
          >
            Ver más →
          </button>
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

const modalOpen = ref(false)
const modalImages = ref<string[]>([])
const modalIndex = ref(0)

function openGallery(i: number) {
  modalImages.value = projects[i].gallery
  modalIndex.value = -1
  modalOpen.value = true
}

const projects = [
  {
    cover: 'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781592970/3_u6xuz9.jpg',
    gallery: [
      // TODO: añadir imágenes de esta serie cuando las envíen
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781592970/3_u6xuz9.jpg',
    ],
  },
  {
    cover: 'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781592961/1_y5ne5n.jpg',
    gallery: [
      // TODO: añadir imágenes de esta serie cuando las envíen
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781592961/1_y5ne5n.jpg',
    ],
  },
  {
    cover: 'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781592965/2_x98j8i.jpg',
    gallery: [
      // TODO: añadir imágenes de esta serie cuando las envíen
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781592965/2_x98j8i.jpg',
    ],
  },
]
</script>
