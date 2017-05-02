import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-moreinfo',
  templateUrl: 'moreinfo.html',
})
export class MoreinfoPage {

  card: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.card = navParams.data.card;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Moreinfo');
  }

  /*public putTitle(competicionGet) {
  	this.competicion = competicionGet;
  } */

}