<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';

interface Country {
	countryCode: string;
	name: string;
}


const countries = ref<Country[]>([]);

const search = ref('');

const filteredCountries = computed(() => {
	const searchTerm = search.value.toLowerCase().trim()
	if (!searchTerm) return countries.value

	return countries.value.filter(country => {
		return country.name.toLowerCase().startsWith(searchTerm)
	})
})

onMounted(async () => {
	const { data } = await axios.get<Country[]>('https://date.nager.at/api/v3/AvailableCountries');
	countries.value = data
});


</script>

<template>
	<main id="main">
		<div class="w-full h-full py-20 container">
			<div class="flex items-start">
				<div class="w-full h-[100vh]   flex flex-col">
					<input @input="search = ($event.target as HTMLInputElement).value" type="text" placeholder="Search Input"
						class="w-[15vw] p-2 border border-black ">
					<!-- {{ search }} -->
					<h1 class="mt-5 text-2xl mb-5">Countries List</h1>
					<!-- Card List -->
					<div class="overflow-auto h-[60vh]">
						<div v-for="(country, index) in filteredCountries" :key="index" class="flex w-full  flex-col py-3 ">
							<!-- Card -->
							<div class="w-[35vw] h-30 border py-5 border-black">
								<p class="text-center">{{ country.name }} - {{ index + 1 }}</p>
							</div>
						</div>
					</div>
				</div>

				<div class="w-full h-full">
					<h1 class="text-2xl">Random Countries Widget</h1>
					<div class="w-full h-full border border-[2px] border-black">

					</div>
				</div>

			</div>
		</div>
	</main>
</template>
