import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading, } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	loading: Loading;
  	registerCredentials = { email: '', password: '' };

  constructor(public navCtrl: NavController, private auth: AuthService, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  login() {
  	this.showLoading();
  	this.auth.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {        
        this.navCtrl.setRoot('HomePage');
      } else {
        
      }
    },
      error => {
        
      });
  
  	this.navCtrl.setRoot(HomePage);
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Iniciando Sesión...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

}
