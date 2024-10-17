<script setup lang="ts">
// Components
import UpcomingHolidayCard from '@/components/UpcomingHolidayCard.vue'

// Props
const props = defineProps<{
	randomCountries: {
		country: {
			name: string
		}
		nextHoliday: {
			name: string
			date: string
		} | null
	}[]
}>()
</script>

<template>
	<article class="flex-1 h-full mt-10 md:mt-0">
		<h1 class="text-2xl font-semibold mb-10">Random Countries Widget</h1>
		<div class="w-full h-[60vh] overflow-auto border-2 border-black rounded-md">
			<div v-if="props.randomCountries.length > 0" class="flex flex-col justify-between gap-5 p-10">
				<div v-for="(item, index) in props.randomCountries" :key="index">
					<!-- Upcoming Holiday Card -->
					<UpcomingHolidayCard :item="item" :next-holiday="item.nextHoliday" />
				</div>
			</div>
			<div v-else class="text-center">No random countries available.</div>
		</div>
	</article>
</template>
