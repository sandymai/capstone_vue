<template>
  <div class="events-index">
    <h1>All Playdate Events!</h1>
    <div align="center">
      <h2 class="text-muted">All Playdate Events!</h2>
      <div v-for="event in events">
        <div align="center">
          <p>{{ event.start_datetime }}</p>
          <p>{{ event.end_datetime }}</p>
          <p>Where: {{ event.place.location }}</p>
          <button v-on:click="createEventAttendees(event.id)">Join Playdate!</button>
        </div>
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
    createEventAttendees: function(event_id) {
      this.errors = [];
      var params = {
        event_id: event_id
      };
      console.log("", params);
      axios
        .post("/api/event_attendees", params)
        .then(response => {
          this.$router.push("/my-events");
        })
        .catch(error => {
          console.log(error.response.data.errors);
          this.errors = error.response.data.errors;
        });
    },

    addtoevent: function(event) {
      console.log("Hello.");
      var params = {
        start_datetime: this.startDateTime,
        end_datetime: this.endDateTime,
        event_id: this.eventId,
        user_id: this.userId

        // this.$router.push("/my-events");
        // location: this.place.location
      };
    }
  }
};
</script>
