import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Places from "./views/PlacesIndex.vue";
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import DogsIndex from "./views/DogsIndex.vue";
import DogsShow from "./views/DogsShow.vue";
import EventsIndex from "./views/EventsIndex.vue";
import EventsNew from "./views/EventsNew.vue";
import EventAttendeesIndex from "./views/EventAttendeesIndex.vue";
import DogsNew from "./views/DogsNew.vue";
import EventsShow from "./views/EventsShow.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/dogfriendlyplaces",
      name: "dogfriendlyplaces",
      component: Places
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    },
    {
      path: "/dogs-profiles",
      name: "dogs-index",
      component: DogsIndex
    },
    {
      path: "/dogs/:id",
      name: "dogs-show",
      component: DogsShow
    },
    {
      path: "/events-index",
      name: "events-index",
      component: EventsIndex
    },
    {
      path: "/events-new",
      name: "events-new",
      component: EventsNew
    },
    {
      path: "/my-events",
      name: "event-attendees-show",
      component: EventAttendeesIndex
    },
    {
      path: "/dogs-new",
      name: "dogs-new",
      component: DogsNew
    },
    {
      path: "/events-show/:id",
      name: "events-show",
      component: EventsShow
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
