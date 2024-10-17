<script setup lang="ts">
import { useCountryStore } from '@/stores/countryStore';
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';

const countryStore = useCountryStore();

onMounted(() => {
  countryStore.fetchCountries(); // Fetch countries once when app is loaded
});
</script>

<template>
  <RouterView />
</template>
