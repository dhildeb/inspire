export class Todo {
    constructor(data) {
        this.description = data.description
        this.id = data.id
        this.completed = data.completed || false
        this.user = data.user || 'daniel'
    }

    get Template() {
        return `
        <p><input type="checkbox" name="completed" id="completed" ${this.completed ? 'checked' : ''} onclick="app.todosController.check('${this.id}')"> 
        ${this.description} <i class="text-warning click" onclick="app.todosController.deleteTodo('${this.id}')">X</i></p>
        `
    }
}


