<template>
  <footer class="border-t border-gray-200">
    <!-- Desktop: horizontal simple -->
    <div class="hidden md:flex items-center justify-between max-w-6xl mx-auto py-6 px-16">
      <div>
        <img src="/estudio50_negro.svg" alt="Estudio50" class="h-10" />
      </div>
      <div class="flex gap-6">
        <a href="https://www.linkedin.com/in/adolfo-callejo-8a4a753b" target="_blank" class="text-xs uppercase tracking-widest hover:opacity-70 transition">LinkedIn</a>
      </div>
      <p class="text-xs text-gray-400">© 2024 Estudio50 Fotografía</p>
      <div class="flex gap-4 text-xs text-gray-400">
        <NuxtLink to="/aviso-legal" class="hover:text-black transition">Aviso legal</NuxtLink>
        <NuxtLink to="/politica-privacidad" class="hover:text-black transition">Política de privacidad</NuxtLink>
      </div>
    </div>

    <!-- Mobile: vertical completo -->
    <div class="md:hidden bg-neutral-900 text-white py-12 px-6 space-y-8">
      <p class="text-sm font-medium">Imagen que transmite.<br />Confianza que conecta.</p>
      <div>
        <img src="/estudio50_negro.svg" alt="Estudio50" class="h-10 invert" />
        <p class="text-xs text-gray-400">Fotografía corporativa para empresas y profesionales que quieren transmitir lo que realmente son.</p>
      </div>
      <div class="flex gap-4">
        <a href="https://www.linkedin.com/in/adolfo-callejo-8a4a753b" target="_blank" aria-label="LinkedIn" class="text-white hover:opacity-70 transition">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
      </div>
      <nav class="space-y-2">
        <a v-for="link in links" :key="link.label" :href="link.href" class="block text-xs uppercase tracking-widest text-gray-300 hover:text-white transition">{{ link.label }}</a>
      </nav>
      <div class="space-y-1 text-xs text-gray-400">
        <p>fotoempresa50@gmail.com</p>
        <p>+34 658 595 141</p>
      </div>
      <div class="border-t border-gray-700 pt-4 space-y-2">
        <div class="flex gap-4 text-xs text-gray-500">
          <NuxtLink to="/aviso-legal" class="hover:text-white transition">Aviso legal</NuxtLink>
          <NuxtLink to="/politica-privacidad" class="hover:text-white transition">Política de privacidad</NuxtLink>
        </div>
        <p class="text-xs text-gray-500">© Estudio50. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const links = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Contacto', href: '#contacto' },
]
</script>
