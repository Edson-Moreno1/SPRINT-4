import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImgService } from '../../../services/img.service';

declare var $: any
@Component({
  selector: 'app-newimage-form',
  imports: [],
  templateUrl: './newimage-form.component.html',
  styleUrl: './newimage-form.component.css'
})
export class NewimageFormComponent {
  @Input() modalID!: string;
  imageUrl: string | null='';
  imageName: string=''


constructor(private imgService:ImgService){} 

onFileSelected(event:any){
  const file = event.target.files[0];
  if(file){
    const reader = new FileReader();
    reader.onload = ( ) => {
      this.imageUrl = reader.result as string;
      this.imageName = file.name;
    };
    reader.readAsDataURL(file);
  }
}
saveImage() {
  if (!this.imageUrl || !this.imageName) {
    alert('Selecciona una imagen antes de guardar');
    return;
  }

  this.imgService.saveImage(this.imageName, this.imageUrl);

  // Limpiar el formulario
  this.resetForm();

  // Cerrar el modal
  $(`#${this.modalID}`).modal('hide');
}

resetForm() {
  this.imageUrl = null;
  this.imageName = '';

  const input = document.getElementById('imageInput') as HTMLInputElement;
  if (input) {
    input.value = '';
  }
}
}