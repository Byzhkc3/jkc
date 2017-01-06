import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {InAppBrowser,BarcodeScanner} from 'ionic-native';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

  scanCode(){
    BarcodeScanner.scan().then((res) => {
      if(res.text != ''){
        let browser = new InAppBrowser(res.text, '_system', 'location=yes');
        alert(res.text);
        console.log(res.text);
      }

    }, (err) => {
      // An error occurred
      console.log('12');
    });
  }

  ionViewDidEnter(){
    console.log(1);
    this.scanCode()
  }


}
