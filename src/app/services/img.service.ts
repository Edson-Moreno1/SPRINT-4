import { Injectable } from '@angular/core';
import { AppImage } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ImgService {
  private storageKey = 'images';

  constructor() {}

  /**
   * Obtiene todas las imágenes almacenadas
   * @returns Array de imágenes
   */
  getImages(): AppImage[] {
    const storedImages = localStorage.getItem(this.storageKey);
    return storedImages ? JSON.parse(storedImages) as AppImage[] : [];
  }

  /**
   * Guarda una nueva imagen
   * @param name Nombre de la imagen
   * @param src Fuente (URL o base64) de la imagen
   */
  saveImage(name: string, src: string): void {
    const images = this.getImages();
    const newImage: AppImage = {
      id_image: images.length > 0 ? images[images.length - 1].id_image + 1 : 1,
      name,
      src
    };
    images.push(newImage);
    localStorage.setItem(this.storageKey, JSON.stringify(images));
  }

  /**
   * Elimina una imagen por su ID
   * @param id_image ID de la imagen a eliminar
   */
  deleteImageByID(id_image: number): void {
    let images = this.getImages();
    images = images.filter(image => image.id_image !== id_image);
    localStorage.setItem(this.storageKey, JSON.stringify(images));
  }
}
