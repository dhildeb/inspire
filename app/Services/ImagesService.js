import { ProxyState } from "../AppState.js";
import { Image } from "../Models/Image.js";
import { sandBoxApi } from "../Utils/SandboxApi.js";

class ImagesService {

  async getImages() {
    let res = await sandBoxApi.get('images')
    console.log(res.data)
    ProxyState.img = new Image(res.data)
  }
}

export const imageService = new ImagesService()