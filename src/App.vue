<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      |
      <router-link to="/dogfriendlyplaces">Dog Friendly Places</router-link>
      |
      <router-link to="/signup" v-if="!jwt">Sign Up</router-link>
      <div></div>
      <router-link to="/login" v-if="!jwt">Log In</router-link>
      <router-link to="/dogs-index" v-if="jwt">Your Dog Profiles</router-link>
      |
      <router-link to="/logout" v-if="jwt">Log Out</router-link>
    </div>
    <router-view v-on:changeJwt="setJwt()" />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
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
