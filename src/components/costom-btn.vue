<script setup lang="ts">
const props = defineProps<{
  year: number
  selectedYear: number
}>()

const emit = defineEmits(['switchYear'])

const switchYear = () => {
  emit('switchYear', props.year)
}
</script>

<template>
  <button
    @click="switchYear"
    :class="{ 'bg-blue-600 text-white': props.year === props.selectedYear }"
    class="p-2 border rounded border-black"
  >
    {{ props.year }}
  </button>
</template>
