import { Component } from '@angular/core';
import { AdService, AdListing } from '../ad.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ad-listing',
  templateUrl: './ad-listing.component.html',
  styleUrls: ['./ad-listing.component.css']
})
export class AdListingComponent  {

  ad: any;
  adForm: FormGroup;

  constructor(private adService: AdService, private fb: FormBuilder) { }

  startNewAdListing() {
    this.ad =     this.adService.createAd();
    this.buildForm();
  }

  saveAdChanges() {
    if (this.adForm.status !== 'VALID') {
      console.log('Formularz jest niepoprawny');
      return;
    }

    const data = this.adForm.value;
    this.adService.updateAd(this.ad, data);
  }

  private buildForm() {
    this.adForm = this.fb.group({
      Rola: ['', Validators.required ],
      nazwaWydarzenia: ['', Validators.required ],
      ImieINazwisko: ['', Validators.required ],
      InfoDodatkowe: ['', Validators.required ],
      // title:    ['', Validators.required ],
      // content:  ['', Validators.required ],
    });
  }


}
