import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import { sandBoxApi } from "../Utils/SandboxApi.js";

let name = ProxyState.todos.user || 'daniel'
class TodosService {

  async getTodos() {
    let res = await sandBoxApi.get(name + '/todos')
    ProxyState.todos = res.data.map(td => new Todo(td))
    console.log(ProxyState.todos)
  }
  addTodo(todoData) {
    ProxyState.todos = [...ProxyState.todos, new Todo(todoData)]
  }

  check(id) {
    let check = ProxyState.todos.find(t => t.id == id)
    check.completed = !check.completed

  }
}

export const todosService = new TodosService();

