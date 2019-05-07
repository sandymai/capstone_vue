<template>
  <div id="app">
    <!-- HEADER STARTS-->
    <div class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-header" href="https://i.ibb.co/GWyBw7G/PPPP.png">
            <img src="https://i.ibb.co/GWyBw7G/PPPP.png" alt="Logo" />
          </a>
        </div>
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <!-- <li class="active"><a href="/">Home</a></li> THIS MAKES THE BUTTON WHITE -->
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                Playdates
                <b class="caret"></b>
              </a>
              <ul class="dropdown-menu">
                <li><a href="/events-index">View Upcoming Playdates</a></li>
                <li><a href="/my-events" v-if="jwt">My Playdates</a></li>
                <li><a href="/events-new" v-if="jwt">Create New Playdate</a></li>
                <!-- <li><a href="/signup">Sign Up</a></li> -->
              </ul>
            </li>
            <li><a href="/dogfriendlyplaces">Dog Friendly Places</a></li>
            <!-- <li><a href="/dogs-profiles" v-if="jwt">My Dog Profiles</a></li> -->

            <li class="dropdown" v-if="jwt">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                Dog Profiles
                <b class="caret"></b>
              </a>
              <ul class="dropdown-menu">
                <li><a href="/dogs-profiles">View All Dog Profiles</a></li>
                <li><a href="/dogs-new">Add New Dog Profile</a></li>
              </ul>
            </li>

            <li><router-link to="/login" v-if="!jwt">Log In</router-link></li>
            <li></li>
            <li><router-link to="/logout" v-if="jwt">Log Out</router-link></li>
            <li></li>
            <li class="sign-up">
              <a href="/signup"><span class="white">Sign Up</span></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <router-view v-on:changeJwt="setJwt()" />
    <!-- FOOTER -->
    <section id="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <p>
              @ Copyright. All Rights Reserved. Created by Sandy Mai.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
body {
  padding-top: 100px;
}
</style>

<script>
export default {
  data: function() {
    return {
      jwt: null
    };
  },
  created: function() {
    this.jwt = localStorage.jwt;
    console.log("My jwt is", this.jwt);
  },
  methods: {
    setJwt: function() {
      this.jwt = localStorage.jwt;
    }
  }
};
</script>
