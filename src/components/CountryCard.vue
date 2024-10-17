<script setup lang="ts">
import { RouterLink } from 'vue-router'

const props = defineProps<{
  country: {
    name: string
    countryCode: string
  }
  index: number
}>()
</script>

<template>
  <router-link
    :to="`/country/${encodeURIComponent(country.name)}-${country.countryCode}`"
  >
    <div class="w-[80vw] md:w-[35vw] h-30 border py-5 border-black">
      <p class="text-center">
        {{ props.country.name }} - {{ props.index + 1 }}
      </p>
    </div>
  </router-link>
</template>
