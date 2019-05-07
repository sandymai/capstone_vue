<template>
  <section id="blue-container">
    <div class="login">
      <div class="container">
        <!--  <div class="col-sm-6 col-sm-offset-3 text-center form-container">
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

          <form id="login-form" class="form-horizontal" method="post" type="submit">
            <div class="control-group">
              <div class="controls">
                <div class="row">
                  <input
                    type="email"
                    class="input-xlarge col-xs-8 col-xs-offset-2"
                    v-model="email"
                    placeholder="Email"
                  />
                </div>
              </div>
            </div>

            <div class="control-group">
              <div class="controls">
                <div class="row">
                  <input
                    type="password"
                    class="input-xlarge col-xs-8 col-xs-offset-2"
                    v-model="password"
                    placeholder="Password"
                  />
                </div>
              </div>
            </div>

            <div class="control-group">
              <div class="controls">
                <button type="submit" class="btn btn-primary" value="Submit">
                  Log In
                </button>
              </div>
              <a class="small-message" href="/signup/"><small>Need An Account? Sign Up Here!</small></a>
            </div>
          </form>
        </div>
      </div> -->
        <!-- </div> -->
        <!--End Container-->

        <form v-on:submit.prevent="submit()">
          <div align="center">
            <h2 class="text-#FFFFFF">Login Here!</h2>
          </div>
          <ul>
            <li class="text-danger" v-for="error in errors">{{ error }}</li>
          </ul>
          <div class="form-group">
            <label>Email :</label>
            <input type="email" class="form-control" v-model="email" />
          </div>
          <div class="form-group">
            <label>Password :</label>
            <input type="password" class="form-control" v-model="password" />
          </div>
          <input type="submit" class="btn btn-primary" value="Submit" />
        </form>
      </div>
    </div>
  </section>
</template>

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
