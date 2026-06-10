<template>
  <section class="py-20 px-6 md:px-16 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <div v-reveal class="reveal reveal-up text-center mb-10">
        <h2 class="text-xl md:text-2xl font-bold mb-3">Proyectos seleccionados</h2>
        <div class="w-8 h-[2px] bg-black mx-auto" />
      </div>

      <div class="flex items-center justify-center gap-4 mb-8">
        <button
          v-for="(gallery, i) in galleries"
          :key="gallery.name"
          class="text-xs uppercase tracking-widest px-3 py-1 border transition"
          :class="activeGallery === i ? 'bg-black text-white border-black' : 'border-gray-300 hover:border-black'"
          @click="activeGallery = i"
        >
          {{ gallery.name }}
        </button>
      </div>

      <div v-reveal class="reveal reveal-up grid grid-cols-2 md:grid-cols-4 gap-2">
        <img
          v-for="(img, i) in currentImages"
          :key="i"
          :src="img"
          alt="Proyecto"
          class="w-full h-40 md:h-48 object-cover cursor-pointer hover:opacity-80 transition"
          @click="openModal(i)"
        />
      </div>

      <div v-reveal class="reveal reveal-up reveal-delay-1 text-center mt-10">
        <a href="#" class="inline-block border border-black text-xs uppercase tracking-widest px-5 py-2.5 hover:bg-black hover:text-white transition">
          Ver más proyectos
        </a>
      </div>
    </div>

    <ImageModal
      v-model="modalOpen"
      :images="currentImages"
      :index="modalIndex"
      @update:index="modalIndex = $event"
    />
  </section>
</template>

<script setup lang="ts">
const { vReveal } = useReveal()

const activeGallery = ref(0)
const modalOpen = ref(false)
const modalIndex = ref(0)

const galleries = [
  {
    name: 'Galería 1',
    images: [
      'https://res.cloudinary.com/demo/image/upload/v1/samples/people/smiling-man',
      'https://res.cloudinary.com/demo/image/upload/v1/samples/people/boy-snow-hoodie',
      'https://res.cloudinary.com/demo/image/upload/v1/samples/people/kitchen-bar',
      'https://res.cloudinary.com/demo/image/upload/v1/samples/people/jazz',
      'https://res.cloudinary.com/demo/image/upload/v1/samples/landscapes/nature-mountains',
      'https://res.cloudinary.com/demo/image/upload/v1/samples/landscapes/beach-boat',
      'https://res.cloudinary.com/demo/image/upload/v1/samples/food/spices',
      'https://res.cloudinary.com/demo/image/upload/v1/samples/animals/three-dogs',
    ],
  },
  {
    name: 'Galería 2',
    images: [
      'https://res.cloudinary.com/demo/image/upload/v1/samples/landscapes/architecture-signs',
      'https://res.cloudinary.com/demo/image/upload/v1/samples/food/pot-mussels',
      'https://res.cloudinary.com/demo/image/upload/v1/samples/landscapes/girl-urban-view',
      'https://res.cloudinary.com/demo/image/upload/v1/samples/ecommerce/leather-bag-gray',
      'https://res.cloudinary.com/demo/image/upload/v1/samples/ecommerce/shoes',
      'https://res.cloudinary.com/demo/image/upload/v1/samples/food/fish-vegetables',
      'https://res.cloudinary.com/demo/image/upload/v1/samples/animals/cat',
      'https://res.cloudinary.com/demo/image/upload/v1/samples/landscapes/landscape-panorama',
    ],
  },
  {
    name: 'Galería 3',
    images: [
      'https://res.cloudinary.com/demo/image/upload/v1/samples/ecommerce/accessories-bag',
      'https://res.cloudinary.com/demo/image/upload/v1/samples/people/smiling-man',
      'https://res.cloudinary.com/demo/image/upload/v1/samples/people/boy-snow-hoodie',
      'https://res.cloudinary.com/demo/image/upload/v1/samples/landscapes/nature-mountains',
      'https://res.cloudinary.com/demo/image/upload/v1/samples/people/kitchen-bar',
      'https://res.cloudinary.com/demo/image/upload/v1/samples/food/spices',
      'https://res.cloudinary.com/demo/image/upload/v1/samples/animals/three-dogs',
      'https://res.cloudinary.com/demo/image/upload/v1/samples/landscapes/beach-boat',
    ],
  },
]

const currentImages = computed(() => galleries[activeGallery.value]?.images ?? [])

function openModal(index: number) {
  modalIndex.value = index
  modalOpen.value = true
}
</script>
