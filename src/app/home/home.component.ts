import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myPicture: string = "home/imagged/Fifa.png"

  myImage = "home/imagged/Wrist-Watch.jpg"

  

  constructor() { }

  ngOnInit(): void {
  }

}
