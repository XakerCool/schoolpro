import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page.component';

import { IonicModule } from '@ionic/angular';
import { HeaderModule } from "../header/header.module";

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{path: '', component: HomePageComponent}]), HeaderModule],
  declarations: [HomePageComponent],
  exports: [HomePageComponent],
})
export class HomePageModule {}
