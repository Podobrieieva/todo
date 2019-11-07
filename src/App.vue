<template>
  <div id="app">
    <TodoInput />
    <TodoList />
  </div>
</template>

<script>
import axios from "axios";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

const API_URL = process.env.VUE_APP_API_URL;

export default {
  name: "App",
  
  components: {
    TodoList,
    TodoInput
  },

  async created() {
    await axios.get(API_URL).then(response => console.log(response));
  }
};
</script>


