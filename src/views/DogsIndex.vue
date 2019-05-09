<template>
  <div class="dogs-index">
    <section id="page-title">
      <div class="container">
        <div class="row">
          <div class="col-md-12 title-white">
            <h1>All My Dog Profiles</h1>
          </div>
        </div>
      </div>
    </section>

    <br />
    <br />

    <div class="dogs row">
      <div class="col-md-4 card" v-for="dog in dogs">
        <!-- <div align="center"> -->
          <h2 class="text-muted"></h2>
          <img v-bind:src="dog.image_url" />
          <br />
          <br />
          <p>Name: {{ dog.dog_name }}</p>
          <p>Breed: {{ dog.breed }}</p>
          <p>Description: {{ dog.description }}</p>
          <router-link v-bind:to="`/dogs/${dog.id}`" tag="button" class="btn btn-info">
            View/Edit Profile
          </router-link>
          <div></div>
          <br />
          <br />
        </div>
      </div>
    </div>
  </div>

  <!-- THIS IS WHERE THE NEW CODE BEGINS -->
</template>

<style scoped>
img {
  width: 400px;
  border-radius: 4px;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.5);
  transition: width 1s;
}

.dogs {
  display: block;
  margin: 0 auto;
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
