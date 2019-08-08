import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  public photos: Photo[] = [];
  currentImage: any;

  constructor(private camera: Camera, private storage: Storage) {}

  // Opens the camera and saves the pictures to storage.
  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then((imageData) => {
      // Add new photo to gallery
      this.photos.unshift({
        data: 'data:image/jpeg;base64,' + imageData
      });
      // Save all photos for later viewing
      this.storage.set('photos', this.photos);
    }, (err) => {
      // Handle error
      console.log('Camera issue:' + err);
    });
  }

  // Load the saved pictures from storage.
  loadSaved() {
    console.log('Loading pictures');
    this.storage.get('photos').then((photos) => {
      this.photos = photos || [];
    });
  }

  // Delete the picture from the storage
  deletePicture(photoEntry: Photo, position) {
    console.log('Deleting picture ' + position);
    // Remove picture from the photo array.
    this.photos.splice(position, 1);
    // Get the pictures from storage and delete the selected picture.
    this.storage.get('photos').then((images) => {
      const filtered = images.filter((image) => image.data !== photoEntry.data);
      this.storage.set('photos', filtered);
      // this.loadSaved();
    });
  }
}

class Photo {
  data: any;
}
