<template>
  <div class="events-show">
    <h2>My Playdate Events</h2>
    <div v-for="event_attendee in event_attendees" v-if="event_attendee.event">
      <div align="center">
        <h2 class="text-muted">Playdate Details:</h2>
        <p>{{ event_attendee.event.start_datetime }}</p>
        <p>{{ event_attendee.event.end_datetime }}</p>
        <p>{{ event_attendee.event.place.location }}</p>
        <button v-on:click="destroyEventAttendee(event_attendee)">Remove Playdate</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      event_attendees: []
    };
  },
  created: function() {
    axios.get("/api/event_attendees").then(response => {
      console.log(response.data);
      this.event_attendees = response.data;
    });
  },
  methods: {
    destroyEventAttendee: function(event_attendee) {
      axios.delete("/api/event_attendees/" + event_attendee.id).then(response => {
        console.log("Successfully Removed", response.data);
        // this.$router.push("/my-events");
        var index = this.event_attendees.indexOf(event_attendee);
        this.event_attendees.splice(index, 1);
      });
    }
  }
};
</script>
