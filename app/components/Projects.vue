<template>
  <section class="py-20 px-6 md:px-16 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <div class="mb-10">
        <span class="text-xs uppercase tracking-widest text-gray-500">Proyectos</span>
        <h2 v-reveal class="reveal reveal-up text-xl font-bold leading-tight mt-2 mb-10">
          Algunos trabajos recientes.
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <img
          v-for="(img, i) in images"
          :key="i"
          v-reveal
          :src="img"
          alt="Proyecto"
          class="reveal reveal-up w-full object-cover cursor-pointer hover:opacity-80 transition md:h-64"
          @click="openModal(i)"
        />
      </div>

      <div v-reveal class="reveal reveal-up text-center mt-10">
        <a href="#contacto" class="inline-block border border-black text-xs uppercase tracking-widest px-6 py-3 hover:bg-black hover:text-white transition">
          Ver todos los proyectos
        </a>
      </div>
    </div>

    <ImageModal
      v-model="modalOpen"
      :images="images"
      :index="modalIndex"
      @update:index="modalIndex = $event"
    />
  </section>
</template>

<script setup lang="ts">
const { vReveal } = useReveal()

const modalOpen = ref(false)
const modalIndex = ref(0)

const images = [
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781162165/quinta_enm7yu.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781162167/sexta_gxukkl.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781162166/septima_khzxtp.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781162165/octava_wpka70.jpg',
  'https://res.cloudinary.com/dnrtb2xev/image/upload/v1781162165/novena_iyw3ma.jpg',
]

function openModal(index: number) {
  modalIndex.value = index
  modalOpen.value = true
}
</script>
