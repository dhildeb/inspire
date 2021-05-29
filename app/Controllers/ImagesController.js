import { ProxyState } from "../AppState.js";
import { imageService } from "../Services/ImagesService.js";

function _draw() {
  console.log(ProxyState.img.url)
  document.getElementById('image').style.backgroundImage = `url('${ProxyState.img.url}')`
}
export class ImageController {
  constructor() {
    ProxyState.on('img', _draw)
    imageService.getImages()
  }
}