<template>
  <div class="attendees-show">
    <h2 class="text-muted" align="center">All Dogs Attending This Playdate:</h2>
    <div align="center" v-for="dog in event.dogs">
      <img v-bind:src="dog.image_url" />
      <p>Name: {{ dog.dog_name }}</p>
      <p>Breed: {{ dog.breed }}</p>
      <p>Description: {{ dog.description }}</p>
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
      event: {}
    };
  },
  created: function() {
    axios.get("/api/events/" + this.$route.params.id).then(response => {
      this.event = response.data;
      console.log(this.event);
    });
  },

  methods: {}
};
</script>
