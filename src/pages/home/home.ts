import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  scannedCode = null;

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner) { }

  scanCode(){
    this.barcodeScanner.scan().then(barcodeData =>{
      // this.scannedCode = barcodeData.text;
      this.scannedCode = JSON.parse(barcodeData.text);
    }, (err) =>{
      console.log('Error: ', err);
    });
  }

  gerarBeneficios(){
    alert(this.scannedCode['name']);
  }

}
