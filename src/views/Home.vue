<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="https://i.ibb.co/zNQg69G/Screen-Shot-2019-04-17-at-7-33-09-PM.png" /> -->
    <!--Header Section-->
    <section id="header">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <!--BxSlider-->
            <ul class="bxslider">
              <li>
                <!-- <video autoplay loop muted inline>
                  <source src="https://www.youtube.com/watch?v=QiCaMjdRPwo" type="video/webm" />
                </video> -->
                <!-- <img src="https://i.ibb.co/zNQg69G/Screen-Shot-2019-04-17-at-7-33-09-PM.png" alt="Title" /> -->
                <div class="row text-center">
                  <div class="col-sm-10 col-sm-offset-1">
                    <div class="col-md-6 text-center">
                      <img
                        src="http://pluspng.com/img-png/cat-and-dog-png-no-background-puppy-training-classes-925.png"
                        class="img-responsive"
                        alt="Title"
                      />
                    </div>
                    <h1>
                      Welcome to PoochParty, a platform to create or join meet ups so your dogs can socialize and make
                      fur-ever friends!
                    </h1>
                    <br />
                    <a class="btn-main" href="/about">Learn More</a>
                  </div>
                </div>
              </li>

              <li>
                <img src="img/header2.png" alt="Title" />
                <div class="row text-center">
                  <div class="col-sm-10 col-sm-offset-1">
                    <h1>Built to look good on all devices. Resize your browser to take a look for yourself.</h1>
                    <br />
                    <a class="btn-main" href="/about">Learn More</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!--End Span12-->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
