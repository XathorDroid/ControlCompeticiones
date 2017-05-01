import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AboutPage } from '../pages/about/about';
import { MoreinfoPage } from '../pages/moreinfo/moreinfo';

import { MenuOptionModel, SideMenuContentComponent } from '../shared/side-menu/side-menu';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = HomePage;

  @ViewChild(SideMenuContentComponent) sideMenu: SideMenuContentComponent;

  public options: Array<MenuOptionModel>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private menuCtrl: MenuController) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // this.options = this.sideMenu.getSampleMenuOptions(HomePage);
    });
  }

  public selectOption(option: MenuOptionModel): void {
    this.menuCtrl.close().then(() => {

      // Collapse all the options
      this.sideMenu.collapseAllOptions();

      // Redirect to the selected page
      if(!option.isLogin) {
        this.nav.setRoot(option.component);
      } else {
        this.nav.push(option.component);
      }
    });
  }

}

