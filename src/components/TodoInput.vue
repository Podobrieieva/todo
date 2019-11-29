
<template>
<div class="todo-input">
    <md-field>
      <label>New Task</label>
      <md-input 
        v-model="task" 
        placeholder="Create a task"
      />
    </md-field>
     <md-button
      class="md-raised md-primary"
      @click="saveTask"
    >
      Save
    </md-button>
</div>

</template>

<script>
import { mapActions, mapMutations } from 'vuex';

export default {
  name: 'TodoList',

  data: () => ({
      task: '',
  }),

  methods: {
    ...mapMutations([
      'addTask',
    ]),

    ...mapActions([
      'createTask',
    ]),

    saveTask() {
      this.createTask({name: this.task});
      this.addTask(this.task);
      this.task = '';
    },
  },
}
</script>

<style lang="scss" scoped>
.todo-input {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>