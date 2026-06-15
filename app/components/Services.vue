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
            @click="openGallery(i)"
          >
            Ver más →
          </button>
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
              @click="openGallery(i)"
            >
              Ver más →
            </button>
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

const modalOpen = ref(false)
const modalImages = ref<string[]>([])
const modalIndex = ref(0)

function openGallery(i: number) {
  modalImages.value = services[i].gallery
  modalIndex.value = -1
  modalOpen.value = true
}

const services = [
  {
    title: 'Retratos corporativos',
    image: 'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781162165/segunda_sj1qp5.jpg',
    description: 'Retratos profesionales que transmiten confianza y profesionalidad.',
    gallery: [
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538606/1_mlpua8.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538630/2_qcxhkz.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538640/3_utdzpg.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538668/5_bntk6q.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538607/6_lvfr5p.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538607/7_eamefb.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538655/8_sejgf6.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538610/9_entrv6.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538628/10_fjgvyd.png',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538668/11_ydnqgm.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538646/12_enxpjo.png',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538643/13_c7fbfj.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538673/14_x8baul.jpg',
    ],
  },
  {
    title: 'Imagen de marca y equipos',
    image: 'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781162166/tercera_d5ktkn.jpg',
    description: 'Fotografías que reflejan la esencia de tu empresa y la fuerza de tu equipo.',
    gallery: [
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538619/1_g2d6js.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538618/2_iv4yxd.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538618/3_wkt5xp.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538624/4_lubgj3.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538620/5_u7gn9j.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538617/6_axh1qp.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538621/7_ctqkaw.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538658/8_cozdxa.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538669/9_cwki12.jpg',
    ],
  },
  {
    title: 'Eventos corporativos',
    image: 'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781162165/cuarta_mbsatl.jpg',
    description: 'Cobertura profesional de eventos que comunica y deja huella.',
    gallery: [
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538655/1_nwfqma.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538636/2_p5dcme.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538659/3_sncx0c.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538630/4_cw40qh.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538650/5_ftjm5i.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538656/6_k1nx4b.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538658/7_mhvxb3.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538663/8_zrm947.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538649/9_qiu2xg.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538657/10_hlrh4g.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538645/11_ffoknc.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538648/12_tl7akz.jpg',
      'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781538629/13_c796j3.jpg',
    ],
  },
]
</script>
