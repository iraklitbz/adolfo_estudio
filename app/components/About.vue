<template>
  <section class="py-20 px-6 md:px-16 bg-white">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 v-reveal class="reveal reveal-up text-xl md:text-3xl font-bold leading-tight mb-6">
          Una buena imagen no solo hace que una marca se vea mejor.
        </h2>
        <div class="w-8 h-[2px] bg-black mb-6" />
        <div class="space-y-4 text-sm text-gray-600">
          <p v-reveal class="reveal reveal-up reveal-delay-1">
            La percepción lo cambia todo.
          </p>
          <p v-reveal class="reveal reveal-up reveal-delay-1">
            Las imágenes que usas comunican tu nivel de profesionalidad, generan confianza y te diferencian de tu competencia.
          </p>
          <p v-reveal class="reveal reveal-up reveal-delay-2">
            Una imagen cuidada no es un gasto,<br />
            es una inversión en cómo te ven y en cómo te eligen.
          </p>
        </div>
      </div>
      <div v-reveal class="reveal reveal-right hidden md:block">
        <img
          src="https://res.cloudinary.com/dnrtb2xev/image/upload/v1781074017/Foto_para_BIO_unvxuj.jpg"
          alt="Adolfo Callejo"
          class="w-full h-[450px] object-cover"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { vReveal } = useReveal()
</script>
