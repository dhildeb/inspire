import { ProxyState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";
import { sandBoxApi } from "../Utils/SandboxApi.js";


let name = ProxyState.todos.user || 'daniel'
class TodosService {

  async getTodos() {
    let res = await sandBoxApi.get(name + '/todos')
    ProxyState.todos = res.data.map(td => new Todo(td))
    console.log(ProxyState.todos)
  }
  async addTodo(todoData) {
    let res = await sandBoxApi.post(name + '/todos/', todoData)
    ProxyState.todos = [...ProxyState.todos, new Todo(res.data)]
  }

  async check(id) {
    let check = ProxyState.todos.find(t => t.id == id)
    check.completed = !check.completed
    console.log(check)
    await sandBoxApi.put(name + '/todos/' + id, check)
  }

  async deleteTodo(id) {
    await sandBoxApi.delete(name + '/todos/' + id)
    ProxyState.todos = ProxyState.todos.filter(td => td.id != id)
  }
}

export const todosService = new TodosService();

