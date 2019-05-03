<template>
  <div class="dogs-show">
    <h2 class="text-muted">Dog Details:</h2>
    <img v-bind:src="dog.image_url" />
    <p>{{ dog.dog_name }}</p>
    <p>{{ dog.breed }}</p>
    <p>{{ dog.description }}</p>
    <div>
      <h4>Edit Dog Profile</h4>
      Dog Name:
      <input type="text" v-model="dog.dog_name" />
      <div></div>
      Breed:
      <input type="text" v-model="dog.breed" />
      <div></div>
      Description:
      <input type="text" v-model="dog.description" />
      <div></div>
      <button v-on:click="updateDog(dog)">Update Profile</button>
      <div></div>
      <button v-on:click="destroyDog(dog)">Destroy Profile</button>
    </div>
  </div>
  <!-- <router-link to="/">Back to View All Dogs</router-link> -->
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      dog: {}
    };
  },
  created: function() {
    axios.get("/api/dogs/" + this.$route.params.id).then(response => {
      this.dog = response.data;
    });
  },

  methods: {
    updateDog: function(dog) {
      var params = {
        dog_name: dog.dog_name,
        breed: dog.breed,
        description: dog.description
      };
      axios.patch("/api/dogs/" + dog.id, params).then(response => {
        console.log("Successfully Updated", response.data);
        dog = response.data;
        this.$router.push("/dogs-profiles");
      });
    },

    destroyDog: function(dog) {
      axios.delete("/api/dogs/" + dog.id).then(response => {
        console.log("Successfully Deleted", response.data);
        this.$router.push("/dogs-profiles");
      });
    }
  }
};
</script>
