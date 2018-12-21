import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireObject  } from 'angularfire2/database';


export class AdListing {
  title = 'Your title';
  content = 'Ad content';
}

@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor(private db: AngularFireDatabase) { }


createAd(): AngularFireObject<AdListing> {
  const adDefault = new AdListing();
  const adKey = this.db.list('/wydarzenia').push(adDefault).key;
  return this.db.object('/wydarzenia/' + adKey);
}

updateAd(ad: AngularFireObject<AdListing>, data: any) {
  return ad.update(data);
}


}
