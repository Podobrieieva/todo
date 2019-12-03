<template>
  <div class="app-container">
    <TodoInput />
    <TodoList
      v-if="tasks.length !== 0"
      :tasks="tasks"
      @delete-task="deleteCurrentTask"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";



export default {
  name: "App",
  
  components: {
    TodoList,
    TodoInput
  },

  computed: {
    ...mapState([
      'tasks'
    ]),
  },

  async created() {
    await this.getData();
  },

  methods: {
    ...mapActions([
      'getData',
      'deleteTask'
    ]),

    async deleteCurrentTask(id) {
      await this.deleteTask(id);
      await this.getData();
    }
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


