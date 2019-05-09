<template>
  <div class="events-index">
      <div class="places-index">
        <section id="page-title">
          <div class="container">
            <div class="row">
              <div class="col-md-12 title-white">
                <h1>All Playdate Events!</h1>
              </div>
            </div>
          </div>
        </section>

          <div align="center">
            <br><br>


        <div>
          <button v-on:click="setSortAttribute('start_datetime')" class="btn btn-default">Sort by Date</button>
          <button v-on:click="setSortAttribute('place.location')" class="btn btn-default">Sort by Location</button>
        </div>
        <br><br>

        <div v-for="event in orderBy(events, sortAttribute, sortAscending)">
            <p>{{ event.start_datetime }}</p>
            <p>{{ event.end_datetime }}</p>
            <p>Where: {{ event.place.location }}</p>
            <button v-on:click="createEventAttendees(event.id)" class="btn btn-default">Join Playdate!</button>
            <div></div>
            <router-link v-bind:to="`/events-show/${event.id}`" tag="button" class="btn btn-default">
              See the Dogs Attending
            </router-link>
            <br><br>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      events: [],
      sortAttribute: "start_datetime",
      sortAscending: 1
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
          this.$router.push("/signup");
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
    },
    setSortAttribute: function(inputAttribute) {
      if (this.sortAttribute === inputAttribute) {
        if (this.sortAscending === 1) {
          this.sortAscending = -1;
        } else {
          this.sortAscending = 1;
        }
      } else {
        this.sortAscending = 1;
      }
      this.sortAttribute = inputAttribute;
    }
  }
};
</script>
