<template>
  <header
    class="fixed top-0 left-0 w-full z-50 py-6 px-8 md:px-16 transition-all duration-300"
    :class="scrolled || menuOpen ? 'bg-white shadow-sm py-4' : 'bg-transparent'"
  >
    <div class="max-w-6xl mx-auto flex items-center justify-between">
      <div :class="scrolled || menuOpen ? 'text-black' : 'text-white'" class="transition-colors duration-300">
        <span class="text-sm font-semibold tracking-widest uppercase">Adolfo Estudio</span>
        <span class="block text-[10px] tracking-widest uppercase opacity-70">Fotografía</span>
      </div>
      <nav class="hidden md:flex gap-8">
        <a
          v-for="item in nav"
          :key="item"
          href="#"
          class="text-xs uppercase tracking-widest hover:opacity-70 transition-colors duration-300"
          :class="scrolled ? 'text-black' : 'text-white'"
        >
          {{ item }}
        </a>
      </nav>
      <button
        class="md:hidden transition-colors duration-300"
        :class="scrolled || menuOpen ? 'text-black' : 'text-white'"
        aria-label="Menu"
        @click="menuOpen = !menuOpen"
      >
        <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <nav v-if="menuOpen" class="md:hidden mt-6 pb-4 flex flex-col gap-4">
        <a
          v-for="item in nav"
          :key="item"
          href="#"
          class="text-black text-sm uppercase tracking-widest hover:opacity-70 transition"
          @click="menuOpen = false"
        >
          {{ item }}
        </a>
      </nav>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const nav = ['Inicio', 'Servicios', 'Proyectos', 'Sobre mí', 'Contacto']
const scrolled = ref(false)
const menuOpen = ref(false)

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

function onScroll() {
  scrolled.value = window.scrollY > 100
}
</script>
