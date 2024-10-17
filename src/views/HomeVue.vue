<script setup lang="ts">
// Setup
import { ref, onMounted } from 'vue';
import { useCountryStore } from '@/stores/countryStore';
import { fetchNextPublicHolidays } from '@/services/api'; // Importing  API function

// Components
import HolidayWidget from '@/components/HolidayWidget.vue';
import CountriesList from '@/components/CountriesList.vue';

// Refs
const randomCountries = ref<{ country: Country; nextHoliday: Holiday | null }[]>([]);
const countryStore = useCountryStore(); // Access country store

onMounted(async () => {
	if (!countryStore.isLoading) {
		randomCountries.value = await getRandomCountries(countryStore.countries, 3);
	}
});

// Function to get 3 random countries and their next holidays
const getRandomCountries = async (countriesList: Country[], count: number) => {
	const selectedCountries = [];
	while (selectedCountries.length < count) {
		const randomIndex = Math.floor(Math.random() * countriesList.length);
		const country = countriesList[randomIndex];

		// Fetch the next holiday for the selected country
		const nextHoliday = await fetchNextPublicHolidays(country.countryCode); 
		selectedCountries.push({ country, nextHoliday });
	}
	return selectedCountries;
};
</script>

<template>
	<main class="container w-full h-full py-20">
		<div class="flex flex-col md:flex-row md:gap-20">
			<section class="h-[100vh] flex flex-col">
				<!-- Countries List -->
				<CountriesList :isLoading="countryStore.isLoading" :countries="countryStore.countries" />
			</section>

			<section class="flex-1 h-full mt-10 md:mt-0">
				<!-- Random Countries Widget -->
				<HolidayWidget :randomCountries="randomCountries" />
			</section>
		</div>
	</main>
</template>
