import { Component } from '@angular/core';

import { NavController,Slides} from 'ionic-angular';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  @ViewChild('mySlider') slider: Slides;
  mySlideOptions={
    autoplay:2000,
    initialSlide:0,
    pager:true,
    loop:true,
    speed:1000
  };

  ionViewWillEnter(){
    console.log("首页载入")
    setInterval(()=>{
      this.slider.slideNext(1000,true);
    },3000);
  }

}
