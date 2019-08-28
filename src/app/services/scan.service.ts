// import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
// import { ZBar, ZBarOptions } from '@ionic-native/ZBar/ngx';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScanService {

  public qrCode: string;

  constructor(
    // private qrScanner: QRScanner,
    private barcodeScanner: BarcodeScanner
    /*private zbar: ZBar*/) { }

  // scanQRCode() {
  //   // Optionally request the permission early
  //   this.qrScanner.prepare().then((status: QRScannerStatus) => {
  //     if (status.authorized) {
  //       // camera permission granted

  //       // start scanning
  //       const scanSub = this.qrScanner.scan().subscribe((text: string) => {
  //         console.log('Scanned something', text);
  //         this.qrCode = text;
  //         this.qrScanner.hide(); // hide camera preview
  //         scanSub.unsubscribe(); // stop scanning
  //       });
  //     } else if (status.denied) {
  //       // camera permission was permanently denied
  //       // you must use QRScanner.openSettings() method to guide the user to the settings page
  //       // then they can grant the permission from there
  //       console.log('Enable camera permission on settings page.');
  //     } else {
  //       // permission was denied, but not permanently. You can ask for permission again at a later time.
  //       console.log('Camera not available at the moment.');
  //     }
  //   })
  //   .catch((e: any) => console.log('Error is', e));
  // }

  loadQRcode() {
    this.qrCode = '123';
  }

  scanBarcode() {
    this.barcodeScanner.scan()
    .then((barcodeData) => console.log('Barcode data', barcodeData))
    .catch((e: any) => console.log('Barcode error', e));
  }

  // scanZBarcode() {
  //   const options: ZBarOptions = {
  //     flash: 'off',
  //     drawSight: false
  //   };

  //   this.zbar.scan(options)
  //   .then((result) => console.log('ZBarcode data', result))
  //   .catch((e: any) => console.log('ZBarcode error', e));
  // }
}
