<template>
  <div class="events-new">
    <h2 class="text-muted">Create a New Playdate Event</h2>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
    <form v-on:submit.prevent="createEvent()">
      <div>
        Start Time :
        <input type="datetime-local" v-model="newStartTime" />
        <div></div>
        End Time :
        <input type="datetime-local" v-model="newEndTime" />
        <div></div>
        Location :
        <!-- <input type="text" v-model="newLocation" /> -->
        <select v-model="newLocation">
          <option v-for="place in places" v-bind:value="place.id">{{ place.location }}</option>
        </select>
        <div></div>
      </div>
      <input type="submit" value="Create Event!" />
    </form>
  </div>
</template>

<script>
var axios = require("axios");
export default {
  data: function() {
    return {
      newStartTime: "",
      newEndTime: "",
      newLocation: "",
      errors: [],
      places: []
    };
  },
  created: function() {
    axios.get("/api/places").then(response => {
      this.places = response.data;
      console.log(this.places);
    });
    // make a web request to get all the places
    // upon success, set this.places equal to response.data
  },
  methods: {
    createEvent: function() {
      this.errors = [];
      var params = {
        start_datetime: this.newStartTime,
        end_datetime: this.newEndTime,
        place_id: this.newLocation
      };
      console.log("testtt", params);
      axios
        .post("/api/events", params)
        .then(response => {
          this.$router.push("/events-index");
        })
        .catch(error => {
          console.log(error.response.data.errors);
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
