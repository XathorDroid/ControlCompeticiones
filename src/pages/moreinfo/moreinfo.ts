import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-moreinfo',
  templateUrl: 'moreinfo.html',
})
export class MoreinfoPage {

  competicion: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.competicion = navCtrl.data.competicion;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Moreinfo');
  }

  public putTitle(competicionGet) {
  	this.competicion = competicionGet;
  }

}