<template>
  <footer class="border-t border-gray-200">
    <!-- Desktop: horizontal simple -->
    <div class="hidden md:flex items-center justify-between max-w-6xl mx-auto py-6 px-16">
      <div>
        <span class="text-sm font-semibold tracking-widest uppercase">ESTUDIO50</span>
        <span class="text-xs text-gray-400 ml-2">Fotografía</span>
      </div>
      <div class="flex gap-6">
        <a href="#" class="text-xs uppercase tracking-widest hover:opacity-70 transition">Instagram</a>
        <a href="#" class="text-xs uppercase tracking-widest hover:opacity-70 transition">LinkedIn</a>
      </div>
      <p class="text-xs text-gray-400">© 2024 Estudio50 Fotografía</p>
    </div>

    <!-- Mobile: vertical completo -->
    <div class="md:hidden bg-neutral-900 text-white py-12 px-6 space-y-8">
      <p class="text-sm font-medium">Imagen que transmite.<br />Confianza que conecta.</p>
      <div>
        <h3 class="text-lg font-bold tracking-widest uppercase mb-2">ESTUDIO50</h3>
        <p class="text-xs text-gray-400">Fotografía corporativa para empresas y profesionales que quieren transmitir lo que realmente son.</p>
      </div>
      <div class="flex gap-4">
        <a href="#" aria-label="LinkedIn" class="text-white hover:opacity-70 transition">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
        <a href="#" aria-label="Instagram" class="text-white hover:opacity-70 transition">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
        </a>
      </div>
      <nav class="space-y-2">
        <a v-for="link in links" :key="link.label" :href="link.href" class="block text-xs uppercase tracking-widest text-gray-300 hover:text-white transition">{{ link.label }}</a>
      </nav>
      <div class="space-y-1 text-xs text-gray-400">
        <p>info@estudio50.com</p>
        <p>+34 600 000 000</p>
      </div>
      <div class="border-t border-gray-700 pt-4 space-y-2">
        <div class="flex gap-4 text-xs text-gray-500">
          <a href="#" class="hover:text-white transition">Aviso legal</a>
          <a href="#" class="hover:text-white transition">Política de privacidad</a>
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
