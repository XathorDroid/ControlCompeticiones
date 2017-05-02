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

  cardList: any = [];

  @ViewChild(MoreinfoPage) moreInfo: MoreinfoPage;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public toastCtrl: ToastController) {
    this.loadDatas();
  }

  loadDatas() {
    this.cardList = [
      {
        title: 'XOGADE - IV Xornada Interzonal Escolar en pista',
        date: '06-05-2017',
        inscrits: '12 inscritos'
      },
      {
        title: 'CAMPEONATO DE ESPAÑA 10000 DE VETERANOS (13 AL 14)',
        date: '13-05-2017',
        inscrits: '8 inscritos'
      },
      {
        title: 'II Trofeo Atletismo Barbanza- DÍA DAS LETRAS GALEGAS',
        date: '14-05-2017',
        inscrits: '15 inscritos'
      },
      {
        title: 'CAMPIONATO DE GALICIA BENXAMIN, ALEVIN E ALEVIN POR EQUIPOS',
        date: '27-05-2017',
        inscrits: '16 inscritos'
      }
    ];
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

  showInfo(cardData: any) {
    this.navCtrl.push(MoreinfoPage, {card: cardData});
  }

}
