<template>
  <form id="weather-form" @submit.prevent="onSubmit">
    <input placeholder="Type a city" v-model="city" />
    <div>
      <span>Choose language</span>
      <select>
        <option value="en">EN</option>
        <option value="ru">RU</option>
      </select>
    </div>
    <button class="btn btn-danger">
      Add city
    </button>
  </form>
</template>
<script>
import Swal from "sweetalert2";

const URL = "https://api.weatherbit.io/v2.0/current";
const API_KEY = "8f272adfafa04248b135807c5ac58396";
let LANG = "en";
export default {
  data() {
    return {
      city: ""
    };
  },
  methods: {
    async onSubmit() {
      let url =
        URL + "?key=" + API_KEY + "&lang=" + LANG + "&city=" + this.city;
      if (this.city.trim()) {
        let newCity = {
          id: Date.now(),
          city: this.city,
          country: "",
          now: "",
          marked: false
        };
        await fetch(url)
          .then(response => response.json())
          .then(data => {
            newCity.now = data.data[0].weather["description"];
            newCity.country = data.data[0].country_code;
            this.$emit("add-city", newCity);
            this.city = "";
          })
          .catch(e => {
            Swal.fire({
              title: "Error!",
              text: "There is no city with such name. Try another one!",
              icon: "error",
              confirmButtonText: "Continue"
            });
          });
      }
    }
  }
};
</script>
<style scoped>
#weather-form {
  display: flex;
  align-self: center;
  text-align: center;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  max-width: 150px;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem 15rem;
  border: 1px solid black;
  margin-bottom: 10px;
}
div {
  margin-top: 10px;
}
span {
  padding-left: 15px;
  padding-right: 5px;
}
button {
  margin-top: 5px;
  outline: 0;
}
</style>
