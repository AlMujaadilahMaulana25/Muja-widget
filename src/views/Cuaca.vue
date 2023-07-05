<template>
  <div class="weather-widget">
    <h2 class="widget-title">Cuaca</h2>
    <div class="location-input">
      <label for="location">Masukkan Lokasi:</label>
      <input type="text" id="location" v-model="location" />
      <button @click="fetchWeatherData">Dapatkan Cuaca</button>
    </div>
    <div v-if="weatherData" class="weather-data">
      <p class="location">{{ weatherData.name }}</p>
      <div class="temperature-description">
        <p class="temperature">{{ weatherData.main.temp }}°C</p>
        <p class="description">{{ weatherData.weather[0].description }}</p>
      </div>
    </div>
    <p v-else class="loading-message">Memuat data cuaca...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      location: '',
      weatherData: null
    };
  },
  methods: {
    async fetchWeatherData() {
      try {
        const apiKey = 'b7bfca7b27a3485144fea086c50d09dc';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${apiKey}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        this.weatherData = data;
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }
  }
};
</script>

<style scoped>
.weather-widget {
  border-radius: 8px;
  background: rgb(34,193,195);
  background: linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(240,45,253,1) 100%);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  padding: 24px;
  text-align: center;
}

.widget-title {
  margin-top: 0;
  color: #333;
  font-size: 24px;
}

.location-input {
  margin-bottom: 16px;
}

.location-input label {
  font-size: 18px;
  color: #333;
}

.location-input input {
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
}

.location-input button {
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.location-input button:hover {
  background-color: #0056b3;
}

.weather-data {
  margin-top: 24px;
}

.location {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
}

.temperature-description {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
}

.temperature {
  font-size: 48px;
  font-weight: bold;
  color: #ff5722;
}

.description {
  font-size: 24px;
  color: #333;
}

.loading-message {
  color: #333;
  font-size: 18px;
}
</style>
