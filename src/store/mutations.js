let nextId = 1;

export default {
    updateState(state, data) {
      Object.assign(state, data);
    },

    addTask(state, data) {
      state.tasks.push({
          name: data,
          id: nextId++
      });
    },

    editTask(state, { id, name }) {
      const currentTask = state.tasks.find(task => task.id === id);
      currentTask.name = name;
    }
}