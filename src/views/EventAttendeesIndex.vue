<template>
  <div class="events-show">
    <div align="center">
      <div class="places-index">
        <section id="page-title">
          <div class="container">
            <div class="row">
              <div class="col-md-12 -white">
                <h1>
                  All My Playdate Events
                  <br />
                  <br />
                </h1>
              </div>
            </div>
          </div>
        </section>

        <div align="center">
          <div v-for="event_attendee in event_attendees" v-if="event_attendee.event">
            <h2 class="text-muted">Playdate Details:</h2>
            <p>{{ event_attendee.event.start_datetime }}</p>
            <p>{{ event_attendee.event.end_datetime }}</p>
            <p>{{ event_attendee.event.place.location }}</p>
            <button v-on:click="destroyEventAttendee(event_attendee)">Remove Playdate</button>
            <div></div>
            <router-link v-bind:to="`/events-show/${event_attendee.event.id}`" tag="button">
              See the Dogs Attending
            </router-link>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      event_attendees: [],
      events: []
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
