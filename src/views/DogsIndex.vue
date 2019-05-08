<template>
  <div class="dogs-index">
    <section id="page-title">
      <div class="container">
        <div class="row">
          <div class="col-md-12 title-white">
            <h2>All My Dog Profiles</h2>
          </div>
        </div>
      </div>
    </section>

    <div v-for="dog in dogs">
      <div class="row">
        <div class="column">
          <h2 class="text-muted"></h2>
          <img v-bind:src="dog.image_url" />
          <p>Name: {{ dog.dog_name }}</p>
          <p>Breed: {{ dog.breed }}</p>
          <p>Description: {{ dog.description }}</p>
          <router-link v-bind:to="`/dogs/${dog.id}`" tag="button" class="btn btn-default">View/Edit Profile</router-link>
          <div></div>
      </div>
    </div>
    </div>

    <!-- THIS IS WHERE THE NEW CODE BEGINS -->


        <div class="row">
          <ul class="list-inline portfolio text-center">
            <!--Project Thumbnail-->
            <li data-tag="web">
              <div class="thumbs">
                <img src="img/portfolio2.jpg" class="img-responsive" alt="Image Size 430x280" />
                <a href="individual-work.html">
                  <span class="title">
                    <span><i class="fa fa-link fa-2x"></i></span>
                  </span>
                </a>
              </div>

              <div class="project-title margin-30">
                <h5>White Sneaker</h5>
              </div>
            </li>

            <!--Project Thumbnail-->
            <li data-tag="videos">
              <div class="thumbs">
                <img src="img/portfolio3.jpg" class="img-responsive" alt="Image Size 430x280" />
                <a href="individual-work.html">
                  <span class="title">
                    <span><i class="fa fa-link fa-2x"></i></span>
                  </span>
                </a>
              </div>

              <div class="project-title margin-30">
                <h5>Theme Armada</h5>
              </div>
            </li>

            <!--Project Thumbnail-->
            <li data-tag="web">
              <div class="thumbs">
                <img src="img/portfolio1.jpg" class="img-responsive" alt="Image Size 430x280" />
                <a href="individual-work.html">
                  <span class="title">
                    <span><i class="fa fa-link fa-2x"></i></span>
                  </span>
                </a>
              </div>

              <div class="project-title margin-30">
                <h5>Breakroom</h5>
              </div>
            </li>

            <!--Project Thumbnail-->
            <li data-tag="web">
              <div class="thumbs">
                <img src="img/portfolio2.jpg" class="img-responsive" alt="Image Size 430x280" />
                <a href="individual-work.html">
                  <span class="title">
                    <span><i class="fa fa-link fa-2x"></i></span>
                  </span>
                </a>
              </div>

              <div class="project-title margin-30">
                <h5>White Sneaker</h5>
              </div>
            </li>

            <!--Project Thumbnail-->
            <li data-tag="web">
              <div class="thumbs">
                <img src="img/portfolio1.jpg" class="img-responsive" alt="Image Size 430x280" />
                <a href="individual-work.html">
                  <span class="title">
                    <span><i class="fa fa-link fa-2x"></i></span>
                  </span>
                </a>
              </div>

              <div class="project-title margin-30">
                <h5>Breakroom</h5>
              </div>
            </li>
          </ul>
          <!--End Work List-->
        </div>
        <!--End Row-->
      </div>
    </section>
  </div>
</template>

<style scoped>
img {
  width: 400px;
  border-radius: 2px;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.5);
  transition: width 1s;
}
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      dogs: []
    };
  },
  created: function() {
    axios.get("/api/dogs").then(response => {
      this.dogs = response.data;
    });
  },
  methods: {}
};
</script>
