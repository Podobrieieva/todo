<template>
  <div>
    <TodoItem
      v-for="(task, index) in tasks"
      :key="`${task.name}${index}`"
      :task="task"
      @delete-task="$emit('delete-task', $event)"
    />
  </div>
</template>

<script>

import TodoItem from "./TodoItem";

export default {
  name: 'TodoList',

  components: {
    TodoItem,
  },

  props: {
    tasks: {
      type: Array,
      default: [],
    }
  },
}
</script>
