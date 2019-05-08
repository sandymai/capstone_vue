<template>
    <div class="places-index">
      <section id="page-title">
        <div class="container">
          <div class="row">
            <div class="col-md-12 title-">
        <div align="center">

              <h2>Paw-pular Dog Friendly Places!</h2>
            </div>
          </div>
        </div>
      </div>
      </section>

<a class="weatherwidget-io" href="https://forecast7.com/en/41d88n87d63/chicago/?unit=us" data-label_1="CHICAGO" data-label_2="WEATHER" data-font="Trebuchet MS" data-icons="Climacons Animated" data-mode="Forecast" data-theme="sky" data-basecolor="rgba(110, 212, 246, 0.84)" data-highcolor="#ffffff" data-lowcolor="#b2f4f1" data-suncolor="#efff10" data-cloudfill="#38c8e0" >CHICAGO WEATHER</a>

      <div id="map"></div>

      <h1>Popular Dog Friendly Places!</h1>
      <div v-for="place in places">
        <div align="center">
          <h2 class="text-muted">Location & Address:</h2>
          <p>{{ place.location }}</p>
          <p>{{ place.address }}</p>
        </div>
      </div>

      <body>
        <section id="message">
          <div class="container">
            <div class="row">
              <div class="col-md-10 col-md-offset-1 text-center">
                <h4 class="gray">
                  Off-leash play in the city is only allowed in the dog-friendly areas at designated Chicago Park
                  District parks. Chicago Dog Parks are often referred to as dog-friendly areas and we have conveniently
                  provided a list of some of the most popular places!
                </h4>
              </div>
            </div>
          </div>
        </section>
      </body>
    </div>
  </div>
</template>

<style>
#map {
  text-align: initial;
  height: 500px;
  width: 100%;
  margin-bottom: 1em;
}
</style>

<head>
    <link rel="stylesheet" href="css/font-awesome.min.css" />
    <link rel="stylesheet" href="css/animate.css" />
    <link
      href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic"
      rel="stylesheet"
      type="text/css"
    />

    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <link rel="stylesheet" href="css/main.css" />
    <link rel="stylesheet" href="css/custom-styles.css" />

    <script src="js/modernizr-2.6.2-respond-1.1.0.min.js"></script>
  </head>

<script>
/* global mapboxgl */
import axios from "axios";


!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');

export default {
  data: function() {
    return {
      places: [],
      pin: [
        {
          lat: 41.9305,
          long: -87.6534,
          description: "Wiggly Field"
        },
        {
          lat: 41.908,
          long: -87.6767,
          description: "Wicker Park Dog Park"
        },
        {
          lat: 41.8705,
          long: -87.6217,
          description: "Grant Bark Park"
        },
        {
          lat: 41.9691,
          long: -87.6429,
          description: "Montrose Dog Beach"
        },
        {
          lat: 41.8804,
          long: -87.6617,
          description: "Skinner Dog Park"
        },
        {
          lat: 41.885539,
          long: -87.61686,
          description: "Lakeshore East Dog Park"
        },
        {
          lat: 41.8798,
          long: -87.6502,
          description: "Mary Bartelme Park"
        },
        {
          lat: 41.868271,
          long: -87.62584,
          description: "Coliseum Park Dog Friendly Area"
        }
      ]
    };
  },
  created: function() {
    axios.get("/api/places").then(response => {
      this.places = response.data;
    });
  },

  mounted: function() {
    mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_API_KEY;
    var map = new mapboxgl.Map({
      container: "map", // container id
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-87.6619, 41.87646], // starting position [lng, lat]
      minZoom: 10.5,
      zoom: 11
    });

    this.pin.forEach(function(pin) {
      var popup = new mapboxgl.Popup({ offset: 25 }).setText(pin.description);
      var marker = new mapboxgl.Marker()
        .setLngLat([pin.long, pin.lat])
        .setPopup(popup)
        .addTo(map);
    });
  },
  methods: {}
};
</script>
