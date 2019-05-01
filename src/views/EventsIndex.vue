<template>
  <div class="events-index">
    <h1>All Playdate Events!</h1>
    <div v-for="event in events">
      <div align="center">
        <h2 class="text-muted">Event Details:</h2>
        <p>{{ event.start_datetime }}</p>
        <p>{{ event.end_datetime }}</p>
        <p>Where: {{ event.place.location }}</p>
        <button v-on:click="addtoevent">Join Playdate!</button>
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
      console.log(response.data);
    });
  },
  methods: {
    addtoevent: function() {
      console.log("Hello.");
      var params = {
        start_datetime: this.startDateTime,
        end_datetime: this.endDateTime,
        event_id: this.eventId,
        user_id: this.userId
        // location: this.place.location
      };
    }
  }
};
</script>
