import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnChanges {
  @Input() rating: number = 0;
  cropWidth: number = 75;

  @Output() ratingClicked: EventEmitter<string> =
      new EventEmitter<string>();

  constructor() { }

  ngOnChanges(): void {
    this.cropWidth = this.rating * 75/5;
  }

  onClick(): void {
    this.ratingClicked.emit(`This rating ${this.rating} was clicked!`);
  }
}
