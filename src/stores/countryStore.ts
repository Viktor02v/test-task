// src/stores/countryStore.ts
import { defineStore } from 'pinia';
import axios from 'axios';
import { ref, onMounted } from 'vue';

interface Country {
  countryCode: string;
  name: string;
}

export const useCountryStore = defineStore('countryStore', () => {
  const countries = ref<Country[]>([]);
  const isLoading = ref(true);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const fetchCountries = async () => {
    try {
      const countriesResponse = await axios.get<Country[]>(`${apiUrl}/AvailableCountries`);
      countries.value = countriesResponse.data;
    } catch (error) {
      console.error('Error fetching countries:', error);
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(() => {
    if (countries.value.length === 0) {
      fetchCountries(); // Fetch only if countries haven't been loaded
    }
  });

  return {
    countries,
    isLoading,
    fetchCountries,
  };
});
