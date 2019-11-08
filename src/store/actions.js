import EventService from '../services/eventService';

export default {
  getData({
    commit,
  }, currency) {
    return EventService.getEvents(currency)
      .then(({
        data,
      }) => {
        if (data.success) {
          commit('updateState', {
            [data.target]: data.rates,
          });
        } else {
          const notification = {
            type: 'error',
            message: `There was a problem fetching events: ${data.error.info}`
          };

          commit('addError', notification);
        }
      })
      .catch(error => {
        const notification = {
          type: 'error',
          message: `There was a problem fetching events: ${error}`
        };

        commit('addError', notification);
      });
  },
}