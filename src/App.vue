<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import axios from "axios";
import HelloWorld from "./components/HelloWorld.vue";

const API_URL = process.env.VUE_APP_API_URL;

export default {
  name: "app",
  components: {
    HelloWorld
  },

  async created() {
    console.log(API_URL);
    console.log(process.env)
    // eslint-disable-next-line no-console
    await axios.get(API_URL).then(response => console.log(response));
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
