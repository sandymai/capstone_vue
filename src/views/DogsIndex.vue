<template>
  <div class="dogs-index">
    <h1>Your Dog Profiles</h1>
    <div v-for="dog in dogs">
      <div align="center">
        <h3>Doggo Details:</h3>
        <p>Name: {{ dog.dog_name }}</p>
        <p>Breed: {{ dog.breed }}</p>
        <p>Description: {{ dog.description }}</p>
        <router-link v-bind:to="`/dogs/${dog.id}`" tag="button">View/Edit Profile</router-link>
        <div></div>
      </div>
    </div>
  </div>
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
