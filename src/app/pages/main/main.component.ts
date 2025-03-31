import { Component, OnInit } from '@angular/core';
import { AddButtonComponent } from "./add-button/add-button.component";
import { ImgContainerComponent } from "./img-container/img-container.component";
import { NewimageFormComponent } from "./newimage-form/newimage-form.component";
import { ImgService } from '../../services/img.service';
import { AppImage } from '../../models/models';

@Component({
  selector: 'app-main',
  imports: [AddButtonComponent, ImgContainerComponent, NewimageFormComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
NewImageModalId : string='modal-create-image';
imgArray: AppImage[] = [];

constructor(private imgService:ImgService) { }

ngOnInit(): void{
  this.imgService.images$.subscribe(images =>{
    this.imgArray = images;
  });
}



}
