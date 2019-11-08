<template>
  <div class="app-container">
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

<style lang="scss" scoped>

.app-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  margin-left: 50px;
}
</style>


