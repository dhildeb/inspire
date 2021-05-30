import { ImageController } from "./Controllers/ImagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { TodosController } from "./Controllers/TodosController.js";
import { WeathersController } from "./Controllers/WeathersController.js";
import { showTime } from "../app/Utils/Clock.js"
import { ClocksController } from "./Controllers/ClocksController.js";

let muted = false
class App {

  todosController = new TodosController()

  weathersController = new WeathersController()

  quotesController = new QuotesController()

  imagesController = new ImageController()

  clocksController = new ClocksController()
  mute() {
    document.getElementById("mute-icon").classList.toggle("fa-volume-off")
    document.getElementById("mute-icon").classList.toggle("fa-volume-up")
    muted = !muted
    muted ? document.getElementById("audio").volume = 0 : document.getElementById("audio").volume = .35
    console.log(muted)

  }
  toggleTasks() {
    document.getElementById("todo-div").classList.toggle("d-none")
    document.getElementById("show-tasks").classList.toggle("d-none")
  }
}


showTime()

window["app"] = new App();
