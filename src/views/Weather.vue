<template>
  <div>
    <router-link to="/">To home page</router-link>
    <h2>Let's find out the weather in your city!</h2>
    <AddCity @add-city="addCity" />
    <Weather v-bind:cities="cities" @remove-city="removeCity" />
  </div>
</template>

<script>
import Weather from "@/components/WeatherList.vue";
import AddCity from "@/components/AddCity.vue";
export default {
  name: "App",
  components: {
    Weather,
    AddCity
  },
  data() {
    return {
      cities: []
    };
  },
  methods: {
    removeCity(id) {
      this.cities = this.cities.filter(c => c.id !== id);
    },
    addCity(city) {
      this.cities.push(city);
    }
  }
};
</script>
