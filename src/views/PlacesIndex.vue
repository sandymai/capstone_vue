<template>
  <div class="places-index">
    <h1>Popular Dog Friendly Places!</h1>
    <div v-for="place in places">
      <h3>Location & Address:</h3>
      <p>{{ place.location }}</p>
      <p>{{ place.address }}</p>
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
