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
        class="fixed inset-0 z-[100] bg-black/95 overflow-hidden"
        @click.self="close"
      >
        <!-- Close button -->
        <button
          class="absolute top-4 right-4 z-10 text-white text-3xl hover:opacity-70 transition"
          aria-label="Cerrar"
          @click="close"
        >
          ✕
        </button>

        <!-- Two views with slide transition -->
        <div class="relative w-full h-full">
          <!-- Grid view -->
          <Transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="-translate-x-full"
            enter-to-class="translate-x-0"
            leave-active-class="transition duration-300 ease-out"
            leave-from-class="translate-x-0"
            leave-to-class="-translate-x-full"
          >
            <div v-if="isGrid" class="absolute inset-0 overflow-y-auto p-6 pt-16 scrollbar-hide">
              <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-3">
                <img
                  v-for="(img, j) in images"
                  :key="j"
                  :src="img"
                  alt=""
                  class="w-3/5 mx-auto md:w-full md:aspect-[3/4] object-cover md:cursor-pointer hover:opacity-80 transition rounded"
                  @click="onImageClick(j)"
                />
              </div>
              <div class="flex justify-center py-10">
                <button
                  class="border border-white text-white text-xs uppercase tracking-widest px-6 py-3 hover:bg-white hover:text-black transition"
                  @click="close"
                >
                  Cerrar galería
                </button>
              </div>
            </div>
          </Transition>

          <!-- Single image view (desktop only) -->
          <Transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="translate-x-full"
            enter-to-class="translate-x-0"
            leave-active-class="transition duration-300 ease-out"
            leave-from-class="translate-x-0"
            leave-to-class="translate-x-full"
          >
            <div v-if="!isGrid" class="hidden md:flex absolute inset-0 items-center justify-center p-4">
              <!-- Back to grid -->
              <button
                class="absolute top-4 left-4 z-10 text-white text-2xl hover:opacity-70 transition flex items-center gap-1"
                @click="backToGrid"
              >
                ← <span class="text-sm uppercase tracking-widest">Galería</span>
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
                class="max-h-[85vh] max-w-[90vw] object-contain"
              />
            </div>
          </Transition>
        </div>
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

const isGrid = computed(() => props.index === -1)
const currentImage = computed(() => props.images[props.index])
const hasPrev = computed(() => props.index > 0)
const hasNext = computed(() => props.index < props.images.length - 1)

function close() {
  emit('update:modelValue', false)
}

watch(() => props.modelValue, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

function selectImage(j: number) {
  emit('update:index', j)
}

const isMobile = ref(false)

function checkMobile() {
  isMobile.value = window.innerWidth < 768
}

function onImageClick(j: number) {
  if (!isMobile.value) selectImage(j)
}

function backToGrid() {
  emit('update:index', -1)
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
  if (!isGrid.value) {
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
    if (e.key === 'Backspace') backToGrid()
  }
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
  window.addEventListener('resize', checkMobile)
  checkMobile()
})
onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  window.removeEventListener('resize', checkMobile)
  document.body.style.overflow = ''
})
</script>
