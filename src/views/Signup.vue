<template>
  <div class="signup">
    <section id="page-title">
      <div class="container">
        <div class="row">
          <div class="col-md-12 title-blue">
            <h2>Sign Up for PoochParty!</h2>
          </div>
        </div>
      </div>
    </section>

    <section id="blue-container">
      <div class="signup">
        <div class="container">
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
              <!--               <div align="center">
                <h2 class="text-muted">Sign Up to Join PoochParty!</h2>
              </div> -->
              <ul>
                <li class="text-danger" v-for="error in errors">{{ error }}</li>
              </ul>
              <div class="form-group">
                <label>First Name :</label>
                <input type="first_name" class="form-control" v-model="first_name" />
              </div>
              <div class="form-group">
                <label>Last Name :</label>
                <input type="last_name" class="form-control" v-model="last_name" />
              </div>
              <div class="form-group">
                <label>Email :</label>
                <input type="email" class="form-control" v-model="email" />
              </div>
              <!--               <div class="form-group">
                <label>Phone Number :</label>
                <input type="phone_number" class="form-control" v-model="phone_number" />
              </div> -->
              <div class="form-group">
                <label>Password :</label>
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

<style scoped>
body {
  padding-top: 10px;
}
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password
      };
      axios
        .post("/api/users", params)
        .then(response => {
          this.$router.push("/login");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
