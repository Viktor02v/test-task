import { defineStore } from 'pinia';
import { ref, onMounted } from 'vue';
import { fetchAvailableCountries } from '@/services/api'; // Importing API function

// Define a type for a country
interface Country {
  countryCode: string;
  name: string;
}

export const useCountryStore = defineStore('countryStore', () => {
  const countries = ref<Country[]>([]);
  const isLoading = ref(true);

  // Define the fetchCountries function
  const fetchCountries = async () => {
    isLoading.value = true; // Set loading state
    try {
      countries.value = await fetchAvailableCountries(); // Fetch countries from API
    } catch (error) {
      console.error('Error fetching countries:', error);
    } finally {
      isLoading.value = false; // Reset loading state
    }
  };

  // Call fetchCountries when the store is initialized
  onMounted(fetchCountries); 

  return {
    countries,
    isLoading,
    fetchCountries, // Ensure this function is returned
  };
});
