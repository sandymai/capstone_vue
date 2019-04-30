<template>
  <div class="dogs-index">
    <h1>Your Dog Profiles</h1>
    <div v-for="dog in dogs">
      <h3>Doggo Details:</h3>
      <p>Name: {{ dog.dog_name }}</p>
      <p>Breed: {{ dog.breed }}</p>
      <p>Bio: {{ dog.description }}</p>
      <button v-on:click="showDog(dog)">View Profile</button>
      <div></div>
      <router-link v-bind:to="`/dogs/${dog.id}`">Edit Profile</router-link>
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
  methods: {
    showDog: function(dog) {
      if (this.currentDog === dog) {
        this.currentDog = null;
      } else {
        this.currentDog = dog;
      }
    }
  }
};
</script>
