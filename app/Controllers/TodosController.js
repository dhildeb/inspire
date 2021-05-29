import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";


//Private
function _draw() {
  let template = ''

  ProxyState.todos.forEach(td => template += td.Template)
  console.log('drawing')
  document.getElementById('todos').innerHTML = template
}

//Public
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
