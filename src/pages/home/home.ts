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
        inscrits: 12,
        id: '1',
        btnIcon: 'checkmark',
        btnText: 'Inscribirse',
        btnColor: 'inscribir',
        iconBool: true,
        inscritsList: [
        {
          name: 'Paco Primero'
        },
        {
          name: 'Rodolfo Primero'
        },
        {
          name: 'Enrique Primero'
        },
        {
          name: 'Patricia Primero'
        },
        {
          name: 'Esteban Primero'
        },
        {
          name: 'Andres Primero'
        },
        {
          name: 'Laura Primero'
        }
        ]
      },
      {
        title: 'CAMPEONATO DE ESPAÑA 10000 DE VETERANOS (13 AL 14)',
        date: '13-05-2017',
        inscrits: 8,
        id: '2',
        btnIcon: 'checkmark',
        btnText: 'Inscribirse',
        btnColor: 'inscribir',
        iconBool: true,
        inscritsList: [
        {
          name: 'Paco Segundo'
        },
        {
          name: 'Rodolfo Segundo'
        },
        {
          name: 'Enrique Segundo'
        },
        {
          name: 'Patricia Segundo'
        },
        {
          name: 'Esteban Segundo'
        },
        {
          name: 'Andres Segundo'
        },
        {
          name: 'Laura Segundo'
        },
        {
          name: 'Carla Segundo'
        }
        ]
      },
      {
        title: 'II Trofeo Atletismo Barbanza- DÍA DAS LETRAS GALEGAS',
        date: '14-05-2017',
        inscrits: 15,
        id: '3',
        btnIcon: 'checkmark',
        btnText: 'Inscribirse',
        btnColor: 'inscribir',
        iconBool: true,
        inscritsList: [
        {
          name: 'Paco Tercero'
        },
        {
          name: 'Rodolfo Tercero'
        },
        {
          name: 'Enrique Tercero'
        },
        {
          name: 'Patricia Tercero'
        },
        {
          name: 'Esteban Tercero'
        },
        {
          name: 'Andres Tercero'
        },
        {
          name: 'Laura Tercer'
        },
        {
          name: 'Carla Tercero'
        }
        ]
      },
      {
        title: 'CAMPIONATO DE GALICIA BENXAMIN, ALEVIN E ALEVIN POR EQUIPOS',
        date: '27-05-2017',
        inscrits: 16,
        id: '4',
        btnIcon: 'checkmark',
        btnText: 'Inscribirse',
        btnColor: 'inscribir',
        iconBool: true,
        inscritsList: [
        {
          name: 'Paco Cuarto'
        },
        {
          name: 'Rodolfo Cuarto'
        },
        {
          name: 'Enrique Cuarto'
        },
        {
          name: 'Patricia Cuarto'
        },
        {
          name: 'Esteban Cuarto'
        },
        {
          name: 'Andres Cuarto'
        },
        {
          name: 'Laura Cuarto'
        },
        {
          name: 'Carla Cuarto'
        }
        ]
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
