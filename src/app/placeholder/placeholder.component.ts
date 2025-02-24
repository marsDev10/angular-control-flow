import { Component } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  imports: [],
  templateUrl: './placeholder.component.html',
  styleUrl: './placeholder.component.css'
})
export class PlaceholderComponent {
  isImageVisible: boolean = false;

  showImage(){
    setTimeout(() => {
      this.isImageVisible = true;
    }, 4000);
  }
}
