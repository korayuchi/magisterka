import { Component } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  title = 'app';
  selectedFiles: FileList;
  file: File;
  imgsrc;
  color = 'primary';
  mode: 'determinate';
  progressBarValue;
  url: any;
  constructor(private storage: AngularFireStorage) {
  }
  chooseFiles(event) {
    this.selectedFiles = event.target.files;
    if (this.selectedFiles.item(0)) {
      this.uploadpic();
    }
  }
  uploadpic() {
    const file = this.selectedFiles.item(0);
    const uniqkey = 'pic' + Math.floor(Math.random() * 1000000);
    const uploadTask = this.storage.upload('/angfire2store/' + uniqkey, file);
    this.imgsrc = uploadTask.downloadURL();
    uploadTask.percentageChanges().subscribe((value) => {
      this.progressBarValue = value.toFixed(2);
    });
  }
}
