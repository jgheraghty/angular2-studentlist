import { Component } from '@angular/core';
import { Detail } from './detail/detail.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  details: Detail[];

  constructor() {
    this.details = [
      new Detail('Joanne', 'A Big House, Sligo', 'S00154277'),
      new Detail('Shane', 'Marys Igloo, Alaska', 'S00098765'),
      new Detail('James', 'A Fancy Airing Cupboard, Sligo', 'S00854377'),
    ];

  }

}
