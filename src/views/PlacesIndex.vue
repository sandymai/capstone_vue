<template>
  <div class="places-index">
    <h1>All Dog Friendly Places</h1>
    <div v-for="place in places">
      <h2>{{ place.name }}</h2>
      <!--       <img v-bind:src="photo.url">
      <p>Width: {{ photo.width }}</p>
      <p>Height: {{ photo.height }}</p> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      places: []
    };
  },
  created: function() {
    axios.get("/api/places").then(response => {
      this.places = response.data;
    });
  },
  methods: {}
};
</script>
