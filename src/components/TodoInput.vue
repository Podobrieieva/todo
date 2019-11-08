
<template>
<div class="todo-input">
    <md-field>
      <label>New Task</label>
      <md-input 
        v-model="withLabel" 
        placeholder="Create a task"
      />
    </md-field>
     <md-button class="md-raised md-primary">Save</md-button>
</div>

</template>

<script>

export default {
  name: 'TodoList',

  data: () => ({
      withLabel: '',
  }),

  watch: {
      withLabel(value) {
          console.log(value)
      }
  }
}
</script>

<style lang="scss" scoped>
.todo-input {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>