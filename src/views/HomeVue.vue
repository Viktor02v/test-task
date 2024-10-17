<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useCountryStore } from '@/stores/countryStore';
import axios from 'axios';

// Components
import HolidayWidget from '@/components/HolidayWidget.vue';
import CountriesList from '@/components/CountriesList.vue';

// Refs
const randomCountries = ref<{
	country: { name: string, countryCode: string, index: number }; nextHoliday: {
		name: string
		date: string
	} | null
}[]>([]);
const isLoading = ref(true);

// Access the countries from the store
const countryStore = useCountryStore();

// Hooks
onMounted(async () => {
	try {
		// Wait for countries to be fetched in case they aren't ready yet
		if (!countryStore.isLoading) {
			randomCountries.value = await getRandomCountries(countryStore.countries, 3);
		}
	} catch (error) {
		console.error('Error fetching data:', error);
	} finally {
		isLoading.value = false;
	}
});

// Function to get 3 random countries and their next holidays
const getRandomCountries = async (countriesList: Country[], count: number) => {
	const selectedCountries = [];

	while (selectedCountries.length < count) {
		const randomIndex = Math.floor(Math.random() * countriesList.length);
		const country = countriesList[randomIndex];

		// Fetch the next holiday for the selected country
		const nextHoliday = await fetchNextHoliday(country.countryCode);
		selectedCountries.push({ country, nextHoliday });
	}

	return selectedCountries;
};

// Function to fetch the next holiday for a given country code
const fetchNextHoliday = async (countryCode: string) => {
	try {
		const { data } = await axios.get<Holiday[]>(
			`${import.meta.env.VITE_API_BASE_URL}/NextPublicHolidays/${countryCode}`,
		);
		return data[0] || null; // Return the next holiday or null if none found
	} catch (error) {
		console.error(`Error fetching next holiday for ${countryCode}:`, error);
		return null; // Return null on error
	}
};
</script>

<template>
	<main class="container w-full h-full py-20">
		<div class="flex flex-col md:flex-row md:gap-20">
			<!-- Search and Countries List Section -->
			<section class="h-[100vh] flex flex-col">
				<CountriesList :isLoading="countryStore.isLoading" :countries="countryStore.countries" />
			</section>

			<!-- Random Countries Widget Section -->
			<section class="flex-1 h-full mt-10 md:mt-0">
				<HolidayWidget :randomCountries="randomCountries" />
			</section>
		</div>
	</main>
</template>
