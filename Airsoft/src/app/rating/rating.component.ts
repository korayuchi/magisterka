import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  selected = 0;
  hovered = 0;
  readonly = false;

  constructor() { }

  ngOnInit() {
  }

}
