import http from '../utils/http';

export default class Service {
  static list() {
    return http.get('https://jsonplaceholder.typicode.com/todos/1').then(response => response.data);
  }
}
