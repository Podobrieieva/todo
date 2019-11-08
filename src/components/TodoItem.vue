<template>
  <div class="todo-item">
      <div class="todo-item__item">
        <div class="md-list-item-text">
                ggg
        </div>
        <md-button class="md-raised">Edit</md-button>
        <md-button class="md-raised">Delete</md-button>
      </div>
    <md-divider class="md-inset"></md-divider>
  </div>
</template>

<script>

export default {
  name: 'TodoItem',

}
</script>

<style lang="scss" scoped>

.todo-item{
    &__item {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}

.md-divider.md-inset {
    margin-left: 0;
}
</style>
