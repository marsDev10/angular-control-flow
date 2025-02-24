import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeferComponent } from "./defer/defer.component";
import { PlaceholderComponent } from "./placeholder/placeholder.component";
import { LoadingComponent } from "./loading/loading.component";

@Component({
  selector: 'app-root',
  imports: [LoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-control-flow';
}
