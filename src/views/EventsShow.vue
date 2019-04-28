<template>
  <div class="events-show">
    <h1>My Playdate Events</h1>
    <div v-for="event in events">
      <h3>Event Details:</h3>
      <p>{{ event.start_datetime }}</p>
      <p>{{ event.end_datetime }}</p>
      <p>{{ event.places_id }}</p>
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
    axios.get("/api/my_events").then(response => {
      console.log(response);
      this.events = response.data;
    });
  },
  methods: {}
};
</script>
