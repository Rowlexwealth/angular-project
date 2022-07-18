import { Component, OnInit } from '@angular/core';
import { IProduct } from './quality';
import { QualityService } from './quality.service';

@Component({
  selector: 'app-quality',
  templateUrl: './quality.component.html',
  styleUrls: ['./quality.component.css']
})
export class QualityComponent implements OnInit {
  myTitle = 'API CONSUME';
  imageWidth = 50;
  imageMargin = 2;
  showImage: boolean = false;

  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log('in setter:', value);this.filteredProducts = this.performFilter(value);
  }

  // quality.service 
  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];

  constructor(private qualityService: QualityService) {}

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product:IProduct)=>
      product.productName.toLocaleLowerCase().includes(filterBy));
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.products = this.qualityService.getProducts();
    this.filteredProducts = this.products;
  }

  onRatingClicked(message: string): void {
    this.myTitle = 'API CONSUME: ' + message;
  }

}
