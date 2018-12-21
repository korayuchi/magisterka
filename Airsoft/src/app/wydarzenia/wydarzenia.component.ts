import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-wydarzenia',
  templateUrl: './wydarzenia.component.html',
  styleUrls: ['./wydarzenia.component.css']
})
export class WydarzeniaComponent implements OnInit {
  lat = 53.461882;
  lng = 14.427451;
  lat1 = 53.339267;
  lng1 = 14.801766;
  lat2 = 53.367896;
  lng2 = 14.654299;

  constructor() { }

  ngOnInit() {
  }

}
