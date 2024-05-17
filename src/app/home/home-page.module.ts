import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page.component';

import { IonicModule } from '@ionic/angular';
import { HeaderModule } from "../header/header.module";

import { NgForOf } from "@angular/common";

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{path: '', component: HomePageComponent}]), HeaderModule, NgForOf],
  declarations: [HomePageComponent],
  exports: [HomePageComponent],
})
export class HomePageModule {}
