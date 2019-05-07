<template>
  <div class="dogs-index">
    <h2>Your Dog Profiles</h2>
    <div v-for="dog in dogs">
      <div align="center">
        <h2 class="text-muted">Doggo Details:</h2>
        <img v-bind:src="dog.image_url" />
        <p>Name: {{ dog.dog_name }}</p>
        <p>Breed: {{ dog.breed }}</p>
        <p>Description: {{ dog.description }}</p>
        <router-link v-bind:to="`/dogs/${dog.id}`" tag="button">View/Edit Profile</router-link>
        <div></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 400px;
  border-radius: 2px;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.5);
  transition: width 1s;
}
</style>

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
