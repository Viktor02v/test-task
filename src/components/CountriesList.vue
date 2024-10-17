<script setup lang="ts">
// Setup
import { ref, computed } from 'vue';

// Components
import CountryCard from '@/components/CountryCard.vue';

// Props
const props = defineProps<{
	countries: {
		name: string;
		countryCode: string;
		index: number;
	}[];
	isLoading: boolean;
}>();

// Refs
const search = ref('');

// Computed
const filteredCountries = computed(() => {
	const searchTerm = search.value.toLowerCase().trim();
	if (!searchTerm) return props.countries;

	return props.countries.filter((country) => {
		return country.name.toLowerCase().startsWith(searchTerm);
	});
});
</script>

<template>
	<div class="h-[100vh] flex flex-col">
		<input @input="search = ($event.target as HTMLInputElement).value" type="text" placeholder="Search for a country"
			class="md:w-[20vw] p-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
			aria-label="Search Countries" />
		<!-- Countries List -->
		<h1 class="mt-5 text-2xl font-semibold mb-5">Countries List</h1>
		<div class="overflow-auto h-[60vh]">
			<div v-if="props.isLoading" class="text-center">Loading...</div>
			<!-- Loading State -->
			<div v-else>
				<div v-for="(country, index) in filteredCountries" :key="index" class="flex w-full flex-col py-3">
					<!-- Country Card -->
					<CountryCard :country="country" :index="index" />
				</div>
			</div>
		</div>
	</div>
</template>
