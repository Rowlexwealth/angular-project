import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn';
  
  myImages: string = 'assets/images/new-img.jpg'

  myShow: string = 'assets/images/Fifa.png'
}
