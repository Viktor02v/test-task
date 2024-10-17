import axios from 'axios';

// Base URL using environment variables
const apiUrl = import.meta.env.VITE_API_BASE_URL;


const api = axios.create({
  baseURL: apiUrl,
});

// Utility functions for API calls
const fetchAvailableCountries = async () => {
  const response = await api.get('/AvailableCountries');
  return response.data;
};

 const fetchNextPublicHolidays = async (countryCode: string) => {
  try {
    const response = await axios.get<Holiday[]>(`${apiUrl}/NextPublicHolidays/${countryCode}`);
    return response.data[0] || null; 
  } catch (error) {
    console.error(`Error fetching next holiday for ${countryCode}:`, error);
    return null; // 
  }
};


export { fetchAvailableCountries, fetchNextPublicHolidays };
