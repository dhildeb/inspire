import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";

function _draw() {
  let completed = 0
  ProxyState.todos.forEach(td => td.completed ? completed++ : '')
  let template = `
  <div>${completed}/${ProxyState.todos.length}</div>
  `
  ProxyState.todos.forEach(td => template += td.Template)
  document.getElementById('todos').innerHTML = template
}
export class TodosController {
  constructor() {
    ProxyState.on("todos", _draw);
    todosService.getTodos()
  }
  addTodo(event) {
    event.preventDefault()
    let form = event.target
    let todoData = {
      description: form.description.value
    }
    todosService.addTodo(todoData)
    form.reset()
  }
  deleteTodo(id) {
    todosService.deleteTodo(id)
  }
  check(id) {
    todosService.check(id)
  }
}