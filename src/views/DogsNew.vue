<template>
  <div class="dogs-new">
    <div align="center">
      <div class="places-index">
        <section id="page-title">
          <div class="container">
            <div class="row">
              <div class="col-md-12 -white">
                <h1>
                  Add a New Dog Profile
                  <br />
                  <br />
                </h1>
              </div>
            </div>
          </div>
        </section>

        <h2 class="text-muted"></h2>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
        <br />
        <br />
        <form v-on:submit.prevent="submit()">
          <div>
            Dog Name :
            <input type="text" v-model="newDogName" />
            <div></div>
            Breed :
            <input type="text" v-model="newBreed" />
            <div></div>
            Description :
            <input type="text" v-model="newDescription" />
          </div>
          <div>
            <input type="file" v-on:change="setFile($event)" ref="fileInput" />
          </div>
          <br />
          <input type="submit" class="btn btn-info" value="Create New Profile!" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
var axios = require("axios");
export default {
  data: function() {
    return {
      newDogName: "",
      newBreed: "",
      newDescription: "",
      newDogImage: "",
      errors: []
    };
  },
  created: function() {
    axios.get("/api/dogs").then(response => {
      this.dogs = response.data;
      console.log(this.dogs);
    });
  },
  methods: {
    setFile: function(event) {
      if (event.target.files.length > 0) {
        this.newDogImage = event.target.files[0];
      }
    },
    submit: function() {
      var formData = new FormData();
      formData.append("dog_name", this.newDogName);
      formData.append("breed", this.newBreed);
      formData.append("description", this.newDescription);
      formData.append("image_url", this.newDogImage);

      axios.post("/api/dogs", formData).then(response => {
        this.newDogName = "";
        this.newBreed = "";
        this.newDescription = "";
        this.$refs.fileInput.value = "";
        this.$router.push("/dogs-profiles");
      });
    }
  }
};
</script>
