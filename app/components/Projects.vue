<template>
  <section class="py-24 px-8 md:px-16">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-2xl md:text-3xl font-bold text-center mb-4">Proyectos seleccionados</h2>
      <div class="w-8 h-[2px] bg-black mx-auto mb-12" />
      <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
        <img
          v-for="(img, i) in images"
          :key="i"
          :src="img"
          alt="Proyecto"
          class="w-full h-48 object-cover"
        />
      </div>
      <div class="text-center mt-12">
        <a href="#" class="inline-block border border-black text-xs uppercase tracking-widest px-6 py-3 hover:bg-black hover:text-white transition">
          Ver más proyectos
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const images = [
  'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&q=80',
  'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&q=80',
  'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80',
  'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&q=80',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
]
</script>
