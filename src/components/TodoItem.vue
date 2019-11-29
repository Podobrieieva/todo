<template>
  <div class="todo-item">
      <div class="todo-item__item">
      <md-field v-if="isEdit">
        <md-input
          v-model="editValue" 
          :placeholder="task.name"
          @keydown.enter="editCurrentTask"
        />
      </md-field>
        <div
          v-else
          class="md-list-item-text"
        >
               {{ task.name }}
        </div>
        <md-button
          class="md-raised"
          @click="editCurrentTask"
        >
          {{ !isEdit ? 'Edit' : 'Save'}}
        </md-button>
        <md-button class="md-raised">Delete</md-button>
      </div>
    <md-divider class="md-inset"></md-divider>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'TodoItem',

  props: {
    task: {
      type: Object,
      default: () => ({}),
    }
  },

  data: () => ({
    isEdit: false,
    editValue: '',
  }),

  methods: {
    ...mapMutations([
      'editTask',
    ]),

    editCurrentTask() {
      if(this.isEdit) this.editTask({ id: this.task.id, name: this.editValue });

      this.isEdit = !this.isEdit;
    }
  }

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
