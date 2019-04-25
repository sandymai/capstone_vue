<template>
  <div class="home">
    <img alt="Vue logo" src="https://i.ibb.co/zNQg69G/Screen-Shot-2019-04-17-at-7-33-09-PM.png" />
    <HelloWorld msg="Welcome to Your App" />
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
