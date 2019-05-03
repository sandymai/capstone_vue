<template>
  <div class="events-show">
    <h2>My Playdate Events</h2>
    <div v-for="event in events">
      <div align="center">
        <h2 class="text-muted">Playdate Details:</h2>
        <p>{{ event.start_datetime }}</p>
        <p>{{ event.end_datetime }}</p>
        <p>{{ event.place.location }}</p>
        <button v-on:click="destroyEvent(event)">Remove Playdate</button>
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
    axios.get("/api/events?only_mine=true").then(response => {
      console.log(response.data);
      this.events = response.data;
    });
  },
  methods: {
    destroyEvent: function(event) {
      axios.delete("/api/events/" + event.id).then(response => {
        console.log("Successfully Removed", response.data);
        this.$router.push("/my-events");
      });
    }
  }
};
</script>
