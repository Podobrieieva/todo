import axios from 'axios';
const API_URL = process.env.VUE_APP_API_URL;

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});


export default {
  getTasks() {
    return apiClient.get('/tasks');
  },

  createNewTask(newTask) {
    return apiClient.post('/tasks', newTask);
  },

  deleteTask(id) {
    return apiClient.delete(`/tasks/${id}`);
  },
  
  editTask(task) {
    return apiClient.patch(`/tasks/${task.id}`, task);
  },
}