import { ImageController } from "./Controllers/ImagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { TodosController } from "./Controllers/TodosController.js";
import { WeathersController } from "./Controllers/WeathersController.js";
import { showTime } from "../app/Utils/Clock.js"
class App {

  todosController = new TodosController()

  weathersController = new WeathersController()

  quotesController = new QuotesController()

  imagesController = new ImageController()

}

showTime()

window["app"] = new App();
