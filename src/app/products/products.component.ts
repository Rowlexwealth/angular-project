import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  myPicture: string = "assets/images/Fifa.png"

  myImage = "assets/images/new-img.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
