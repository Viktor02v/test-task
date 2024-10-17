<script setup lang="ts">
import { useCountryStore } from '@/stores/countryStore';

const countryStore = useCountryStore();

// Call fetchCountries when the app is initialized
countryStore.fetchCountries();
</script>

<template>
	<RouterView />
</template>
