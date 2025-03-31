import { Injectable } from '@angular/core';
import { AppImage } from '../models/models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImgService {
  private storageKey = 'images';
  private imagesSubject = new  BehaviorSubject<AppImage[]>(this.getImagesFromStorage();)

  images$ = this.imagesSubject.asObservable();

  constructor() {}
private getImagesFromStorage(): AppImage[]{
  const storedImages = localStorage.getItem(this.storageKey);
  return storedImages ? JSON.parse(storedImages): [];
}
 

private updateStorage(images:AppImage[]){
  localStorage.setItem(this.storageKey,JSON.stringify(images));
  this.imagesSubject.next(images);
}

getImages():AppImage[]{
  return this.imagesSubject.getValue();
}

  
  saveImage(name: string, src: string): void {
    const images = this.getImages();
    const newImage: AppImage = {
      id_image: images.length > 0 ? images[images.length - 1].id_image + 1 : 1,
      name,
      src
    };
    const updated = [...images,newImage];
    this.updateStorage(updated);
  }
  
  deleteImageByID(id_image: number): void {
   const updated = this.getImages().filter(img=> img.id_image !== id_image);
   this.updateStorage(updated);
  }
}
