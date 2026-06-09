<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="modelValue"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
        @click.self="close"
      >
        <button
          class="absolute top-6 right-6 text-white text-3xl hover:opacity-70 transition"
          aria-label="Cerrar"
          @click="close"
        >
          ✕
        </button>

        <!-- Nav arrows -->
        <button
          v-if="hasPrev"
          class="absolute left-4 md:left-8 text-white text-4xl hover:opacity-70 transition"
          aria-label="Anterior"
          @click="prev"
        >
          ‹
        </button>
        <button
          v-if="hasNext"
          class="absolute right-4 md:right-8 text-white text-4xl hover:opacity-70 transition"
          aria-label="Siguiente"
          @click="next"
        >
          ›
        </button>

        <img
          :src="currentImage"
          alt=""
          class="max-h-[90vh] max-w-[90vw] object-contain"
        />
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
  images: string[]
  index: number
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  'update:index': [value: number]
}>()

const currentImage = computed(() => props.images[props.index])
const hasPrev = computed(() => props.index > 0)
const hasNext = computed(() => props.index < props.images.length - 1)

function close() {
  emit('update:modelValue', false)
}

function prev() {
  if (hasPrev.value) emit('update:index', props.index - 1)
}

function next() {
  if (hasNext.value) emit('update:index', props.index + 1)
}

function onKeydown(e: KeyboardEvent) {
  if (!props.modelValue) return
  if (e.key === 'Escape') close()
  if (e.key === 'ArrowLeft') prev()
  if (e.key === 'ArrowRight') next()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>
