import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-me',
  templateUrl: 'me.html'
})
export class MePage {

  constructor(public navCtrl: NavController) {

  }

  items = [
    '我的购买',
    '我的消息',
    '账号设置',
    '帮助说明',
    '关于酒咔嚓',
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
}
