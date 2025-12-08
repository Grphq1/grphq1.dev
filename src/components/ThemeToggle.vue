<script setup lang="ts">
import { isDark, toggleDarkWithTransition } from '../utils/logic'

function handleToggle(event: MouseEvent) {
  toggleDarkWithTransition(event)
}
</script>

<template>
  <button
    class="select-none rounded-full p-sp-1 outline-none"
    title="Toggle Color Scheme"
    :aria-pressed="isDark"
    @click="handleToggle"
  >
    <div class="i-ri-sun-line dark:i-ri-moon-line text-xl" />
  </button>
</template>
