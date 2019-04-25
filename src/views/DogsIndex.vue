<template>
  <div class="dogs-index">
    <h1>Your Dog Profiles</h1>
    <div v-for="dog in dogs">
      <h3>Doggo Details:</h3>
      <p>Name: {{ dog.dog_name }}</p>
      <p>Breed: {{ dog.breed }}</p>
      <p>Bio: {{ dog.description }}</p>
    </div>
  </div>
  <!--   <div 
  v-bind:key"dogs.id"
  >
  <router-link v-bind:to="`/dogs/${dog.id}`">More Info</router-link>
  </div> -->
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      dogs: []
    };
  },
  created: function() {
    axios.get("/api/dogs").then(response => {
      this.dogs = response.data;
    });
  },
  methods: {}
};
</script>
