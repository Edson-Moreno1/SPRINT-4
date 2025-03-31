import { Component, Input} from '@angular/core';

declare var bootstrap: any;
@Component({
  selector: 'app-add-button',
  imports: [],
  templateUrl: './add-button.component.html',
  styleUrl: './add-button.component.css'
})
export class AddButtonComponent {
@Input () modalID!: string;

}
