<template>
  <div class="dogs-show">
    <section id="page-title">
      <div class="container">
        <div class="row">
          <div class=".col-sm-50 .col-md-6 title-white">
            <h1>Edit Your Dog's Profile</h1>
          </div>
        </div>
      </div>
    </section>

    <div align="center">
      <h2 class="text-muted"></h2>
      <img v-bind:src="dog.image_url" />
      <p>{{ dog.dog_name }}</p>
      <p>{{ dog.breed }}</p>
      <p>{{ dog.description }}</p>
      <div>
        Name:
        <input type="text" v-model="dog.dog_name" />
        <div></div>
        Breed:
        <input type="text" v-model="dog.breed" />
        <div></div>
        Description:
        <input type="text" v-model="dog.description" />
        <div></div>
        <button class="btn btn-default" v-on:click="updateDog(dog)">Update Profile</button>
        <div></div>
        <button class="btn btn-default" v-on:click="destroyDog(dog)">Delete Profile</button>
      </div>
    </div>
    <br />
    <br />
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
