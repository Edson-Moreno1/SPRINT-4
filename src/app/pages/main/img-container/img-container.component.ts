import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImgService } from '../../../services/img.service';
import { AppImage } from '../../../models/models';

@Component({
  selector: 'app-img-container',
  imports: [],
  templateUrl: './img-container.component.html',
  styleUrl: './img-container.component.css'
})
export class ImgContainerComponent {

  @Input() images!: AppImage[]


constructor(private imgService:ImgService) { }


deleteImage(id:number){
  this.imgService.deleteImageByID(id);

}




}
