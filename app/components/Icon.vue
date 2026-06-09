<template>
  <span class="icon">
    <component :is="icon" class="size-[1em] align-middle" :class="{ 'mb-[0.125em]': autoAlign }" />
  </span>
</template>

<script setup lang="ts">
defineProps({
  icon: {
    type: Object,
    required: true,
  },
  autoAlign: {
    type: Boolean,
    default: true,
  },
})
</script>
