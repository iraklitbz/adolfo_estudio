<template>
  <section class="py-20 px-6 md:px-16">
    <div class="max-w-6xl mx-auto">
      <!-- Mobile -->
      <div class="md:hidden">
        <span class="text-xs uppercase tracking-widest text-gray-500">Sobre mí</span>
        <h2 v-reveal class="reveal reveal-up text-xl font-bold leading-tight mt-2 mb-8">
          Detrás de Estudio50, Adolfo Callejo.
        </h2>
        <img
          v-reveal
          src="https://res.cloudinary.com/dnrtb2xev/image/upload/v1781074017/Foto_para_BIO_unvxuj.jpg"
          alt="Adolfo Callejo"
          class="reveal reveal-up w-full h-72 object-cover mb-8"
        />
      </div>

      <!-- Desktop: 2 columnas -->
      <div class="hidden md:grid md:grid-cols-2 gap-12 items-start">
        <div v-reveal class="reveal reveal-left">
          <img
            src="https://res.cloudinary.com/dnrtb2xev/image/upload/v1781074017/Foto_para_BIO_unvxuj.jpg"
            alt="Adolfo Callejo"
            class="w-full h-[500px] object-cover"
          />
        </div>
        <div>
          <span class="text-xs uppercase tracking-widest text-gray-500">Sobre mí</span>
          <h2 v-reveal class="reveal reveal-up text-2xl md:text-3xl font-bold leading-tight mt-2 mb-6">
            Detrás de Estudio50, Adolfo Callejo.
          </h2>
          <div class="w-8 h-[2px] bg-black mb-6" />
          <div class="space-y-4 text-sm text-gray-600" v-reveal>
            <p>Desde hace más de 20 años trabajo creando imágenes para empresas, profesionales, marcas y proyectos editoriales, ayudándoles a transmitir una imagen más sólida, cercana y profesional.</p>
            <p>Hoy en día, la imagen es una parte fundamental de cómo una empresa o una persona son percibidas. Antes de una reunión, una llamada o una propuesta, muchas veces la primera impresión ya se ha producido.</p>
            <p>Una comunicación visual cuidada ayuda a transmitir confianza, profesionalidad y valor, factores que influyen directamente en la forma en que clientes y colaboradores perciben un negocio.</p>
            <p>Por eso, además de crear fotografías naturales y profesionales, ayudo a mis clientes a definir la imagen que quieren transmitir para que cada fotografía refleje de forma coherente el nivel y la calidad de su trabajo.</p>
            <p>Mi objetivo es ayudarte a destacar, generar confianza y proyectar una imagen alineada con el verdadero valor de lo que haces.</p>
          </div>
          <a v-reveal href="mailto:fotoempresa50@gmail.com" class="reveal reveal-up inline-block mt-8 border border-black text-xs uppercase tracking-widest px-6 py-3 hover:bg-black hover:text-white transition">
            Contactar
          </a>
        </div>
      </div>

      <!-- Mobile: texto -->
      <div class="md:hidden space-y-4 text-sm text-gray-600">
        <p v-reveal class="reveal reveal-up reveal-delay-1">
          Desde hace más de 20 años trabajo creando imágenes para empresas, profesionales, marcas y proyectos editoriales, ayudándoles a transmitir una imagen más sólida, cercana y profesional.
        </p>
        <p v-reveal class="reveal reveal-up reveal-delay-2">
          Hoy en día, la imagen es una parte fundamental de cómo una empresa o una persona son percibidas. Antes de una reunión, una llamada o una propuesta, muchas veces la primera impresión ya se ha producido.
        </p>
        <p v-reveal class="reveal reveal-up reveal-delay-3">
          Una comunicación visual cuidada ayuda a transmitir confianza, profesionalidad y valor, factores que influyen directamente en la forma en que clientes y colaboradores perciben un negocio.
        </p>
        <p v-reveal class="reveal reveal-up">
          Por eso, además de crear fotografías naturales y profesionales, ayudo a mis clientes a definir la imagen que quieren transmitir para que cada fotografía refleje de forma coherente el nivel y la calidad de su trabajo.
        </p>
        <p v-reveal class="reveal reveal-up">
          Mi objetivo es ayudarte a destacar, generar confianza y proyectar una imagen alineada con el verdadero valor de lo que haces.
        </p>
      </div>
      <div v-reveal class="md:hidden reveal reveal-up mt-8">
        <a href="mailto:fotoempresa50@gmail.com" class="inline-block border border-black text-xs uppercase tracking-widest px-6 py-3 hover:bg-black hover:text-white transition">
          Contactar
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { vReveal } = useReveal()
</script>
