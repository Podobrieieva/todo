import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://api.coinlayer.com/api',
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 10000
});


export default {
  getEvents(currency) {
    return apiClient.get(`/live?access_key=${ACCESS_KEY}&target=${currency}&symbols=${SYMBOLS}`);
  },
}