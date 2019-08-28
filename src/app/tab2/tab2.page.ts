import { PhotoService } from './../services/photo.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public photoService: PhotoService) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    // Reloads the saved pictures when the app is first opened.
    this.photoService.loadSaved();
  }

}
