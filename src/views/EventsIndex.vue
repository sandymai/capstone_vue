<template>
  <div class="events-index">
    <h1>All Playdate Events!</h1>
    <div v-for="event in events">
      <div align="center">
        <h3>Event Details:</h3>
        <p>{{ event.start_datetime }}</p>
        <p>{{ event.end_datetime }}</p>
        <p>{{ event.place.location }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      events: []
    };
  },

  created: function() {
    axios.get("/api/events").then(response => {
      this.events = response.data;
      console.log("hello", response.data);
    });
  },
  methods: {}
};
</script>
