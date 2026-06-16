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
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781595102/_DSC3610_vys40r.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781595097/_DSC3732_e87se2.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781595096/DSC_1298_jaxzqn.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781595096/13_mxxicq.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781595095/DSC_1424_ycwmv8.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781595095/DSC_1500_mktxmp.jpg',
    ],
  },
  {
    cover: 'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781592961/1_y5ne5n.jpg',
    gallery: [
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781595103/DSC_9163_t7hmag.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781595102/DSC_6600_hb4kdl.jpg',
    ],
  },
  {
    cover: 'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781592965/2_x98j8i.jpg',
    gallery: [
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781595101/_DSC2464_copia_nyp1ua.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781595100/_DSC2558_copia_qjmjbh.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781595100/_DSC1164_peverf.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781595099/_DSC2335_copia_uei1fp.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781595099/_DSC4664_xsfbbx.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781595098/_DSC2656_copia_mwdph1.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781595097/_DSC4628_lbecnd.jpg',
    ],
  },
]
</script>
