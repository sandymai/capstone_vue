<template>
  <div class="dogs-new">
    <div align="center">
      <h2 class="text-muted">Add a New Dog Profile</h2>
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      <form v-on:submit.prevent="createDog()">
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
        <input type="submit" value="Create New Profile!" />
      </form>
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
      image_url: "",
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
        this.image_url = event.target.files[0];
      }
    },
    submit: function() {
      var formData = new FormData();
      formData.append("dog_name", this.newDogName);
      formData.append("breed", this.newBreed);
      formData.append("description", this.newDescription);
      formData.append("image_url", this.imageUrl);

      axios.post("/api/dogs", formData).then(response => {
        this.dog_name = "";
        this.breed = "";
        this.description = "";
        this.$refs.fileInput.value = "";
      });
    },

    createDog: function() {
      this.errors = [];
      var params = {
        dog_name: this.newDogName,
        breed: this.newBreed,
        description: this.newDescription
      };
      console.log("testtt", params);
      axios
        .post("/api/dogs", params)
        .then(response => {
          this.$router.push("/dogs-profiles");
        })
        .catch(error => {
          console.log(error.response.data.errors);
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
