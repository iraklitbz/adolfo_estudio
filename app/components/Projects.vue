<template>
  <section class="py-24 px-8 md:px-16">
    <div class="max-w-6xl mx-auto">
      <div v-reveal class="reveal reveal-up text-center mb-12">
        <h2 class="text-2xl md:text-3xl font-bold mb-4">Proyectos seleccionados</h2>
        <div class="w-8 h-[2px] bg-black mx-auto" />
      </div>
      <div v-reveal class="reveal reveal-up reveal-delay-1 grid grid-cols-2 md:grid-cols-4 gap-2">
        <img
          v-for="(img, i) in images"
          :key="img.id"
          :src="img.url"
          alt="Proyecto"
          class="w-full h-48 object-cover cursor-pointer hover:opacity-80 transition"
          @click="openModal(i)"
        />
      </div>
      <div v-reveal class="reveal reveal-up reveal-delay-2 text-center mt-12">
        <a href="#" class="inline-block border border-black text-xs uppercase tracking-widest px-6 py-3 hover:bg-black hover:text-white transition">
          Ver más proyectos
        </a>
      </div>
    </div>

    <ImageModal
      v-model="modalOpen"
      :images="imageUrls"
      :index="modalIndex"
      @update:index="modalIndex = $event"
    />
  </section>
</template>

<script setup lang="ts">
const { vReveal } = useReveal()
const { data: images } = useCloudinaryImages('retratos')

const modalOpen = ref(false)
const modalIndex = ref(0)

const imageUrls = computed(() => images.value?.map((img) => img.url) || [])

function openModal(index: number) {
  modalIndex.value = index
  modalOpen.value = true
}
</script>
