import EventService from '../services/eventService';

export default {
  getData({
    commit,
  }) {
    return EventService.getTasks()
      .then(({
        data,
      }) => {
        console.log(data)
          commit('updateState', {
            tasks: data,
          });
      })
      // .catch(error => {
      //   const notification = {
      //     type: 'error',
      //     message: `There was a problem fetching data: ${error}`
      //   };

      //   commit('addError', notification);
      // });
  },

  createTask({
    commit,
  }, task) {
    return EventService.createNewTask(task)
      .then(({
        data,
      }) => {
        console.log(data)
      }).catch((err) => console.log(err))
  },

  
  deleteTask({
    commit,
  }, id) {
    return EventService.deleteTask(id)
      .then(({
        data,
      }) => {
        console.log(data)
      }).catch((err) => console.log(err))
  },

  EDIT_TASK({
    commit,
  }, task) {
    return EventService.editTask(task)
      .then(({
        data,
      }) => {
        console.log(data)
      }).catch((err) => console.log(err))
  },
}