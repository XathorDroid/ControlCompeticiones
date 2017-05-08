import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-moreinfo',
  templateUrl: 'moreinfo.html',
})
export class MoreinfoPage {

  card: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  	this.card = navParams.data.card;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Moreinfo');
  }

  changeButton(card: any) {
    var msg;

    if(card.iconBool) {
      card.btnColor = 'desinscribir';
      card.btnIcon = 'close';
      card.btnText = 'Desinscribirse';
      card.inscrits = card.inscrits+1;
      msg = 'inscrito';
    } else {
      card.btnColor = 'inscribir';  
      card.btnIcon = 'checkmark';
      card.btnText = 'Inscribirse';
      card.inscrits = card.inscrits-1;
      msg = 'desinscrito';
    }
    card.iconBool = !card.iconBool;

    // Toast que indica al usuario si se inscribe o desinscribe
    let toast = this.toastCtrl.create({
      message: 'Usted se ha '+msg,
      duration: 2000,
      cssClass: "toastStyle"
    });
    toast.present();
  }

}