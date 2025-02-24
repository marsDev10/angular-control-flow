import { Component } from '@angular/core';

@Component({
  selector: 'app-defer',
  imports: [],
  templateUrl: './defer.component.html',
  styleUrl: './defer.component.css'
})
export class DeferComponent {
  // Permite cargar contenido de forma diferi, segun una condición
  // Mejora el redimeinto, aplica lazy loading ya que retraza la carga de partes No criticas

  protected isImageVisible: boolean = false

  showImage(){
    this.isImageVisible = true;
  }
}
