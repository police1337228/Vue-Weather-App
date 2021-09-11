<template>
  <li v-bind:class="{ marked: city.marked }">
    <span>
      <strong>{{ i + 1 }}</strong>
      {{ city.city }},{{ city.country }}
    </span>
    <span> Weather: {{ city.now }} </span>
    <span>
      <button @click="$emit('remove-city', city.id)">Remove</button>
      <button class="mark" @click="city.marked = !city.marked">Mark</button>
    </span>
  </li>
</template>
<script>
export default {
  components: {},
  props: {
    city: {
      type: Object,
      required: true
    },
    i: Number
  },
  methods: {}
};
</script>

<style scoped>
li {
  display: flex;
  padding: 2rem 3rem;
  font-size: 32px;
  justify-content: space-between;
  margin-bottom: 15px;
}
button {
  background-color: red;
  color: white;
  font-family: Helvetica;
  cursor: pointer;
  margin-right: 10px;
}
.mark {
  background-color: gold;
  color: black;
}
.marked {
  background-color: #ccc;
}
</style>
