<template>
  <div>
    <TodoItem />
  </div>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  name: 'TodoList',

  components: {
    TodoItem,
  },

}
</script>
