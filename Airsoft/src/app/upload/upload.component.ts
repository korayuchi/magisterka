import {Component, Input, NgZone} from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import * as firebase from 'firebase';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  @Input()
  type: string;

  user: any;
  title = 'app';
  selectedFiles: FileList;
  file: File;
  imgsrc: null;
  color = 'primary';
  mode: 'determinate';
  progressBarValue;
  url: any;
  constructor(private storage: AngularFireStorage, private ngZone: NgZone) {
  }
  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      this.user = user;
      this.fetchImage();
    });
  }
  chooseFiles(event) {
    this.selectedFiles = event.target.files;
    if (this.selectedFiles.item(0)) {
      this.uploadpic();
    }
  }
  fetchImage() {
    // @ts-ignore
    this.imgsrc = null;
    this.storage.ref('/angfire2store/' + this.user.uid + '/' + this.type).getDownloadURL().subscribe( (url) => {
      this.ngZone.run( () => {
        this.imgsrc = url;
      });
    });
  }
  uploadpic() {
    const file = this.selectedFiles.item(0);
    const uploadTask = this.storage.upload('/angfire2store/' + this.user.uid + '/' + this.type , file).then( () => {
      this.fetchImage();
    }) .catch( () => {
      console.log('Error in uploading the image');
    });
  }
}
