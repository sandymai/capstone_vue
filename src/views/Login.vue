<template>
  <div class="signup">
    <section id="page-title">
      <div class="container">
        <div class="row">
          <div class="col-md-12 title-blue">
            <h2>Login Here!</h2>
          </div>
        </div>
      </div>
    </section>

    <section id="blue-container">
      <div class="login">
        <div class="container">
          <!--         <div align="center">
          <h2 class="text-#FFFFFF">Login Here!</h2>
        </div> -->
          <div class="col-sm-6 col-sm-offset-3 text-center form-container">
            <ul class="social-icons">
              <li>
                <a class="twitter" href="#" target="_blank"><i class="fa fa-twitter fa-3x"></i></a>
              </li>
              <li>
                <a class="facebook" href="#" target="_blank"><i class="fa fa-facebook fa-3x"></i></a>
              </li>
              <li>
                <a class="google" href="#" target="_blank"><i class="fa fa-google-plus fa-3x"></i></a>
              </li>
            </ul>

            <hr />

            <form v-on:submit.prevent="submit()">
              <ul>
                <li class="text-danger" v-for="error in errors">{{ error }}</li>
              </ul>
              <div class="form-group">
                <label>EMAIL :</label>
                <input type="email" class="form-control" v-model="email" />
              </div>
              <div class="form-group">
                <label>PASSWORD :</label>
                <input type="password" class="form-control" v-model="password" />
              </div>
              <input type="submit" class="btn btn-primary" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
label {
  color: #a0a0a0;
}
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      email: "sandymai@email.com",
      password: "password",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$emit("changeJwt");
          this.$router.push("/");
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>
