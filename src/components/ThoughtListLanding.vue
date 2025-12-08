<script setup lang="ts">
import { useThoughts } from '../composables/useThoughts'
import ThoughtList from './ThoughtList.vue'

const thoughts = useThoughts()

const thoughtsSorted = thoughts
  .sort((a, b) => +new Date(b.date) - +new Date(a.date))
  .slice(0, 4)
</script>

<template>
  <div class="not-prose my-sp-6">
    <div class="mb-sp-4 flex flex-col">
      <h2
        class="mb-sp-1 text-heading-lg color-base font-bold leading-none font-secondary"
      >
        Thoughts
      </h2>
      <p class="max-w-sm color-base-secondary">
        Short reflections and experiments — bite-sized ideas, observations, and
        lessons from ongoing projects, curiosities, and day-to-day learning.
      </p>
    </div>
    <ThoughtList :thoughts="thoughtsSorted" />
  </div>
</template>
