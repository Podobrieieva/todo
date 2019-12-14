<template>
  <div class="todo-item">
    <div class="todo-item__item">
      <md-field v-if="isEdit">
        <md-input v-model="editValue" :placeholder="task.name" @keydown.enter="editCurrentTask" />
      </md-field>
      <div v-else class="md-list-item-text">{{ task.name }}</div>
      <md-button class="md-raised" @click="editCurrentTask">{{ !isEdit ? 'Edit' : 'Save'}}</md-button>
      <md-button class="md-raised" @click="$emit('delete-task', task._id)">Delete</md-button>
    </div>
    <md-divider class="md-inset"></md-divider>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  name: "TodoItem",

  props: {
    task: {
      type: Object,
      default: () => ({})
    }
  },

  data: () => ({
    isEdit: false,
    editValue: ""
  }),

  methods: {
    ...mapMutations(["editTask"]),

    ...mapActions(["EDIT_TASK"]),

    editCurrentTask() {
      if (this.isEdit) {
        this.editTask({ _id: this.task._id, name: this.editValue });
        this.EDIT_TASK({ _id: this.task._id, name: this.editValue });
      }

      this.isEdit = !this.isEdit;
    }
  }
};
</script>

<style lang="scss" scoped>
.todo-item {
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
