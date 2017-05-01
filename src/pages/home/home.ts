import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { AboutPage } from '../about/about';
import { MoreinfoPage } from '../moreinfo/moreinfo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(MoreinfoPage) moreInfo: MoreinfoPage;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public toastCtrl: ToastController) {

  }

  logOut() {
  	this.navCtrl.setRoot(LoginPage);
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Cerrar Sesión',
      message: 'Estás seguro de que quieres cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Cancelar clicked');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            console.log('Aceptar clicked');
  			this.navCtrl.setRoot(LoginPage);

  			let toast = this.toastCtrl.create({
		      message: 'Ha cerrado sesión satisfactoriamente',
		      duration: 2000,
		      cssClass: "toastStyle"
		    });
		    toast.present();
          }
        }
      ]
    });
    confirm.present();
  }

  showAbout() {
    this.navCtrl.push(AboutPage);
  }

  showInfo() {
    this.navCtrl.push(MoreinfoPage);
  }

}
