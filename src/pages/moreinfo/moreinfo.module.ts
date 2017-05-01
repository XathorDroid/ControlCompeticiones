import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoreinfoPage } from './moreinfo';

@NgModule({
  declarations: [
    MoreinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(MoreinfoPage),
  ],
  exports: [
    MoreinfoPage
  ]
})
export class MoreinfoModule {}
