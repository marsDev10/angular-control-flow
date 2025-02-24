import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent implements OnInit{
  protected isContentReady: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.isContentReady = true;
    }, 4000);
  }
}
