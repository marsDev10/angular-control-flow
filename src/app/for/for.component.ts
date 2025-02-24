import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  imports: [NgFor],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {
  names: string[] = ['John', 'Doe', 'Jane', 'Doe'];
}
