<template>
  <div class="app">
    <h1>Weather App! (Weatherbit.io API)</h1>
    <hr />
    <router-view />
  </div>
</template>

<script>
// import Weather from "./components/WeatherList.vue";
// import AddCity from "./components/AddCity.vue";
// export default {
//   name: "App",
//   components: {
//     Weather,
//     AddCity
//   },
//   data() {
//     return {
//       cities: []
//     };
//   },
//   methods: {
//     removeCity(id) {
//       this.cities = this.cities.filter(c => c.id !== id);
//     },
//     addCity(city) {
//       this.cities.push(city);
//     }
//   }
// };
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
