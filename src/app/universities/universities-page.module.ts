import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UnicompPageComponent } from './unicomp-page.component';

import { IonicModule } from '@ionic/angular';
import {HeaderModule} from "../header/header.module";
import {NgForOf, NgStyle} from "@angular/common";

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{
    path: '',
    component: UnicompPageComponent
  }]), HeaderModule, NgForOf, NgStyle],
  declarations: [UnicompPageComponent],
  exports: [UnicompPageComponent],
})
export class UnicompPageModule {}
