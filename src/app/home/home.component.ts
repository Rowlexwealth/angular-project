import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myPicture: string = "assets/images/Hp-laptop.jpg"

  myImage = "assets/images/new-img.jpg"

  

  constructor() { }

  ngOnInit(): void {
  }

}
