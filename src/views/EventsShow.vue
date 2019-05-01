<template>
  <div class="events-show">
    <h1>My Playdate Events</h1>
    <div v-for="event in events">
      <div align="center">
        <h2 class="text-muted">Playdate Details:</h2>
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
    axios.get("/api/my_events").then(response => {
      console.log(response);
      this.events = response.data;
    });
  },
  methods: {}
};
</script>
