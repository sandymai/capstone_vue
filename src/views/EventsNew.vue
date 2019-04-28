<template>
  <div class="events-new">
    <h1>Create a New Playdate Event</h1>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
    <form v-on:submit.prevent="createEvent()">
      <div>
        Start Time :
        <input type="text" v-model="newStartTime" />
        <div></div>
        End Time :
        <input type="text" v-model="newEndTime" />
        <div></div>
        Location :
        <input type="text" v-model="newLocation" />
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
      errors: []
    };
  },
  methods: {
    createEvent: function() {
      console.log("Create an Event.");
      this.errors = [];
      var params = {
        body_starttime: this.newStartTime,
        body_endtime: this.newEndTime,
        body_location: this.newLocation
      };
      axios
        .post("/api/events", params)
        .then(response => {
          this.$router.push("/");
        })
        .catch(error => {
          console.log(error.response.data.errors);
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
