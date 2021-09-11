<template>
  <div class="weather-items" v-if="cities.length">
    <ul>
      <WeatherItem
        v-for="(city, index) in cities"
        :key="city.id"
        :city="city"
        :i="index"
        @remove-city="removeCity"
      />
    </ul>
  </div>
  <h3 v-else>No cities yet!</h3>
</template>

<script>
import WeatherItem from "./WeatherItem.vue";
export default {
  components: { WeatherItem },
  props: ["cities"],
  data() {
    return {};
  },
  emits: ["remove-city"],
  mounted() {},
  methods: {
    removeCity(id) {
      this.$emit("remove-city", id);
    }
  }
};
</script>
<style scoped>
ul {
  list-style: none;
}
</style>
